from django.core.exceptions import ValidationError

from smartz.json_schema import is_conforms2schema_part, load_schema, is_conforms2schema


def validate_functions(value):
    is_valid = is_conforms2schema_part(
        value, load_schema('public/constructor.json'),
        'definitions/ETHFunctionAdditionalDescriptions'
    )
    if not is_valid:
        raise ValidationError('Invalid functions descriptions')


def validate_abi(value):
    # todo abi validation
    if type(value) is not dict:
        raise ValidationError('Invalid abi')


def validate_functions_specs(value):
    # todo abi validation
    if type(value) is not list:
        raise ValidationError('Invalid functions spec')


def validate_dashboard_functions(value):
    schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Dashboard functions",
        "type": "array",
        "items": {
            "type": "string"
        }
    }

    if not is_conforms2schema(value, schema):
        raise ValidationError("Incorrect dashboard functions")