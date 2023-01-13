from datetime import date
import datetime
from decimal import Decimal
from pprint import pprint

from django.contrib.auth.models import AbstractUser
from django.db.models import (
    CASCADE,
    DO_NOTHING,
    BooleanField,
    CharField,
    DateField,
    DecimalField,
    URLField,
    DateTimeField,
    FloatField,
    TextField,
    TimeField,
    IntegerField,
    PositiveSmallIntegerField,
    PositiveBigIntegerField,
    ForeignKey,
    ManyToManyField,
    OneToOneField,
    GenericIPAddressField,
    Sum,
    Q
)
from django.shortcuts import get_object_or_404
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from stdimage import StdImageField
from model_utils.models import TimeStampedModel
from countries_plus.models import Country
from tinymce.models import HTMLField

from trustcrow.currency.models import Banks
from trustcrow.escrow.models import Contract, Dispute, Transactions
from trustcrow.utils.logger import LOGGER


class User(AbstractUser):
    """
    Default custom user model for trustcrow.
    If adding fields that need to be filled at user signup,
    check forms.SignupForm and forms.SocialSignupForms accordingly.
    """

    #: First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    reg_no = CharField(_('Registration number'), max_length=255, null=True, blank=True)
    ref_link = CharField(_("Referral Code"), max_length=500, blank=True, null=True)
    first_name = None  # type: ignore
    last_name = None  # type: ignore

    image = StdImageField(_("Display Photo"), upload_to="user/passport", blank=True, null=True, delete_orphans=True, variations={'thumbnail': {"width": 100, "height": 100, "crop": True}})

    vendor = BooleanField(_("Vendor?"), default=False)
    verified = BooleanField(_("Verified?"), default=False)
    gave_consent = BooleanField(_("Share my registration data with trustscrow's content providers for marketing purposes. This confirms you are up to the legal age approved in your country."), default=False)

    def __str__(self):
        return f"{self.username.upper()} Account"

    @property
    def all_transactions(self):
        if Transactions.objects.filter(contract__buyer_email__iexact=self.email).exists():
            return Transactions.objects.filter(contract__buyer_email__iexact=self.email)
        if Transactions.objects.filter(contract__vendor_email__iexact=self.email).exists():
            return Transactions.objects.filter(contract__vendor_email__iexact=self.email)
        return None

    @property
    def total_earnings(self):
        if self.vendor_transaction and self.all_transactions:
            return Decimal(sum([tx.total_cost for tx in self.vendor_transaction.all()]))
        return Decimal(0.00)

    @property
    def total_expenses(self):
        if self.buyer_transaction and self.all_transactions:
            return Decimal(sum([tx.total_cost for tx in self.buyer_transaction.all()]))
        return Decimal(0.00)


    @property
    def wallet_balance(self):
        if Contract.objects.filter(vendor_email=self.email, payment_sent=False).exists():
            contracts = Contract.objects.filter(vendor_email=self.email, payment_sent=False)
            total = 0
            for con in contracts:
                total += int(con.withdraw_amount)
            return total
        return 0


    @property
    def all_products(self):
        if self.vendor and self.vendor_product:
            return self.vendor_product.all()
        return None

    @property
    def delivery_locations(self):
        if self.product_localization:
            return self.product_localization.all()
        return None





    @property
    def total_contracts(self):
        if Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)).exists():
            return Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)).count()
        return 0

    @property
    def total_completed_contracts(self):
        contracts = []
        if self.all_completed_contracts:
            if Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)).exists():
                for c in Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)):
                    if c.completed:
                        contracts.append(c)
                return len(contracts)
        return 0

    @property
    def total_active_contracts(self):
        contracts = []
        if self.all_active_contracts:
            if Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)).exists():
                for c in Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)):
                    if not c.completed:
                        contracts.append(c)
                return len(contracts)
        return 0

    @property
    def all_contracts(self):
        if Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)).exists():
            return Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email))
        return None

    @property
    def all_active_contracts(self):
        contracts = []
        if Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)).exists():
            for c in Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)):
                if not c.completed:
                    contracts.append(c)
            return contracts
        return None

    @property
    def all_completed_contracts(self):
        contracts = []
        if Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)).exists():
            for c in Contract.objects.filter(Q(vendor_email=self.email) | Q(buyer_email=self.email)):
                if c.completed:
                    contracts.append(c)
            return contracts
        return None





    @property
    def all_disputes(self):
        if Dispute.objects.filter(
            Q(contract__buyer_email=self.email) |
            Q(contract__vendor_email=self.email)).exists():
            return Dispute.objects.filter(Q(contract__buyer_email=self.email) | Q(contract__vendor_email=self.email))
        return None

    @property
    def total_disputes(self):
        if self.all_disputes:
            return self.all_disputes.count()
        return 0




    @property
    def all_customers(self):
        if Contract.objects.filter(vendor_email=self.email).exists():
            contracts = Contract.objects.filter(vendor_email=self.email)
            users = []
            for contract in contracts:
                u = User.objects.get(email = contract.buyer_email)
                if not u in users:# and not User.objects.get(email = user.buyer_email) in users:
                    users.append(u)
            return users
        return None





    @property
    def get_user_banks(self):
        if self.bank_account:
            return self.bank_account.filter(active=True).first()
        return None

    @property
    def get_user_cards(self):
        if self.saved_card:
            return self.saved_card.all()
        return None


    def get_absolute_url(self):
        """Get url for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})

    class Meta:
        managed = True
        verbose_name = 'User Account'
        verbose_name_plural = 'User Accounts'
        ordering = ["-date_joined"]

class Profile(TimeStampedModel):
    """
    Profile details for vendors and customers. The information provided here
    verifies a vendor and also acustomer.

    Args:
        TimeStampedModel (AbstractModel): contains these two fields [ Modified and Created Date(Created date is automatic) ]

    Fields:
        user (OneToOne Relationship): relationship to a unique user
        first name(Character Field): can contain text and integers
        middle name(Character Field): can contain text and integers optional
        last name(Character Field): can contain text and integers

        # if user is vendor
    """

    user = OneToOneField(User, on_delete=CASCADE, related_name="profile")

    # personal information for client
    phone = CharField(_("Customer Contact"), max_length=16, blank=True)
    address = CharField(_("Customer Address"), max_length=500, blank=True)

    # Company details for vendors
    company_name = CharField(_("Company Name"), max_length=255, blank=True)
    company_tagline = CharField(_("Company Tagline"), max_length=255, blank=True)
    company_reg_no = CharField(_("Company RC Number"), max_length=255, blank=True)
    company_rep = CharField(_("Company Representative"), max_length=255, blank=True)
    company_website = URLField(_("Company Website"), blank=True)
    company_phone_I = CharField(_("Company Contact I"), max_length=16, blank=True)
    company_phone_II = CharField(_("Company Contact II"), max_length=16, blank=True)
    company_address = CharField(_("Company Address"), max_length=500, blank=True)
    company_country = ForeignKey(Country, on_delete=DO_NOTHING, verbose_name=_("Company Country"), blank=True, null=True)
    company_logo = StdImageField(_("Company Logo"), upload_to="user/company/logo", blank=True, null=True, delete_orphans=True, variations={'thumbnail': {"width": 100, "height": 100, "crop": True}})

    def __str__(self):
        return f"{self.user.username.upper()} Profile"

    @property
    def complete_registration(self):
        if self.user.vendor == True:
            total = 9
            nm = 1 if self.user.name != None else 0
            up = 1 if self.user.image != None else 0
            cn = 1 if self.company_name != None else 0
            cr = 1 if self.company_reg_no != None else 0
            crp = 1 if self.company_rep != None else 0
            cw = 1 if self.company_website != None else 0
            cp1 = 1 if self.company_phone_I != None else 0
            cp2 = 1 if self.company_phone_II != None else 0
            ca = 1 if self.company_address != None else 0
            # v = 1 if self.verified == True else 0

            percentage = ((nm + cn + cr + crp + cw + cp1 + cp2 + ca + up)/total) * 100
            return percentage
        else:
            total = 4
            nm = 1 if self.user.name != None else 0
            up = 1 if self.user.image != None else 0
            p = 1 if self.phone != None else 0
            a = 1 if self.address != None else 0
            # v = 1 if self.verified == True else 0
            percentage = ((nm + p + a + up)/total) * 100
            return percentage


    class Meta:
        managed = True
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'
        ordering = ["-created"]

class Wallet(TimeStampedModel):
    user = OneToOneField(User, on_delete=CASCADE, related_name='wallet')
    escrow_balance = DecimalField(max_digits=20, decimal_places=2, default=0.00)
    current_balance = DecimalField(max_digits=20, decimal_places=2, default=0.00)
    total_withdrawn = DecimalField(max_digits=20, decimal_places=2, default=0.00)
    total_earning = DecimalField(max_digits=20, decimal_places=2, default=0.00)

    old_balance = DecimalField(max_digits=20, decimal_places=2, default=0.00)

    p_increase = DecimalField(max_digits=20, decimal_places=2, default=0.00)
    increase = BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username.upper()} Wallet"

    class Meta:
        managed = True
        verbose_name = "User Wallet"
        verbose_name_plural = "User Wallets"
        ordering = ["-modified"]

class WalletAddress(TimeStampedModel):
    user = OneToOneField(User, on_delete=CASCADE, related_name='wallet_address')
    address = CharField(_("Wallet Address"), max_length=500, blank=True)
    balance = DecimalField(max_digits=20, decimal_places=4, default=0.0000)

    def __str__(self):
        return f"{self.user.username.upper()} Wallet Address: {self.address}"

    class Meta:
        managed = True
        verbose_name = "User Wallet Address"
        verbose_name_plural = "User Wallet Addresses"
        ordering = ["-modified"]









#_______________________________________________________________________________#
#                              Foreignkeys Relationship                         #
#_______________________________________________________________________________#
class BankAccount(TimeStampedModel):
    user = ForeignKey(User, on_delete=CASCADE, related_name="bank_account")
    bank = ForeignKey(Banks, on_delete=DO_NOTHING, related_name="bank_account")
    acc_no = CharField(max_length=17)
    acc_name = CharField(max_length=255)
    bvn = CharField(max_length=11)

    verified = BooleanField(default=False)
    active = BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username.upper()} Saved Bank Account: {self.acc_no}"

    class Meta:
        managed = True
        verbose_name = "User Saved Bank"
        verbose_name_plural = "User Saved Banks"
        ordering = ["-modified"]

class SavedCards(TimeStampedModel):
    """Save transactional ATM Cards for use when ever making purchases

    Args:
        TimeStampedModel (_type_): _description_
    """

    user = ForeignKey(User, on_delete=CASCADE, related_name="saved_card")
    name_on_card = CharField(max_length=255)
    card_no = CharField(max_length=18)
    cvv = CharField(max_length=18, blank=True, null=True)
    card_exp_month = CharField(max_length=2, blank=True)
    card_exp_year = CharField(max_length=4, blank=True)
    card_provider = CharField(max_length=40, default="master")

    active = BooleanField(default=False)

    @property
    def formatted_no(self):
        formatted = f"{self.card_no[:4]}-{self.card_no[4:8]}-{self.card_no[8:12]}-{self.card_no[12:]}"
        return formatted

    @property
    def expired(self):
        if datetime.datetime.now().month > int(self.card_exp_month) and datetime.datetime.now().year >= int(self.card_exp_year):
            return True
        return False


    def __str__(self):
        return f"{self.user.username.upper()} Saved Card: {self.card_no}"

    class Meta:
        managed = True
        verbose_name = "User Saved Card"
        verbose_name_plural = "User Saved Cards"
        ordering = ["-created"]


























