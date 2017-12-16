import re
from unittest import TestCase

import os

from constructor_engine.engine import SimpleStorageEngine


class TestEquityConstructorIntegrated(TestCase):
    def test__complex(self):

        engine = SimpleStorageEngine({'datadir': '/tmp'})
        engine.register_new_ctor(
            '123',
            os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                'equity_constructor.py'
            )
        )

        #successful
        res = engine.construct('123', {
            "name": "Shares",
            "abbr": "SHR",
            "address_0": "0x71e82d98f04e06345677858b31d47934224b157f",
            "fullname_0": "Ivan Petrov",
            "shares_0": 1,
            "address_1": "0x11e82d98f04e06345677858b31d47934224b157f",
            "fullname_1": "Semen Ivanov",
            "shares_1": 2,
            "address_2": "0x21e82d98f04e06345677858b31d47934224b157f",
            "fullname_2": "Zakhar Begunov",
            "shares_2": 3
        })
        self.assertNotEqual(dict, type(res), "not error")
        bin, source, abi = res
        self.assertTrue('contract EquityToken' in source)
        self.assertTrue('"name":"name"' in abi, "simple tests for existing method definition")
        self.assertTrue('"name":"Transfer"' in abi, "simple tests for existing event definition")

        self.assertNotEqual("", bin, "bytecode is not empty")
        self.assertFalse(re.findall('[^0-9a-f]', bin), 'only hex in bytecode')
