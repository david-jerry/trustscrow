from django.db.models import (
    CASCADE,
    DO_NOTHING,
    BooleanField,
    CharField,
    ImageField,
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

User = settings.AUTH_USER_MODEL

class ProductLocalization(TimeStampedModel):
    vendor = ForeignKey(User, on_delete=CASCADE, related_name='product_localization', blank=True, null=True)

    delivery_to = CharField(_("Location to deliver"), max_length=500, blank=True)
    delivery_cost = DecimalField(_("Cost to deliver"), max_digits=20, decimal_places=2, default=4500.00)
    delivery_duration = DecimalField(_("Days taken to deliver"), max_digits=20, decimal_places=2, default=0.00)

    def __str__(self):
        return str(self.delivery_to)

    class Meta:
        managed = True
        verbose_name = 'Product Localization'
        verbose_name_plural = 'Product Localizations'
        ordering = ['delivery_to']


class Products(TimeStampedModel):
    PRODUCT = "PRODUCT"
    SERVICE = 'SERVICE'
    TYPE = (
        (PRODUCT, PRODUCT),
        (SERVICE, SERVICE)
    )

    p_type = CharField(_("Product Type"), max_length=20, default=PRODUCT)
    vendor = ForeignKey(User, on_delete=CASCADE, related_name="vendor_product")
    title = CharField(_("Product Title"), max_length=500)
    slug = SlugField(blank=True, max_length=500)
    detail = HTMLField()
    price = DecimalField(_("Product Price"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        ordering = ['title']
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("users:product_detail", kwargs={"pk": self.id})


class ProductImage(TimeStampedModel):
    product = ForeignKey(Products, on_delete=CASCADE, related_name='product_image')
    image = ImageField(null=True, blank=True)

    class Meta:
        ordering = ['product']
        verbose_name = 'Product Image'
        verbose_name_plural = 'Product Images'

    def __str__(self):
        return self.product.title




