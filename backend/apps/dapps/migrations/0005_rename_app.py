# Generated by Django 2.0.3 on 2018-07-03 17:33

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('constructors', '0005_auto_20180703_1553'),
        ('dapps', '0004_auto_20180702_1629'),
    ]

    operations = [
        # ALTER TABLE contracts_contract RENAME TO dapps_contract
        # UPDATE django_content_type SET app_label='dapps' WHERE app_label='contracts'
        # UPDATE django_migrations SET app='dapps' WHERE app='contracts'

        migrations.RenameModel(
            old_name='Contract',
            new_name='Dapp',
        ),
    ]
