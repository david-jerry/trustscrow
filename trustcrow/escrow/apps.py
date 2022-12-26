from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EscrowConfig(AppConfig):
    name = "trustcrow.escrow"
    verbose_name = _("Escrow")

    def ready(self):
        try:
            import trustcrow.escrow.signals  # noqa F401
        except ImportError:
            pass
