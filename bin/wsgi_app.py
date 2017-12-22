#!/usr/bin/env python3
import re
import sys
import os
import json
import tempfile
from shutil import copy2

from pymongo import MongoClient
from bson.objectid import ObjectId

from flask import Flask, abort, request

ROOT_DIR=os.path.realpath(os.path.join(os.path.dirname(__file__), '..'))
DATA_DIR=os.path.join(ROOT_DIR, 'data')
os.makedirs(DATA_DIR, exist_ok=True)

sys.path.append(os.path.join(ROOT_DIR, 'lib'))
sys.path.append(os.path.join(ROOT_DIR, 'constructor_engine'))

from engine import SimpleStorageEngine


app = Flask(__name__)

mongoc = MongoClient()
db = mongoc.sc_ctors_db

ctor_engine = SimpleStorageEngine({'datadir': DATA_DIR})


@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    return response


@app.route('/register_user', methods=['GET', 'POST'])
def register_user():
    args = _get_input()
    users = db.users

    if users.find_one({'mail': args_string(args, 'mail')}) is not None:
        return _send_error('user already exists')

    user_record = dict((key, nonempty(args_string(args, key))) for key in ['name', 'mail', 'pass'])
    users.insert_one(user_record)

    return _send_output({'ok': True})


@app.route('/upload_ctor', methods=['GET', 'POST'])
def upload_ctor():
    args = _get_input()
    ctors = db.ctors

    name = nonempty(args_string(args, 'ctor_name'))
    descr = nonempty(args_string(args, 'ctor_descr')) if 'ctor_descr' in args else ''
    filename = tempfile.mktemp('ctor')

    uploaded_filename = args['ctor_file_name']
    if not re.findall('^[a-zA-Z_]+$', uploaded_filename):
        raise ValueError()
    uploaded_filename = "{}.py".format(uploaded_filename)


    if 'ctor_file_name' in args:
        copy2(os.path.join(ROOT_DIR, 'constructor_examples', uploaded_filename), filename)
    else:
        request.files['ctor_file'].save(filename)

    if ctors.find_one({'ctor_name': name}) is not None:
        return _send_error('ctor with this name already exists')

    ctor_id = ctors.insert_one({'ctor_name': name, 'ctor_descr': descr}).inserted_id.binary.hex()

    ctor_engine.register_new_ctor(ctor_id, filename)

    return _send_output({'ok': True})


@app.route('/list_ctors', methods=['GET', 'POST'])
def list_ctors():
    ctors = db.ctors

    def format_ctor(ctor):
        return {
            'ctor_id': ctor['_id'].binary.hex(),
            'ctor_name': ctor['ctor_name'],
            'ctor_descr': ctor['ctor_descr'] if 'ctor_descr' in ctor else ''
         }

    return _send_output(list(map(format_ctor, ctors.find())))


@app.route('/get_ctor_params', methods=['GET', 'POST'])
def get_ctor_params():
    args = _get_input()
    ctors = db.ctors

    ctor_id = nonempty(args_string(args, 'ctor_id'))
    ctor_info = ctors.find_one({'_id': ObjectId(ctor_id)})
    if ctor_info is None:
        return _send_error('ctor is not found')

    params = ctor_engine.get_ctor_params(ctor_id)
    if isinstance(params, str):
        return _send_error(params)

    def reformat_param(p_name, p_info):
        return {
            'name': p_name,
            'human_name': p_info['title'],
            'type': p_info['type'],
            'desc': p_info['desc']
        }

    return _send_output({
        'ctor_name': ctor_info['ctor_name'],
        'ctor_descr': ctor_info['ctor_descr'] if 'ctor_descr' in ctor_info else '',
        'ctor_params': [reformat_param(n, i) for (n, i) in params.items()]
    })


@app.route('/construct', methods=['GET', 'POST'])
def construct():
    args = _get_input()
    ctors = db.ctors
    instances = db.instances

    ctor_id = nonempty(args_string(args, 'ctor_id'))
    ctor_info = ctors.find_one({'_id': ObjectId(ctor_id)})
    if ctor_info is None:
        return _send_error('ctor is not found')

    fields = args['fields']
    if not isinstance(fields, dict):
        raise TypeError()

    result = ctor_engine.construct(ctor_id, fields)

    if isinstance(result, dict):
        # error
        return _send_output(result)

    # success
    [bin, source, abi] = result
    instance_id = instances.insert_one({'abi': abi}).inserted_id.binary.hex()

    return _send_output({
        'result': 'success',
        'instance_id': instance_id,
        'bin': bin,
        'source': source
    })


@app.route('/get_abi', methods=['GET', 'POST'])
def get_abi():
    args = _get_input()
    ctors = db.ctors
    instances = db.instances

    instance_id = nonempty(args_string(args, 'instance_id'))
    instance_info = instances.find_one({'_id': ObjectId(instance_id)})
    if instance_info is None:
        return _send_error('instance is not found')

    _send_output(instance_info['abi'])


def l(v):
    print(repr(v), file=sys.stderr)
    return v


def _get_input():
    print('[DEBUG]: got input: {}'.format(request.data))
    return json.loads(request.data)


def _send_error(string):
    print('[ERROR]: {}'.format(string))
    return _send_output({'error': string})


def _send_output(output):
    return json.dumps(output)


def args_string(args, key):
    v = args[key]

    if not isinstance(v, str):
        raise TypeError()
    if len(v) > 32*1024:
        raise ValueError()

    return v


def nonempty(v):
    if not v:
        raise ValueError()
    return v


if __name__ == '__main__':
    app.run()
