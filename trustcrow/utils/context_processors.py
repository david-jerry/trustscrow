import datetime

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.utils.functional import SimpleLazyObject
from django.urls import reverse
from trustcrow.currency.models import Banks

# from trustcrow.currency.models import Currency
from trustcrow.utils.logger import LOGGER

# from taggit.models import Tag

User = get_user_model()
dt = datetime.datetime.now()


def context_settings(request):

    webpush = {"group":"sub_user"}
    webpush_settings = getattr(settings, "WEBPUSH_SETTINGS", {})
    vapid_key = webpush_settings.get("VAPID_PUBLIC_KEY")

    hour = dt.hour

    # users = [{
    #     'id': user.id,
    #     'profile_image': user.image.url if user.image else "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
    #     'username': user.username,
    #     'email': user.email,
    #     'name': user.name,
    #     'phone': user.profile.phone if user.profile.phone else user.profile.company_phone_I,
    #     'address': user.profile.address if user.profile.address else user.profile.company_address
    # } for user in User.objects.all()]

    return {
        "ACCOUNT_ALLOW_REGISTRATION": settings.ACCOUNT_ALLOW_REGISTRATION,
        'year': dt.year,
        "settings": settings,
        'home_url': reverse('home'),
        'google_api_key': settings.GOOGLE_API,
        'webpush': webpush,
        'APPLICATION_SERVER_KEY': vapid_key,
        'hour': int(hour),
        "banks": Banks.objects.all(),
        # "currency": Currency.objects.all() if Currency.objects.all().exists() else None,



        # "tags": Tag.objects.all()[:12] if Tag.objects.all().exists() else None,

        'site': SimpleLazyObject(lambda: get_current_site(request)) if not settings.PRODUCTION else "localhost:8000",
    }
