#!/usr/bin/env python3

import sys
import os
import json
import tempfile

from pymongo import MongoClient
from flask import Flask, abort, request

ROOT_DIR=os.path.realpath(os.path.join(os.path.dirname(__file__), '..'))
DATA_DIR=os.path.join(ROOT_DIR, 'data')

sys.path.append(os.path.join(ROOT_DIR, 'lib'))
sys.path.append(os.path.join(ROOT_DIR, 'constructor_engine'))

from engine import SimpleStorageEngine


app = Flask(__name__)

mongoc = MongoClient()
db = mongoc.sc_ctors_db

ctor_engine = SimpleStorageEngine({'datadir': DATA_DIR})


@app.route('/register_user')
def register_user():
    args = _get_input()
    users = db.users

    if users.find_one({'mail': args_string(args, 'mail')}) is not None:
        return _send_error('user already exists')

    user_record = dict((key, nonempty(args_string(args, key))) for key in ['name', 'mail', 'pass'])
    users.insert_one(user_record)

    return _send_output({'ok': True})


@app.route('/upload_ctor')
def upload_ctor():
    args = _get_input()
    ctors = db.ctors

    name = nonempty(args_string(args, 'ctor_name'))
    filename = tempfile.mktemp('ctor')
    request.files['ctor_file'].save(filename)

    if ctors.find_one({'ctor_name': name}) is not None:
        return _send_error('ctor with this name already exists')

    ctor_id = ctors.insert_one({'ctor_name': name}).inserted_id.binary.hex()

    ctor_engine.register_new_ctor(ctor_id, filename)

    return _send_output({'ok': True})


def _get_input():
    return json.loads(request.args['request'])


def _send_error(string):
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
