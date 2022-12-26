import datetime
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver

from trustcrow.orders.models import Order
from trustcrow.users.models import Profile, Wallet

from .models import Contract, Milestones, Transactions

from trustcrow.utils.unique_generators import unique_ref_generator, unique_slug_generator
from trustcrow.utils.logger import LOGGER

User = get_user_model()


@receiver(post_save, sender=Contract)
def contract_post_save(sender, instance, created, **kwargs):
    bpassword = User.objects.make_random_password(length=14)
    vpassword = User.objects.make_random_password(length=14)
    if created:
        buyer = User.objects.create_user(name=instance.buyer, email=instance.buyer_email, username=instance.buyer_email.split('@', 1)[0], password=bpassword) if not User.objects.filter(email=instance.buyer_email).exists() else User.objects.get(email=instance.buyer_email)
        vendor = User.objects.create_user(name=instance.vendor, email=instance.vendor_email, username=instance.vendor_email.split('@', 1)[0], password=vpassword) if not User.objects.filter(email=instance.vendor_email).exists() else User.objects.get(email=instance.vendor_email)
        Profile.objects.filter(user=vendor).update(phone=instance.vendor_phone, address=instance.vendor_address, company_name=instance.vendor, company_phone_I=instance.vendor_phone, company_phone_II=instance.vendor_phone, company_address=instance.vendor_address) if Profile.objects.filter(user=vendor).exists() else Profile.objects.create(user=vendor, phone=instance.vendor_phone, address=instance.vendor_address, company_name=instance.vendor, company_phone_I=instance.vendor_phone, company_phone_II=instance.vendor_phone, company_address=instance.vendor_address)
        Profile.objects.filter(user=buyer).update(phone=instance.buyer_phone, address=instance.buyer_address) if Profile.objects.filter(user=buyer).exists() else Profile.objects.create(user=buyer, phone=instance.buyer_phone, address=instance.buyer_address)
        Order.objects.create(contract=instance, buyer=buyer, vendor=vendor)

        Transactions.objects.create(contract=instance, transaction_type=instance.contract_type, total_cost=instance.contract_amount, buyer=buyer, vendor=vendor)

    if not instance.buyer_approve and instance.contract_paid:
        instance.buyer_approve = True
        instance.save()

    if instance.buyer_approve and instance.vendor_approve:
        instance.contract_started = datetime.datetime.today()
        instance.save()

    if not instance.slug:
        instance.slug = unique_slug_generator(instance)
        LOGGER.info(instance.slug)
        instance.save()

    if instance.completed and not instance.contract_ended:
        instance.contract_ended = datetime.datetime.today()
        instance.save()

    if not instance.completed and instance.contract_ended:
        instance.contract_termination = datetime.datetime.today()
        instance.save()


@receiver(post_save, sender=Milestones)
def milestone_post_save(sender, instance, created, **kwargs):
    if not instance.completed_date and instance.accepted:
        instance.completed_date = datetime.datetime.today()
        instance.save()

@receiver(post_save, sender=Transactions)
def transaction_post_save(sender, instance, created, **kwargs):
    if not instance.ref_link:
        instance.ref_link = unique_ref_generator(instance)
        instance.save()

    if instance.transaction_status == instance.SUCCESS:
        escrow_balance = instance.total_cost + instance.vendor.wallet.escrow_balance
        new_balance = instance.total_cost
        old_balance = instance.vendor.wallet.old_balance
        if old_balance < new_balance:
            dif = new_balance - old_balance
            if dif < 0:
                res = dif * -1
                rs = (res / old_balance if old_balance > 0 else 1) * 100
                instance.vendor.wallet.incease = False if instance.vendor.wallet.p_increase >= rs else True
                instance.vendor.wallet.p_increase = rs
                instance.vendor.wallet.save()
        elif old_balance > new_balance:
            dif = old_balance - new_balance
            if dif < 0:
                res = dif * -1
                rs = (res / new_balance if new_balance > 0 else 1) * 100
                instance.vendor.wallet.incease = False if instance.vendor.wallet.p_increase >= rs else True
                instance.vendor.wallet.p_increase = rs
                instance.vendor.wallet.save()
        Contract.objects.filter(slug=instance.contract.slug).update(contract_paid=True)
        Wallet.objects.filter(user=instance.vendor).update(escrow_balance=escrow_balance)




































# @property
# def p_increase(self):
#     if self.new_balance > self.old_balance:
#         dif = (self.new_balance - self.old_balance)
#         if dif < 0:
#             res = dif * -1
#             rs = (Decimal(res) / self.old_balance if self.old_balance > 0 else 1) * 100
#             return rs
#         elif dif > 1:
#             res = dif
#             rs = (Decimal(res) / self.old_balance if self.old_balance > 0 else 1) * 100
#             return rs
#         return Decimal(0.00)
#     else:
#         dif = (self.old_balance - self.new_balance)
#         if dif < 0:
#             res = dif * -1
#             rs = (Decimal(res) / self.new_balance if self.new_balance > 0 else 1) * 100
#             return rs
#         elif dif > 1:
#             res = dif
#             rs = (Decimal(res) / self.new_balance if self.new_balance > 0 else 1) * 100
#             return rs
#         return Decimal(0.00)

