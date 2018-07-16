import json
import random
import string
from datetime import datetime

import pytz
from django.conf import settings
from django.db import models
from jsonschema import ValidationError

from apps.common.constants import BLOCKCHAINS, BLOCKCHAIN_ETHEREUM
from apps.users.models import User
from smartz.json_schema import load_schema, is_conforms2schema_part


class ContractUI(models.Model):

    name = models.CharField(max_length=200)
    slug = models.CharField(max_length=24, unique=True)
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)
    address = models.CharField(max_length=42, default='')

    description = models.TextField()

    functions = models.TextField()

    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)

    sorting_order = models.IntegerField(default=0)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    @classmethod
    def create(cls, **kwargs):
        ui = cls(**kwargs)
        ui.slug = ''.join(
            random.SystemRandom().choice('abcdef' + string.digits) for _ in range(24)
        )

        return ui

    def get_functions(self):
        return json.loads(self.functions)

    def __str__(self):
        return self.name

    def clean(self, *args, **kwargs):
        if not is_conforms2schema_part(
                    self.get_functions(), load_schema('public/constructor.json'), 'definitions/ETHFunctionAdditionalDescriptions'
                ):
            raise ValidationError('Invalid functions descriptions')

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = datetime.now(pytz.timezone(settings.TIME_ZONE))
        self.updated_at = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return super().save(*args, **kwargs)