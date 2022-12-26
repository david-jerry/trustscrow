from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class StoriesConfig(AppConfig):
    name = "trustcrow.stories"
    verbose_name = _("Stories")

    def ready(self):
        try:
            import trustcrow.stories.signals  # noqa F401
        except ImportError:
            pass
