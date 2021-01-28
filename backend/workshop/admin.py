from django.contrib import admin
from .models import Subscription


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'institute', 'country',
                    'newsletter_permission', 'is_active', 'creation_date')
