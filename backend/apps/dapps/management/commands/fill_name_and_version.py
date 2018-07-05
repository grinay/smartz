import json

from django.core.management.base import BaseCommand, CommandError

from apps.common.constants import BLOCKCHAIN_ETHEREUM
from apps.dapps.models import Dapp


class Command(BaseCommand):
    help = 'Populate verification info'

    def handle(self, *args, **options):
        for dapp in Dapp.objects.filter(constructor__blockchain=BLOCKCHAIN_ETHEREUM):
            try:
                dapp.compiler_optimization = True
                dapp.compiler_version = "0.4.20"

                if dapp.constructor.slug == "5aaa7a85ab3d71000bd0c69d":
                    dapp.contract_name = 'Token'
                elif dapp.constructor.slug == "5afdfdba4f815b000abfc02e":
                    dapp.contract_name = 'Crowdfunding'
                elif dapp.constructor.slug == "5aaa7a76ab3d71000bd0c69c":
                    dapp.contract_name = 'Crowdfunding'
                elif dapp.constructor.slug == "f8df8d0f873c1d21b4302483":
                    dapp.contract_name = 'Token'
                elif dapp.constructor.slug == "5abd2628882820000c1ebf56":
                    dapp.contract_name = 'SmartzToken'
                elif dapp.constructor.slug == "5aaa7aa2ab3d71000bd0c69f":
                    dapp.contract_name = 'MultiSigWallet'
                elif dapp.constructor.slug == "5ac50d4e34d83a000d115517":
                    dapp.contract_name = 'Swap'
                elif dapp.constructor.slug == "5ada07d44a5ad7000a19d643":
                    dapp.contract_name = 'Ledger'
                elif dapp.constructor.slug == "5ada07c94a5ad7000a19d642":
                    dapp.contract_name = 'Booking'
                elif dapp.constructor.slug == "5aaa7aaeab3d71000bd0c6a0":
                    dapp.contract_name = 'SimpleBallot'
                elif dapp.constructor.slug == "5ac50d5a34d83a000d115518":
                    dapp.contract_name = 'MultiToken'
                elif dapp.constructor.slug == "5af135eb84f78a000a8f6533":
                    dapp.contract_name = 'SmartzFeatures'

                dapp.save()


            except Exception as e:
                print("{}\t{}\t{}".format(dapp.slug, dapp.title, str(e)))



            print(
                "{}\t{}\t{}\t{}\t{}".format(
                    dapp.slug, dapp.title, dapp.constructor.name,
                    dapp.contract_name if dapp.contract_name else 'none',
                    'ok'
                )
            )