import os
import subprocess
import sys
import tempfile
from abc import ABCMeta, abstractmethod
from copy import deepcopy
from decimal import Decimal
from typing import Tuple, Dict, Optional

import requests
from django.conf import settings

from apps.common.constants import BLOCKCHAIN_ETHEREUM, BLOCKCHAIN_EOS
from apps.constructors.models import Constructor
from smartz.eth import contracts as eth_contracts
from smartz.eos import contracts as eos_contracts
from smartzcore.exceptions import PublicException
from smartzcore.service_instances import WithLogger


class BaseCompilerService(metaclass=ABCMeta):
    @abstractmethod
    def compile(self, constructor: Constructor, source, contract_name) -> Tuple[str, str, str, bool]:
        raise NotImplementedError()


class EthereumCompilerService(BaseCompilerService):
    def compile(self, constructor: Constructor, source, contract_name) -> Tuple[str, str, str, bool]:
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

            return bin, abi, settings.SMARTZ_COMPILER_VERSION, True


class EosCompilerService(BaseCompilerService, WithLogger):
    def compile(self, constructor: Constructor, source, contract_name) -> Tuple[str, str, str, bool]:
        return self._call_compiler(source)

    def _call_compiler(self, source):
        data = {
            "source": source,
        }
        try:
            res = requests.post(settings.SMARTZ_EOS_COMPILATION_SERVICE_URL, json=data)
        except Exception as e:
            self.logger.warning("Failed to call eos compilation service")
            raise PublicException("Compilation error/0")

        if res.status_code != requests.codes.ok:
            raise PublicException("Compilation error/1")

        #todo schema checks
        res_json = res.json()
        if 'result' not in res_json or res_json['result']!='success' \
                or 'bin' not in res_json or 'abi' not in res_json:
            raise PublicException("Compilation error/2")

        return res_json['bin'], res_json['abi'], '', False


########################################################################################################################


class BaseContractProcessor(metaclass=ABCMeta):

    @abstractmethod
    def process_source(self, constructor: Constructor, source: str, contract_name: str) -> str:
        raise NotImplementedError()

    def process_functions_specs(self,  abi, functions_specs, constructor: Optional[Constructor]=None):
        new_functions_specs = self._specific_process_functions_specs(abi, functions_specs, constructor)
        new_functions_specs = sorted(
            new_functions_specs,
            key=lambda x: x['sorting_order'] if 'sorting_order' in x else sys.maxsize
        )
        return new_functions_specs

    @abstractmethod
    def _specific_process_functions_specs(self, constructor: Constructor, abi, functions_specs):
        raise NotImplementedError()


class EthereumContractProcessor(BaseContractProcessor):
    def process_source(self, constructor: Constructor, source: str, contract_name: str) -> str:
        if not constructor.price:
            return source.replace('%payment_code%', '')

        wei = int(constructor.price * Decimal('1000000000000000000'))

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
            assert False, 'Constructor {} has price but hasn\'t payment address'.format(constructor.slug)

        return source.replace('%payment_code%', payment_code)

    def _specific_process_functions_specs(self, abi, functions_specs, constructor: Optional[Constructor]=None):
        new_functions_specs = deepcopy(functions_specs)
        if constructor is None or constructor.version > 0:
            new_functions_specs = eth_contracts.merge_function_titles2specs(
                eth_contracts.make_generic_function_spec(abi), new_functions_specs
            )

        return new_functions_specs


class EosContractProcessor(BaseContractProcessor):
    def process_source(self, constructor: Constructor, source: str, contract_name: str) -> str:
        return source

    def _specific_process_functions_specs(self, abi, functions_specs, constructor: Optional[Constructor]=None):
        new_functions_specs = deepcopy(functions_specs)
        if constructor is None or constructor.version > 0:
            new_functions_specs = eos_contracts.merge_function_titles2specs(
                eos_contracts.make_generic_function_spec(abi), new_functions_specs
            )

        return new_functions_specs


class ContractsProcessorsManager:

    _contract_processors: Dict[str, BaseContractProcessor] = {
        BLOCKCHAIN_ETHEREUM: EthereumContractProcessor(),
        BLOCKCHAIN_EOS: EosContractProcessor()
    }

    def require_contract_processor(self, blockchain):
        if blockchain not in ContractsProcessorsManager._contract_processors:
            raise PublicException("Blockchain '{}' is not supported".format(blockchain))

        return self._contract_processors[blockchain]


class WithContractProcessorManager:

    @property
    def contracts_processors_manager(self) -> ContractsProcessorsManager:
        if not hasattr(self, '_contract_processors_manager'):
            self._contracts_processors_manager = ContractsProcessorsManager()

        return self._contracts_processors_manager
