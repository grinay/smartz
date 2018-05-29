import os
import subprocess
import tempfile
from abc import ABCMeta, abstractmethod
from decimal import Decimal
from typing import  Tuple

from django.conf import settings

from apps.constructors.models import Constructor


class BaseCompilerService(metaclass=ABCMeta):
    @abstractmethod
    def compile(self, constructor: Constructor, source, contract_name) -> Tuple[str, str]:
        raise NotImplementedError()


class EthereumCompilerService(BaseCompilerService):
    def compile(self, constructor: Constructor, source, contract_name) -> Tuple[str, str]:
        with tempfile.TemporaryDirectory() as tmpdir:
            tmpfile, tmpfilename = tempfile.mkstemp(dir=tmpdir)
            outsock = os.fdopen(tmpfile, 'w')
            outsock.close() #closing resource

            with open(tmpfilename, "w") as f:
                print(source, file=f)

            args = (settings.SMARTZ_SOLC_PATH, "--bin", "--abi", "--optimize", "-o", tmpdir, tmpfilename)
            popen = subprocess.Popen(args, stdout=subprocess.PIPE)
            popen.wait()

            #out, err = popen.communicate()
            #errcode = popen.returncode

            #solc stores bin and abi in two files with the same names
            out_file = os.path.join(tmpdir, contract_name)
            with open('{}.bin'.format(out_file)) as f:
                bin = f.read()

            with open('{}.abi'.format(out_file)) as f:
                abi = f.read()

            return bin, abi


class EosCompilerService(BaseCompilerService):
    def compile(self, constructor: Constructor, source, contract_name) -> Tuple[str, str]:
        return '', ''


########################################################################################################################


class BaseContractProcessor(metaclass=ABCMeta):

    @abstractmethod
    def process_source(self, constructor: Constructor, source: str, contract_name: str) -> str:
        raise NotImplementedError()


class EthereumContractProcessor(BaseContractProcessor):
    def process_source(self, constructor: Constructor, source: str, contract_name: str) -> str:
        if not constructor.price_eth:
            return source.replace('%payment_code%', '')

        wei = int(constructor.price_eth * Decimal('1000000000000000000'))

        if constructor.payment_address:
            assert(settings.SMARTZ_COMMISSION < 1)

            payment_code = """
        address({commission_address}).transfer({commission} wei);
        address({payment_address}).transfer({payment_sum} wei);
            """.format(
                commission_address=settings.SMARTZ_COMMISSION_ADDRESS,
                commission=int(wei*settings.SMARTZ_COMMISSION),

                payment_address=constructor.payment_address,
                payment_sum=wei-int(wei*settings.SMARTZ_COMMISSION)
            )
        else:
            payment_code = 'address({commission_address}).transfer({commission} wei);'.format(
                commission_address=settings.SMARTZ_COMMISSION_ADDRESS,
                commission=int(wei)
            )

        return source.replace('%payment_code%', payment_code)


class EosContractProcessor(BaseContractProcessor):
    def process_source(self, constructor: Constructor, source: str, contract_name: str) -> str:
        return source
