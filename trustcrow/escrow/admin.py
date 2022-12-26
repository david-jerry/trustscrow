from django.contrib import admin
from trustcrow.escrow.models import (
    Contract,
    Transactions,
    Milestones,
    Dispute,
    DisputeMessages,
)


admin.site.register(Contract)
admin.site.register(Transactions)
admin.site.register(Milestones)
admin.site.register(Dispute)
admin.site.register(DisputeMessages)
