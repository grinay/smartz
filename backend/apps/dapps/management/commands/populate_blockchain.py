import json

from django.core.management.base import BaseCommand, CommandError
from django.db import connection

from apps.constructors.models import Constructor
from apps.dapps.models import Dapp


class Command(BaseCommand):
    help = 'Populate blockchain'

    def handle(self, *args, **options):
        for dapp in Dapp.objects.all():
            if not dapp.constructor:
                continue
            dapp.blockchain = dapp.constructor.blockchain
            dapp.save()
            print("{}\t{}".format(dapp, dapp.blockchain))