from django.contrib import admin

from .models import Constructor


class ConstructorAdmin(admin.ModelAdmin):
    list_display = ('name', 'price_eth', 'is_public', 'user')
    list_filter = (
        ('is_public', admin.BooleanFieldListFilter),
        'price_eth'
    )
    search_fields = ['name', 'user__username', 'user__first_name', 'user__last_name']


admin.site.register(Constructor, ConstructorAdmin)