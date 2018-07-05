import json

from django.core.management.base import BaseCommand, CommandError
from django.db import connection



class Command(BaseCommand):
    help = 'Migrate to dapp app from contracts'

    def handle(self, *args, **options):

        with connection.cursor() as cursor:
            cursor.execute("ALTER TABLE contracts_contract RENAME TO dapps_contract")
            cursor.execute("UPDATE django_content_type SET app_label='dapps' WHERE app_label='contracts'")
            cursor.execute("UPDATE django_migrations SET app='dapps' WHERE app='contracts'")