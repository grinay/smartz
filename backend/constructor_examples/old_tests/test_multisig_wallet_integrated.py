import re
from unittest import TestCase

import os

from constructor_engine.engine import SimpleStorageEngine


class TestMultisigWalletIntegrated(TestCase):
    def test__complex(self):

        engine = SimpleStorageEngine({'datadir': '/tmp'})
        engine.register_new_ctor(
            '123',
            os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                'multisig_wallet_constructor.py'
            )
        )

        #successful
        res = engine.construct('123', {
            "signs_count": 2,
            "owner_0": "0xF52Ba004f139A1B9f9d88c9799A20B3cd355de2D",
            "owner_1": "0xD8a2F05D2Be95Ddd2A8fb1c89cf4Ad266A9bCe1a",
            "owner_2": "0xE0b47A3eB256984150A707187fC04eDaD0A2f75f",
        })
        self.assertNotEqual(dict, type(res), "not error")
        bin, source, abi = res
        self.assertTrue('contract SimpleMultiSigWallet' in source)
        self.assertTrue('"name":"Deposit"' in abi, "simple tests for existing method definition")

        self.assertNotEqual("", bin, "bytecode is not empty")
        self.assertFalse(re.findall('[^0-9a-f]', bin), 'only hex in bytecode')
