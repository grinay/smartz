import abc
import re
import shutil
import os.path
import tempfile
import json
import subprocess

import requests

SERVICE_URL = 'https://gaene9ieooj2roh0doh5bahv.smartz.io/call'

class BaseEngine(object):

    SOLC_BINARY = 'solc'

    METHOD_GET_PARAMS     = 'get_params'
    METHOD_CONSTRUCT      = 'construct'
    METHOD_POST_CONSTRUCT = 'post_construct'


    def __init__(self, settings):
        self._settings = settings
        self._instances = {}

    def register_new_ctor(self, ctor_id, filename):
        self._save_constructor(ctor_id, filename)

    def get_ctor_params(self, id):
        source = self._load_constructor(id)
        res = self._call_constructor_method(source, self.METHOD_GET_PARAMS)

        return res

    def construct(self, id, price_eth, fields):
        constructor_source = self._load_constructor(id)
        res = self._call_constructor_method(constructor_source, self.METHOD_CONSTRUCT, [fields])

        if 'error' == res['result']:
            return res

        source, contract_name = res['source'], res['contract_name']

        if price_eth:
            wei = int(price_eth * 1e18)
            source = source.replace('%payment_code%',
                        'address(0xaacf78f8e1fbdcf7d941e80ff8b817be1f054af4).transfer({} wei);'.format(wei))
        else:
            source = source.replace('%payment_code%', '')

        if re.findall('[^a-zA-Z0-9]', contract_name):
            raise Exception

        bin, abi = self._compile(source, contract_name)
        abi = json.loads(abi)

        post_construct_info = self._call_constructor_method(constructor_source, self.METHOD_POST_CONSTRUCT, [fields, abi])
        if 'error' == post_construct_info['result']:
            return post_construct_info

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
        data = {
            "constructor_file": source,
            "method": method,
            "args": args if args is not None else []
        }
        try:
            res = requests.post(SERVICE_URL, json=data)
            if res.status_code != requests.codes.ok:
                return {
                    "result": "error",
                    "error_descr": "Something got wrong/0"
                }

            #todo validate json
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

            args = (self.SOLC_BINARY, "--bin", "--abi", "--optimize", "-o", tmpdir, tmpfilename)
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
