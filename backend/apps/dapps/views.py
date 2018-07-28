import json
from typing import Dict

from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from apps.dapps.models import Dapp, Transaction, Request
from apps.dapps.serializers import dapp_pub_info, TransactionSerializer, RequestSerializer
from smartz.json_schema import load_schema, assert_conforms2schema_part
from smartzcore.http import error_response
from smartzcore.service_instances import WithLogger
from utils.common import auth


def _prepare_instance_details(dapp: Dapp) -> Dict:
    output = dapp_pub_info(dapp)
    assert_conforms2schema_part(output, load_schema('internal/front-back.json'),
                                'rpc_calls/get_instance_details/output')

    return output


class DetailsView(View):

    def get(self, request, id):
        try:
            dapp = Dapp.objects.prefetch_related('constructor').get(slug=id)
        except Dapp.DoesNotExist:
            return error_response("Dapp not found")

        if not dapp.has_public_access:
            user = auth(request)
            if isinstance(user, HttpResponse):
                return user  # error

            if dapp.user_id != user.pk:
                return error_response('Dapp not found')

        if not dapp.address:
            return error_response('Dapp is not yet deployed')

        return JsonResponse(_prepare_instance_details(dapp))


class ListView(View):

    def get(self, request):
        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        dapps = Dapp.objects.filter(user=user).exclude(address='').prefetch_related('constructor')

        return JsonResponse(
            [_prepare_instance_details(i) for i in dapps],
            safe=False
        )


@method_decorator(csrf_exempt, name='dispatch')
class UpdateView(View):

    def post(self, request, id):
        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        try:
            dapp = Dapp.objects.get(slug=id, user=user)
        except Dapp.DoesNotExist:
            return error_response("Dapp not found")


        # [TODO] refactor all checks (address and network_id validation should be somewhere near Instance() class
        # Later validation of Ethereum address will differ from EOS address, so Instance() class will have some "blockchain_id" member to
        # differ parameters of dapps on different blockchains

        address = request.data.get('address')
        if address is not None:
            if not isinstance(address, str):
                return error_response("Param 'address' is empty or not string")
            dapp.address = address

        network_id = request.data.get('network_id')
        if network_id is not None:
            if type(network_id) not in (int, str):
                return error_response("Param 'network_id' is empty or not int")
            dapp.network_id = str(network_id)

        has_public_access = request.data.get('has_public_access')
        if has_public_access is not None:
            dapp.has_public_access = bool(has_public_access)

        title = request.data.get('title')
        if title is not None:
            dapp.title = title

        dapp.save()

        return JsonResponse({'ok': True})  # todo


@method_decorator(csrf_exempt, name='dispatch')
class TransactionsList(GenericAPIView, WithLogger):
    """
    List dapp transactions, or save new transaction.
    """

    serializer_class = TransactionSerializer

    def get(self, request, dapp_slug):

        user = auth(request)
        if isinstance(user, HttpResponse): # todo (error)
            return Response([])

        transactions = Transaction.objects.filter(dapp__slug=dapp_slug, user=user)
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data)

    def post(self, request, dapp_slug):
        user = auth(request)
        if isinstance(user, HttpResponse): # todo (error)
            return user

        try:
            dapp = Dapp.objects.get(slug=dapp_slug)
        except Dapp.DoesNotExist:
            return error_response("Dapp not found")

        serializer = TransactionSerializer(data=request.data)
        if not serializer.is_valid():
            self.logger.info("Bad request: %s", json.dumps(serializer.errors))
            return error_response('Bad request', status.HTTP_400_BAD_REQUEST)

        serializer.save(user=user, dapp=dapp)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@method_decorator(csrf_exempt, name='dispatch')
class RequestsList(GenericAPIView, WithLogger):
    """
    List dapp requests, or save new request.
    """

    serializer_class = RequestSerializer

    def get(self, http_request, dapp_slug):

        user = auth(http_request)
        if isinstance(user, HttpResponse): # todo (error)
            return Response([])

        requests = Request.objects.filter(dapp__slug=dapp_slug, user=user)
        serializer = RequestSerializer(requests, many=True)
        return Response(serializer.data)

    def post(self, http_request, dapp_slug):
        user = auth(http_request)
        if isinstance(user, HttpResponse): # todo (error)
            return user

        try:
            dapp = Dapp.objects.get(slug=dapp_slug)
        except Dapp.DoesNotExist:
            return error_response("Dapp not found")

        serializer = RequestSerializer(data=http_request.data)
        if not serializer.is_valid():
            self.logger.info("Bad request: %s", json.dumps(serializer.errors))
            return error_response('Bad request', status.HTTP_400_BAD_REQUEST)

        serializer.save(user=user, dapp=dapp)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

