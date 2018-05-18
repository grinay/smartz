import json

from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


from apps.contracts.models import Contract
from utils.common import auth
from utils.responses import ok_response, error_response
from smartz.json_schema import load_schema, assert_conforms2schema_part



def _prepare_instance_details(contract: Contract):
    output = {
        "instance_id": contract.slug,
        "instance_title": contract.title,
        "network_id": int(contract.network_id),
        "ctor_id": contract.constructor.slug,
        "address": contract.address,
        "abi": json.loads(contract.abi),
        "functions": json.loads(contract.function_specs),
        "dashboard_functions": json.loads(contract.dashboard_functions)
    }
    assert_conforms2schema_part(output, load_schema('internal/front-back.json'),
                                'rpc_calls/get_instance_details/output')

    return output


class DetailsView(View):

    def get(self, request, instance_id):
        try:
            contract = Contract.objects.prefetch_related('constructor').get(slug=instance_id)
        except Contract.DoesNotExist:
            return error_response("Contract not found")

        if not contract.has_public_access:
            user = auth(request)
            if isinstance(user, HttpResponse):
                return user  # error

            if contract.user_id != user.pk:
                return error_response('Contract not found')

        if not contract.address:
            return error_response('Contract is not yet deployed')

        return JsonResponse(_prepare_instance_details(contract))


class ListView(View):

    def get(self, request):
        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        contracts = Contract.objects.filter(user=user).exclude(address='').prefetch_related('constructor')

        return JsonResponse(
            [_prepare_instance_details(i) for i in contracts],
            safe=False
        )


@method_decorator(csrf_exempt, name='dispatch')
class UpdateView(View):

    def post(self, request, instance_id):
        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        try:
            contract = Contract.objects.get(slug=instance_id, user=user)
        except Contract.DoesNotExist:
            return error_response("Contract not found")


        # [TODO] refactor all checks (address and network_id validation should be somewhere near Instance() class
        # Later validation of Ethereum address will differ from EOS address, so Instance() class will have some "blockchain_id" member to
        # differ parameters of contract instances on different blockchains

        address = request.data.get('address')
        if address is None or not isinstance(address, str):
            return error_response("Param 'address' is empty or not string")

        network_id = request.data.get('network_id')
        if network_id is None or not isinstance(network_id, int):
            return error_response("Param 'network_id' is empty or not int")

        public_access = bool(request.data.get('public_access'))

        contract.address = address
        contract.network_id = str(network_id)
        contract.has_public_access = public_access
        contract.save()

        return JsonResponse({'ok': True}) # todo

