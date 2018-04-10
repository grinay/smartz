from django.urls import path

from apps.instances.views import DetailsView, \
    ListView, \
    UpdateView

urlpatterns = [
    path('', ListView.as_view(), name='instance-list'),
    path('/<slug:instance_id>', DetailsView.as_view(), name='instance-details'),
    path('/<slug:instance_id>/update', UpdateView.as_view(), name='instance-set-address'),
]
