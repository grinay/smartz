from django.urls import path

from apps.contracts.views import DetailsView, \
    ListView, \
    UpdateView

urlpatterns = [
    path('', ListView.as_view(), name='contracts-list'),
    path('/<slug:instance_id>', DetailsView.as_view(), name='contracts-details'),
    path('/<slug:instance_id>/update', UpdateView.as_view(), name='contracts-update'),
]
