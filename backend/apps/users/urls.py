from django.urls import path

from apps.users.views import LoginStartView, LoginFinishView

urlpatterns = [
    path('/login/start', LoginStartView.as_view(), name='users-login-start'),
    path('/login/finish', LoginFinishView.as_view(), name='users-login-finish'),
    #
    # path('/addkey/start', AddKeyStartView.as_view(), name='users-register-start'),
    # path('/addkey/finish', AddKeyFinishView.as_view(), name='users-register-finish'),
    #
    # path('/update/start', UpdateView.as_view(), name='users-update'),
]
