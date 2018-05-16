import json
from decimal import Decimal

from django.conf import settings
from django.core.management.base import BaseCommand
from pymongo import MongoClient

from apps.constructors.models import Constructor
from apps.contracts.models import Contract
from apps.users.models import AuthToken


class Command(BaseCommand):
    ...

    def handle(self, *args, **options):
        db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db

        #constructors
        constructors = db.ctors.find({})
        for mongo_constructor in constructors:
            try:
                Constructor(
                    slug=mongo_constructor['_id'],
                    name=mongo_constructor['ctor_name'],
                    description=mongo_constructor['ctor_descr'] if 'ctor_descr' in mongo_constructor else '',
                    payment_address=mongo_constructor['payment_address'] if 'payment_address' in mongo_constructor else '',
                    price_eth=round(Decimal(mongo_constructor['price_eth']), 3),
                    is_public=mongo_constructor['is_public'] if 'is_public' in mongo_constructor else False,
                    auth0_user_id=mongo_constructor['user_id'] if 'user_id' in mongo_constructor else ''
                ).save()
            except Exception as e:
                print(e)

        #contracts
        contracts = db.instances.find({})
        for mongo_contract in contracts:
            try:
                constructor = Constructor.objects.get(slug=mongo_contract['ctor_id'])
                Contract(
                    slug=mongo_contract['_id'],
                    title=mongo_contract['instance_title'],
                    abi=mongo_contract['abi'],
                    source=mongo_contract['source'],
                    binary=mongo_contract['bin'],
                    function_specs=mongo_contract['function_specs'],
                    dashboard_functions=json.dumps(mongo_contract['dashboard_functions']),
                    has_public_access=mongo_contract['public_access'] if 'public_access' in mongo_contract else False,
                    auth0_user_id=mongo_contract['user_id'],
                    network_id=str(mongo_contract['network_id']),
                    address=mongo_contract['address'],
                    constructor=constructor
                ).save()

            except Exception as e:
                print(e)