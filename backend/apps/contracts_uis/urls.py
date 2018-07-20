from django.urls import path

from apps.contracts_uis.views import ContractUIsList

urlpatterns = [
    path('', ContractUIsList.as_view(), name='contracts-uis-list')
]
