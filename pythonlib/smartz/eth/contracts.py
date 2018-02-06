# -*- coding: utf-8 -*-
#
#   smartz.eth.contracts
#

from smartz.json_schema import load_schema, add_definitions


def abi_arguments2schema(abi_array):
    """
    Конвертация массива аргументов функции контракта в json schema, пригодную для отрисовки и валидации в браузере.
    :param abi_array: массив аргументов функции контракта в формате Ethereum ABI
    :return: json schema в виде структуры
    """
    def abi_type2schema(abi_type, abi_name=None):
        if 'bool' == abi_type:
            result = {
                "type": "boolean",
                "default": False
            }

        elif abi_type in ('address', 'uint', 'uint256', 'bytes32'):
            result = {
                "$ref": "#/definitions/" + abi_type
            }

        elif abi_type.endswith('[]'):
            result = {
                "type": "array",
                "items": abi_type2schema(abi_type[:-2])
            }

        else:
            raise NotImplementedError()

        if abi_name is not None:
            result['title'] = abi_name

        return result

    schema = {
        "type": "array",
        "minItems": len(abi_array),
        "maxItems": len(abi_array),
    }
    if len(abi_array) > 0:
        schema["items"] = [abi_type2schema(arg['type'], arg.get("name")) for arg in abi_array]

    return add_definitions(schema, load_schema('public/ethereum-sc.json'))
