from django.conf import settings
from django.urls import path
from rest_framework import routers

from apps.constructor.views import ListView, \
                                  UploadView, \
                                  GetParamsView, \
                                  ConstructorConstructView

urlpatterns = [
    path('list', ListView.as_view(), name='constructor-list'),
    path('upload', UploadView.as_view(), name='constructor-upload'),
    path('<slug:constructor_id>/params', GetParamsView.as_view(), name='constructor-get-params'),
    path('construct', ConstructorConstructView.as_view(), name='constructor-construct'),
]
