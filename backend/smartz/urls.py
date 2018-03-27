from django.conf import settings
from django.urls import include, path, re_path

urlpatterns = [
    path('api/constructor/', include('apps.constructor.urls')),
    path('api/account/', include('apps.account.urls')),
    path('api/instance/', include('apps.instance.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        re_path(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
