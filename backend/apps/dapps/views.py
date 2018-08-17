import json
from typing import Dict

from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from apps.common.constants import BLOCKCHAINS
from apps.dapps.models import Dapp, Transaction, Request
from apps.dapps.serializers import dapp_pub_info, TransactionSerializer, RequestSerializer
from constructor_engine.services import WithContractProcessorManager
from smartzcore.http import error_response
from smartzcore.service_instances import WithLogger
from utils.common import auth


def _prepare_instance_details(dapp: Dapp) -> Dict:
    output = dapp_pub_info(dapp)

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

        dapps = Dapp.objects.filter(user=user).exclude(address='').order_by('-created_at').prefetch_related('constructor')

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
class AddToDashboard(View):

    def post(self, request, id):
        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        try:
            dapp = Dapp.objects.get(slug=id, has_public_access=True)
        except Dapp.DoesNotExist:
            return error_response("Dapp not found")

        dapp.slug = Dapp.create().slug
        dapp.pk = None
        dapp.user = user
        dapp.save()

        return JsonResponse({'ok': True})  # todo


@method_decorator(csrf_exempt, name='dispatch')
class CreateFromAbi(View, WithContractProcessorManager):

    def post(self, request):
        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        if 'address' not in request.data or type(request.data['address']) is not str or not request.data['address']:
            return error_response("Address is missing")

        if 'network_id' not in request.data or type(request.data['network_id']) is not str or not request.data['network_id']:
            return error_response("Network id is missing")

        if 'abi' not in request.data:
            return error_response('Abi not specified')

        if 'blockchain' not in request.data or request.data['blockchain'] not in dict(BLOCKCHAINS):
            return error_response('Invalid blockchain')

        dapp = Dapp.create()

        dapp.blockchain = request.data['blockchain']
        dapp.address = request.data['address']
        dapp.network_id = request.data['network_id']

        dapp.title = 'Dapp'
        dapp.abi = json.dumps(request.data['abi'])
        dapp.source = ''
        dapp.binary = ''
        dapp.function_specs = json.dumps(
            self.contracts_processors_manager.require_contract_processor(dapp.blockchain)\
            .process_functions_specs(request.data['abi'], {})
        )
        dapp.dashboard_functions = json.dumps([])
        dapp.has_public_access = False

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

        transactions = Transaction.objects.order_by('execution_datetime').filter(dapp__slug=dapp_slug, user=user)
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

        requests = Request.objects.order_by('execution_datetime').filter(dapp__slug=dapp_slug, user=user)
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

