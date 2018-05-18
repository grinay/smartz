from django.urls import path

from apps.common.tests.views import exception_view, public_exception_view

urlpatterns = [
    path('/exception', exception_view),
    path('/public_exception', public_exception_view),
]
