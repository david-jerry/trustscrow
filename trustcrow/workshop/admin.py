from django.contrib import admin

from trustcrow.workshop.models import Products, ProductImage, ProductLocalization

admin.site.register(Products)
admin.site.register(ProductImage)
admin.site.register(ProductLocalization)
