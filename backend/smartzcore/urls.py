from django.conf import settings
from django.urls import include, path, re_path
from django.contrib import admin

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
   openapi.Info(
      title="Smartz API",
      default_version='v1',
   ),
   public=True,
   permission_classes=(permissions.IsAdminUser,),
)

urlpatterns = [
    path(
        settings.SMARTZ_API_PREFIX,
        include([
            path('constructors', include('apps.constructors.urls')),
            path('users', include('apps.users.urls')),
            path('dapps', include('apps.dapps.urls')),

            path('swagger.yaml', schema_view.without_ui(cache_timeout=None), name='schema-yaml'),
            path('swagger', schema_view.with_ui('swagger', cache_timeout=None), name='schema-swagger-ui'),
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
