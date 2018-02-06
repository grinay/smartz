# -*- coding: utf-8 -*-

import sys
import os
import unittest

PROJECT_ROOT = os.path.join(os.path.realpath(os.path.dirname(__file__)), '..', '..', '..', '..', '..')
sys.path.append(os.path.join(PROJECT_ROOT, 'pythonlib'))

from smartz.eth.contracts import abi_arguments2schema


class TestABI2Schema(unittest.TestCase):

    def test_fixed_types(self):
        abi2schema = self.__class__._abi2schema

        self.assertEqual(abi2schema([
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_amount",
              "type": "uint256"
            }
        ]), {
            "type": "array",
            "minItems": 2,
            "maxItems": 2,
            "items": [
                { "$ref": "#/definitions/address", "title": "_to" },
                { "$ref": "#/definitions/uint256", "title": "_amount" },
            ]
        })

        self.assertEqual(abi2schema([
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_amount",
              "type": "uint256"
            },
            {
              "name": "_x",
              "type": "uint"
            },
            {
              "name": "_y",
              "type": "bytes32"
            }
        ]), {
            "type": "array",
            "minItems": 4,
            "maxItems": 4,
            "items": [
                {"$ref": "#/definitions/address", "title": "_to"},
                {"$ref": "#/definitions/uint256", "title": "_amount"},
                {"$ref": "#/definitions/uint", "title": "_x"},
                {"$ref": "#/definitions/bytes32", "title": "_y"},
            ]
        })

    def test_definitions_present(self):
        result = abi_arguments2schema([
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_amount",
              "type": "uint256"
            }
        ])

        self.assertEqual(type(result['definitions']['address']), dict)
        self.assertEqual(type(result['definitions']['uint256']), dict)

    def test_array(self):
        abi2schema = self.__class__._abi2schema

        self.assertEqual(abi2schema([
            {
              "name": "_owners",
              "type": "address[]"
            }
        ]), {
            "type": "array",
            "minItems": 1,
            "maxItems": 1,
            "items": [{
                "type": "array",
                "title": "_owners",
                "items": {"$ref": "#/definitions/address"},
            }]
        })


    @staticmethod
    def _abi2schema(abi_args):
        result = abi_arguments2schema(abi_args)
        del result['definitions']
        return result


if __name__ == '__main__':
    unittest.main()
