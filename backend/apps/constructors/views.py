import base64
import os
import re
import json
import tempfile
from decimal import Decimal

from django.db import transaction
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import View

from jsonschema.validators import validator_for

from apps.common.constants import BLOCKCHAINS
from apps.constructors.models import Constructor
from apps.dapps.models import Dapp
from apps.dapps.serializers import dapp_pub_info
from constructor_engine.engine import WithEngine
from utils.common import auth, nonempty, args_string
from utils.responses import  error_response, engine_error_response
from smartz.json_schema import load_schema, add_definitions


def _process_ctor_schema(blockchain: str, schema):
    assert blockchain in dict(BLOCKCHAINS), "Blockchain {} is not supported".format(blockchain)
    return add_definitions(schema, load_schema('public/{}-sc.json'.format(blockchain)))


class ListView(View):

    def get(self, request, *args, **kwargs):
        user = auth(request)
        if isinstance(user, HttpResponse):  # todo
            constructors_objects = Constructor.objects.order_by('sorting_order').reverse().filter(is_public=True)
        else:
            constructors_objects = Constructor.objects.order_by('sorting_order').reverse().filter(Q(is_public=True) | Q(user=user))

        constructors = []
        for constructor in constructors_objects:
            constructors.append(
                {
                    'ctor_id': constructor.slug,
                    'ctor_name': constructor.name,
                    'price': constructor.get_formatted_price(),
                    'ctor_descr': constructor.description,
                    'is_public': constructor.is_public,
                    'user_id': constructor.user_id,
                    'image': constructor.image,
                    'blockchain': constructor.blockchain
                }
            )

        return JsonResponse(constructors, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class UploadView(View, WithEngine):

    @transaction.atomic
    def post(self, request):
        args = request.data

        price = str(args.get('price', 0))

        if 'payment_address' in args:
            if not re.findall('^0x[0-9a-fA-F]{40}$', args['payment_address']):
                return error_response("Invalid payment address")
        else:
            args['payment_address'] = ''

        if float(price) and not args['payment_address']:
            return error_response("Payment address must be specified with price >0")

        user = auth(request)
        if isinstance(user, HttpResponse):
            return user  # error

        name = nonempty(args_string(args, 'ctor_name'))
        descr = nonempty(args_string(args, 'ctor_descr')) if 'ctor_descr' in args else ''
        filename = tempfile.mktemp('ctor')

        if 'constructor_id' in args:
            try:
                current_constructor = Constructor.objects.get(slug=args['constructor_id'])
            except Constructor.DoesNotExist:
                return error_response('Constructor does not exists')

            if current_constructor.user_id != user.pk:
                return error_response('Access denied')

            if Constructor.objects.filter(name=name).exclude(slug=args['constructor_id']).exists():
                return error_response('Constructor with this name already exists')
        else:
            if Constructor.objects.filter(name=name).exists():
                return error_response('Constructor with this name already exists')

            current_constructor = Constructor.create()

        if 'ctor_file' in args:
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
            return error_response("Constructor file is missing")

        if float(price):
            with open(filename) as f:
                if not '%payment_code%' in f.read(): # todo check on deploy in source of contract?
                    return error_response("Payment code must be in contract constructor")

        current_constructor.name = name
        current_constructor.description = descr
        current_constructor.payment_address = args['payment_address']
        current_constructor.price = Decimal(price)
        current_constructor.is_public = is_public
        current_constructor.user = user


        version_info = self.constructor_engine.get_constructor_version(file_source)
        if 'error' == version_info['result']:
            return error_response(version_info['error_descr'])
        current_constructor.version = version_info['version']
        current_constructor.blockchain = version_info['blockchain']

        params = self.constructor_engine.get_constructor_params(file_source)
        if 'error' == params['result']:
            return error_response(params['error_descr'])
        current_constructor.schema = json.dumps(params.get('schema', {}))
        current_constructor.ui_schema = json.dumps(params.get('ui_schema', {}))

        current_constructor.save()

        self.constructor_engine.register_constructor(current_constructor.slug, filename)

        return JsonResponse({'ok': True})


class GetParamsView(View):

    def get(self, request, constructor_id):
        try:
            constructor = Constructor.objects.get(slug=constructor_id)
        except Constructor.DoesNotExist:
            return error_response("Constructor with id '{}' not found".format(constructor_id))

        return JsonResponse({
            'ctor_name': constructor.name,
            'ctor_descr': constructor.description,
            'price': constructor.get_formatted_price(),
            'schema': _process_ctor_schema(constructor.blockchain, constructor.get_schema()),
            'ui_schema': constructor.get_ui_schema(),
            'blockchain': constructor.blockchain,
            'image': constructor.image
        })


@method_decorator(csrf_exempt, name='dispatch')
class ConstructView(View, WithEngine):

    def post(self, request, constructor_id):
        # parsed input data POST JSON payload
        args = request.data

        # field -> error string
        # TODO - rename to better name
        fields = args.get('fields')
        if fields is None:
            return error_response("Constructor({}), empty fields passed to constructor".format(constructor_id))

        try:
            constructor = Constructor.objects.get(slug=constructor_id)
        except Constructor.DoesNotExist:
            return error_response("Constructor with id '{}' not found".format(constructor_id))


        user = auth(request)
        if isinstance(user, HttpResponse):
            return user

        dapp_title = args.get('dapp_title')
        if not dapp_title or not isinstance(dapp_title, str):
            return error_response("Wrong dapp title")

        constructor_schema = _process_ctor_schema(constructor.blockchain, constructor.get_schema())

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

        result = self.constructor_engine.construct(constructor, fields)

        if not isinstance(result, dict):
            return error_response("Constructor({}), construct error, result is not dict".format(constructor_id))

        if 'error' == result['result']:
            return engine_error_response(result)


        dapp = Dapp.create()
        dapp.title = dapp_title
        dapp.abi = json.dumps(result['abi'])
        dapp.source = result['source']
        dapp.binary = result['bin']
        dapp.function_specs = json.dumps(result['function_specs'])
        dapp.dashboard_functions = json.dumps(result['dashboard_functions'])
        dapp.constructor = constructor
        dapp.user = user
        dapp.compiler_version = result['compiler_version']
        dapp.compiler_optimization = result['compiler_optimization']
        dapp.contract_name = result['contract_name']
        dapp.deploy_price = constructor.price
        dapp.save()

        return JsonResponse(dapp_pub_info(dapp))
