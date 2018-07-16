from django.http import JsonResponse
from django.views.generic.base import View

from apps.contracts_uis.models import ContractUI
from apps.contracts_uis.serializers import contracts_uis_pub_info


class ListView(View):

    def get(self, request):
        uis = ContractUI.objects.order_by('sorting_order')\
            .reverse().all()

        return JsonResponse(contracts_uis_pub_info(uis), safe=False)
