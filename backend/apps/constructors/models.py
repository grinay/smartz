import random
import string

from django.db import models


class Constructor(models.Model):
    slug = models.CharField(max_length=24, unique=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    payment_address = models.CharField(max_length=42)
    price_eth = models.DecimalField(max_digits=30, decimal_places=18)
    is_public = models.BooleanField(default=False)
    auth0_user_id = models.CharField(max_length=200)

    @classmethod
    def create(cls, **kwargs):
        constructor = cls(**kwargs)
        constructor.slug = ''.join(
            random.SystemRandom().choice('abcdef' + string.digits) for _ in range(24)
        )

        return constructor

    def get_formatted_price_eth(self):
        return float(format(self.price_eth, 'f').rstrip('0').rstrip('.'))

    def __str__(self):
        return self.name