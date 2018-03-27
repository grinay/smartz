#!/usr/bin/env python3                                                                                                                                                                                             import re
import json

from django.conf import settings
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics

from pymongo import MongoClient
from bson.objectid import ObjectId

from utils.common import auth
from utils.responses import ok_response, error_response
from pythonlib.smartz.json_schema import load_schema, assert_conforms2schema_part


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


class InstanceDetailsView(generics.GenericAPIView):

    def __init__(self, **kwargs):
        super(InstanceDetailsView, self).__init__(**kwargs)

    def get(self, request, *args, **kwargs):
        # wget -q -O- --header=X-AccessToken:uGVak2qORGvidgG3L982jdhyjQKDP4f9 'http://10.100.8.33/instance/details/?instance_id=5a9aa93cf5ec65000b80d295'
        instances_db = db.instances

        instance_id = request.query_params.get('instance_id')
        if instance_id is None or not isinstance(instance_id, str):
            return error_response("Param 'instance_id' is empty or not string")
            
        instance_info = instances_db.find_one({'_id': ObjectId(instance_id)})
        if instance_info is None:
            return error_response("Instance({}) not found".format(instance_id))

        if not instance_info.get('public_access'):
            # [TODO]  refactor - move to middleware and process auth errors with exceptions
            user_id = auth(request)
            if user_id is None:
                return error_response("Got empty 'user_id' after auth()")
            if not isinstance(user_id, str):
                return error_response("Got non-string 'user_id' after auth()")

            if instance_info['user_id'] != user_id:
                return error_response('Instance({}), deployed by user({}) is not allowed for user({})'.format(instance_id, instance_info['user_id'], user_id))

        if 'address' not in instance_info:
            return error_response('Instance({}) is not yet deployed'.format(instance_id))

        return ok_response(_prepare_instance_details(instance_info))


class InstancesListView(generics.GenericAPIView):

    def __init__(self, **kwargs):
        super(InstancesListView, self).__init__(**kwargs)

    def get(self, request, *args, **kwargs):
        instances_db = db.instances

        user_id = auth(request)
        if user_id is None:
            return error_response("Got empty 'user_id' after auth()")
        if not isinstance(user_id, str):
            return error_response("Got non-string 'user_id' after auth()")

        found_instances = instances_db.find({'user_id': user_id, 'address': {'$exists': True}})
        instances_list = [_prepare_instance_details(i) for i in found_instances]

        return ok_response(instances_list)


#q
@method_decorator(csrf_exempt, name='dispatch')
class UpdateView(View):

    def post(self, request, instance_id):

        instances_db = db.instances

        user_id = auth(request, db)
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

        return ok_response({})

