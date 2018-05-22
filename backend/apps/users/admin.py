from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, RandomDataForSign, UserIdentity

admin.site.register(User, UserAdmin)
admin.site.register(UserIdentity)
admin.site.register(RandomDataForSign)
