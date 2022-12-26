from django.contrib import admin

from trustcrow.orders.models import Order, OrderItems

admin.site.register(Order)
admin.site.register(OrderItems)
