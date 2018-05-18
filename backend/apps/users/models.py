from django.contrib.auth.models import AbstractUser
from django.db import models

from apps.common.constants import BLOCKCHAINS


class User(AbstractUser):
    pass


class AuthToken(models.Model):
    token = models.CharField(max_length=200)
    user_id = models.CharField(max_length=200)


class PublicKey(models.Model):
    public_key = models.CharField(max_length=60)
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50)
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)

    class Meta:
        unique_together = (('public_key', 'blockchain'),)


class RandomDataForSign(models.Model):
    public_key = models.CharField(max_length=60)
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50)
    description = models.CharField(max_length=300)
    data = models.CharField(max_length=32)
    valid_to = models.DateTimeField(db_index=True)

    class Meta:
        indexes = [
            models.Index(fields=['public_key', 'blockchain']),
        ]