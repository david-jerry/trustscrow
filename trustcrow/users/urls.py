from django.urls import path

from trustcrow.users.views import (
    user_detail_view,
    user_redirect_view,
    user_update_view,

    all_users,
    list_products,
    product_detail_view,
    search_products,
    create_product
)

app_name = "users"
urlpatterns = [
    path("", view=all_users, name="all"),
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),

    path("workshop/products/search/", view=search_products, name="search_products"),
    path("workshop/products/", view=list_products, name="list_products"),
    path("workshop/products/create/", view=create_product, name="create_product"),
    path("workshop/products/<int:pk>/edit/", view=product_detail_view, name="product_detail"),

    path("<str:username>/", view=user_detail_view, name="detail"),
]
