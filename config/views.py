import json
import asyncio


from django.conf import settings
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from django.urls import reverse
from django.templatetags.static import static
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import FormView, ListView, DetailView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin

from config.commons import send_html_mail
from config.forms import ContactForm

from notifications.models import Notification

# from rest_framework.decorators import api_view, permission_classes, authentication_classes
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

from webpush import send_user_notification, send_group_notification

from trustcrow.utils.logger import LOGGER

User = get_user_model()


# @require_GET
# def signup(request):
#     return render(request, "account/pre_signup.html")

def mark_all_read(request):
    if request.user.notifications.unread():
        request.user.notifications.mark_all_read()
    return JsonResponse(status=200, data={'message':"MArked all read"})

def mark_as_read(request, id):
    obj = get_object_or_404(Notification, kwargs={'id':id})
    if obj.unread():
        obj.mark_as_read()
    return JsonResponse(status=200, data={'message':"Message Read"})

class SupportCreateView(FormView):

    def get(self, request, *args, **kwargs):
        form = ContactForm()
        context = {'form':form}
        return render(request, 'pages/contact.html', context=context)

    def post(self, request, *args, **kwargs):
        if "__field_name__" in request.POST:
            return self.validate_field(request)

        form = ContactForm(data=request.POST)
        if form.is_valid():
            self.send_mail(valid_data=form.cleaned_data)
            return JsonResponse(status=201, data={"message":"Support Mail Successfully Sent", "title":"Support Mail"})
        return super().post(request, *args, **kwargs)

    def validate_field(self, request):
        field_name = request.POST.get("__field_name__")
        form = ContactForm(request.POST)
        form.is_valid()
        return JsonResponse(status=203, data={
            "errors": form.errors.get(field_name, []),
        })

    def send_mail(self, valid_data):
        msg = f"""
        Dear Support,
        <br>
        <br>
        <strong>Mail From: </strong> {valid_data['name'].title()}<br><strong>Phone: </strong>{valid_data['phone']} <br><strong>Email: </strong>{valid_data['email']}
        <br>
        <br>
        <strong> {valid_data['message']}</strong>
        <br>
        """
        send_html_mail(subject=f"SUPPORT MAIL [{valid_data['name'].title()}]", html_content=msg, from_email="TRUSTSCROW SUPPORT <noreply@trustscrow.com>", recipient_list=['support@trustscrow.com'])
        pass

support = SupportCreateView.as_view()



@require_POST
@csrf_exempt
def send_notification(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
    except ValueError:
        return HttpResponse(status=400)


    try:
        head = data.pop("head")
        body = data.pop("body")
        # group = data.pop("group") if data.pop('group') else None
        # LOGGER.info(f"Data: {head}\nbody: {body}\ngroup: {group}")
        # user_id = data['id']
        # user = get_object_or_404(User, id=user_id)
        # if 'head' not in data or 'body' not in data or 'group' not in data:
        #     return JsonResponse(status=400, data={'message':"Invalid request"})


        payload = {
            'head': head,
            'body': body,
            'icon': static('vendors/images/favicon/favicon.png'),
            # add url if there is a link to visit from the push notification
            # 'url': f"{request._current_scheme_host}",
        }

        LOGGER.info(payload)
        send_user_notification(user=request.user, payload=payload, ttl=1000)
        return JsonResponse(status=200, data={'message':"Notification sent"})
    except TypeError:
        return JsonResponse(status=500, data={'message':"An Error occurred while sending notification"})



@require_http_methods(['GET'])
def offline_view(request):
    title = "Offline Page"
    description = "You currently have no network, so we are serving you this offline page showcasing our top rated podcasts to listen to for free"
    author = "Jeremiah E David (http://darkcodr.codes)"
    can_link = reverse("offline")
    twitter_handle = "@darkcodr_codes"
    template = "pages/offline.html"
    context = {
        'title': title,
        'description': description,
        'author': author,
        'can_link': can_link,
        'twitter_handle': twitter_handle,
        'offline': True
    }
    return render(request, template, context)

@require_http_methods(['GET'])
def service_worker(request):
    sw_path = settings.ROOT_DIR / "frontend/build" / "sw.js"
    response = HttpResponse(open(sw_path).read(), content_type='application/javascript')
    return response

@require_http_methods(['GET'])
def service_worker_map(request):
    sw_path = settings.ROOT_DIR / "frontend/build" / "sw.js.map"
    response = HttpResponse(open(sw_path).read(), content_type='application/javascript')
    return response
