from django.http import JsonResponse, HttpRequest
from django.views.generic.base import View

from apps.contracts_uis.models import ContractUI
from apps.contracts_uis.serializers import ContractUISerializer
from apps.search.services import WithSearchServiceManager


class SearchView(View, WithSearchServiceManager):
    """
    Search
    """

    def get(self, request: HttpRequest):
        query = request.GET.get('query', '')
        return JsonResponse(self.search_manager.search(query), safe=False)
