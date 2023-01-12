import datetime
from decimal import Decimal
import uuid

from django.db.models import (
    CASCADE,
    DO_NOTHING,
    BooleanField,
    CharField,
    EmailField,
    Q,
    SlugField,
    DateField,
    DecimalField,
    URLField,
    DateField,
    FloatField,
    TextField,
    TimeField,
    IntegerField,
    PositiveSmallIntegerField,
    PositiveBigIntegerField,
    ForeignKey,
    ManyToManyField,
    UUIDField,
    OneToOneField,
    GenericIPAddressField,
    Sum
)
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.conf import settings

from stdimage import StdImageField
from model_utils.models import TimeStampedModel
from countries_plus.models import Country
from tinymce.models import HTMLField
from django.contrib.auth import get_user_model


User = settings.AUTH_USER_MODEL
# from trustcrow.users.models import User as U

class Contract(TimeStampedModel):
    SERVICE = "SERVICE"
    PRODUCT = "PRODUCT"
    CON_TYPE = (
        (SERVICE, SERVICE),
        (PRODUCT, PRODUCT),
    )

    CONTRACTOR = 'Contractor'
    VENDOR = "Vendor"
    CONTRACTOR = (
        (CONTRACTOR, CONTRACTOR),
        (VENDOR, VENDOR)
    )

    contract_uuid = UUIDField(_('Unique ID'), default=uuid.uuid4, editable=False, null=False, unique=True, db_index=True, max_length=255)
    creator = CharField(_("Contract Creator"), choices=CONTRACTOR, default=VENDOR, max_length=255)
    contract_type = CharField(_("Contract Type"), choices=CON_TYPE, default=PRODUCT, max_length=255)
    slug = SlugField(_("Slug"), blank=True, max_length=500)

    contract_title = CharField(_("Contract Title"), max_length=500, blank=True, null=True)
    terms_agreement = HTMLField()
    terms_for_termination = HTMLField()

    # upon filling this fields if there is no vendor with similar details it
    # automatically creates one
    vendor = CharField(_("Vendor's Name"), blank=True, null=True, max_length=500)
    vendor_phone = CharField(_("Vendor's Phone Number"), blank=True, null=True, max_length=500)
    vendor_email = EmailField(_("Vendor's Email"), blank=True)
    vendor_address = CharField(_("Vendor's Address"), blank=True, null=True, max_length=500)

    # when the customer inputs his information and makes payment, he only requires the vendors email
    # to send the request for the vendor to fill in his details and approves the
    # contract
    buyer = CharField(_("Buyer's Name"), blank=True, null=True, max_length=500)
    buyer_phone = CharField(_("Buyer's Phone Number"), blank=True, null=True, max_length=500)
    buyer_email = EmailField(_("Buyer's Email"), blank=True)
    buyer_address = CharField(_("Buyer's Address"), blank=True, null=True, max_length=500)

    # once both parties have approved a contract the contract seats valid
    vendor_approve = BooleanField(default=False)
    buyer_approve = BooleanField(default=False)

    # once contract has been paid for, then start the contract
    contract_amount = DecimalField(_("Contract Price"), max_digits=20, decimal_places=2, default=0.00)
    contract_paid = BooleanField(default=False)
    payment_withdrawn = BooleanField(default=False)
    # contract_completed = BooleanField(default=False)

    # once the milestones and payment has been made the next step involves
    # completing the milestone or product before a start date can be created
    contract_termination = DateField(_("Contract Termination Date"), blank=True, null=True)
    contract_started = DateField(_("Contract Start Date"), blank=True, null=True)
    contract_ended = DateField(_("Contract Start Date"), blank=True, null=True)



    @property
    def withdraw_amount(self):
        return self.contract_amount - (self.contract_amount * Decimal(0.025))

    @property
    def deposit_amount(self):
        return self.contract_amount + (self.contract_amount * Decimal(0.025))

    @property
    def title(self):
        return self.contract_uuid

    @property
    def all_milestones(self):
        if self.contract_milestone and self.contract_type == self.SERVICE:
            return self.contract_milestone.all()
        return None

    @property
    def approved(self):
        if self.vendor_approve and self.buyer_approve:
            return True
        return False

    @property
    def completed(self):
        if self.contract_type == self.PRODUCT:
            if self.contract_order:
                return self.contract_order.accepted
        else:
            if self.contract_milestone:
                qs = self.contract_milestone.all().count()
                ft = self.contract_milestone.filter(accepted=True).count()
                if ft == qs:
                    return True
                return False

    @property
    def customer(self):
        return get_user_model().objects.filter(email=self.buyer_email).first()

    @property
    def total_cost(self):
        if self.contract_order:
            return self.contract_order.total_cost
        return Decimal(0.00)

    def __str__(self):
        return str(self.contract_uuid)

    @property
    def get_products(self):
        if self.contract_order.all_items:
            return self.contract_order.all_items
        return None

    @property
    def get_products_count(self):
        if self.get_products:
            return self.get_products.count()
        return 0

    @property
    def get_disputes(self):
        if self.dispute:
            return self.dispute.all()
        return None


    @property
    def get_complete_milestones_count(self):
        if self.all_milestones:
            return self.all_milestones.filter(accepted=True).count()
        return 0


    @property
    def get_milestones_count(self):
        if self.all_milestones:
            return self.all_milestones.count()
        return 0

    def get_absolute_url(self):
        """Get url for contract's detail view.

        Returns:
            str: URL for contract detail.

        """
        return reverse("escrow:contract_detail", kwargs={"slug": self.slug})

    def get_email_url(self):
        """Get url for contract's detail view.

        Returns:
            str: URL for contract detail.

        """
        if self.creator == self.VENDOR:
            user = get_user_model().objects.get(email=self.buyer_email)
        else:
            user = get_user_model().objects.get(email=self.vendor_email)
        return reverse("escrow:contract_detail2", kwargs={"slug": self.slug, 'username':user.username})

    def retry_payment(self):
        return reverse("escrow:retry_payment", kwargs={"slug": self.slug})


    class Meta:
        managed = True
        verbose_name = 'Contract'
        verbose_name_plural = 'Contracts'
        ordering = ['-modified']


# this is created after every payment has been made or a payment
# status is updated
class Transactions(TimeStampedModel):
    SERVICE = "SERVICE"
    PRODUCT = "PRODUCT"
    CON_TYPE = (
        (SERVICE, SERVICE),
        (PRODUCT, PRODUCT),
    )

    PENDING = "PENDING"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"
    STATUS = (
        (FAILED, FAILED),
        (PENDING, PENDING),
        (SUCCESS, SUCCESS)
    )

    transaction_type = CharField(_("Transaction Type"), choices=CON_TYPE, default=PRODUCT, max_length=255)
    transaction_status = CharField(_("Transaction Status"), choices=STATUS, default=PENDING, max_length=255)
    total_cost = DecimalField(max_digits=20, decimal_places=2, default=0.00)

    contract = OneToOneField(Contract, on_delete=CASCADE, related_name="contract_transaction")
    buyer = ForeignKey(User, on_delete=CASCADE, related_name="buyer_transaction")
    vendor = ForeignKey(User, on_delete=CASCADE, related_name="vendor_transaction")

    ref_link = CharField(_("Transaction Ref"), max_length=500, blank=True)


    def __str__(self):
        return str(self.ref_link)

    class Meta:
        managed = True
        verbose_name = 'Transaction'
        verbose_name_plural = 'Transactions'
        ordering = ['-modified']



class Milestones(TimeStampedModel):
    """After a contract has been created from one party to be sent to the other, the
    service or product to be given would then be needed to be created.

    However this is only filled in by the vendor and once approved can not be
    changed for the contract even when completed or having a dispute

    Args:
        TimeStampedModel (_type_): _description_

    Returns:
        _type_: _description_
    """
    contract = ForeignKey(Contract, on_delete=CASCADE, related_name='contract_milestone', blank=True, null=True)
    detail = HTMLField()
    deadline = DateField()

    accepted = BooleanField(default=False)
    completed_date = DateField(blank=True, null=True)

    price = DecimalField(max_digits=20, decimal_places=2, default=0.00)

    def __str__(self):
        return f"Milestone for contract between {self.contract.vendor.title()} - {self.contract.buyer.title()}"

    @property
    def overdue(self):
        if self.deadline < datetime.datetime.today():
            return True
        return False

    @property
    def completed(self):
        if Milestones.objects.filter(contract=self.contract, accepted=True).exists():
            qs = Milestones.objects.filter(contract=self.contract).count()
            if Milestones.objects.filter(contract=self.contract, accepted=True).count() == qs and qs > 0:
                return True
            return False

    @property
    def overdue_days(self):
        if self.overdue:
            return datetime.datetime.today() - self.deadline
        return 0

    class Meta:
        managed = True
        verbose_name = 'Milestone'
        verbose_name_plural = 'Milestones'
        ordering = ['deadline']

    def get_absolute_url(self):
        return reverse("escrow:milestone_detail", kwargs={"id": self.id})











class Dispute(TimeStampedModel):
    """This only comes after a contract has been faulted and a party deems fit to
    report a misconduct or bridge of service either for reversal or payment.
    Both parties involved needs to see the informations contained within the dispute
    and has a room to drop their view on the matter which shall then be concluded with
    a phone call to both parties and then the reversal or payment can be completed

    Args:
        TimeStampedModel (_type_): _description_

    Returns:
        _type_: _description_
    """
    contract = ForeignKey(Contract, on_delete=CASCADE, related_name='dispute')
    dispute_detail = HTMLField()
    dispute_resolve = HTMLField()

    dispute_closed = BooleanField(default=False)

    def __str__(self):
        return str(self.contract.contract_uuid)

    @property
    def get_all_messages(self):
        if self.dispute_message:
            return self.dispute_message.all()
        return None

    class Meta:
        managed = True
        verbose_name = 'Contract Dispute'
        verbose_name_plural = 'Contract Disputes'
        ordering = ['-modified']


class DisputeMessages(TimeStampedModel):
    dispute = ForeignKey(Dispute, on_delete=CASCADE, related_name='dispute_message')
    message = HTMLField()

    def __str__(self):
        return str(self.contract.contract_uuid)

    class Meta:
        managed = True
        verbose_name = 'Contract Dispute Message'
        verbose_name_plural = 'Contract Dispute Messages'
        ordering = ['-modified']

