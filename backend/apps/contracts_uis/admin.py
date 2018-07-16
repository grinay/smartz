from django.contrib import admin

from .models import ContractUI


class ContractUIAdmin(admin.ModelAdmin):
    list_display = ('name', 'created', 'user')
    search_fields = ['name', 'user__username', 'user__first_name', 'user__last_name']

    def created(self, obj):
        return obj.created_at.strftime("%Y.%m.%d %H:%M:%S")


admin.site.register(ContractUI, ContractUIAdmin)