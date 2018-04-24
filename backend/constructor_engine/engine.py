import abc
import re
import shutil
import sys

import os.path
import tempfile
import json
import subprocess

import requests
from django.conf import settings

from smartz.eth.contracts import merge_function_titles2specs, make_generic_function_spec
from smartz.json_schema import is_conforms2schema_part, load_schema


class BaseEngine(object):

    METHOD_GET_VERSION    = 'get_version'
    METHOD_GET_PARAMS     = 'get_params'
    METHOD_CONSTRUCT      = 'construct'
    METHOD_POST_CONSTRUCT = 'post_construct'
    CONSTRUCTOR_METHODS = [
        METHOD_GET_VERSION, METHOD_GET_PARAMS, METHOD_CONSTRUCT, METHOD_POST_CONSTRUCT
    ]

    def __init__(self, engine_settings):
        self._settings = engine_settings
        self._instances = {}

    def register_new_ctor(self, constructor_id, filename):
        self._save_constructor(constructor_id, filename)

    def get_constructor_version(self, constructor_id):
        source = self._load_constructor(constructor_id)
        res = self._call_constructor_method(source, self.METHOD_GET_VERSION)

        return res

    def get_ctor_params(self, constructor_id):
        try:
            source = self._load_constructor(constructor_id)
        except Exception:
            return {
                'result': 'error',
                'error_descr': 'Failed to load constructor'
            }
        res = self._call_constructor_method(source, self.METHOD_GET_PARAMS)

        return res

    def construct(self, constructor_id, constructor, fields):
        try:
            constructor_source = self._load_constructor(constructor_id)
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


        price_eth = constructor.get('price_eth', .0)
        payment_address = constructor.get('payment_address', '')

        if price_eth:
            wei = int(price_eth * 1e18)

            if payment_address:
                assert(settings.SMARTZ_COMMISSION < 1)

                payment_code = """
        address({commission_address}).transfer({commission} wei);
        address({payment_address}).transfer({payment_sum} wei);
                """.format(
                    commission_address=settings.SMARTZ_COMMISSION_ADDRESS,
                    commission=int(wei*settings.SMARTZ_COMMISSION),

                    payment_address=payment_address,
                    payment_sum=wei-int(wei*settings.SMARTZ_COMMISSION)
                )
            else:
                payment_code = 'address({commission_address}).transfer({commission} wei);'.format(
                    commission_address=settings.SMARTZ_COMMISSION_ADDRESS,
                    commission=int(wei)
                )

            source = source.replace('%payment_code%', payment_code)
        else:
            source = source.replace('%payment_code%', '')

        if re.findall('[^a-zA-Z0-9]', contract_name):
            raise Exception

        try:
            bin, abi = self._compile(source, contract_name)
            abi = json.loads(abi)
        except Exception as e:
            print("[DEBUG] Compilation error. Ex: {}".format(str(e)))
            print("[DEBUG] Compilation error. Code: {}".format(source))
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
    def _load_constructor(self, id):
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
            print("[DEBUG] {}".format(str(e)))
            return {
                "result": "error",
                "error_descr": "Something got wrong/1"
            }

    def _compile(self, source, contract_name):
        """compiles source fi"""

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

    def _load_constructor(self, id):
        f = open(self._get_filename(id), 'r')
        source = f.read()
        f.close()

        return source

    def _get_filename(self, id):
        """returns filename of constructor by id"""
        if re.findall('[^a-zA-Z0-9]', id):
            raise Exception

        return os.path.join(self._datadir, str(id))
