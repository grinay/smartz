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

    def test_unix_time(self):
        ts_schema = definition_validator('unixTime')

        validate(0, ts_schema)
        validate(1, ts_schema)
        validate(1517558298, ts_schema)
        validate(2000000000, ts_schema)

        self.assertRaises(ValidationError, validate, '0', ts_schema)
        self.assertRaises(ValidationError, validate, '1517558298', ts_schema)
        self.assertRaises(ValidationError, validate, [], ts_schema)
        self.assertRaises(ValidationError, validate, ['0'], ts_schema)
        self.assertRaises(ValidationError, validate, [4, 6], ts_schema)
        self.assertRaises(ValidationError, validate, '1517558298.12', ts_schema)
        self.assertRaises(ValidationError, validate, 1517558298.12, ts_schema)
        self.assertRaises(ValidationError, validate, True, ts_schema)
        self.assertRaises(ValidationError, validate, None, ts_schema)
        self.assertRaises(ValidationError, validate, -2, ts_schema)
        self.assertRaises(ValidationError, validate, 1e12, ts_schema)

    def test_address_mapping(self):
        # Массив пар ключ-значение
        # Ключ - адрес
        # Значение - любое
        mapping_schema = definition_validator('addressMapping')

        validate([], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', 100]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', 1e18]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', []]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', dict()]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', 1.1]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', 'foo']], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', True]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', False]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', None]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', [{'foo': 4}]]], mapping_schema)
        # в данный момент дубли допустимы
        validate([['0x1111111111111111111111111111111111111111', 100],
                  ['0x1111111111111111111111111111111111111111', 200]], mapping_schema)

        validate([['0x1111111111111111111111111111111111111111', 100],
                  ['0x1111111111111111111111111111111111111112', 200]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', 1e18],
                  ['0x1111111111111111111111111111111111111112', 2e18]], mapping_schema)
        validate([['0x1111111111111111111111111111111111111111', 100],
                  ['0x1111111111111111111111111111111111111112', 200],
                  ['0x1111111111111111111111111111111111111113', 300]], mapping_schema)

        self.assertRaises(ValidationError, validate,
                          [[11111111, 100]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111', 100]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100, 200]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111']], mapping_schema)

        self.assertRaises(ValidationError, validate, 0, mapping_schema)
        self.assertRaises(ValidationError, validate, '', mapping_schema)
        self.assertRaises(ValidationError, validate, '0', mapping_schema)
        self.assertRaises(ValidationError, validate, dict(), mapping_schema)
        self.assertRaises(ValidationError, validate, True, mapping_schema)
        self.assertRaises(ValidationError, validate, False, mapping_schema)
        self.assertRaises(ValidationError, validate, None, mapping_schema)

        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], 0], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], ''], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], '0'], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], dict()], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], True], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], False], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], None], mapping_schema)

        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [0]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], ['']], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], ['0']], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [dict()]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [True]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [False]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [None]], mapping_schema)

        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [0, 150]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], ['', 150]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], ['0', 150]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [dict(), 150]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [True, 150]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [False, 150]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100], [None, 150]], mapping_schema)

    def test_uint_mapping(self):
        # Массив пар ключ-значение
        # Ключ - uint
        # Значение - любое
        mapping_schema = definition_validator('uintMapping')

        validate([], mapping_schema)
        validate([[500, 100]], mapping_schema)
        validate([[500, 1e18]], mapping_schema)
        validate([[500, []]], mapping_schema)
        validate([[500, dict()]], mapping_schema)
        validate([[500, 1.1]], mapping_schema)
        validate([[500, 'foo']], mapping_schema)
        validate([[500, True]], mapping_schema)
        validate([[500, False]], mapping_schema)
        validate([[500, None]], mapping_schema)
        validate([[500, [{'foo': 4}]]], mapping_schema)
        # в данный момент дубли допустимы
        validate([[500, 100],
                  [500, 200]], mapping_schema)

        validate([[500, 100],
                  [502, 200]], mapping_schema)
        validate([[500, 1e18],
                  [502, 2e18]], mapping_schema)
        validate([[500, 100],
                  [502, 200],
                  [503, 300]], mapping_schema)

        self.assertRaises(ValidationError, validate,
                          [[-10, 100]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [['0x1111111111111111111111111111111111111111', 100]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [[500, 100, 200]], mapping_schema)
        self.assertRaises(ValidationError, validate,
                          [[500]], mapping_schema)


if __name__ == '__main__':
    unittest.main()
