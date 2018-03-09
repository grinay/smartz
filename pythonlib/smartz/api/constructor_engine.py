# -*- coding: utf-8 -*-
#
#   constructor_engine.api
#

from abc import ABCMeta, abstractmethod


class ConstructorInstance(metaclass=ABCMeta):
    """
    Constructor interface.
    """

    @abstractmethod
    def get_params(self):
        """
        Get json schema of construct() parameters.
        """
        raise NotImplementedError()

    @abstractmethod
    def construct(self, fields):
        """
        Constructs contract source code.

        :param fields: data which is compatible to schema provided by get_params()
        """
        raise NotImplementedError()

    @abstractmethod
    def post_construct(self, fields, abi_array):
        """
        Called after compiling constructed source to get extra contract info.

        :param fields: fields data provided during construct
        :param abi_array: Ethereum ABI of compiled contract
        :return: {'function_specs': ..., 'dashboard_functions': ...}
        """
        raise NotImplementedError()
