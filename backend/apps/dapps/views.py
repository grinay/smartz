from typing import Dict

from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


from apps.dapps.models import Dapp
from apps.dapps.serializers import dapp_pub_info
from utils.common import auth
from utils.responses import error_response
from smartz.json_schema import load_schema, assert_conforms2schema_part


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
        if address is None or not isinstance(address, str):
            return error_response("Param 'address' is empty or not string")

        network_id = request.data.get('network_id')
        if network_id is None or type(network_id) not in (int, str):
            return error_response("Param 'network_id' is empty or not int")

        public_access = bool(request.data.get('public_access'))

        dapp.address = address
        dapp.network_id = str(network_id)
        dapp.has_public_access = public_access
        dapp.save()

        return JsonResponse({'ok': True}) # todo

