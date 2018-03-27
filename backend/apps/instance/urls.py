from django.urls import path

from apps.instance.views import InstanceDetailsView, \
    InstancesListView, \
    UpdateView

urlpatterns = [
    path('list', InstancesListView.as_view(), name='instance-list'),
    path('details', InstanceDetailsView.as_view(), name='instance-details'),
    path('<slug:instance_id>/update', UpdateView.as_view(), name='instance-set-address'),
]
