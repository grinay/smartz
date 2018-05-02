#!/usr/bin/env python3                                                                                                                                                                                             import re
import json

from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


from pymongo import MongoClient
from bson.objectid import ObjectId

from utils.common import auth
from utils.responses import ok_response, error_response
from smartz.json_schema import load_schema, assert_conforms2schema_part


# FIXME (make good connect to db)
db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db


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


class DetailsView(View):

    def get(self, request, instance_id):
        instances_db = db.instances

        instance_info = instances_db.find_one({'_id': ObjectId(instance_id)})
        if instance_info is None:
            return error_response("Instance({}) not found".format(instance_id))

        if not instance_info.get('public_access'):
            user_id = auth(request)
            if isinstance(user_id, HttpResponse):
                return user_id  # error

            if instance_info['user_id'] != user_id:
                return error_response('instance is not found')

        if 'address' not in instance_info:
            return error_response('Instance({}) is not yet deployed'.format(instance_id))

        return JsonResponse(_prepare_instance_details(instance_info))


class ListView(View):

    def get(self, request):
        instances_db = db.instances

        user_id = auth(request)
        if isinstance(user_id, HttpResponse):
            return user_id  # error

        found_instances = instances_db.find({'user_id': user_id, 'address': {'$exists': True}})
        instances_list = [_prepare_instance_details(i) for i in found_instances]

        return JsonResponse(instances_list, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class UpdateView(View):

    def post(self, request, instance_id):

        instances_db = db.instances

        user_id = auth(request)
        if isinstance(user_id, HttpResponse):
            return user_id  # error

        # [TODO] - move all checks around instance and user to separate instance getter
        instance_info = instances_db.find_one({'_id': ObjectId(instance_id), 'user_id': user_id})
        if instance_info is None:
            return error_response("Instance({}) not found".format(instance_id))

        # [TODO] refactor all checks (address and network_id validation should be somewhere near Instance() class
        # Later validation of Ethereum address will differ from EOS address, so Instance() class will have some "blockchain_id" member to
        # differ parameters of contract instances on different blockchains

        address = request.data.get('address')
        if address is None or not isinstance(address, str):
            return error_response("Param 'address' is empty or not string")

        network_id = request.data.get('network_id')
        if network_id is None or not isinstance(network_id, int):
            return error_response("Param 'network_id' is empty or not int")

        public_access = bool(request.data.get('public_access'))

        instances_db.update({'_id': ObjectId(instance_id)}, {
            '$set': {
                'address': address,
                'network_id': network_id,
                'public_access': public_access
            }
        })

        return JsonResponse({'ok': True}) # todo


class DeleteMy(View):
    """Temporary view"""

    def get(self, request, user_id):
        if not settings.DEBUG:
            return JsonResponse({'ok': False})

        instances_db = db.instances
        instances_db.remove({'user_id': user_id})

        return JsonResponse({'ok': True})

