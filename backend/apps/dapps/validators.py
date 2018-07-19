from django.core.exceptions import ValidationError

from smartz.json_schema import is_conforms2schema_part, load_schema, is_conforms2schema


def validate_function_args(value):
    is_valid = is_conforms2schema_part(
        value,
        load_schema('public/constructor.json'),
        'definitions/ETHFunctionAdditionalDescription/properties/inputs'
    )
    if not is_valid:
        raise ValidationError("Incorrect function arguments")


def validate_tx_info(value):
    schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Transaction additional info",
        "type": "object",
        "additionalProperties": False,
        "properties": {
            "ethereum": {
                "description": "Ethereum tx properties",
                "type": "object",
                "additionalProperties": False,
                "properties": {
                    "gas_price": {"type": "number"},
                    "gas_limit": {"type": "number"},
                    "block": {"type": "number"}
                }
            },
            "eos": {
                "description": "Eos tx properties",
                "type": "object",
                "additionalProperties": False,
                "properties": {
                }
            }
        }
    }

    if not is_conforms2schema(value, schema):
        raise ValidationError("Incorrect transaction additional info")


def validate_log_data(value):
    schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Transaction additional info",
        "type": "array",

        "items": {
            "type": "object",
            "additionalProperties": False,
            "required": ["name", "value"],
            "properties": {
                "name": {"type": "string"},
                "value": {"type": "string"}
            },
        }
    }

    if not is_conforms2schema(value, schema):
        raise ValidationError("Incorrect transaction additional info")
