# Generated by Django 3.2.15 on 2022-12-15 18:09

from django.db import migrations
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='company_logo',
            field=stdimage.models.StdImageField(blank=True, null=True, upload_to='user/company/logo', verbose_name='Company Logo'),
        ),
    ]
