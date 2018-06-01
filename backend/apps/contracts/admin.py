from django.contrib import admin

from .models import Contract


class ContractAdmin(admin.ModelAdmin):
    list_display = ('title', 'constructor', 'network_id', 'address', 'user')
    list_filter = (
        'constructor',
        'network_id'
    )
    search_fields = ['title', 'address', 'user__username', 'user__first_name', 'user__last_name', 'constructor__name']


admin.site.register(Contract, ContractAdmin)