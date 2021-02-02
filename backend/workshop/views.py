from django.shortcuts import render
from rest_framework import viewsets, status

from rest_framework.decorators import action
from rest_framework.response import Response

from workshop.models import Subscription
from workshop.serializers import SubscriptionSerializer

import logging
import traceback
from .token import account_activation_token
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
# from rest_framework.reverse import reverse
from common.notify import Notify

from django.http import HttpResponse
import csv


class SubscriptionViewSet(viewsets.ModelViewSet):
    # Disable authentication and permission for this view
    authentication_classes = []
    permission_classes = []

    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    filter_fields = ('id', 'name', 'email', 'institute', 'country',
                     'newsletter_permission', 'is_active', 'creation_date',)

    search_fields = ('id', 'name', 'email', 'institute', 'country',)
    ordering_fields = ('id', 'name', 'email', 'institute', 'country',
                       'newsletter_permission', 'is_active', 'creation_date',)
    ordering = ('id',)

    def create(self, request):
        logger = logging.getLogger('subscription')
        logger.info("".ljust(50, '-'))
        logger.info('Post subscription')

        # Get request data:
        subscription = request.data

        # Force property is_active equal to false
        # in case the user passes it equal to true.
        subscription['is_active'] = 'false'

        logger.info('Forced is_active as False')

        serializer = self.serializer_class(data=subscription)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        logger.info('Saved subscription')

        subscription_data = serializer.data

        # Get updated user by e-mail:
        user = Subscription.objects.get(email=subscription_data['email'])

        # Generate a token to verify e-mail's confirmation:
        token = account_activation_token.make_token(user)
        logger.info('Generated the token: [%s]' % token)

        # Get current site domain:
        current_site = get_current_site(request).domain
        logger.info('Current site: [%s]' % current_site)

        # # Get the reverse subscription URL:
        # subscription_path = reverse('subscription-list')
        # logger.info('Subscription path: [%s]' % subscription_path)

        # The endpoint path to verify the email:
        verify_email_path = '/verify-email'

        # Absolute URL: http://HOST/api/subscription/verify_email
        absoluteUrl = 'http://%s%s/uid=%s/token=%s' % (current_site,
                                                       verify_email_path,
                                                       urlsafe_base64_encode(
                                                           force_bytes(user.pk)),
                                                       token)

        logger.info('Generate the absolute url: [%s]' % absoluteUrl)

        # Context: variables that will be available on the template
        context = dict({
            "name": user.name,
            "url": absoluteUrl
        })

        # Email notification:
        Notify().send_html_email(
            subject="Email Verification",
            to=user.email,
            template="notification_email_verification.html",
            context=context)

        logger.info("Sending confirmation email message")

        return Response(subscription_data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['GET'])
    def verify_email(self, request, pk=None):
        logger = logging.getLogger('subscription')
        logger.info("".ljust(50, '-'))
        logger.info('Verify Email')

        # Get UID encoded:
        uid_encoded = request.query_params.get('uid')

        # Get Token:
        token = request.query_params.get('token')

        logger.debug('Encoded UID: [%s]' % uid_encoded)

        # Decode the UID:
        try:
            uid_decoded = force_text(urlsafe_base64_decode(uid_encoded))
        except ValueError as e:
            trace = traceback.format_exc()
            logger.error('Could not decode the UID')
            logger.error(trace)
            logger.error(e)

            return Response({
                'error': 'Could not find User ID'
            })

        logger.info('User ID: [%s] || Token: [%s]' % (uid_decoded, token))

        # Instantiate the subscription with the UID to see if exists:
        try:
            user = Subscription.objects.get(pk=uid_decoded)
        except Exception as e:
            trace = traceback.format_exc()
            logger.error('UID does not exist')
            logger.error(trace)
            logger.error(e)

            return Response({
                'error': 'Invalid user subscription'
            })

        logger.info('Checking if the token is valid')
        # If the token is valid
        if account_activation_token.check_token(user, token):
            logger.info('The token is valid')

            logger.info('Changing is_active to True')
            user.is_active = True
            user.save()
            logger.info('Saved subscription')

            return Response({
                'success': 'Your registration has been successful.'
            })
        else:
            logger.info(
                'The token is invalid')

            return Response({
                'error': 'Invalid token'
            })

    # Export participants to CSV:
    @action(detail=False, methods=['GET'])
    def to_csv(self, request, pk=None):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="subscriptions.csv"'

        writer = csv.writer(response)

        writer.writerow([
            'id',
            'name',
            'email',
            'institute',
            'country',
            'creation_date',
        ])

        subscriptions = Subscription.objects.all().filter(is_active=True).values_list(
            'id',
            'name',
            'email',
            'institute',
            'country',
            'creation_date',
        )
        for subscription in subscriptions:
            writer.writerow(subscription)

        return response
