import abc
import shutil
import os.path

import types
import importlib.machinery


class BaseEngine(object):

    #todo hardcoded
    CONSTRUCTOR_CLASS = 'Constructor'


    def __init__(self, settings):
        self._settings = settings
        self._instances = {}

    def register_new_ctor(self, ctor_id, filename):
        self._save_constructor(ctor_id, filename)

    def get_ctor_params(self, id):
        try:
            self._get_instance(id).get_params()
        except BaseException:
            return 'error'

    def construct(self, id, fields):
        try:
            source, contract_name = self._get_instance(id).construct(fields)
        except BaseException:
            return 'error'

        #todo compilation
        return ["bin", source, "abi"]# or 'error'

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

        return getattr(mod, self.CONSTRUCTOR_CLASS)



    def _get_filename(self, id):
        """returns filename of constructor by id"""
        return os.path.join(self._datadir, id)
