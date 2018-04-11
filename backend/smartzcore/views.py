#!/usr/bin/env python3                                                                                                                                                                                             import re


import sys


from django.conf import settings


from pymongo import MongoClient


# FIXME (make good connect to db)
db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db



def l(v):
    print('[DEBUG]: {}'.format(repr(v)), file=sys.stderr)
    return v


def _error_json(string):
    print('[ERROR]: {}'.format(string))
    return {'error': string}


def _ok_json(result):
    return {'ok': True, 'result': result}


