import random
import string
from abc import ABCMeta, abstractmethod
from datetime import datetime, timedelta
from typing import Optional

import jwt
import pytz
from django.conf import settings

from apps.common.constants import BLOCKCHAIN_ETHEREUM, BLOCKCHAIN_EOS, BLOCKCHAINS
from apps.users.models import RandomDataForSign, UserIdentity, User
from utils import ethereum, eos


class SignService(metaclass=ABCMeta):
    def get_rand_data(self, identity: str, descr: str) -> RandomDataForSign:
        """

        :param identity: public key/address/etc
        :param descr:
        :return:
        """
        rand_data = RandomDataForSign(
            identity=self._proccess_identity(identity),
            blockchain=self.get_blockchain(),
            description=descr,
            data=''.join(
                random.SystemRandom().choice('abcdef' + string.digits) for _ in range(32)
            ),
            valid_to=datetime.now(pytz.timezone(settings.TIME_ZONE)) + timedelta(hours=1)
        )
        rand_data.save()
        return rand_data

    def check_sign(self, identity, signed_data, rand_data_str) -> bool:
        try:
            rand_data = RandomDataForSign.objects.get(
                blockchain=self.get_blockchain(),
                identity=self._proccess_identity(identity),
                data=rand_data_str,
                valid_to__gt=datetime.now(pytz.timezone(settings.TIME_ZONE))
            )
        except RandomDataForSign.DoesNotExist:
            return False

        rand_data.valid_to = datetime.now(pytz.timezone(settings.TIME_ZONE))
        rand_data.save()

        return self._check_sign_internal(rand_data, signed_data)

    def get_descr(self, identity):
        curr_date = datetime.now(tz=pytz.timezone(settings.TIME_ZONE))

        return """Sign this text message to login to smartz.io.
Your {}: {}.
Current time: {}.
Random data: """.format(
            self.get_identity_name(),
            identity,
            curr_date.strftime("%Y.%m.%d %H:%M:%S %Z".format(settings.TIME_ZONE))
        )

    def _build_descr_data(self, descr, data):
        return "{}{}".format(descr, data)

    def _proccess_identity(self, identity: str) -> str:
        return identity

    @abstractmethod
    def get_blockchain(self):
        raise NotImplementedError()

    @abstractmethod
    def get_identity_name(self):
        raise NotImplementedError()

    @abstractmethod
    def _check_sign_internal(self, rand_data: RandomDataForSign, signed_data) -> bool:
        raise NotImplementedError()


class EthereumSignService(SignService):

    def get_blockchain(self):
        return BLOCKCHAIN_ETHEREUM

    def get_identity_name(self):
        return 'address'

    def _proccess_identity(self, identity: str) -> str:
        return identity.lower()

    def _check_sign_internal(self, rand_data: RandomDataForSign, signed_data) -> bool:
        recovered_addr = ethereum.recover_addr_from_signed(
            signed_data,
            self._build_descr_data(rand_data.description, rand_data.data)
        )

        return recovered_addr.lower() == rand_data.identity.lower()


class EOSSignService(SignService):
    def get_blockchain(self):
        return BLOCKCHAIN_EOS

    def get_identity_name(self):
        return 'public key'

    def _check_sign_internal(self, rand_data: RandomDataForSign, signed_data) -> bool:
        recovered_addr = eos.recover_addr_from_signed(
            signed_data,
            self._build_descr_data(rand_data.description, rand_data.data)
        )

        return recovered_addr == rand_data.identity

###########################################################################


class UsersService:
    def find_user(self, blockchain: str, identity: str) -> Optional[UserIdentity]:
        try:
            pub_key = UserIdentity.objects.get(blockchain=blockchain, identity=identity)
        except UserIdentity.DoesNotExist:
            return None

        return pub_key.user

    def register_user(self, blockchain: str, identity: str) -> User:
        #todo do not allow custom usernames with prefix user_
        user = User(
            username='user_{}_{}'.format(blockchain, identity),
            first_name=blockchain,
            last_name=identity
        )
        user.save()

        identity = UserIdentity(identity=identity, blockchain=blockchain, user=user)
        identity.save()

        return user

    def generate_token(self, user: User, blockchain: str):
        assert blockchain in dict(BLOCKCHAINS), 'Incorrect blockchain: {}'.format(blockchain)
        expires_at = datetime.now(pytz.timezone(settings.TIME_ZONE)) + timedelta(hours=24)

        return jwt.encode(
            {
                'user_id': user.pk,
                'user_name': user.username,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'blockchain': blockchain,
                'expires_at': expires_at.timestamp()
            },
            settings.SECRET_KEY,
            algorithm='HS256'
        ).decode('utf-8')

