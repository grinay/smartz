from django.contrib.auth.models import AbstractUser
from django.db import models

from apps.common.constants import BLOCKCHAINS


class User(AbstractUser):
    pass


class UserIdentity(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)

    identity = models.CharField(max_length=60)
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50)
    # eos - network will be added
    # facebook - type will be added (oauth, sigh etc)


    class Meta:
        unique_together = (('identity', 'blockchain'),)

    def __str__(self):
        return "{}_{}".format(self.blockchain, self.identity)


class RandomDataForSign(models.Model):
    identity = models.CharField(max_length=60)
    blockchain = models.CharField(choices=BLOCKCHAINS, max_length=50)
    description = models.CharField(max_length=300)
    data = models.CharField(max_length=32)
    valid_to = models.DateTimeField(db_index=True)

    class Meta:
        indexes = [
            models.Index(fields=['identity', 'blockchain']),
        ]

    def __str__(self):
        return self.data
