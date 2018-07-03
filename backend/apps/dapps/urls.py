from django.urls import path

from apps.dapps.views import DetailsView, \
    ListView, \
    UpdateView

urlpatterns = [
    path('', ListView.as_view(), name='dapps-list'),
    path('/<slug:id>', DetailsView.as_view(), name='dapps-details'),
    path('/<slug:id>/update', UpdateView.as_view(), name='dapps-update'),
]
