from django.shortcuts import render
from rest_framework import viewsets

from rest_framework.decorators import action
from rest_framework.response import Response


from workshop.models import Subscription
from workshop.serializers import SubscriptionSerializer


class SubscriptionViewSet(viewsets.ModelViewSet):
    # Disable authentication and permission for this view
    authentication_classes = []
    permission_classes = []

    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    filter_fields = ('id', 'name', 'email', 'institute',
                     'newsletter_permission', 'creation_date',)

    search_fields = ('id', 'name', 'email', 'institute',)
    ordering_fields = ('id', 'name', 'email', 'institute',
                       'newsletter_permission', 'creation_date',)
    ordering = ('id',)
