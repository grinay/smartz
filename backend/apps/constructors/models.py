import random
import string

from django.db import models

from apps.users.models import User


class Constructor(models.Model):
    slug = models.CharField(max_length=24, unique=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    payment_address = models.CharField(max_length=42, blank=True)
    price_eth = models.DecimalField(max_digits=30, decimal_places=18)
    is_public = models.BooleanField(default=False)
    auth0_user_id = models.CharField(max_length=200, blank=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)

    @property
    def image(self):
        """todo kill this with file uploading"""
        name_lower = self.name.lower()

        images = {
            'simple ico': 'contract-ico.jpg',
            'erc20 token': 'contract-erc20.jpg',
            'equity token': 'contract-equity.jpg',
            'smartz token': 'contract-smartz-erc20.jpg',
            'multisignature wallet': 'contract-multisig.jpg',
            'simple voting': 'contract-voting.jpg',
            'atomic swap for erc20': 'contract-swap.jpg',
            'multitoken': 'contract-multitoken.jpg',
            'booking': 'contract-booking.jpg',
            'ledger': 'contract-ledger.jpg',
            'smartz platform features': 'platform-features.jpg',
            'crowdfunding for erc20 token': 'crowdfunding-erc20.jpg'
        }

        if name_lower in images:
            return images[name_lower]
        else:
            return 'default.jpg'


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