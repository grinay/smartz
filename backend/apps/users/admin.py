from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, AuthToken, PublicKey, RandomDataForSign

admin.site.register(User, UserAdmin)
admin.site.register(AuthToken)
admin.site.register(PublicKey)
admin.site.register(RandomDataForSign)
