import json

from django.core.management.base import BaseCommand, CommandError
from django.db import connection

from apps.constructors.models import Constructor


class Command(BaseCommand):
    help = 'Populate images'

    def handle(self, *args, **options):
        for constructor in Constructor.objects.all():
            name_lower = constructor.name.lower()

            images = {
                'simple ico': 'simple-ico.png',
                'erc721 token': 'erc721.png',
                'erc20 token': 'erc-20.png',
                'smartz token': 'smartz-token.png',
                'multisignature wallet': 'multisig.png',
                'simple voting': 'simple-voting.png',
                'atomic swap for erc20': 'atomic-swap-erc20.png',
                'multitoken': 'multitoken.png',
                'booking': 'booking.png',
                'ledger': 'ledger.png',
                'smartz platform features': 'platform-features.png',
                'crowdfunding for erc20 token': 'crowdfunding-erc20.png',
                'merkle airdrop': 'airdrop.png',
                'merkle airdrop for eos': 'airdrop-eos.png',
            }

            if name_lower in images:
                constructor.image = images[name_lower]
                constructor.save()
                print(constructor.name)