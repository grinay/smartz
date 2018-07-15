import random
import string
from datetime import datetime

import pytz
from django.conf import settings
from django.db import models
from django.db.models import ForeignKey

from apps.common.constants import BLOCKCHAINS, BLOCKCHAIN_ETHEREUM
from apps.constructors.models import Constructor
from apps.users.models import User


def init_time():
    return datetime(2018, 1, 1, tzinfo=pytz.timezone(settings.TIME_ZONE))


class Dapp(models.Model):
    slug = models.CharField(max_length=24, unique=True)
    title = models.CharField(max_length=200)
    abi = models.TextField()
    source = models.TextField()
    binary = models.TextField()
    function_specs = models.TextField()
    dashboard_functions = models.TextField()
    has_public_access = models.BooleanField(default=False)
    auth0_user_id = models.CharField(max_length=200, blank=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)

    network_id = models.CharField(max_length=200, default='')
    address = models.CharField(max_length=42, default='')

    constructor = ForeignKey(Constructor, on_delete=models.PROTECT, related_name='dapps')

    created_at = models.DateTimeField(default=init_time)

    contract_name = models.CharField(max_length=200, default='')
    deploy_price = models.DecimalField(max_digits=30, decimal_places=18, default=0)

    compiler_version = models.CharField(max_length=200, default="")
    compiler_optimization = models.BooleanField(default=True)

    @classmethod
    def create(cls, **kwargs):
        dapp = cls(**kwargs)
        dapp.slug = ''.join(
            random.SystemRandom().choice('abcdef' + string.digits) for _ in range(24)
        )

        return dapp

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return super().save(*args, **kwargs)


class Transaction(models.Model):
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)
    tx_id = models.CharField(max_length=128)

    execution_datetime = models.DateTimeField()
    mining_datetime = models.DateTimeField()

    function_name = models.CharField(max_length=255)
    function_title = models.CharField(max_length=255)
    function_description = models.CharField(max_length=1000)
    function_arguments = models.TextField()
    info = models.TextField()
    is_success = models.BooleanField()
    error = models.CharField(max_length=255)

    class Meta:
        indexes = [
            models.Index(fields=['tx_id', 'blockchain']),
        ]

    def __str__(self):
        return self.tx_id


class Request(models.Model):
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)

    execution_datetime = models.DateTimeField()
    function_name = models.CharField(max_length=255)
    function_title = models.CharField(max_length=255)
    function_description = models.CharField(max_length=1000)
    function_arguments = models.TextField()
    result = models.TextField()

    is_success = models.BooleanField()
    error = models.CharField(max_length=255)

    def __str__(self):
        return self.function_name


class Log(models.Model):
    name = models.CharField(max_length=255)
    data = models.TextField()

    tx = models.ForeignKey(Transaction, on_delete=models.PROTECT, related_name='logs')