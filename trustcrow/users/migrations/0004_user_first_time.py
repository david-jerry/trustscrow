# Generated by Django 4.0.8 on 2023-01-20 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_bankaccount_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='first_time',
            field=models.BooleanField(default=False),
        ),
    ]
