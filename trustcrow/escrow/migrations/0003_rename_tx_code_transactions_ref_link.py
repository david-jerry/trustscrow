# Generated by Django 3.2.15 on 2022-12-14 22:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('escrow', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transactions',
            old_name='tx_code',
            new_name='ref_link',
        ),
    ]