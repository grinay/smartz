from django.contrib import admin

from .models import Contract


class ContractAdmin(admin.ModelAdmin):
    list_display = ('title', 'created', 'constructor', 'network_id', 'address', 'user')
    list_filter = (
        'constructor',
        'network_id'
    )
    search_fields = ['title', 'address', 'user__username', 'user__first_name', 'user__last_name', 'constructor__name']

    def created(self, obj):
        return obj.created_at.strftime("%Y.%m.%d %H:%M:%S")


admin.site.register(Contract, ContractAdmin)