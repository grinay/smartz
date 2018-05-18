from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class AuthToken(models.Model):
    token = models.CharField(max_length=200, unique=True)
    user_id = models.CharField(max_length=200)