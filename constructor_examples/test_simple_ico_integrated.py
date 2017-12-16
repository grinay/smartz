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
                'simple_ico_constructor.py'
            )
        )

        #successful
        res = engine.construct('123', {
            "name": "Shares",
            "abbr": "SHR",
            "hard_cap": 100,
            "date_from": 1513438915,
            "date_to": 1513738915,
            "rate": 100
        })
        self.assertNotEqual(dict, type(res), "not error")
        bin, source, abi = res
        self.assertTrue('contract ICO' in source)
        self.assertTrue('"name":"collected"' in abi, "simple tests for existing method definition")

        self.assertNotEqual("", bin, "bytecode is not empty")
        self.assertFalse(re.findall('[^0-9a-f]', bin), 'only hex in bytecode')
