from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Profile, WalletAddress, Wallet

from trustcrow.utils.unique_generators import unique_ref_generator
from trustcrow.utils.logger import LOGGER

User = get_user_model()


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        WalletAddress.objects.create(user=instance)
        Wallet.objects.create(user=instance)
        LOGGER.info(f"Profile and WalletAddress Relationships for {instance.username.title()} were created successfully")

    if not instance.ref_link:
        ref = unique_ref_generator(instance)
        User.objects.filter(username=instance.username).update(ref_link=ref)
        LOGGER.info(f"Referral Code for {instance.username.title()} was created successfully")

    if instance.profile.complete_registration == 100 and instance.verified == False:
        User.objects.filter(username=instance.username).update(verified=True)

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
        instance.profile.save()
        instance.wallet.save()
        instance.wallet_address.save()


@receiver(post_save, sender=Wallet)
def wallet_post_save(sender, instance, created, **kwargs):
    pass
