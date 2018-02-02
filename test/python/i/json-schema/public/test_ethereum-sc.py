# -*- coding: utf-8 -*-

import sys
import os

PROJECT_ROOT = os.path.join(os.path.realpath(os.path.dirname(__file__)), '..', '..', '..', '..', '..')
sys.path.append(os.path.join(PROJECT_ROOT, 'pythonlib'))

import unittest
import json
from copy import deepcopy

from jsonschema import validate, ValidationError


with open(os.path.join(PROJECT_ROOT, 'json-schema', 'public', 'ethereum-sc.json')) as fh:
    SCHEMA = json.load(fh)


def definition_validator(definition_name):
    validator = deepcopy(SCHEMA)
    validator['$ref'] = "#/definitions/" + definition_name
    return validator


class TestSchemaDefinitions(unittest.TestCase):

    def test_address(self):
        address_schema = definition_validator('address')

        self.assertRaises(ValidationError, validate, '', address_schema)
        self.assertRaises(ValidationError, validate, '0x', address_schema)
        self.assertRaises(ValidationError, validate, '0', address_schema)
        self.assertRaises(ValidationError, validate, 'x', address_schema)
        self.assertRaises(ValidationError, validate, '0x123', address_schema)
        self.assertRaises(ValidationError, validate, '0xAAA', address_schema)
        self.assertRaises(ValidationError, validate, ['0xAAA'], address_schema)
        self.assertRaises(ValidationError, validate, [], address_schema)
        self.assertRaises(ValidationError, validate, dict(), address_schema)
        self.assertRaises(ValidationError, validate, 100, address_schema)

        validate('0000000000000000000000000000000000000000', address_schema)
        validate('0x0000000000000000000000000000000000000000', address_schema)

        validate('1111111111111111111111111111111111111111', address_schema)
        validate('0x1111111111111111111111111111111111111111', address_schema)

        self.assertRaises(ValidationError, validate, '11111111111111111111111111111111111111111', address_schema)
        self.assertRaises(ValidationError, validate, '0x11111111111111111111111111111111111111111', address_schema)

        self.assertRaises(ValidationError, validate, '11111111111111111111111111111111s1111111', address_schema)
        self.assertRaises(ValidationError, validate, '0x1111111111111111111111111*11111111111111', address_schema)

        validate('aaaAAA1111111111111111111111111111111111', address_schema)
        validate('0xaaaAAA1111111111111111111111111111111111', address_schema)

    def test_address_array(self):
        address_array_schema = definition_validator('addressArray')

        validate([], address_array_schema)
        validate(['0x1111111111111111111111111111111111111111'], address_array_schema)
        validate(['0x1111111111111111111111111111111111111111', '0x1111111111111111111111111111111111111111'], address_array_schema)
        validate(['0x1111111111111111111111111111111111111111', '0x1111111111111111111111111111111111111112'], address_array_schema)

        self.assertRaises(ValidationError, validate, [''], address_array_schema)
        self.assertRaises(ValidationError, validate, ['', '0x1111111111111111111111111111111111111111'], address_array_schema)
        self.assertRaises(ValidationError, validate, ['0x1111111111111111111111111111111111111111', ''], address_array_schema)
        self.assertRaises(ValidationError, validate, ['', '0x1111111111111111111111111111111111111111', ''], address_array_schema)


if __name__ == '__main__':
    unittest.main()
