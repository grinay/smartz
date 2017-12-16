import re
from unittest import TestCase

import os

from constructor_engine.engine import SimpleStorageEngine
from constructor_examples.equity_constructor import Constructor


class TestEquityConstructor(TestCase):

    def test__params(self):
        c = Constructor()
        self.assertTrue(isinstance(c.get_params(), dict))

    def test__construct_errors(self):
        c = Constructor()

        res = c.construct({})
        self.assertTrue("errors" in res)
        self.assertTrue("name" in res["errors"])
        self.assertTrue("abbr" in res["errors"])
        self.assertTrue("address_0" in res["errors"])

        names_invalid = ["qq", "!!!!", "qw3eewew", 1]
        for name in names_invalid:
            res = c.construct({"name": name})
            self.assertTrue("name" in res["errors"])

        names_valid = ["Super shares", "Shares", "Bu ga ga"]
        for name in names_valid:
            res = c.construct({"name": name})
            self.assertFalse("name" in res["errors"])



    def test__construct_valid(self):
        c = Constructor()

        res = c.construct({
            "name": "Shares",
            "abbr": "SHR",
            "address_0": "0x71e82d98f04e06345677858b31d47934224b157f",
            "fullname_0": "Ivan Petrov",
            "shares_0": 4
        })

        self.assertTrue(isinstance(res, tuple))