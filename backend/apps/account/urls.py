from django.conf import settings
from django.conf.urls import include, url
from rest_framework import routers

from apps.account.views import AccountInfoView, AccountRegisterView

urlpatterns = [
    url(r'info/(?P<account_id>[^/]{1,40})/', AccountInfoView.as_view(), name='account-info'),
    url(r'register/', AccountRegisterView.as_view(), name='account-register'),
]
