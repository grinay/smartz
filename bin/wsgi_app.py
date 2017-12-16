#!/usr/bin/env python3

import sys
import os
import json

from pymongo import MongoClient
from flask import Flask, abort, request

sys.path.append(os.path.realpath(os.path.join(os.path.dirname(__file__), '..', 'lib')))


app = Flask(__name__)

mongoc = MongoClient()
db = mongoc.sc_ctors_db


@app.route('/register_user')
def register_user():
    """
    input:
        {name: 'bob', mail: '...', pass: 'xx'}
    output:
        {id: '...'} || {error: 'foo'}
    """
    args = _get_input()
    users = db.users

    if users.find_one({'mail': args_string(args, 'mail')}) is not None:
        return _send_error('user already exists')

    user_record = dict((key, nonempty(args_string(args, key))) for key in ['name', 'mail', 'pass'])
    users.insert_one(user_record)

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
