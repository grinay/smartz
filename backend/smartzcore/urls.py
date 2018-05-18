from django.conf import settings
from django.urls import include, path, re_path
from django.contrib import admin


urlpatterns = [
    path(
        settings.SMARTZ_API_PREFIX,
        include([
            path('constructors', include('apps.constructors.urls')),
            path('users', include('apps.users.urls')),
            path('contracts', include('apps.contracts.urls')),
        ])
    ),
    path('secret-admin/', admin.site.urls),
]

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns = [
#         re_path(r'^__debug__/', include(debug_toolbar.urls)),
#     ] + urlpatterns

if settings.IS_TESTING:
    urlpatterns += [
        path('__tests', include('apps.common.tests.urls')),
    ]
