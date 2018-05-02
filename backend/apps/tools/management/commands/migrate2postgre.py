from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from pymongo import MongoClient

from apps.users.models import AuthToken


class Command(BaseCommand):
    ...

    def handle(self, *args, **options):
        db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db

        # tokens
        tokens = db.auth_tokens.find({})
        for mongo_token in tokens:
            AuthToken(token=mongo_token['token'], user_id=mongo_token['user_id']).save()
