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

from pymongo import MongoClient
from bson.objectid import ObjectId
from jsonschema.validators import validator_for

from utils.common import auth, nonempty, args_string
from utils.responses import  error_response, engine_error_response
from constructor_engine.engine import SimpleStorageEngine
from smartz.json_schema import load_schema, add_definitions

# FIXME (make good connect to db)
db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db


def _ctor_id(id):
    return id.binary.hex()


def _process_ctor_schema(schema):
    return add_definitions(schema, load_schema('public/ethereum-sc.json'))


class ListView(View):

    def get(self, request, *args, **kwargs):
        constructors_table = db.ctors

        user_id = auth(request, db)
        if isinstance(user_id, HttpResponse):  # todo
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


@method_decorator(csrf_exempt, name='dispatch')
class UploadView(View):

    def post(self, request):
        ctors = db.ctors
        constructor_engine_instance = SimpleStorageEngine({'datadir': settings.SMARTZ_CONSTRUCTOR_DATA_DIR})
        args = request.data

        price_eth = float(args.get('price_eth', 0))

        if 'payment_address' in args:
            if not re.findall('^0x[0-9a-fA-F]{40}$', args['payment_address']):
                return error_response("Invalid payment address")
        else:
            args['payment_address'] = ''

        if price_eth and not args['payment_address']:
            return error_response("Payment address must be specified with price >0")

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

            copy2(os.path.join(settings.SMARTZ_ROOT_DIR, 'constructor_examples', uploaded_filename), filename)

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

        if price_eth:
            with open(filename) as f:
                if not '%payment_code%' in f.read(): # todo check on deploy in source of contract?
                    return error_response("Payment code must be in contract constructor")

        record = {
            'ctor_name': name,
            'ctor_descr': descr,
            'payment_address': args['payment_address'],
            'price_eth': float(args['price_eth']) if 'price_eth' in args else .0,
            'is_public': is_public,
            'user_id': user_id
        }

        if 'constructor_id' in args:
            ctors.replace_one(
                {'_id': current_constructor['_id']},
                record
            )
            constructor_engine_instance.register_new_ctor(_ctor_id(current_constructor['_id']), filename)
        else:
            ctor_id = ctors.insert_one(record).inserted_id

            constructor_engine_instance.register_new_ctor(_ctor_id(ctor_id), filename)

        return JsonResponse({'ok': True})


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


@method_decorator(csrf_exempt, name='dispatch')
class ConstructView(View):

    def post(self, request, constructor_id):
        constructors_db = db.ctors
        instances_db = db.instances

        # parsed input data POST JSON payload
        args = request.data

        # field -> error string
        # TODO - rename to better name
        fields = args.get('fields')
        if fields is None:
            return error_response("Constructor({}), empty fields passed to constructor".format(constructor_id))

        # [TODO]  - move to get_constructor()
        constructor = constructors_db.find_one({'_id': ObjectId(constructor_id)})
        if constructor is None:
            return error_response("Constructor with id '{}' not found".format(constructor_id))

        user_id = auth(request, db)
        if isinstance(user_id, HttpResponse):
            return error_response("Wrong 'user_id' param")

        instance_title = args.get('instance_title')
        if not instance_title or not isinstance(instance_title, str):
            return error_response("Wrong 'instance_title' param")

        price_eth = constructor.get('price_eth', .0)

        constructor_engine_instance = SimpleStorageEngine({'datadir': settings.SMARTZ_CONSTRUCTOR_DATA_DIR})
        constructor_params = constructor_engine_instance.get_ctor_params(constructor_id)
        if 'error' == constructor_params['result']:
            return engine_error_response(constructor_params)

        constructor_schema = _process_ctor_schema(constructor_params['schema'])

        validator_cls = validator_for(constructor_schema)
        validator_cls.check_schema(constructor_schema)
        validator = validator_cls(constructor_schema)

        errors = dict()
        for error in validator.iter_errors(fields):
            if not error.path:
                return error_response(error.message)

            errors[error.path[0]] = error.message

        if errors:
            return JsonResponse(
                {
                    "result": "error",
                    "errors": errors
                }
            )

        result = constructor_engine_instance.construct(constructor_id, constructor, fields)

        if not isinstance(result, dict):
            return error_response("Constructor({}), construct error, result is not dict".format(constructor_id))

        if 'error' == result['result']:
            return engine_error_response(result)

        # success
        instance_id = instances_db.insert_one(
            {
                'abi': json.dumps(result['abi']),
                'source': result['source'],
                'bin': result['bin'],
                'function_specs': json.dumps(result['function_specs']),
                'dashboard_functions': result['dashboard_functions'],
                'ctor_id': constructor_id,
                'instance_title': instance_title,
                'user_id': user_id
            }
        ).inserted_id

        return JsonResponse({
            'instance_id': _ctor_id(instance_id),
            'bin': result['bin'],
            'source': result['source'],
            'price_eth': price_eth
        })
