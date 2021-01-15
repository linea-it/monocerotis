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
            'newsletter_permission',
            'creation_date',
        )
