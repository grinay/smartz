import abc
import re
import shutil
import os.path
import tempfile

import types
import importlib.machinery

import subprocess


class BaseEngine(object):

    #todo hardcoded
    CONSTRUCTOR_CLASS = 'Constructor'

    SOLC_BINARY = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        '../node_modules/.bin/solcjs'
    )


    def __init__(self, settings):
        self._settings = settings
        self._instances = {}

    def register_new_ctor(self, ctor_id, filename):
        self._save_constructor(ctor_id, filename)

    def get_ctor_params(self, id):
        try:
            return self._get_instance(id).get_params()
        except BaseException:
            return 'error'

    def construct(self, id, fields):
        try:
            source, contract_name = self._get_instance(id).construct(fields)

            if re.findall('[^a-zA-Z0-9]', contract_name):
                return 'error'

            bin, abi = self._compile(source, contract_name)
        except BaseException:
            return 'error'

        return [bin, source, abi]

    @abc.abstractmethod
    def _save_constructor(self, id, filename):
        """Saves constructor to some storage"""
        pass

    @abc.abstractmethod
    def _load_constructor(self, id):
        """Loads constructor from some storage, return constructor instance"""
        pass

    def _get_instance(self, id):
        """Get constructor instance by constructor id"""
        if id not in self._instances:
            self._instances[id] = self._load_constructor(id)

        return self._instances[id]

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

            out_file = os.path.join(tmpdir, '{}_{}'.format(tmpfilename.replace('/', '_'), contract_name))
            with open('{}.bin'.format(out_file)) as f:
                bin = f.read()

            with open('{}.abi'.format(out_file)) as f:
                abi = f.read()

            #_.close()
            return bin, abi


class SimpleStorageEngine(BaseEngine):
    """
    Engine stored constructor in filesystem

    settings:
        datadir - dir where constructors files will be stored. One constructor - one file with name = constructor id

    todo id is not validated for correct filename
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
        loader = importlib.machinery.SourceFileLoader('tempmod', self._get_filename(id))
        mod = types.ModuleType(loader.name)
        loader.exec_module(mod)

        return getattr(mod, self.CONSTRUCTOR_CLASS)()



    def _get_filename(self, id):
        """returns filename of constructor by id"""
        return os.path.join(self._datadir, str(id))
