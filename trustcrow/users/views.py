import json
from django.http import JsonResponse, HttpResponse
from django.db.models import Q
from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import redirect, render
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.views.generic import DetailView, RedirectView, UpdateView, FormView, ListView
from trustcrow.escrow.models import Contract

from trustcrow.utils.logger import LOGGER
from trustcrow.workshop.forms import ProductForm
from trustcrow.workshop.models import ProductImage, Products

User = get_user_model()

def all_users(request):
    val = request.POST.get('vendor_email')
    bal = request.POST.get('buyer_email')
    if val != "":
        LOGGER.info(val)
        users = User.objects.filter(email__iexact=val, verified=True, vendor=True).exclude(name__exact='').distinct()
        LOGGER.info(users.count())
        if request.htmx:
            return render(request, 'snippets/htmx/users.html', context={"users":users, "count":users.count(), "res":"vendor"})
    elif bal != "":

        users = User.objects.filter(email__iexact=bal, verified=True, vendor=False).exclude(name__exact='').distinct()
        LOGGER.info(users.count())
        if request.htmx:
            return render(request, 'snippets/htmx/users.html', context={"users":users, "count":users.count(), "res":"buyer"})
    return render(request, 'snippets/htmx/users.html', context={"users":None})












class ProductList(LoginRequiredMixin, ListView):
    model = Products
    template_name = "shop/product_list.html"
    paginate_by = 20
    allow_empty = True
    context_object_name = "objects"
    page_kwarg = 'page'

    def get_queryset(self):
        q = self.request.GET.get('q')
        if self.request.user.is_authenticated and not self.request.user.is_staff and q == None:
            user = self.request.user
            return user.all_products
        elif self.request.user.is_authenticated and not self.request.user.is_staff and q != None:
            user = self.request.user
            return user.all_products.filter(Q(title__iexact=q) | Q(detail__icontains=q) | Q(vendor__name__icontains=q))
        elif self.request.user.is_authenticated and self.request.user.is_staff and q == None:
            return Products.objects.all()
        elif self.request.user.is_authenticated and self.request.user.is_staff and q != None:
            return Products.objects.filter(Q(vendor__name__icontains=q)|Q(vendor__email__icontains=q)|Q(vendor__phone__icontains=q)|Q(title__icontains=q))

    def get_template_names(self):
        if not self.request.htmx:
            LOGGER.info("serving from request without htmx")
            return 'shop/product_list.html'
        elif self.request.htmx:
            LOGGER.info("serving from request with htmx")
            return 'snippets/htmx/user_product_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

list_products = ProductList.as_view()

class ProductDetailView(LoginRequiredMixin, UpdateView):

    model = Products
    template_name = "shop/product_detail.html"
    form_class = ProductForm


    def get_object(self):
        if Products.objects.filter(vendor=self.request.user, pk=self.kwargs['pk']).exists():
            return Products.objects.get(pk=self.kwargs['pk'])
        elif self.request.user.is_superuser:
            return Products.objects.get(pk=self.kwargs['pk'])

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['object'] = Products.objects.get(pk=self.kwargs['pk'])
        return context

    def get_success_url(self):
        product = Products.objects.get(pk=self.kwargs['pk'])
        # assert (
        #     Products.objects.filter(pk=self.kwargs['pk']).exists()
        # )  # for mypy to know that the user is authenticated
        return product.get_absolute_url()

    def post(self, request, *args, **kwargs):
        img1 = request.FILES["img1"]
        img2 = request.FILES["img2"]
        title = request.POST.get("title")
        detail =  request.POST.get("detail")
        price = request.POST.get("price")

        pk = self.kwargs.get('pk')
        Products.objects.filter(pk=pk).update(
            title=title,
            detail=detail,
            price=price
        )
        LOGGER.info(self.kwargs.get('pk'))
        ProductImage.objects.create(product=self.get_object(), image=img1) if img1 else None
        ProductImage.objects.create(product=self.get_object(), image=img2) if img2 else None
        return redirect(reverse('users:product_detail', kwargs={'pk':pk}))


product_detail_view = ProductDetailView.as_view()


def create_product(request):
    if request.method == "POST":
        title = request.POST.get('title')
        price = request.POST.get('price')
        detail = request.POST.get('detail')
        Products.objects.create(title=title, price=price, detail=detail)
        return redirect(reverse('users:list_products'))
    return render(request, 'shop/create_product.html')


def search_products(request):
    q = request.GET.get('q')
    user = request.user
    if request.htmx and q != None:
        qs = user.all_products.filter(Q(title__iexact=q) | Q(detail__icontains=q) | Q(vendor__name__icontains=q)) if request.user.is_authenticated and not request.user.is_staff else Products.objects.filter(Q(title__iexact=q) | Q(detail__icontains=q) | Q(vendor__name__icontains=q))
        return render(request, 'snippets/htmx/user_product_list.html', context={'objects':qs})
    elif request.htmx and q == None:
        qs = user.all_products if request.user.is_authenticated and request.user.is_staff else Products.objects.all()
        return render(request, 'snippets/htmx/user_product_list.html', context={'objects':qs})
    return render(request, 'shop/product_list.html', context={'objects':qs})

    # q = request.GET.get('q')
    # if request.htmx and q != None:
    #     qs = request.user.all_contracts.filter(Q(vendor__icontains=q)|Q(vendor_phone__icontains=q)|Q(vendor_email__icontains=q)|Q(buyer__icontains=q)|Q(buyer_phone__icontains=q)|Q(buyer_email__icontains=q)) if request.user.is_authenticated and not request.user.is_staff else Contract.objects.filter(Q(vendor__icontains=q)|Q(vendor_phone__icontains=q)|Q(vendor_email__icontains=q)|Q(buyer__icontains=q)|Q(buyer_phone__icontains=q)|Q(buyer_email__icontains=q))
    #     return render(request, 'snippets/htmx/escrow_list.html', context={'objects':qs})
    # elif request.htmx and q == None:
    #     qs = request.user.all_contracts if request.user.is_authenticated and request.user.is_staff else Contract.objects.all()
    #     return render(request, 'snippets/htmx/escrow_list.html', context={'objects':qs})
    # return render(request, 'shop/list.html', context={'objects':qs})



















class UserDetailView(LoginRequiredMixin, DetailView):

    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_detail_view = UserDetailView.as_view()

class UserUpdateView(LoginRequiredMixin, SuccessMessageMixin, UpdateView):

    model = User
    fields = ["name"]
    success_message = _("Information successfully updated")

    def get_success_url(self):
        assert (
            self.request.user.is_authenticated
        )  # for mypy to know that the user is authenticated
        return self.request.user.get_absolute_url()

    def get_object(self):
        return self.request.user


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):

    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()
