import notifications.urls

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path, re_path
from django.views import defaults as default_views
from django.contrib.sitemaps.views import sitemap
from django.views.generic import TemplateView

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework.authtoken.views import obtain_auth_token

from webpush.views import save_info

from .views import (
    offline_view,
    send_notification,
    service_worker,
    service_worker_map,
    mark_all_read,
    mark_as_read,
    support,
)
from config.sitemaps import StaticViewSitemap

sitemaps = {
    "static": StaticViewSitemap,
}

urlpatterns = [
    path("", TemplateView.as_view(template_name="pages/home.html"), name="home"),
    path(
        "about/", TemplateView.as_view(template_name="pages/about.html"), name="about"
    ),
    path(
        "contact/", support, name="contact"
    ),
    path(
        "products/vendify/", TemplateView.as_view(template_name="pages/vendify.html"), name="vendify"
    ),
    path(
        "products/trustpay/", TemplateView.as_view(template_name="pages/trustpay.html"), name="trustpay"
    ),
    path("support/", support, name="support"),
    path("offline/", offline_view, name="offline"),
    path("all-read/", mark_all_read, name="all_read"),
    path("read/<id>/", mark_as_read, name="read"),

    # PWA Urls
    path("sw.js", service_worker, name="service_worker"),
    path("sw.js.map", service_worker_map, name="service_worker_map"),

    # Django Admin, use {% url 'admin:index' %}
    path("jet/", include("jet.urls", "jet")),  # Django JET URLS
    path(
        "jet/dashboard/", include("jet.dashboard.urls", "jet-dashboard")
    ),  # Django JET dashboard URLS
    path("admin/", include("admin_honeypot.urls", "admin_honeypot")),
    path(settings.ADMIN_URL, admin.site.urls),
    path(settings.ADMIN_DOC_URL, include("django.contrib.admindocs.urls")),

    # User management
    path("users/", include("trustcrow.users.urls", namespace="users")),
    path("users/create/new-contract/", TemplateView.as_view(template_name="users/new_contract.html"), name="new_contract"),
    path("escrow/", include("trustcrow.escrow.urls", namespace="escrow")),
    path("accounts/", include("allauth.urls")),

    # Your stuff: custom urls includes go here
    # push notification links
    path("send-notification/", send_notification, name="send_notification"),
    path("webpush/save_information/", view=save_info, name="save_webpush_info"),
    path("webpush/", include("webpush.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    # Static file serving when using Gunicorn + Uvicorn for local web socket development
    urlpatterns += staticfiles_urlpatterns()

# MISC URLS
urlpatterns += [
    path("tinymce/", include("tinymce.urls")),
    path("inbox/notifications/", include(notifications.urls, namespace='notifications')),
    path("i18n/", include("django.conf.urls.i18n")),
    path("sitemap.xml/", sitemap, kwargs={"sitemaps": sitemaps}, name="sitemap"),
    path(
        "robots.txt/",
        TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
        name="robots",
    ),
]

# API URLS
urlpatterns += [
    # API base url
    path("api/", include("config.api_router")),
    # DRF auth token
    path("auth-token/", obtain_auth_token),
    path("api/schema/", SpectacularAPIView.as_view(), name="api-schema"),
    path(
        "api/docs/",
        SpectacularSwaggerView.as_view(url_name="api-schema"),
        name="api-docs",
    ),
]

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path(
            "400/",
            default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        path(
            "403/",
            default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        path(
            "404/",
            default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        path("500/", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
