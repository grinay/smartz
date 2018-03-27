from django.urls import path

from apps.constructor.views import ListView, \
    UploadView, \
    GetParamsView, \
    ConstructView

urlpatterns = [
    path('list', ListView.as_view(), name='constructor-list'),
    path('upload', UploadView.as_view(), name='constructor-upload'),
    path('<slug:constructor_id>/params', GetParamsView.as_view(), name='constructor-get-params'),
    path('<slug:constructor_id>/construct', ConstructView.as_view(), name='constructor-construct'),
]
