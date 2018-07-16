from django.urls import path

from apps.contracts_uis.views import ListView

urlpatterns = [
    path('', ListView.as_view(), name='contracts-uis-list')
]
