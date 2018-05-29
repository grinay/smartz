import abc
import re
import shutil
import sys

import os.path
import tempfile
import json
import subprocess
from decimal import Decimal

import requests
from django.conf import settings
from typing import Dict, Tuple

from apps.common.constants import BLOCKCHAIN_ETHEREUM, BLOCKCHAIN_EOS
from apps.constructors.models import Constructor
from constructor_engine.services import BaseCompilerService, EosCompilerService, EthereumCompilerService, \
    BaseContractProcessor, EthereumContractProcessor, EosContractProcessor
from smartz.eth.contracts import merge_function_titles2specs, make_generic_function_spec
from smartz.json_schema import is_conforms2schema_part, load_schema
from smartzcore.exceptions import PublicException
from smartzcore.service_instances import WithLogger


class BaseEngine(WithLogger):

    METHOD_GET_VERSION    = 'get_version'
    METHOD_GET_PARAMS     = 'get_params'
    METHOD_CONSTRUCT      = 'construct'
    METHOD_POST_CONSTRUCT = 'post_construct'
    CONSTRUCTOR_METHODS = [
        METHOD_GET_VERSION, METHOD_GET_PARAMS, METHOD_CONSTRUCT, METHOD_POST_CONSTRUCT
    ]

    _compiler_services: Dict[str, BaseCompilerService] = {
        BLOCKCHAIN_ETHEREUM: EthereumCompilerService(),
        BLOCKCHAIN_EOS: EosCompilerService()
    }

    _contract_processors: Dict[str, BaseContractProcessor] = {
        BLOCKCHAIN_ETHEREUM: EthereumContractProcessor(),
        BLOCKCHAIN_EOS: EosContractProcessor()
    }

    def __init__(self, engine_settings):
        self._settings = engine_settings
        self._instances = {}

    def register_constructor(self, constructor_id, filename):
        self._save_constructor(constructor_id, filename)

    def get_constructor_version(self, constructor_id):
        source = self._load_constructor_source(constructor_id)
        res = self._call_constructor_method(source, self.METHOD_GET_VERSION)
        return res

    def get_constructor_params(self, constructor_id):
        try:
            source = self._load_constructor_source(constructor_id)
        except Exception:
            return {
                'result': 'error',
                'error_descr': 'Failed to load constructor'
            }
        res = self._call_constructor_method(source, self.METHOD_GET_PARAMS)
        return res

    def construct(self, constructor: Constructor, fields):
        try:
            constructor_source = self._load_constructor_source(constructor.slug)
        except Exception:
            return {
                'result': 'error',
                'error_descr': 'Failed to load constructor'
            }

        res = self._call_constructor_method(constructor_source, self.METHOD_GET_VERSION, [])
        if 'error' == res['result']:
            if 'error_descr' in res and "object has no attribute 'get_version'" in res['error_descr']:
                # todo remove this after 01.05.2018
                version = 0
            else:
                return res
        else:
            version = res['version']

        res = self._call_constructor_method(constructor_source, self.METHOD_CONSTRUCT, [fields])
        if 'error' == res['result']:
            return res

        source, contract_name = res['source'], res['contract_name']

        if re.findall('[^a-zA-Z0-9]', contract_name):
            raise Exception

        processor = self._require_contract_processor(constructor.blockchain)
        source = processor.process_source(constructor, source, contract_name)

        try:
            bin, abi = self._compile(constructor, source, contract_name)
            abi = json.loads(abi)
        except Exception as e:
            self.logger.warning("Compilation error. Ex: {}".format(str(e)))
            self.logger.warning("Compilation error. Code: {}".format(source))
            return {
                'result': 'error',
                'error_descr': 'Compilation error'
            }

        post_construct_info = self._call_constructor_method(constructor_source, self.METHOD_POST_CONSTRUCT, [fields, abi])
        if 'error' == post_construct_info['result']:
            return post_construct_info

        if version>0:
            post_construct_info['function_specs'] = merge_function_titles2specs(
                make_generic_function_spec(abi), post_construct_info['function_specs']
            )

        post_construct_info['function_specs'] = sorted(
            post_construct_info['function_specs'],
            key=lambda x: x['sorting_order'] if 'sorting_order' in x else sys.maxsize
        )

        return {
            'result': 'success',
            'bin': bin,
            'source': source,
            'abi': abi,
            'function_specs': post_construct_info['function_specs'],
            'dashboard_functions': post_construct_info['dashboard_functions']
        }

    @abc.abstractmethod
    def _save_constructor(self, id, filename):
        """Saves constructor to some storage"""
        pass

    @abc.abstractmethod
    def _load_constructor_source(self, id):
        """Loads constructor from some storage, return constructor source"""
        pass

    def _call_constructor_method(self, source, method, args=None):
        assert(method in self.CONSTRUCTOR_METHODS)
        data = {
            "constructor_file": source,
            "method": method,
            "args": args if args is not None else []
        }
        try:
            res = requests.post(settings.SMARTZ_CONSTRUCTOR_CALL_SERVICE_URL, json=data)
            if res.status_code != requests.codes.ok:
                return {
                    "result": "error",
                    "error_descr": "Something got wrong/0"
                }

            is_call_valid = is_conforms2schema_part(
                res.json(),
                load_schema('internal/call_ctor_service/call-service.json'),
                'rpc_calls/call_service/output_{}'.format(method)
            )

            if not is_call_valid:
                return {
                    "result": "error",
                    "error_descr": "Something got wrong/1 (Invalid response from method {} of constructor)".format(method)
                }

            return res.json()
        except Exception as e:
            self.logger.warning("Failed to call constructor method {}: {}".format(method, str(e)))
            return {
                "result": "error",
                "error_descr": "Something got wrong/1"
            }

    def _compile(self, constructor: Constructor, source: str, contract_name: str) -> Tuple[str, str]:
        """compiles source """
        compiler = self._require_compiler_service(constructor.blockchain)
        return compiler.compile(constructor, source, contract_name)

    def _require_compiler_service(self, blockchain):
        if blockchain not in self._compiler_services:
            raise PublicException("Blockchain '{}' is not supported".format(blockchain))

        return self._compiler_services[blockchain]

    def _require_contract_processor(self, blockchain):
        if blockchain not in self._contract_processors:
            raise PublicException("Blockchain '{}' is not supported".format(blockchain))

        return self._contract_processors[blockchain]


class SimpleStorageEngine(BaseEngine):
    """
    Engine stored constructor in filesystem

    settings:
        datadir - dir where constructors files will be stored. One constructor - one file with name = constructor id
    """

    _datadir = "/tmp"

    def __init__(self, settings):
        super().__init__(settings)
        if 'datadir' not in self._settings:
            raise Exception("datadir setting is missing")

        self._datadir = self._settings['datadir']



    def _save_constructor(self, id, filename):
        shutil.copy(filename, self._get_filename(id))

    def _load_constructor_source(self, id):
        f = open(self._get_filename(id), 'r')
        source = f.read()
        f.close()

        return source

    def _get_filename(self, id):
        """returns filename of constructor by id"""
        if re.findall('[^a-zA-Z0-9]', id):
            raise Exception

        return os.path.join(self._datadir, str(id))
