import random
import string
from abc import ABCMeta, abstractmethod
from datetime import datetime, timedelta
from typing import Optional

import jwt
import pytz
from django.conf import settings

from apps.common.constants import BLOCKCHAIN_ETHEREUM, BLOCKCHAIN_EOS
from apps.users.models import RandomDataForSign, PublicKey, User
from utils.ethereum import recover_addr_from_signed


class SignService(metaclass=ABCMeta):
    def get_rand_data(self, public_key: str, descr: str) -> RandomDataForSign:
        rand_data = RandomDataForSign(
            public_key=public_key.lower(),
            blockchain=self.get_blockchain(),
            description=descr,
            data=''.join(
                random.SystemRandom().choice('abcdef' + string.digits) for _ in range(32)
            ),
            valid_to=datetime.now(pytz.timezone(settings.TIME_ZONE)) + timedelta(hours=1)
        )
        rand_data.save()
        return rand_data

    @abstractmethod
    def get_blockchain(self):
        raise NotImplementedError()

    @abstractmethod
    def check_sign(self, public_key, signed_data, data):
        raise NotImplementedError()

    @abstractmethod
    def split_descr_data(self, descr, data):
        raise NotImplementedError()


class EthereumSignService(SignService):

    def get_blockchain(self):
        return BLOCKCHAIN_ETHEREUM

    def check_sign(self, public_key, signed_data, data):
        try:
            rand_data = RandomDataForSign.objects.get(
                blockchain=self.get_blockchain(),
                public_key=public_key.lower(),
                data=data,
                valid_to__gt=datetime.now(pytz.timezone(settings.TIME_ZONE))
            )
        except RandomDataForSign.DoesNotExist:
            return False

        recovered_addr = recover_addr_from_signed(signed_data, self.split_descr_data(rand_data.description, data))

        rand_data.valid_to = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return recovered_addr.lower() == public_key.lower()

    def split_descr_data(self, descr, data):
        return "{}\n{}".format(descr, data)


class EOSSignService(SignService):

    def get_blockchain(self):
        return BLOCKCHAIN_EOS

###########################################################################

class UsersService:
    def find_user(self, blockchain: str, public_key: str) -> Optional[PublicKey]:
        try:
            pub_key = PublicKey.objects.get(blockchain=blockchain, public_key=public_key)
        except PublicKey.DoesNotExist:
            return None

        return pub_key.user

    def register_user(self, blockchain: str, public_key: str) -> User:
        user = User(
            username='user_{}_{}'.format(blockchain, public_key)
        )
        user.save()

        public_key = PublicKey(public_key=public_key, blockchain=blockchain, user=user)
        public_key.save()

        return user

    def generate_token(self, user: User):
        return jwt.encode(
            {
                'user_id': user.pk,
                'user_name': user.username
            },
            settings.SECRET_KEY,
            algorithm='HS256'
        ).decode('utf-8')

