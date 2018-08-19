from django.urls import path

from apps.contracts_uis.views import ContractUIsList, AddToDashboard

urlpatterns = [
    path('', ContractUIsList.as_view(), name='contracts-uis-list'),
    path('/<slug:id>/add-to-dashboard', AddToDashboard.as_view(), name='contracts-uis-add-to-dashboard'),
]
