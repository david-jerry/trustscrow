from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class OrdersConfig(AppConfig):
    name = "trustcrow.orders"
    verbose_name = _("Orders")

    def ready(self):
        try:
            import trustcrow.orders.signals  # noqa F401
        except ImportError:
            pass
