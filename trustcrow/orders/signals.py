from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from trustcrow.workshop.models import Products

from .models import Order, OrderItems

from trustcrow.utils.unique_generators import unique_id_generator, unique_slug_generator
from trustcrow.utils.logger import LOGGER

User = get_user_model()


@receiver(post_save, sender=Order)
def order_post_save(sender, instance, created, **kwargs):
    if not instance.unique_id:
        instance.unique_id = unique_id_generator(instance)

    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

    if created and instance.contract.contract_type == instance.contract.SERVICE:
        user = User.objects.get(email=instance.contract.vendor_email)
        product = Products.objects.create(
            p_type=instance.contract.SERVICE,
            vendor=user,
            title=instance.contract.title.title(),
            detail=instance.contract.terms_agreement,
            price=instance.contract.contract_amount,
        )
        OrderItems.objects.create(
            order=instance,
            product=product,
            quantity=1,
            price=instance.contract.contract_amount
        )


