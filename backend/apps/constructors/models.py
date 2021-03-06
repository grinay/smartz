import json
import random
import string
from datetime import datetime

import pytz
from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models
from eth_utils import is_address

from apps.common.constants import BLOCKCHAINS, BLOCKCHAIN_ETHEREUM
from apps.users.models import User


def init_time():
    return datetime(2018, 1, 1, tzinfo=pytz.timezone(settings.TIME_ZONE))


class Constructor(models.Model):
    slug = models.CharField(max_length=24, unique=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    payment_address = models.CharField(max_length=42, blank=True)
    price = models.DecimalField(max_digits=30, decimal_places=18)
    is_public = models.BooleanField(default=False)
    auth0_user_id = models.CharField(max_length=200, blank=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)

    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50, default=BLOCKCHAIN_ETHEREUM)
    version = models.IntegerField(default=0)

    schema = models.TextField(default='{}')
    ui_schema = models.TextField(default='{}')

    sorting_order = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=init_time)
    updated_at = models.DateTimeField(default=init_time)

    image = models.CharField(max_length=200, default='', blank=True)

    @classmethod
    def create(cls, **kwargs):
        constructor = cls(**kwargs)
        constructor.slug = ''.join(
            random.SystemRandom().choice('abcdef' + string.digits) for _ in range(24)
        )

        return constructor

    def get_formatted_price(self):
        return float(format(self.price, 'f').rstrip('0').rstrip('.'))

    def get_schema(self):
        return json.loads(self.schema)

    def get_ui_schema(self):
        return json.loads(self.ui_schema)

    def __str__(self):
        return self.name

    def clean(self, *args, **kwargs):
        if self.price > 0 and not is_address(self.payment_address):
            raise ValidationError('Correct payment address must be specified in constructor if price>0')

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = datetime.now(pytz.timezone(settings.TIME_ZONE))
        self.updated_at = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return super().save(*args, **kwargs)