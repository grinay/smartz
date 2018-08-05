from django.http import JsonResponse, HttpRequest
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import View

from apps.search.services import WithSearchServiceManager


@method_decorator(csrf_exempt, name='dispatch')
class SearchView(View, WithSearchServiceManager):
    """
    Search
    """

    def post(self, request: HttpRequest):
        query = request.data.get('query', '')
        return JsonResponse(self.search_manager.search(query, context=request.data), safe=False)
