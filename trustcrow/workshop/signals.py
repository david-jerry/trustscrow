from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Products

from trustcrow.utils.unique_generators import unique_slug_generator
from trustcrow.utils.logger import LOGGER

User = get_user_model()


@receiver(post_save, sender=Products)
def product_post_save(sender, instance, created, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)
        Products.objects.filter(id=instance.id).update(slug=instance.slug)

