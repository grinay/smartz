import random
import string
from abc import ABCMeta, abstractmethod
from datetime import datetime, timedelta
from typing import Optional

import jwt
import pytz
from django.conf import settings

from apps.common.constants import BLOCKCHAIN_ETHEREUM, BLOCKCHAIN_EOS
from apps.users.models import RandomDataForSign, UserIdentity, User
from utils.ethereum import recover_addr_from_signed


class SignService(metaclass=ABCMeta):
    def get_rand_data(self, identity: str, descr: str) -> RandomDataForSign:
        """

        :param identity: public key/address/etc
        :param descr:
        :return:
        """
        rand_data = RandomDataForSign(
            identity=identity.lower(),
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
    def check_sign(self, identity, signed_data, data):
        raise NotImplementedError()

    @abstractmethod
    def build_descr_data(self, descr, data):
        raise NotImplementedError()


class EthereumSignService(SignService):

    def get_blockchain(self):
        return BLOCKCHAIN_ETHEREUM

    def check_sign(self, identity, signed_data, rand_data_str):
        try:
            rand_data = RandomDataForSign.objects.get(
                blockchain=self.get_blockchain(),
                identity=identity.lower(),
                data=rand_data_str,
                valid_to__gt=datetime.now(pytz.timezone(settings.TIME_ZONE))
            )
        except RandomDataForSign.DoesNotExist:
            return False

        recovered_addr = recover_addr_from_signed(
            signed_data,
            self.build_descr_data(rand_data.description, rand_data_str)
        )

        rand_data.valid_to = datetime.now(pytz.timezone(settings.TIME_ZONE))

        return recovered_addr.lower() == identity.lower()

    def build_descr_data(self, descr, data):
        return "{}\n{}".format(descr, data)


class EOSSignService(SignService):

    def get_blockchain(self):
        return BLOCKCHAIN_EOS

###########################################################################

class UsersService:
    def find_user(self, blockchain: str, identity: str) -> Optional[UserIdentity]:
        try:
            pub_key = UserIdentity.objects.get(blockchain=blockchain, identity=identity)
        except UserIdentity.DoesNotExist:
            return None

        return pub_key.user

    def register_user(self, blockchain: str, identity: str) -> User:
        user = User(
            username='user_{}_{}'.format(blockchain, identity),
            first_name=blockchain,
            last_name=identity
        )
        user.save()

        identity = UserIdentity(identity=identity, blockchain=blockchain, user=user)
        identity.save()

        return user

    def generate_token(self, user: User):
        expires_at = datetime.now(pytz.timezone(settings.TIME_ZONE)) + timedelta(hours=24)

        return jwt.encode(
            {
                'user_id': user.pk,
                'user_name': user.username,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'expires_at': expires_at.timestamp()
            },
            settings.SECRET_KEY,
            algorithm='HS256'
        ).decode('utf-8')

