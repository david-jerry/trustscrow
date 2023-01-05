from datetime import datetime

from django.conf import settings
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django import forms
from django.contrib.auth import forms as admin_forms
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.utils.safestring import mark_safe

from allauth.account.forms import SignupForm, LoginForm
from countries_plus.models import Country
from trustcrow.users.models import Profile

from .models import (
    Contract,
    Transactions,
    Milestones,
    Dispute,
    DisputeMessages,
)

from trustcrow.utils.logger import LOGGER

User = get_user_model()


class ContractForm(forms.ModelForm):
    class Meta:
        model = Contract
        fields = [
            "contract_title",
            'creator',
            'contract_amount',
            "contract_type",
            "vendor",
            "vendor_phone",
            "vendor_email",
            "vendor_address",
            "buyer",
            "buyer_phone",
            "buyer_email",
            "buyer_address",
            "terms_agreement",
            "terms_for_termination",
        ]


    def clean_vendor(self):
        data = self.cleaned_data['vendor']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        return data

    def clean_contract_title(self):
        data = self.cleaned_data['contract_title']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        return data

    def clean_vendor_phone(self):
        data = self.cleaned_data['vendor_phone']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        if Profile.objects.filter(company_phone_I=data).exists():
            raise ValidationError(mark_safe("This phone number is already in use buy a vendor!"))
        return data


    def clean_vendor_email(self):
        data = self.cleaned_data['vendor_email']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        # if User.objects.filter(email=data).exists() and "@" in data:
        #     user = User.objects.get(email=data)
        #     default = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        #     raise ValidationError(mark_safe(
        #         f"This email belongs to an existing Business / Marchant! <button class='btn-black btn-rounded hover:font-bold duration-300' type='button' data-tooltip-target='tooltip-animation'  data-tooltip-trigger='click'>{user.profile.company_name.title() if user.profile.company_name else user.username}</button> <div id='tooltip-animation' role='tooltip' class='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-black rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700 space-y-2'><div class='flex items-center'><img class='block h-10 w-10 rounded-full object-fit overflow-hidden hover:object-cover duration-300 flex-none' alt='{user.profile.company_name.title() if user.profile.company_name else user.username}' src='{user.image.thumbnail.url if user.image else default}'><div class='block space-y-2'><a href='{user.get_absolute_url()}' target='_blank' class='block font-semibold hover:font-bold duration-300 text-base'>{user.profile.company_name.title() if user.profile.company_name else user.username}</a><p class='text-s font-medium'>{user.email}</p></div></div><div class='tooltip-arrow' data-popper-arrow></div></div>"))
        return data


    def clean_vendor_address(self):
        data = self.cleaned_data['vendor_address']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        return data

    def clean_buyer(self):
        data = self.cleaned_data['buyer']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        return data

    def clean_buyer_phone(self):
        data = self.cleaned_data['buyer_phone']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        if Profile.objects.filter(phone=data).exists():
            raise ValidationError(mark_safe("This phone number is already in use buy a buyer!"))
        return data


    def clean_buyer_email(self):
        data = self.cleaned_data['buyer_email']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        return data


    def clean_buyer_address(self):
        data = self.cleaned_data['buyer_address']
        if data == "":
            raise ValidationError(mark_safe("This is a required field. Please make a selection!"))
        return data


class MilestoneForm(forms.ModelForm):
    class Meta:
        model = Milestones
        fields = [
            "detail",
            "deadline",
            "price",
        ]

MilestonesFormset = forms.inlineformset_factory(
    Contract,
    Milestones,
    form=MilestoneForm,
    extra=1,
    can_delete=False,
    # can_delete_extra=True,
    min_num=0,
    validate_min=True
)





class DisputeForm(forms.ModelForm):
    class Meta:
        model = Dispute
        fields = [
            "dispute_detail",
            "dispute_resolve",
        ]

class DisputeMessageForm(forms.ModelForm):
    class Meta:
        model = DisputeMessages
        fields = [
            "message"
        ]



