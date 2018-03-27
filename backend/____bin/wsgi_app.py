#!/usr/bin/env python3
import base64
import re
import sys
import os
import json
import tempfile
from shutil import copy2
from urllib.parse import urlparse

import requests
from pymongo import MongoClient
from bson.objectid import ObjectId
from jsonschema.validators import validator_for

from flask import Flask, abort, request

ROOT_DIR = os.path.realpath(os.path.join(os.path.dirname(__file__), '..'))
DATA_DIR = os.path.join(ROOT_DIR, 'data')
if not os.path.isdir(DATA_DIR):
    raise RuntimeError('DATA_DIR is not found at {}'.format(DATA_DIR))

sys.path.append(os.path.join(ROOT_DIR, 'pythonlib'))
sys.path.append(os.path.join(ROOT_DIR, 'constructor_engine'))

from smartz.json_schema import load_schema, add_definitions, assert_conforms2schema_part
from engine import SimpleStorageEngine


app = Flask(__name__)

mongoc = MongoClient(host=os.environ.get('SMARTZ_MONGO_HOST', 'mongo'), connect=False)
db = mongoc.sc_ctors_db

ctor_engine = SimpleStorageEngine({'datadir': DATA_DIR})



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


@app.route('/get_instance_details', methods=['GET', 'POST'])
def get_instance_details():
    args = _get_input()
    instances = db.instances

    instance_id = nonempty(args_string(args, 'instance_id'))
    instance_info = instances.find_one({'_id': ObjectId(instance_id)})
    if instance_info is None:
        return _send_error('instance is not found')

    if not instance_info.get('public_access'):
        user_id = auth()
        if isinstance(user_id, dict):
            return user_id  # error

        if instance_info['user_id'] != user_id:
            return _send_error('instance is not found')

    if 'address' not in instance_info:
        return _send_error('instance is not yet deployed')

    return _send_output(_prepare_instance_details(instance_info))


@app.route('/get_all_instances', methods=['GET', 'POST'])
def get_all_instances():
    instances = db.instances

    user_id = auth()
    if isinstance(user_id, dict):
        return user_id  # error

    found = instances.find({'user_id': user_id, 'address': {'$exists': True}})

    return _send_output([_prepare_instance_details(i) for i in found])


@app.route('/set_instance_address', methods=['GET', 'POST'])
def set_instance_address():
    args = _get_input()
    ctors = db.ctors
    instances = db.instances

    user_id = auth()
    if isinstance(user_id, dict):
        return user_id  # error

    instance_id = nonempty(args_string(args, 'instance_id'))
    instance_info = instances.find_one({'_id': ObjectId(instance_id), 'user_id': user_id})
    if instance_info is None:
        return _send_error('instance is not found')

    instances.update({'_id': ObjectId(instance_id)}, {
        '$set': {
            'address': nonempty(args_string(args, 'address')),
            'network_id': args_int(args, 'network_id'),
            'public_access': bool(args.get('public_access'))
        }
    })

    return _send_output({'ok': True})


@app.route('/list_instances', methods=['GET', 'POST'])
def list_instances():
    args = _get_input()
    ctors = db.ctors
    instances = db.instances

    user_id = auth()
    if isinstance(user_id, dict):
        return user_id  # error

    ctor_id = nonempty(args_string(args, 'ctor_id'))
    ctor_info = ctors.find_one({'_id': ObjectId(ctor_id)})
    if ctor_info is None:
        return _send_error('ctor is not found')

    return _send_output([i['_id'].binary.hex() for i in instances.find({'ctor_id': ctor_id, 'user_id': user_id})])


@app.route('/clearz', methods=['GET'])
def clearz():
    db.ctors.delete_many({})
    db.instances.delete_many({})
    return _send_output({'ok': True})


def l(v):
    print(repr(v), file=sys.stderr)
    return v


def _get_input():
    print('[DEBUG]: got input: {}'.format(request.data))
    return json.loads(request.data)


def _send_error(string):
    print('[ERROR]: {}'.format(string))
    return _send_output({'error': string})

def _send_engine_error(res):
    if 'error_descr' in res:
        return _send_output({'error': res['error_descr']})
    else:
        return _send_output(res)


def _send_output(output):
    return json.dumps(output)


def args_string(args, key):
    v = args[key]

    if not isinstance(v, str):
        raise TypeError()
    if len(v) > 32*1024:
        raise ValueError()

    return v


def args_int(args, key):
    v = args[key]

    if not isinstance(v, int):
        raise TypeError()

    return v


def nonempty(v):
    if not v:
        raise ValueError()
    return v


def auth():
    token = request.headers.get('X-AccessToken')
    if not token:
        return _send_error('not authorized')

    user_info = db.auth_tokens.find_one({"token": token})
    if user_info:
       user_id =  user_info['user_id']
    else:
        url = 'https://mixbytes.eu.auth0.com/userinfo'
        headers = {'authorization': 'Bearer {}'.format(token)}
        try:
            resp = requests.get(url, headers=headers)
            user_info = resp.json()
            print("[DEBUG][AUTH][USER] {}".format(str(user_info)))
        except Exception:
            return _send_error('authorization error')

        user_id = user_info['sub']
        db.auth_tokens.replace_one({"token": token}, {"token": token, 'user_id': user_id}, upsert=True)


    print("[DEBUG][AUTH] {}".format(str(user_id)))
    return user_id


def process_ctor_schema(schema):
    return add_definitions(schema, load_schema('public/ethereum-sc.json'))




def _ctor_id(id):
    return id.binary.hex()

if __name__ == '__main__':
    app.run()
