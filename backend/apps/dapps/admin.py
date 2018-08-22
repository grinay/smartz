from django.contrib import admin
from django.urls import reverse
from django.utils.html import escape, format_html_join

from .models import Dapp, UserDapp



class DappAdmin(admin.ModelAdmin):
    list_display = ('title', 'created', 'constructor', 'network_id', 'address', 'users_names')
    list_filter = (
        'constructor',
        'network_id'
    )
    search_fields = ['title', 'address', 'users__username', 'users__first_name', 'users__last_name', 'constructor__name']

    def created(self, obj: Dapp):
        return obj.created_at.strftime("%Y.%m.%d %H:%M:%S")


    def users_names(self, obj: Dapp):
        return format_html_join(
            '\n',
            '<a href="{}" target="_blank">{}</a>',
            [
                (
                    reverse("admin:dapps_userdapp_change", args=(user_dapp.id,)),
                    escape(user_dapp.user.username)
                )
                for user_dapp
                in obj.userdapp_set.all()
            ]
        )


admin.site.register(Dapp, DappAdmin)
admin.site.register(UserDapp, admin.ModelAdmin)
