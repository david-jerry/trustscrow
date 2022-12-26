from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class BlogConfig(AppConfig):
    name = "trustcrow.blog"
    verbose_name = _("Blog")

    def ready(self):
        try:
            import trustcrow.blog.signals  # noqa F401
        except ImportError:
            pass
