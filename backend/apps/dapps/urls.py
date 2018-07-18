from django.urls import path

from apps.dapps.views import DetailsView, \
    ListView, \
    UpdateView, TransactionsList, RequestsList

urlpatterns = [
    path('', ListView.as_view(), name='dapps-list'),
    path('/<slug:id>', DetailsView.as_view(), name='dapps-details'),
    path('/<slug:id>/update', UpdateView.as_view(), name='dapps-update'),

    path('/<slug:dapp_slug>/transactions', TransactionsList.as_view(), name='dapps-transactions'),
    path('/<slug:dapp_slug>/requests', RequestsList.as_view(), name='dapps-requests'),
]
