from django.urls import path

from apps.instances.views import DetailsView, \
    ListView, \
    UpdateView, DeleteMy

urlpatterns = [
    path('', ListView.as_view(), name='instance-list'),
    path('/delete/my/<user_id>', DeleteMy.as_view(), name='instances-delete-my'),
    path('/<slug:instance_id>', DetailsView.as_view(), name='instance-details'),
    path('/<slug:instance_id>/update', UpdateView.as_view(), name='instance-set-address'),
]
