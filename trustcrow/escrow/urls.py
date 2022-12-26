from django.urls import path

from trustcrow.escrow.views import (
    create_contract,
    vendor_approve,

    create_milestones,
    add_milestones_form,
    milestone_approve,
    detail_milestone,

    approve_product,
    detail_product,
    create_product,
    add_product_form,

    contract_detail,
    list_contracts,
    search_contracts,
    verify_transaction,
    transaction_data,
    retry_payment,


    # create_contract_service,
    # create_contract_service_milestone,
    # complete_milestone,

    list_customers,
)

app_name = "escrow"
urlpatterns = [
    # contract links
    path("contract/create/", view=create_contract, name="create_contract"),
    path("contract/vendor/approve/<slug>/", view=vendor_approve, name="vendor_approve"),
    path("contract/milestone/approve/<pk>/", view=milestone_approve, name="milestone_approve"),
    path("contract/milestones/<slug>/create/", view=create_milestones, name="create_milestones"),
    path("contract/milestones/<slug>/add-form/", view=add_milestones_form, name="add_milestones_form"),
    path("contract/milestones/<pk>/", view=detail_milestone, name="detail_milestone"),
    path("contract/product/approve/<pk>/", view=approve_product, name="approve_product"),
    path("contract/product/<slug>/create/", view=create_product, name="create_product"),
    path("contract/product/<slug>/add-form/", view=add_product_form, name="add_product_form"),
    path("contract/product/<pk>/", view=detail_product, name="detail_product"),
    path("contract/list/", view=list_contracts, name="list_contracts"),
    path("contract/list/search/", view=search_contracts, name="search_contracts"),
    path("contract/detail/<slug>/", view=contract_detail, name="contract_detail"),

    # customers
    path("customers/list/", view=list_customers, name="list_customers"),

    # transactions
    path("transaction/data/", view=transaction_data, name="transaction_data"),
    path("transaction/verify/<str:ref>/<str:status>/", view=verify_transaction, name="verify_transaction"),
    path("transaction/retry/<str:ref_link>/", view=retry_payment, name="retry_payment"),

    # path("<str:username>/", view=user_detail_view, name="detail"),
]
