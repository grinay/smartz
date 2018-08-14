import json
import re
from abc import ABCMeta, abstractmethod
from typing import List, Optional, Set

import requests

from apps.common.constants import BLOCKCHAIN_ETHEREUM, BLOCKCHAIN_EOS
from apps.contracts_uis.models import ContractUI
from apps.contracts_uis.serializers import ContractUISerializer
from apps.dapps.models import Dapp
from apps.dapps.serializers import dapp_pub_info
from constructor_engine.services import WithContractProcessorManager

SEARCH_RESULT_TYPE_DAPP = 'dapp'
SEARCH_RESULT_TYPE_CONTRACT_UI = 'contract_ui'
SEARCH_RESULT_TYPE_ABI = 'abi'
SEARCH_RESULT_TYPE_NO_ABI = 'no_abi'


class AbstractSearchService(metaclass=ABCMeta):
    @abstractmethod
    def supports(self, query: str, context: dict) -> bool:
        """
        context = {
            ethereum_network_id,
            eos_network_id,
            abi
        }

        """
        raise NotImplementedError()

    @abstractmethod
    def search(self, query: str, context: dict):
        raise NotImplementedError()


class AbstractAddressSearchService(AbstractSearchService, WithContractProcessorManager):
    @abstractmethod
    def get_blockchain(self) -> str:
        raise NotImplementedError()

    @abstractmethod
    def supports(self, address: str, context: dict) -> bool:
        raise NotImplementedError()

    def search(self, address: str, context: dict):
        assert (self.supports(address, context))

        dapp = self._get_dapp(address, context)
        if dapp:
            return {
                'address': {
                    'type': SEARCH_RESULT_TYPE_DAPP,
                    'dapp': dapp_pub_info(dapp)
                }
            }

        uis = self._get_uis(address, context)
        if uis:
            return {
                'address': {
                    'type': SEARCH_RESULT_TYPE_CONTRACT_UI,
                    'uis': ContractUISerializer(uis, many=True).data
                }
            }

        abi = self._get_abi(address, context)
        if abi:
            uis = self._get_uis_by_abi(abi)
            if uis:
                return {
                    'address': {
                        'type': SEARCH_RESULT_TYPE_ABI,
                        'abi': abi,
                        'uis': ContractUISerializer(uis, many=True).data,
                        'function_specs': self._get_fn_specs(abi, uis)
                    }
                }

        return {
            'address': {
                'type': SEARCH_RESULT_TYPE_NO_ABI,
                'uis': ContractUISerializer(self._get_popular_uis(), many=True).data
            }
        }

    def _get_dapp(self, address: str, context: dict) -> Optional[Dapp]:
        if self._get_network_id_key() not in context:
            return None

        try:
            dapp = Dapp.objects.get(
                address=address,
                network_id=str(context[self._get_network_id_key()]),
                constructor__blockchain=self.get_blockchain()
            )
        except Dapp.DoesNotExist:
            dapp = None

        return dapp

    def _get_uis(self, address: str, context: dict) -> List[ContractUI]:
        if self._get_network_id_key() not in context:
            return []

        return ContractUI.objects.filter(
            address=address,
            network_id=str(context[self._get_network_id_key()]),
            blockchain=self.get_blockchain()
        )

    def _get_abi(self, address: str, context: dict):
        if 'abi' in context:
            return context['abi']

        return None

    def _get_popular_uis(self) -> List[ContractUI]:
        #todo rank
        return ContractUI.objects.filter(blockchain=self.get_blockchain())

    def _get_uis_by_abi(self, abi) -> List[ContractUI]:
        abi_names = self._get_abi_fn_names(abi)

        uis = ContractUI.objects.filter(blockchain=self.get_blockchain())
        uis = sorted(
            uis,
            key=lambda ui: len(abi_names & {name for name in ui.functions}),
            reverse=True
        )

        return uis[:10]

    def _get_fn_specs(self, abi, uis: List[ContractUI]):
        processor = self.contracts_processors_manager.require_contract_processor(self.get_blockchain())
        return [
            processor.process_functions_specs(abi, ui.function_specs)
            for ui in uis
        ]

    @abstractmethod
    def _get_abi_fn_names(self, abi) -> Set[str]:
        raise NotImplementedError()

    @abstractmethod
    def _get_network_id_key(self) -> str:
        raise NotImplementedError()


class EthereumAddressSearchService(AbstractAddressSearchService):

    def get_blockchain(self):
        return BLOCKCHAIN_ETHEREUM

    def supports(self, query: str, context: dict) -> bool:
        return bool(re.fullmatch('^0x[0-9a-fA-F]{40}$', query))

    def _get_abi(self, address: str, context: dict):
        abi = super()._get_abi(address, context)
        if abi:
            return abi

        abi = self._get_abi_from_etherscan(address)
        if abi:
            return abi

        return None

    def _get_abi_from_etherscan(self, address: str):
        abi = None

        try:
            resp = requests.get('https://api.etherscan.io/api?module=contract&action=getabi&address={}'.format(address))
            resp_json = resp.json()
        except Exception:
            resp_json = None

        if resp_json and 'message' in resp_json and resp_json['message'] == 'OK':
            try:
                abi = json.loads(resp_json['result'])
            except Exception:
                pass

        return abi

    def _get_abi_fn_names(self, abi) -> Set[str]:
        abi_names = set()
        for fn in abi:
            if 'name' not in fn or 'type' not in fn or fn['type'] not in ('fallback', 'function'):
                continue

            if 'type' in fn and fn['type'] == 'fallback':
                abi_names.add('')
            elif 'name' in fn:
                abi_names.add(fn['name'])

        return abi_names

    def _get_network_id_key(self) -> str:
        return 'ethereum_network_id'


class EosAddressSearchService(AbstractAddressSearchService):

    def get_blockchain(self):
        return BLOCKCHAIN_EOS

    def supports(self, query: str, context: dict) -> bool:
        return bool(re.fullmatch('^[a-z0-9]{3,12}$', query))

    def _get_abi_fn_names(self, abi) -> Set[str]:
        if 'actions' not in abi or type(abi['actions']) is not list:
            return set()

        abi_names = {fn['name'] for fn in abi['actions'] if 'name' in fn}

        return abi_names

    def _get_network_id_key(self) -> str:
        return 'eos_network_id'


class SearchServiceManager:
    _services = [
        EthereumAddressSearchService(),
        EosAddressSearchService()
    ]

    def search(self, query: str, context: dict):
        for service in self._services:
            if not service.supports(query, context):
                continue
            return service.search(query, context)
        return {}


class WithSearchServiceManager:

    @property
    def search_manager(self) -> SearchServiceManager:
        if not hasattr(self, '_search_manager'):
            self._search_manager = SearchServiceManager()

        return self._search_manager