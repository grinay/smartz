#!/usr/bin/env python3                                                                                                                                                                                             import re
import base64
import os
import re
import sys
import json
import tempfile
from shutil import copy2

from django.conf import settings
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import View
from django_rester.views import BaseAPIView

from rest_framework import generics, viewsets

from pymongo import MongoClient
from bson.objectid import ObjectId
from jsonschema.validators import validator_for

from utils.common import auth, nonempty, args_string
from utils.responses import ok_response, error_response, engine_error_response
from constructor_engine.engine import SimpleStorageEngine
from pythonlib.smartz.json_schema import load_schema, add_definitions, assert_conforms2schema_part

# FIXME (make good connect to db)
db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db


def l(v):
    print('[DEBUG]: {}'.format(repr(v)), file=sys.stderr)
    return v

def _ctor_id(id):
    return id.binary.hex()

def _prepare_instance_details(instance_info):
    output = {
        "instance_id": instance_info['_id'].binary.hex(),
        "instance_title": instance_info['instance_title'],
        "network_id": instance_info['network_id'],
        "ctor_id": instance_info['ctor_id'],
        "address": instance_info['address'],
        "abi": json.loads(instance_info['abi']),
        "functions": json.loads(instance_info['function_specs']),
        "dashboard_functions": instance_info['dashboard_functions']
    }
    assert_conforms2schema_part(output, load_schema('internal/front-back.json'),
                                'rpc_calls/get_instance_details/output')
    return output

def _process_ctor_schema(schema):
    return add_definitions(schema, load_schema('public/ethereum-sc.json'))


#q
class ListView(View):

    def get(self, request, *args, **kwargs):
        constructors_table = db.ctors

        user_id = auth(request, db)
        if isinstance(user_id, HttpResponse): #todo
            query_filter = {"is_public": True}
        else:
            query_filter = {
                "$or": [
                    {"is_public": True},
                    {"user_id": user_id}
                ]
            }

        constructors = []
        for ctor in constructors_table.find(query_filter):
            constructors.append(
                {
                    'ctor_id': _ctor_id(ctor['_id']),
                    'ctor_name': ctor['ctor_name'],
                    'price_eth': ctor.get('price_eth', .0),
                    'ctor_descr': ctor['ctor_descr'] if 'ctor_descr' in ctor else '',
                    'is_public': ctor['is_public'] if 'is_public' in ctor else True,
                    'user_id': ctor['user_id'] if 'user_id' in ctor else '',
                }
            )

        return JsonResponse(constructors, safe=False)


#q
@method_decorator(csrf_exempt, name='dispatch')
class UploadView(View):

    def post(self, request: HttpRequest):
        ctors = db.ctors
        constructor_engine_instance = SimpleStorageEngine({'datadir': settings.SMARTZ_CONSTRUCTOR_DATA_DIR})
        args = request.POST

        user_id = auth(request, db)
        if isinstance(user_id, HttpResponse):
            return user_id  # error

        name = nonempty(args_string(args, 'ctor_name'))
        descr = nonempty(args_string(args, 'ctor_descr')) if 'ctor_descr' in args else ''
        filename = tempfile.mktemp('ctor')

        current_constructor = {}
        # todo remake in pg
        if 'constructor_id' in args:
            res = [c for c in ctors.find() if _ctor_id(c['_id']) == args['constructor_id']]
            if len(res):
                current_constructor = res.pop()
            else:
                return error_response('Constructor does not exists')

            if current_constructor['user_id'] != user_id:
                return error_response('Access denied')

        same_named_constructors = list(ctors.find({'ctor_name': name}))
        if 'constructor_id' in args:
            if len([c for c in same_named_constructors if _ctor_id(c['_id']) != args['constructor_id']]):
                return error_response('Constructor with this name already exists')
        else:
            if len(same_named_constructors):
                return error_response('Constructor with this name already exists')

        if 'ctor_file_name' in args:
            uploaded_filename = args['ctor_file_name']
            if not re.findall('^[a-zA-Z][a-zA-Z0-9_]*$', uploaded_filename) or uploaded_filename.startswith('test_'):
                raise ValueError()
            uploaded_filename = "{}.py".format(uploaded_filename)

            copy2(os.path.join(settings.ROOT_DIR, 'constructor_examples', uploaded_filename), filename)

            is_public = True
        elif 'ctor_file' in args:
            file_base64 = re.sub('^data:.+;base64,', '', args['ctor_file'])

            try:
                file_source = base64.b64decode(file_base64).decode('utf-8')
            except Exception:
                return error_response("Invalid input/0")

            file = open(filename, "w")
            file.write(file_source)
            file.close()

            is_public = False
        else:
            return error_response("Invalid input")

        if 'constructor_id' in args:
            ctors.replace_one(
                {'_id': current_constructor['_id']},
                {
                    'ctor_name': name,
                    'ctor_descr': descr,
                    'price_eth': float(args['price_eth']) if 'price_eth' in args else .0,
                    'is_public': is_public,
                    'user_id': user_id
                }
            )
            constructor_engine_instance.register_new_ctor(_ctor_id(current_constructor['_id']), filename)
        else:
            ctor_id = ctors.insert_one(
                {
                    'ctor_name': name,
                    'ctor_descr': descr,
                    'price_eth': float(args['price_eth']) if 'price_eth' in args else .0,
                    'is_public': is_public,
                    'user_id': user_id
                }
            ).inserted_id

            constructor_engine_instance.register_new_ctor(_ctor_id(ctor_id), filename)

        return JsonResponse({'ok': True})

#q
class GetParamsView(View):

    def get(self, request, constructor_id):
        constructors_db = db.ctors

        # [TODO]  - move to get_constructor()
        constructor = constructors_db.find_one({'_id': ObjectId(constructor_id)})
        if constructor is None:
            return error_response("Constructor with id '{}' not found".format(constructor_id))

        constructor_engine_instance = SimpleStorageEngine({'datadir': settings.SMARTZ_CONSTRUCTOR_DATA_DIR})                                                                                                                                                           
        constructor_params = constructor_engine_instance.get_ctor_params(constructor_id)
        if 'error' == constructor_params['result']:
            return engine_error_response(constructor_params)

        ui_schema = constructor_params.get('ui_schema', {})

        return JsonResponse({
            'ctor_name': constructor['ctor_name'],
            'ctor_descr': constructor['ctor_descr'] if 'ctor_descr' in constructor else '',
            'price_eth': constructor.get('price_eth', .0),
            'schema': _process_ctor_schema(constructor_params['schema']),
            'ui_schema': ui_schema,
        })



class ConstructorConstructView(generics.GenericAPIView):

    def __init__(self, **kwargs):
        super(ConstructorConstructView, self).__init__(**kwargs)

    def post(self, request, *args, **kwargs):

        constructors_db = db.ctors
        instances_db = db.instances

        # wget -q -O- --header=Content-Type:application/json \
        # --post-data='{"ctor_id": "5a9a4d63f5ec65000b80d290", "instance_title": "erc20_token_constructor.py", "fields": {"decimals": 18, "is_burnable": false, "is_mintable": false, "is_pausable": false, "max_tokens_count": 100, "name": "fgshd", "premint":50, "symbol": "ASDQD"}}' \
        # 'http://10.100.8.33/constructor/construct/'

        # parsed input data POST JSON payload
        args = request.data

        # [TEMP] Token: 5a9a4d63f5ec65000b80d290
        constructor_id = args.get('ctor_id')

        # [TODO]  - move to get_constructor()
        constructor = constructors_db.find_one({'_id': ObjectId(constructor_id)})
        if constructor is None:
            return error_response("Constructor with id '{}' not found".format(constructor_id))

        # [TODO OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO]
        user_id = args.get('user_id')
        # [TEMP]
        user_id = '5a9eaa1e70fb743d03b28bd7' # yoba@yoba.ru

        if not isinstance(user_id, str):
            return error_response("Wrong 'user_id' param")

        instance_title = args.get('instance_title')
        if not instance_title or not isinstance(instance_title, str):
            return error_response("Wrong 'instance_title' param")

        price_eth = constructor.get('price_eth', .0)

        constructor_engine_instance = SimpleStorageEngine({'datadir': settings.SMARTZ_CONSTRUCTOR_DATA_DIR})                                                                                                                                                           
        constructor_params = constructor_engine_instance.get_ctor_params(constructor_id)
        if constructor_params is None or isinstance(constructor_params, str):
            return error_response("Constructor({}) returned wrong constructor_params: {}".format(constructor_id, constructor_params))

        constructor_schema = add_definitions(constructor_params['schema'], load_schema('public/ethereum-sc.json'))

        validator_cls = validator_for(constructor_schema)
        validator_cls.check_schema(constructor_schema)
        validator = validator_cls(constructor_schema)


        # field -> error string
        # [TODO] - rename to better name
        fields = args.get('fields')
        if fields is None:
            return error_response("Constructor({}), empty fields passed to constructor".format(constructor_id))

        errors = dict()
        for error in validator.iter_errors(fields):
            if not error.path:
                return error_response("Constructor({}), no error.path: {}".format(constructor_id, error.message))

            errors[error.path[0]] = error.message

        # [NOTE] differs form previous verison, there was a JSON:  {result: 'error', errors: '........' }
        if errors:
            return error_response("Constructor({}), validator errors: {}".format(constructor_id, repr(errors)))

        result = constructor_engine_instance.construct(constructor_id, price_eth, fields)

        if not isinstance(result, dict):
            return error_response("Constructor({}), construct error, result is not dict".format(constructor_id))
            
        if 'error' in result:
            return error_response("Constructor({}), construct error, result: {}".format(constructor_id, repr(result)))

        # success
        instance_id = instances_db.insert_one({ 'abi': json.dumps(result['abi']),
                                                'source': result['source'],
                                                'bin': result['bin'],
                                                'function_specs': json.dumps(result['function_specs']),
                                                'dashboard_functions': result['dashboard_functions'],
                                                'ctor_id': constructor_id,
                                                'instance_title': instance_title,
                                                'user_id': user_id}
                                           ).inserted_id.binary.hex()

        return ok_response({
            'instance_id': instance_id,
            'bin': result['bin'],
            'source': result['source'],
            'price_eth': price_eth
        })
