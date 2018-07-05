import json

from django.core.management.base import BaseCommand, CommandError
from django.db import connection



class Command(BaseCommand):
    help = 'Migrate to dapp app from contracts'

    def handle(self, *args, **options):
        with connection.cursor() as cursor:
            cursor.execute("ALTER TABLE dapps_contract RENAME TO contracts_contract")
            cursor.execute("UPDATE django_content_type SET app_label='contracts' WHERE app_label='dapps'")
            cursor.execute("UPDATE django_migrations SET app='contracts' WHERE app='dapps'")