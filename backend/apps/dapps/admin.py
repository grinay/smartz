from django.contrib import admin

from .models import Dapp


class DappAdmin(admin.ModelAdmin):
    list_display = ('title', 'created', 'constructor', 'network_id', 'address')
    list_filter = (
        'constructor',
        'network_id'
    )
    search_fields = ['title', 'address', 'users__username', 'users__first_name', 'users__last_name', 'constructor__name']

    def created(self, obj):
        return obj.created_at.strftime("%Y.%m.%d %H:%M:%S")


admin.site.register(Dapp, DappAdmin)
