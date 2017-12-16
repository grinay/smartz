from unittest import TestCase

import os

from constructor_engine.engine import SimpleStorageEngine


class TestSimpleStorageEngine(TestCase):
    def test__complex(self):

        engine = SimpleStorageEngine({'datadir': '/tmp'})
        engine.register_new_ctor(
            '123',
            os.path.join(
                os.path.dirname(os.path.abspath(__file__)),
                'test_cases/simple.py'
            )
        )

        self.assertEqual('error', engine.get_ctor_params('124'), 'Error on getting params of not registered contract')

        self.assertDictEqual(
            {'hard_cap': {'desc': 'Maximum funds', 'name': 'Mard cap', 'type': 'int'}},
            engine.get_ctor_params('123'),
            'contract params not equals'
        )


        bin, source, abi = engine.construct('123', {})
        self.assertTrue('contract A' in source)