import random
import string
from datetime import datetime

import pytz
from django.conf import settings
from django.contrib.postgres.fields import JSONField
from django.db import models

from apps.common.constants import BLOCKCHAINS, BLOCKCHAIN_ETHEREUM
from apps.contracts_uis.validators import validate_functions, validate_abi, \
    validate_dashboard_functions, validate_functions_specs
from apps.users.models import User
from constructor_engine.services import ContractsProcessorsManager


class ContractUI(models.Model):

    name = models.CharField(max_length=200)
    slug = models.CharField(max_length=24, unique=True)
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)

    network_id = models.CharField(max_length=200, blank=True, default='')
    address = models.CharField(max_length=42, blank=True, default='')

    description = models.TextField()

    abi = JSONField(validators=[validate_abi], default=[], blank=True)
    functions = JSONField(validators=[validate_functions], blank=True, default={})

    function_specs = JSONField(validators=[validate_functions_specs], blank=True, default={})
    dashboard_functions = JSONField(validators=[validate_dashboard_functions], blank=True, default=[])

    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)

    sorting_order = models.IntegerField(default=0)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    image = models.CharField(max_length=200, default='', blank=True)

    @classmethod
    def create(cls, **kwargs):
        ui = cls(**kwargs)
        ui.slug = ''.join(
            random.SystemRandom().choice('abcdef' + string.digits) for _ in range(24)
        )

        return ui

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = datetime.now(pytz.timezone(settings.TIME_ZONE))
        self.updated_at = datetime.now(pytz.timezone(settings.TIME_ZONE))

        self.function_specs = ContractsProcessorsManager().require_contract_processor(self.blockchain)\
            .process_functions_specs(self.abi, self.functions)

        return super().save(*args, **kwargs)