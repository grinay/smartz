import json

from django.core.management.base import BaseCommand, CommandError
from django.db import connection

from apps.constructors.models import Constructor
from apps.dapps.models import Dapp, UserDapp


class Command(BaseCommand):
    help = 'Populate users'

    def handle(self, *args, **options):
        for dapp in Dapp.objects.all():
            if not dapp.user:
                continue
            UserDapp.objects.create(user=dapp.user, dapp=dapp, title=dapp.title)
            print("{}\t{}".format(dapp, dapp.user))