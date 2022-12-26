from django import forms

from .models import Products, ProductImage

class ProductForm(forms.ModelForm):
    class Meta:
        model = Products
        fields = ['title', 'detail', 'price', 'p_type']
