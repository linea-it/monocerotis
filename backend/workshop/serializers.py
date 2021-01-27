from rest_framework import serializers

from workshop.models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription
        fields = (
            'id',
            'name',
            'email',
            'institute',
            'country',
            'newsletter_permission',
            'is_active',
            'creation_date',
        )
