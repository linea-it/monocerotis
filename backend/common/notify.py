import logging
import traceback
from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string


class Notify():

    def __init__(self):
        self.logger = logging.getLogger('django')

    def send_email(self, subject, body, to, copy_to_adms=True, html=True):
        """
            Send an email message.
            :param subject: The email subject.
            :param body: The email body. It can be a simple text or an HTML.
            :param to: list([]) The email recipient. I can be a string, for a single email, or a list, for multiple ones.
            :param copy_to_adms: Boolean: Option to send a copy to administrators.
        """

        self.logger.debug("Sending mail notification.")

        try:
            from_email = settings.EMAIL_NOTIFICATION
        except Exception:
            raise Exception(
                "The EMAIL_NOTIFICATION variable is not configured in settings.")

        self.logger.debug("FROM: %s" % from_email)

        # Se o parametro to nao for uma lista corverter para lista.
        if not isinstance(to, list):
            to = list([to])

        if copy_to_adms:
            try:
                copy_to = settings.EMAIL_NOTIFICATION_COPY_TO
                to = to + copy_to
            except Exception:
                raise Exception(
                    "The EMAIL_NOTIFICATION_COPY_TO variable is not configured in settings.")

        self.logger.debug("TO: %s" % to)

        # Subject
        subject = ("LIneA Workshop 2021 - %s" % (subject))

        self.logger.debug("SUBJECT: %s" % subject)

        try:
            msg = EmailMessage(
                subject=subject,
                body=body,
                from_email=from_email,
                to=to,
            )

            if html is True:
                msg.content_subtype = "html"

            msg.send(fail_silently=False)

        except Exception as e:
            trace = traceback.format_exc()
            self.logger.error(trace)
            self.logger.error(e)

    def send_html_email(self, subject, to, template, context, copy_to_adms=True):

        context.update({
            "application_name": settings.APPLICATION_NAME,
            "host_url": settings.HOST_URL
        })

        body = render_to_string(template, context)

        self.send_email(subject, body, to)
