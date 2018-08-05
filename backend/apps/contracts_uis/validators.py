from django.core.exceptions import ValidationError

from smartz.json_schema import is_conforms2schema_part, load_schema


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