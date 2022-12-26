from rest_framework import serializers

from trustcrow.currency.models import Banks


class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banks
        fields = [
            "name",
            "lcode",
            "code",
            "country_iso",
            "url"
        ]
        # lookup_field = 'id'
        # extra_kwargs = {
        #     "url": {"lookup_field": "id"}
        # }
