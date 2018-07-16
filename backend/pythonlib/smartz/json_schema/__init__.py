# -*- coding: utf-8 -*-
#
#   smartz.json_schema
#

import os
import json
from collections import Sequence
from functools import lru_cache
from copy import deepcopy

from jsonschema import validate, ValidationError, RefResolutionError
from jsonschema.compat import unquote

_ROOT_DIR = os.path.realpath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..'))

@lru_cache(256)
def load_schema(rel_path):
    assert '..' not in rel_path
    # todo how to do it better? django settings not very good for independent lib
    with open(os.path.join(_ROOT_DIR, 'json-schema', rel_path)) as fh:
        return json.load(fh)


def add_definitions(schema_to, schema_from):
    if 'definitions' not in schema_to:
        schema_to['definitions'] = dict()
    schema_to['definitions'].update(schema_from['definitions'])

    return schema_to


def assert_conforms2schema(data, full_schema):
    try:
        validate(data, full_schema)
    except ValidationError as exc:
        assert False, str(exc)


def is_conforms2schema(data, full_schema):
    try:
        validate(data, full_schema)
    except ValidationError:
        return False

    return True


def assert_conforms2definition(data, full_schema, definition_name):
    assert_conforms2schema(data, _definition_validator(full_schema, definition_name))


def assert_conforms2schema_part(data, full_schema, schema_pointer):
    assert_conforms2schema(data, _get_fragment_schema(full_schema, schema_pointer))


def is_conforms2schema_part(data, full_schema, schema_pointer):
    return is_conforms2schema(data, _get_fragment_schema(full_schema, schema_pointer))


def _get_fragment_schema(full_schema, schema_pointer):
    fragment_schema = deepcopy(_resolve_fragment(full_schema, schema_pointer))
    if 'definitions' in full_schema:
        fragment_schema['definitions'] = deepcopy(full_schema['definitions'])
    else:
        fragment_schema['definitions'] = {}
    return fragment_schema


def _definition_validator(schema, definition_name):
    validator = deepcopy(schema)
    validator['$ref'] = "#/definitions/" + definition_name
    return validator


# FIXME copy-paste from jsonschema
def _resolve_fragment(document, fragment):
    """
    Resolve a ``fragment`` within the referenced ``document``.

    Arguments:

        document:

            The referrant document

        fragment (str):

            a URI fragment to resolve within it

    """

    fragment = fragment.lstrip(u"/")
    parts = unquote(fragment).split(u"/") if fragment else []

    for part in parts:
        part = part.replace(u"~1", u"/").replace(u"~0", u"~")

        if isinstance(document, Sequence):
            # Array indexes should be turned into integers
            try:
                part = int(part)
            except ValueError:
                pass
        try:
            document = document[part]
        except (TypeError, LookupError):
            raise RefResolutionError(
                "Unresolvable JSON pointer: %r" % fragment
            )

    return document
