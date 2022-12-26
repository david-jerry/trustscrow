from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from trustcrow.users.forms import UserAdminChangeForm, UserAdminCreationForm
from trustcrow.users.models import Profile, BankAccount, WalletAddress, SavedCards, Wallet

User = get_user_model()

admin.site.register(Profile)
admin.site.register(BankAccount)
admin.site.register(WalletAddress)
admin.site.register(Wallet)
admin.site.register(SavedCards)

@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserAdminChangeForm
    add_form = UserAdminCreationForm
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (_("Personal info"), {"fields": ("name", "email", "reg_no", "ref_link", "image")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "vendor",
                    "verified",
                    "gave_consent",
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    list_display = ["username", "name", "is_superuser"]
    search_fields = ["name"]
