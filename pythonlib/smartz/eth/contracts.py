# -*- coding: utf-8 -*-
#
#   smartz.eth.contracts
#

from smartz.json_schema import load_schema, add_definitions, assert_conforms2definition, assert_conforms2schema


def abi_arguments2schema(abi_args_array):
    """
    Конвертация массива аргументов функции контракта в json schema, пригодную для отрисовки и валидации в браузере.
    :param abi_args_array: массив аргументов функции контракта в формате Ethereum ABI
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
        "minItems": len(abi_args_array),
        "maxItems": len(abi_args_array),
    }
    if len(abi_args_array) > 0:
        schema["items"] = [abi_type2schema(arg['type'], arg.get("name")) for arg in abi_args_array]
        return add_definitions(schema, load_schema('public/ethereum-sc.json'))
    else:
        return schema


def make_generic_function_spec(abi_array):
    """
    Генерация ETHFunctionSpec для всех функций из ABI.
    :param abi_array: Ethereum ABI контракта
    :return: массив элементов ETHFunctionSpec
    """
    def fn2spec(fn):
        spec = dict()
        for attr in ("name", "constant", "payable"):
            spec[attr] = fn[attr]

        spec['title'] = fn['name']    # to be extended by contract author
        spec['inputs'] = abi_arguments2schema(fn['inputs'])
        spec['outputs'] = abi_arguments2schema(fn['outputs'])

        assert_conforms2definition(spec, load_schema('internal/front-back.json'), 'ETHFunctionSpec')

        return spec

    return [fn2spec(fn) for fn in abi_array if fn['type'] == 'function']


def merge_function_titles2specs(spec_array, titles_info):
    """
    Дополнение переданных ETHFunctionSpec human-friendly заголовками и описаниями.

    Дополняются названия и описания функций, названия и описания входных и выходных параметров.

    :param spec_array: массив элементов ETHFunctionSpec
    :param titles_info: данные, соответствующие формату описаний
    :return: модифицированный массив элементов ETHFunctionSpec
    """
    assert_conforms2schema(titles_info, load_schema('internal/eth/contracts/function_titles_info.json'))

    def set_title(to_spec, from_info):
        for field in ('title', 'description'):
            if field in from_info:
                to_spec[field] = from_info[field]

    for spec in spec_array:
        fn_titles = titles_info.get(spec['name'])
        if not fn_titles:
            continue

        set_title(spec, fn_titles)

        for io in ('inputs', 'outputs'):
            if io in fn_titles:
                for (idx, arg_titles) in enumerate(fn_titles[io]):
                    if idx >= len(spec[io]):
                        break

                    set_title(spec[io]["items"][idx], arg_titles)

    return spec_array
