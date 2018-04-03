from django.conf import settings
from django.urls import include, path, re_path

urlpatterns = [
    path('api/constructors', include('apps.constructors.urls')),
    # path('api/accounts', include('apps.account.urls')),
    path('api/instances', include('apps.instances.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        re_path(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
