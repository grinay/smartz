import random
import string
from datetime import datetime

import pytz
from django.conf import settings
from django.db import models
from django.db.models import ForeignKey

from apps.constructors.models import Constructor
from apps.users.models import User


def init_time():
    return datetime(2018, 1, 1, tzinfo=pytz.timezone(settings.TIME_ZONE))


class Contract(models.Model):
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

    constructor = ForeignKey(Constructor, on_delete=models.PROTECT)

    created_at = models.DateTimeField(default=init_time)

    @classmethod
    def create(cls, **kwargs):
        contract = cls(**kwargs)
        contract.slug = ''.join(
            random.SystemRandom().choice('abcdef' + string.digits) for _ in range(24)
        )

        return contract

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return super().save(*args, **kwargs)