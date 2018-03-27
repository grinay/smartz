from django.conf import settings
from django.conf.urls import include, url
from rest_framework import routers

from apps.instance.views import InstanceDetailsView, \
                                          InstancesListView, \
                                          InstanceSetAddressView

urlpatterns = [
    url(r'list/', InstancesListView.as_view(), name='instance-list'),
    url(r'details/', InstanceDetailsView.as_view(), name='instance-details'),
    url(r'set-address/', InstanceSetAddressView.as_view(), name='instance-set-address'),
]
