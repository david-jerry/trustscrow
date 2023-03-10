# Generated by Django 3.2.15 on 2022-12-14 17:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields
import stdimage.models
import tinymce.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('p_type', models.CharField(default='ITEM', max_length=20, verbose_name='Product Type')),
                ('title', models.CharField(max_length=500, verbose_name='Product Title')),
                ('slug', models.SlugField(blank=True, max_length=500)),
                ('detail', tinymce.models.HTMLField()),
                ('price', models.DecimalField(decimal_places=2, default=0.0, max_digits=20, verbose_name='Product Price')),
                ('vendor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vendor_product', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='ProductLocalization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('delivery_to', models.CharField(blank=True, max_length=500, verbose_name='Location to deliver')),
                ('delivery_cost', models.DecimalField(decimal_places=2, default=0.0, max_digits=20, verbose_name='Cost to deliver')),
                ('delivery_duration', models.DecimalField(decimal_places=2, default=0.0, max_digits=20, verbose_name='Days taken to deliver')),
                ('vendor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_localization', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Product Localization',
                'verbose_name_plural': 'Product Localizations',
                'ordering': ['delivery_to'],
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('image', stdimage.models.StdImageField(blank=True, null=True, upload_to='')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_image', to='workshop.products')),
            ],
            options={
                'verbose_name': 'Product Image',
                'verbose_name_plural': 'Product Images',
                'ordering': ['product'],
            },
        ),
    ]
