from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class WorkshopConfig(AppConfig):
    name = "trustcrow.workshop"
    verbose_name = _("Workshop")

    def ready(self):
        try:
            import trustcrow.workshop.signals  # noqa F401
        except ImportError:
            pass
