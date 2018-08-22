import json

from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from apps.contracts_uis.models import ContractUI
from apps.contracts_uis.serializers import ContractUISerializer
from apps.dapps.models import Dapp, UserDapp
from constructor_engine.services import WithContractProcessorManager
from smartzcore.http import error_response
from utils.common import auth


class ContractUIsList(GenericAPIView):
    """
    List of contract uis
    """

    serializer_class = ContractUISerializer

    def get(self, request):
        uis = ContractUI.objects.all()
        serializer = ContractUISerializer(uis, many=True)
        return Response(serializer.data)


@method_decorator(csrf_exempt, name='dispatch')
class AddToDashboard(View, WithContractProcessorManager):

    def post(self, request, id):
        if 'address' not in request.data or type(request.data['address']) is not str or not request.data['address']:
            return error_response("Address is missing")

        if 'network_id' not in request.data or type(request.data['network_id']) is not str or not request.data['network_id']:
            return error_response("Network id is missing")

        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        try:
            contract_ui = ContractUI.objects.get(slug=id)
        except ContractUI.DoesNotExist:
            return error_response("Ui not found")

        dapp = Dapp.create()

        dapp.blockchain = contract_ui.blockchain
        dapp.address = request.data['address']
        dapp.network_id = request.data['network_id']

        dapp.title = contract_ui.name

        abi = contract_ui.abi if 'abi' not in request.data else request.data['abi']
        dapp.abi = json.dumps(abi)

        dapp.source = ''
        dapp.binary = ''
        dapp.function_specs = json.dumps(
            self.contracts_processors_manager.require_contract_processor(contract_ui.blockchain)
                .process_functions_specs(abi, contract_ui.functions)
        )
        dapp.dashboard_functions = json.dumps(contract_ui.dashboard_functions)
        dapp.contract_ui = contract_ui
        dapp.has_public_access = False

        dapp.save()

        UserDapp.objects.create(dapp=dapp, user=user, title=contract_ui.name)

        return JsonResponse({'ok': True})  # todo