import random
import string
from datetime import datetime

import pytz
from django.conf import settings
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.db.models import ForeignKey

from apps.common.constants import BLOCKCHAINS, BLOCKCHAIN_ETHEREUM
from apps.constructors.models import Constructor
from apps.contracts_uis.models import ContractUI
from apps.dapps.validators import validate_function_args, validate_tx_info, validate_log_data
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
    users = models.ManyToManyField(User, through='UserDapp', related_name='dapps')

    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)
    network_id = models.CharField(max_length=200, default='')
    address = models.CharField(max_length=42, default='')

    constructor = ForeignKey(Constructor, on_delete=models.PROTECT, related_name='dapps', null=True, default=None, blank=True)
    contract_ui = ForeignKey(ContractUI, on_delete=models.PROTECT, related_name='dapps', null=True, default=None, blank=True)

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
        if not self.pk:
            self.created_at = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return super().save(*args, **kwargs)


class UserDapp(models.Model):
    dapp = ForeignKey(Dapp, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.PROTECT)

    created_at = models.DateTimeField(default=init_time)
    title = models.CharField(max_length=200)

    class Meta:
        indexes = [
            models.Index(fields=['dapp', 'user']),
        ]

    def __str__(self):
        return "{} - {}".format(self.dapp.title, self.user.username)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.created_at = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return super().save(*args, **kwargs)


class Transaction(models.Model):
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)
    tx_id = models.CharField(max_length=128)

    execution_datetime = models.DateTimeField()
    mining_datetime = models.DateTimeField()

    initiator_address = models.CharField(max_length=42)

    function_name = models.CharField(max_length=255, blank=True)
    function_title = models.CharField(max_length=255, blank=True)
    function_description = models.CharField(max_length=1000, blank=True)
    function_arguments = JSONField(validators=[validate_function_args])
    info = JSONField(validators=[validate_tx_info])
    is_success = models.BooleanField()
    error = models.CharField(max_length=255, blank=True)

    user = models.ForeignKey(User, on_delete=models.PROTECT)
    dapp = models.ForeignKey(Dapp, on_delete=models.PROTECT)

    class Meta:
        indexes = [
            models.Index(fields=['tx_id', 'blockchain']),
        ]

    def __str__(self):
        return self.tx_id


class Request(models.Model):
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)

    initiator_address = models.CharField(max_length=42)

    execution_datetime = models.DateTimeField()
    function_name = models.CharField(max_length=255)
    function_title = models.CharField(max_length=255, blank=True)
    function_description = models.CharField(max_length=1000, blank=True)
    function_arguments = JSONField(validators=[validate_function_args])
    result = JSONField()

    is_success = models.BooleanField()
    error = models.CharField(max_length=255, blank=True)

    user = models.ForeignKey(User, on_delete=models.PROTECT)
    dapp = models.ForeignKey(Dapp, on_delete=models.PROTECT)

    def __str__(self):
        return self.function_name


class Log(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    data = JSONField(validators=[validate_log_data])

    tx = models.ForeignKey(Transaction, on_delete=models.PROTECT, related_name='logs')
