#!/usr/bin/env python3                                                                                                                                                                                             import re

import re
import sys
import os
import json
import tempfile
from pprint import pprint


from django.db.models import Model
from django.conf import settings
from django.http import HttpResponse, JsonResponse


from rest_framework import generics, viewsets
from rest_framework.exceptions import MethodNotAllowed, NotFound
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.serializers import Serializer



from shutil import copy2
from urllib.parse import urlparse
from pymongo import MongoClient
from bson.objectid import ObjectId
from jsonschema.validators import validator_for 

from smartz_back.users.models import User

# FIXME (make good connect to db)
db = MongoClient(settings.SMARTZ_MONGO_HOST).sc_ctors_db

# ctor_engine = SimpleStorageEngine({'datadir': DATA_DIR})                                                                                                                                                           



def l(v):
    print('[DEBUG]: {}'.format(repr(v)), file=sys.stderr)
    return v


def _error_json(string):
    print('[ERROR]: {}'.format(string))
    return {'error': string}


def _ok_json(result):
    return {'ok': True, 'result': result}


