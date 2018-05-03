import random
import string

from django.db import models
from django.db.models import ForeignKey

from apps.constructors.models import Constructor


class Contract(models.Model):
    slug = models.CharField(max_length=24, unique=True)
    title = models.CharField(max_length=200)
    abi = models.TextField()
    source = models.TextField()
    binary = models.TextField()
    function_specs = models.TextField()
    dashboard_functions = models.TextField()
    has_public_access = models.BooleanField(default=False)
    auth0_user_id = models.CharField(max_length=200)

    network_id = models.CharField(max_length=200, default='')
    address = models.CharField(max_length=42, default='')

    constructor = ForeignKey(Constructor, on_delete=models.PROTECT)


    @classmethod
    def create(cls, **kwargs):
        constructor = cls(**kwargs)
        constructor.slug = ''.join(
            random.SystemRandom().choice('abcdef' + string.digits) for _ in range(24)
        )

        return constructor

    def __str__(self):
        return self.title