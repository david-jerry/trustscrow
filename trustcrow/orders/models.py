from decimal import Decimal
from django.db.models import (
    CASCADE,
    SET_NULL,
    DO_NOTHING,
    BooleanField,
    CharField,
    EmailField,
    SlugField,
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
from trustcrow.escrow.models import Contract

User = settings.AUTH_USER_MODEL

from trustcrow.workshop.models import ProductLocalization, Products

class Order(TimeStampedModel):
    unique_id = CharField(_("Ref Code"), max_length=25, blank=True, null=True)
    vendor = ForeignKey(User, on_delete=SET_NULL, related_name="vendor_order", null=True, blank=True)
    buyer = ForeignKey(User, on_delete=SET_NULL, related_name="buyer_order", null=True, blank=True)
    contract = OneToOneField(Contract, on_delete=SET_NULL, related_name='contract_order', null=True, blank=True)

    delivery_location = ForeignKey(ProductLocalization, on_delete=SET_NULL, blank=True, null=True)

    slug = SlugField(blank=True, max_length=500)

    @property
    def title(self):
        return self.unique_id if self.unique_id != "" else self.contract.contract_uuid

    @property
    def total_cost(self):
        qs = self.order_items.filter(order=self.pk, accepted=True).values_list('price', 'quantity') or 0
        t = 0 if isinstance(qs, int) else sum(map(lambda q: q[0] * q[1], qs)) + Decimal(self.delivery_location.delivery_cost) if self.delivery_location else 0
        return t

    @property
    def accepted(self):
        if self.order_items:
            qs = self.order_items.all().count()
            if self.order_items.filter(accepted=True).count() == qs and qs > 0:
                return True
            return False

    @property
    def all_items(self):
        if self.order_items:
            return self.order_items.all()
        return None

    class Meta:
        ordering = ['-created']
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    def __str__(self):
        return self.unique_id

    def get_absolute_url(self):
        return reverse("order:detail", kwargs={"slug": self.slug})


class OrderItems(TimeStampedModel):
    order = ForeignKey(Order, on_delete=SET_NULL, related_name='order_items', null=True, blank=True)
    product = ForeignKey(Products, on_delete=SET_NULL, related_name='product_item', null=True, blank=True)
    quantity = PositiveBigIntegerField(_('Quantity'))
    price = DecimalField(_("Item Price"), max_digits=20, decimal_places=2, default=0.00)

    accepted = BooleanField(default=False)

    class Meta:
        ordering = ['product__pk', '-created']
        verbose_name = 'Order Item'
        verbose_name_plural = 'Order Items'

    def __str__(self):
        return f'{self.pk} - {self.order.pk} - {self.product.title}'

    @property
    def sub_total(self):
        return self.price * (self.quantity or 0)
