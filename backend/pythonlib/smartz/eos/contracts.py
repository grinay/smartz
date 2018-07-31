# -*- coding: utf-8 -*-
#
#   smartz.eos.contracts
#

# fixme fixme all eth mentioning must be remade since eos now supported

from smartz.json_schema import load_schema, add_definitions, assert_conforms2definition, assert_conforms2schema_part


# todo one base fn/class with eth
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

        elif abi_type in ('account_name', 'name', 'asset', 'uint32', 'uint64'):  # todo why name instead of account_name ?
            result = {
                "$ref": "#/definitions/" + abi_type
            }

        elif 'string' == abi_type:
            result = {
                "type": "string"
            }

        elif abi_type.endswith('[]'):
            result = {
                "type": "array",
                "items": abi_type2schema(abi_type[:-2])
            }

        else:
            raise NotImplementedError('ABI type is not supported: {}'.format(abi_type))

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
        return add_definitions(schema, load_schema('public/eos-sc.json'))
    else:
        return schema


def make_generic_function_spec(abi_array):
    """
    Generates ETHFunctionSpec for each function found in ABI.
    :param abi_array: contract Ethereum ABI
    :return: list of ETHFunctionSpec
    """

    def obj_type(obj_name):
        for type_ in ['actions', 'tables']:
            for curr_obj in abi_array[type_]:
                if curr_obj['name'] == obj_name:
                    return type_

    def table_indexes(table_name):
        """return table indexes as input array"""
        res = []
        for table in abi_array['tables']:
            if not table.get('name') or table.get('name')!=table_name:
                continue
            if not table.get('key_names') or not table.get('key_types'):
                return []
            key_types = table.get('key_types')
            for i, key_name in enumerate(table.get('key_names')):
                res.append(
                    {
                        'name': key_name,
                        'type': key_types[i]
                    }
                )

        return res

    def fn2spec(fn):
        if obj_type(fn['name']) == 'actions':
            spec = {
                'name': fn['name'],
                'title': fn['name'],
                'constant': False,
                'payable': False,
                'inputs': abi_arguments2schema(fn['fields']),
                'outputs': abi_arguments2schema([])
            }
        elif obj_type(fn['name']) == 'tables':
            spec = {
                'name': fn['name'],
                'title': fn['name'],
                'constant': True,
                'payable': False,
                'inputs': abi_arguments2schema(table_indexes(fn['name'])),
                'outputs': abi_arguments2schema(fn['fields'])
            }
        else:
            assert False

        assert_conforms2definition(spec, load_schema('internal/front-back.json'), 'ETHFunctionSpec')

        return spec

    return [
        fn2spec(fn) for fn in abi_array.get('structs', [])
        if obj_type(fn['name']) in ['actions', 'tables']
    ]


# base fn/class with eth
def merge_function_titles2specs(spec_array, titles_info):
    """
    Attach human-friendly titles and descriptions to passed ETHFunctionSpec list.

    Processed elements: function titles and descriptions, function input arguments titles and descriptions,
    titles and descriptions of function outputs.

    :param spec_array: list of ETHFunctionSpec
    :param titles_info: data according to function_titles_info.json schema
    :return: modified ETHFunctionSpec
    """
    assert_conforms2schema_part(
        titles_info, load_schema('public/constructor.json'), 'definitions/ETHFunctionAdditionalDescriptions'
    )

    def set_title(to_spec, from_info):
        # todo how to deduplicate with json schema?
        # deduplicate with eth
        fields = (
            'title', 'description', 'sorting_order', 'ui:widget', 'ui:widget_options',
            'payable_details', 'ui:options', 'icon'
        )
        for field in fields:
            if field in from_info:
                to_spec[field] = from_info[field]

    for spec in spec_array:
        fn_titles = titles_info.get(spec['name'])
        if not fn_titles:
            continue

        set_title(spec, fn_titles)

        for io in ('inputs', 'outputs'):
            if not (io in fn_titles and 'items' in spec[io]):
                continue

            for (idx, arg_titles) in enumerate(fn_titles[io]):
                if idx >= len(spec[io]["items"]):
                    break

                set_title(spec[io]["items"][idx], arg_titles)

    # assume that it is ask function, since ask is getting record from special table
    spec_functions = [x['name'] for x in spec_array]
    for name, info in titles_info.items():
        if name not in spec_functions and not titles_info.get('inputs'):
            spec_fn = { #todo remove copy paste
                'name': name,
                'title': '',
                'constant': True,
                'payable': False,
                'inputs': abi_arguments2schema([]),
                'outputs': abi_arguments2schema([])
            }

            set_title(spec_fn, info)
            spec_array.append(spec_fn)

    return spec_array
