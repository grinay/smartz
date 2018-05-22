#!/usr/bin/env python3                                                                                                                                                                                             import re
from datetime import datetime

import jwt
import pytz
from django.conf import settings

from apps.users.models import User
from utils.responses import error_response


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


# todo temporary here, move to middleware
def auth(request):
    token = request.META.get('HTTP_X_ACCESSTOKEN')
    if not token or token=='null':
        return error_response('not authorized')

    try:
        data = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
    except:
        return error_response('not authorized')

    try:
        user = User.objects.get(pk=data['user_id'])
    except User.DoesNotExist:
        # very strange
        return error_response('not authorized')

    if data['expires_at'] < datetime.now(pytz.timezone(settings.TIME_ZONE)).timestamp():
        return error_response('Token expired. Please log in again')

    print("[DEBUG][AUTH] {}".format(user))
    return user
