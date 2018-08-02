import json
import re
from abc import ABCMeta, abstractmethod
from typing import List

import requests
from rest_framework import serializers

from apps.common.constants import BLOCKCHAIN_ETHEREUM
from apps.contracts_uis.models import ContractUI
from apps.contracts_uis.serializers import ContractUISerializer


class AbstractSearchService(metaclass=ABCMeta):
    @abstractmethod
    def supports(self, query: str) -> bool:
        raise NotImplementedError()

    @abstractmethod
    def search(self, query: str):
        raise NotImplementedError()

    def _get_uis_by_address(self, address: str) -> List:
        res = []
        uis = ContractUI.objects.filter(address=address)
        if uis:
            for ui in uis:
                res.append(
                    {
                        "type": 'contract_ui',
                        "data": ContractUISerializer(ui).data
                    }
                )
        return res


class EthereumAddressSearchService(AbstractSearchService):

    def supports(self, query: str) -> bool:
        return bool(re.fullmatch('^0x[0-9a-fA-F]{40}$', query))

    def search(self, query: str):
        assert(self.supports(query))

        res = self._get_uis_by_address(query)

        # if not res:
        #     abi = self._get_abi_from_etherescan(query)
        #
        #     if abi:
        #         #fixme fixme в общий сервис по поиску ui по abi
        #         abi_names = [el.name for el in abi]
        #
        #         uis = ContractUI.objects.filter(blockchain=BLOCKCHAIN_ETHEREUM)
        #         for ui in uis:
        #             ui_names


        return {
            "address": res
        }

    def _get_abi_from_etherescan(self, query: str):
        abi = None

        try:
            resp = requests.get('htt88ps://api.etherscan.io/api?module=contract&action=getabi&address={}'.format(query))
            resp_json = resp.json()
        except Exception:
            resp_json = None

        if resp_json and 'message' in resp_json and resp_json['message'] == 'OK':
            try:
                abi = json.loads(resp_json['result'])
            except Exception:
                pass

        return abi


class EosAddressSearchService(AbstractSearchService):

    def supports(self, query: str) -> bool:
        return bool(re.fullmatch('^(a-z0-9){3,12}$', query))

    def search(self, query: str):
        return {
            "address": self._get_uis_by_address(query)
        }


class SearchServiceManager:
    _services = [
        EthereumAddressSearchService(),
        EosAddressSearchService()
    ]

    def search(self, query: str):
        for service in self._services:
            if not service.supports(query):
                continue
            return service.search(query)
        return {}


class WithSearchServiceManager:

    @property
    def search_manager(self) -> SearchServiceManager:
        if not hasattr(self, '_search_manager'):
            self._search_manager = SearchServiceManager()

        return self._search_manager