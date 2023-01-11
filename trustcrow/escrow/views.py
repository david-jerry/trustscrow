from collections import Counter
import datetime
from decimal import Decimal
from pprint import pprint

from django.db.models import Sum
from django.core.exceptions import PermissionDenied
from django.http import JsonResponse
from django.conf import settings
from django.shortcuts import get_object_or_404, redirect, render
from django.db.models import Q
from django.contrib.auth import get_user_model
from config.commons import send_html_mail
from config.mixins import LoginRequiredMixin, StaffRequiredMixin
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import authenticate, login
from django.views.generic import (
    DetailView,
    RedirectView,
    UpdateView,
    CreateView,
    ListView,
    FormView,
)


from trustcrow.escrow.models import (
    Contract,
    Transactions,

    Milestones,

    Dispute,
    DisputeMessages,
)
from trustcrow.orders.models import Order, OrderItems
from trustcrow.users.models import Profile, Wallet
from trustcrow.workshop.models import ProductImage, ProductLocalization, Products
from .forms import ContractForm, MilestoneForm, MilestonesFormset

from trustcrow.utils.logger import LOGGER


User = get_user_model()

def retry_payment(request, ref_link):
    if request.method == "GET":
        transaction = Transactions.objects.get(ref_link=ref_link)
        slug = transaction.contract.slug
        contract = transaction.contract
        contract.buyer_approve = True
        contract.save()
        ref = ref_link
        pk = settings.PAYSTACK_PUBLIC_KEY
        amount = transaction.total_cost
        email = transaction.contract.buyer_email
        LOGGER.info("Vendor and Buyer already exists")
        msg = f"""
        Greetings {transaction.contract.vendor.title()}
        <br>
        <br>
        {transaction.contract.buyer.title()} made the payment for the contract between you too.
        <br>
        <br>
        Please proceed in delivering as agreed between you too.
        <br><br>
        <a href="https://trustscrow.com{transaction.contract.get_email_url()}">Contract Link</a>
        """
        send_html_mail(subject=f"PAID ESCROW CONTRACT", html_content=msg, from_email="TRUSTSCROW <noreply@trustscrow.com>", recipient_list=[contract.vendor_email])

        msg2 = f"""
        Greetings {transaction.contract.buyer.title()}
        <br>
        <br>
        You have successfully made payment of the sum N{round(transaction.contract.contract.amount, 2)}
        <br>
        <br>
        Please be assured, should they fail to meet up with the commitment, Your deposit shall be refunded and the contract termed Null and Void.
        <br><br>
        <a href="https://trustscrow.com{transaction.contract.get_email_url()}">Contract Link</a>
        """
        send_html_mail(subject=f"APPROVED ESCROW CONTRACT", html_content=msg2, from_email="TRUSTSCROW <noreply@trustscrow.com>", recipient_list=[contract.buyer_email])
        return JsonResponse(
                status=200,
                data={
                    "title": "RETRIED SUCCESSFULLY",
                    'MESSAGE': "The payment has been retired successfully. Await STATUS RESPONSE.",
                    'slug': slug,
                    'ref': ref,
                    'pk': pk,
                    'amount': amount,
                    'email': email
                },
            )
    else:
        return JsonResponse(
            status=403,
            data={
                "title": "SERVER ERROR",
                "message": "There was an error completing the payment. Please try in a few minutes",
            },
        )


# Create your views here.

def vendor_approve(request, slug, pk):
    Contract.objects.filter(slug=slug).update(vendor_approve=True)
    milestone = get_object_or_404(Milestones, id=pk)
    return redirect("escrow:detail_milestone", pk=milestone.id)



# Milestone functions for service contracts
def milestone_approve(request, pk):
    milestone = get_object_or_404(Milestones, id=pk)
    milestone.accepted = True
    milestone.save()
    return redirect("escrow:detail_milestone", pk=milestone.id)


def detail_milestone(request, pk):
    milestone = get_object_or_404(Milestones, id=pk)
    context = {
        'obj':milestone
    }
    return render(request, 'snippets/htmx/milestone_detail.html', context)


def create_milestones(request, slug):
    contract = Contract.objects.get(slug=slug)
    milestones = Milestones.objects.filter(contract=contract)
    form = MilestoneForm(request.POST or None)

    if request.method == "POST":
        LOGGER.info(request.POST)
        if form.is_valid():
            form = form.save(commit=False)
            form.contract = contract
            form.save()
            return redirect("escrow:detail_milestone", pk=form.id)
        else:
            context = {
                'object': contract,
                'form': form
            }
            return render(request, 'snippets/htmx/milestone_form.html', context)

    context = {
        'form': form,
        'object': contract,
        'milestones': milestones
    }
    return render(request, 'escrow/detail.html', context)

def add_milestones_form(request, slug):
    contract = Contract.objects.get(slug=slug)
    form = MilestoneForm()
    context = {
        'form': form,
        'object': contract
    }
    return render(request, 'snippets/htmx/milestone_form.html', context)








# product items for product contracts
def approve_product(request, pk):
    product = get_object_or_404(OrderItems, id=pk)
    product.accepted = True
    product.save()
    return redirect("escrow:detail_product", pk=product.id)


def detail_product(request, pk):
    product = get_object_or_404(OrderItems, id=pk)
    context = {
        'obj':product
    }
    return render(request, 'snippets/htmx/product_detail.html', context)

def create_product(request, slug):
    contract = Contract.objects.get(slug=slug)
    user = User.objects.get(email=contract.vendor_email)
    order = Order.objects.get(contract=contract)

    if not Products.objects.filter(
                p_type=contract.PRODUCT,
                vendor=user,
                title=request.POST.get('title'),
                detail=request.POST.get('detail'),
                price=request.POST.get('price'),
            ).exists():
        product = Products.objects.create(
            p_type=contract.PRODUCT,
            vendor=user,
            title=request.POST.get('title'),
            detail=request.POST.get('detail'),
            price=request.POST.get('price'),
        )
        # ProductImage.objects.create(product=product, image=request.FILES.get('image'))
        order = OrderItems.objects.create(order=order, product=product, quantity=request.POST.get('quantity'), price=request.POST.get('price'))
        return redirect("escrow:detail_product", pk=order.id)
    else:
        product = Products.objects.get(
            p_type=contract.PRODUCT,
            vendor=user,
            title=request.POST.get('title'),
            detail=request.POST.get('detail'),
            price=request.POST.get('price'),
        )
        # ProductImage.objects.create(product=product, image=request.FILES.get('image'))
        order = OrderItems.objects.create(order=order, product=product, quantity=request.POST.get('quantity'), price=request.POST.get('price'))
        return redirect("escrow:detail_product", pk=order.id)


def add_product_form(request, slug):
    contract = Contract.objects.get(slug=slug)
    context = {
        'object': contract
    }
    return render(request, 'snippets/htmx/product_form.html', context)




class ContractCreateView(FormView):
    model = Contract
    form_class = ContractForm

    def post(self, request, *args, **kwargs):

        if "__field_name__" in request.POST:
            return self.validate_field(request)

        creator = request.POST.get('creator'),
        LOGGER.info(creator)
        contract_type = request.POST.get('contract_type'),
        LOGGER.info(contract_type)
        vendor = request.POST.get('vendor'),
        LOGGER.info(vendor)
        vendor_email = request.POST.get('vendor_email'),
        LOGGER.info(vendor_email)
        vendor_phone = request.POST.get('vendor_phone'),
        LOGGER.info(vendor_phone)
        vendor_address = request.POST.get('vendor_address'),
        LOGGER.info(vendor_address)
        contract_amount = Decimal(request.POST.get('amount')),
        LOGGER.info(contract_amount)
        buyer = request.POST.get('buyer'),
        LOGGER.info(buyer)
        buyer_email = request.POST.get('buyer_email'),
        LOGGER.info(buyer_email)
        buyer_phone = request.POST.get('buyer_phone'),
        LOGGER.info(buyer_phone)
        buyer_address = request.POST.get('buyer_address'),
        LOGGER.info(buyer_address)
        terms_agreement = request.POST.get('terms_agreement'),
        LOGGER.info(terms_agreement)
        terms_for_termination = request.POST.get('terms_for_termination'),
        LOGGER.info(terms_for_termination)

        form = ContractForm(data=request.POST)
        LOGGER.info(request.POST)
        if terms_for_termination != "" and terms_agreement != "":
            contract = Contract.objects.create(
                creator = request.POST.get('creator'),
                contract_title = request.POST.get('contract_title') if request.POST.get('contract_title') else None,
                contract_type = request.POST.get('contract_type'),
                vendor = request.POST.get('vendor'),
                vendor_email = request.POST.get('vendor_email'),
                vendor_phone = request.POST.get('vendor_phone'),
                vendor_address = request.POST.get('vendor_address'),
                contract_amount = Decimal(request.POST.get('amount')),
                buyer = request.POST.get('buyer'),
                buyer_email = request.POST.get('buyer_email'),
                buyer_phone = request.POST.get('buyer_phone'),
                buyer_address = request.POST.get('buyer_address'),
                # terms_agreement = request.POST.get('terms_agreement'),
                # terms_for_termination = request.POST.get('terms_for_termination')
            )

            vendor = User.objects.get(email=request.POST.get('vendor_email'))
            buyer = User.objects.get(email=request.POST.get('buyer_email'))

            # transaction = Transactions.objects.get(contract=contract) if Transactions.objects.filter(contract=contract).exists() else Transactions.objects.create(contract=contract, transaction_type=contract.contract_type)
            local = ProductLocalization.objects.get(delivery_to__iexact=request.POST.get('localization').title()) if ProductLocalization.objects.filter(delivery_to__iexact=request.POST.get('localization').title()).exists() else ProductLocalization.objects.create(delivery_to=request.POST.get('localization').title())
            Order.objects.filter(contract=contract).update(delivery_location=local) if Order.objects.filter(contract=contract).exists() else Order.objects.create(contract=contract, delivery_location=local, vendor=vendor, buyer=buyer)

            slug = contract.slug
            ref = contract.contract_transaction.ref_link
            pk = settings.PAYSTACK_PUBLIC_KEY
            amount = request.POST.get('amount')
            email = request.POST.get('buyer_email')
            username = User.objects.get(email=request.POST.get('vendor_email')).username

            url = reverse('escrow:contract_detail', kwargs={'slug':slug})

            if request.POST.get('creator') == "Contractor":
                buyer.backend = 'django.contrib.auth.backends.ModelBackend'
                login(self.request, buyer)
                LOGGER.info(f"{slug} + ' ' + {ref} + ' ' + {pk} + ' ' + {amount} + ' ' + {email} + ' ' + {username} ")
                return JsonResponse(
                    status=201,
                    data={
                        'username': username,
                        "message": "You have successfully created a new Contract",
                        "title": "New Contract Created",
                        'slug': slug,
                        'ref': ref,
                        'pk': pk,
                        'amount': amount,
                        'email': email
                    },
                )
            else:
                vendor.backend = 'django.contrib.auth.backends.ModelBackend'
                login(self.request, vendor)
                return JsonResponse(
                    status=201,
                    data={
                        'username': username,
                        "message": "You have successfully created a new Contract",
                        "title": "New Contract Created",
                        'slug': slug,
                        'amount': amount,
                        'email': email
                    },
                )
        else:
            return JsonResponse(
                status=403,
                data={
                    "message": "Invalid form details",
                    "title": "Form Validation Error",
                },
            )

    def validate_field(self, request):
        field_name = request.POST.get("__field_name__")
        # form = ContractForm(request.POST, request.FILES)
        form = ContractForm(request.POST)
        form.is_valid()
        return JsonResponse(
            status=203,
            data={
                "errors": form.errors.get(field_name, []),
            },
        )

create_contract = ContractCreateView.as_view()

def verify_transaction(request, ref, status):
    LOGGER.info(status)
    transaction = get_object_or_404(Transactions, ref_link=ref)
    contract = transaction.contract
    # buyer = User.objects.get(email=contract.buyer_email)
    # vendor = User.objects.get(email=contract.vendor_email)
    Transactions.objects.filter(contract=contract, ref_link=ref).update(
        transaction_status=status.upper()
    )
    msg = f"""
    Greetings {contract.vendor.title()}
    <br>
    <br>
    {contract.buyer.title()} Has made payments for the contract thus approving the contract between you both.
    <br>
    <br>
    Please proceed in delivering as agreed between you too.
    <br><br>
    <a href="https://trustscrow.com{contract.get_email_url()}">Contract Link</a>
    """
    send_html_mail(subject=f"APPROVED ESCROW CONTRACT", html_content=msg, from_email="TRUSTSCROW <noreply@trustscrow.com>", recipient_list=[contract.vendor_email])

    msg2 = f"""
    Greetings {contract.buyer.title()}
    <br>
    <br>
    You have successfully approved the contract between yourself and {contract.vendor.title()} worth the sum of {round(contract.contract_amount, 2)}
    <br>
    <br>
    Please be assured, should they fail to meet up with the commitment, Your deposit shall be refunded and the contract termed Null and Void.
    <br><br>
    <a href="https://trustscrow.com{contract.get_email_url()}">Contract Link</a>
    """
    send_html_mail(subject=f"APPROVED ESCROW CONTRACT", html_content=msg2, from_email="TRUSTSCROW <noreply@trustscrow.com>", recipient_list=[contract.buyer_email])

    return JsonResponse(status=200, data={'title':f"TRANSACTION {status.upper()}", 'message':f"You transaction is {status.upper()}", 'slug':contract.slug})


def transaction_data(request):
    spend = Transactions.objects.filter(transaction_status__iexact="SUCCESS", buyer__username__iexact=request.user.username).values('created__year').annotate(gtotal=Sum('total_cost')).order_by('-created__year')[:2] if Transactions.objects.filter(transaction_status__iexact="SUCCESS", buyer__username__iexact=request.user.username).exists() else None
    stats = Transactions.objects.filter(transaction_status__iexact="SUCCESS", vendor__username__iexact=request.user.username).values('created__year').annotate(gtotal=Sum('total_cost')).order_by('-created__year')[:2] if Transactions.objects.filter(transaction_status__iexact="SUCCESS", vendor__username__iexact=request.user.username).exists() else None
    dataX = []
    dataY = []
    dataZ = []

    LOGGER.info(spend)
    LOGGER.info(stats)

    if spend != None:
        for ex in spend:
            LOGGER.info(ex)
            dataZ.append(ex['gtotal'])
    else:
        dataZ.append(0,)

    if stats != None:
        for row in stats:
            dataX.append(row['created__year'])
            dataY.append(row['gtotal'])
    else:
        dataX.append(datetime.datetime.today().strftime('%Y'))
        dataY.append(0)

    if len(dataY) > 0 and len(dataX) > 0 and len(dataZ) > 0:
        return JsonResponse(status=200, data={"username":request.user.username, 'dataX':dataX, "dataY":dataY, "dataZ":dataZ})
    return JsonResponse(status=500, data={'message':"Data retrieval error", "title":"Retrieval Error"})

def search_contracts(request):
    q = request.GET.get('q')
    if request.htmx and q != None:
        qs = request.user.all_contracts.filter(Q(vendor__icontains=q)|Q(vendor_phone__icontains=q)|Q(vendor_email__icontains=q)|Q(buyer__icontains=q)|Q(buyer_phone__icontains=q)|Q(buyer_email__icontains=q)) if request.user.is_authenticated and not request.user.is_staff else Contract.objects.filter(Q(vendor__icontains=q)|Q(vendor_phone__icontains=q)|Q(vendor_email__icontains=q)|Q(buyer__icontains=q)|Q(buyer_phone__icontains=q)|Q(buyer_email__icontains=q))
        return render(request, 'snippets/htmx/escrow_list.html', context={'objects':qs})
    elif request.htmx and q == None:
        qs = request.user.all_contracts if request.user.is_authenticated and request.user.is_staff else Contract.objects.all()
        return render(request, 'snippets/htmx/escrow_list.html', context={'objects':qs})
    return render(request, 'escrow/list.html', context={'objects':qs})


class ContractList(LoginRequiredMixin, ListView):
    model = Contract
    template_name = "escrow/list.html"
    paginate_by = 10
    allow_empty = True
    context_object_name = "objects"
    page_kwarg = 'page'

    def get_queryset(self):
        q = self.request.GET.get('q')
        if self.request.user.is_authenticated and not self.request.user.is_staff and q == None:
            user = self.request.user
            return user.all_contracts
        elif self.request.user.is_authenticated and not self.request.user.is_staff and q != None:
            user = self.request.user
            return user.all_contracts.filter(Q(vendor__icontains=q)|Q(vendor_phone__icontains=q)|Q(vendor_email__icontains=q)|Q(buyer__icontains=q)|Q(buyer_phone__icontains=q)|Q(buyer_email__icontains=q))
        elif self.request.user.is_authenticated and self.request.user.is_staff and q == None:
            return Contract.objects.all()
        elif self.request.user.is_authenticated and self.request.user.is_staff and q != None:
            return Contract.objects.filter(Q(vendor__icontains=q)|Q(vendor_phone__icontains=q)|Q(vendor_email__icontains=q)|Q(buyer__icontains=q)|Q(buyer_phone__icontains=q)|Q(buyer_email__icontains=q))

    def get_template_names(self):
        if not self.request.htmx:
            LOGGER.info("serving from request without htmx")
            return 'escrow/list.html'
        elif self.request.htmx:
            LOGGER.info("serving from request with htmx")
            return 'snippets/htmx/escrow_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

list_contracts = ContractList.as_view()


class CustomerList(LoginRequiredMixin, ListView):
    model = Contract
    template_name = "escrow/customer_list.html"
    paginate_by = 10
    allow_empty = True
    context_object_name = "objects"
    page_kwarg = 'page'

    def get_queryset(self):
        if self.request.user.is_authenticated:
            user = self.request.user
            return user.all_customers

    def get_template_names(self):
        if not self.request.htmx:
            LOGGER.info("serving from request without htmx")
            return 'escrow/customer_list.html'
        elif self.request.htmx:
            LOGGER.info("serving from request with htmx")
            return 'snippets/htmx/escrow_customer_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

list_customers = CustomerList.as_view()


class ContractDetailView(LoginRequiredMixin, DetailView):

    model = Contract
    template_name = "escrow/detail.html"
    context_object_name = "object"
    slug_field = "slug"
    slug_url_kwarg = "slug"

    def get_object(self):
        LOGGER.info(Contract.objects.filter(buyer_email=self.request.user.email,slug=self.kwargs['slug']).exists())
        if Contract.objects.filter(vendor_email=self.request.user.email,slug=self.kwargs['slug']).exists() or Contract.objects.filter(buyer_email=self.request.user.email,slug=self.kwargs['slug']).exists() or self.request.user.is_superuser:
            return Contract.objects.get(slug=self.kwargs['slug'])
        else:
            raise PermissionDenied()

contract_detail = ContractDetailView.as_view()


def contract_detail2(request, *args, **kwargs):
    username = kwargs['username']
    slug = kwargs['slug']
    user = User.objects.get(username=username)
    user.backend = 'django.contrib.auth.backends.ModelBackend'
    login(request, user)
    contract = Contract.objects.get(slug=slug)
    return render(request, 'escrow/detail.html', context={"object":contract})


















































