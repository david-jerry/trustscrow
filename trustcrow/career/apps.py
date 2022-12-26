from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class CareerConfig(AppConfig):
    name = "trustcrow.career"
    verbose_name = _("Career")

    def ready(self):
        try:
            import trustcrow.career.signals  # noqa F401
        except ImportError:
            pass
