from django.contrib import admin

from .models import Constructor


class ConstructorAdmin(admin.ModelAdmin):
    list_display = ('name', 'created', 'price', 'is_public', 'user')
    list_filter = (
        ('is_public', admin.BooleanFieldListFilter),
        'price'
    )
    search_fields = ['name', 'user__username', 'user__first_name', 'user__last_name']

    def created(self, obj):
        return obj.created_at.strftime("%Y.%m.%d %H:%M:%S")


admin.site.register(Constructor, ConstructorAdmin)