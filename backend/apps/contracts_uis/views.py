from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from apps.contracts_uis.models import ContractUI
from apps.contracts_uis.serializers import ContractUISerializer


class ContractUIsList(GenericAPIView):
    """
    List of contract uis
    """

    serializer_class = ContractUISerializer

    def get(self, request):
        uis = ContractUI.objects.all()
        serializer = ContractUISerializer(uis, many=True)
        return Response(serializer.data)
