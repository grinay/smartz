#!/usr/bin/env python3                                                                                                                                                                                             import re
import requests
from django.conf import settings

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


# [TODO] temporary here
def auth(request, db):
    # todo
    if settings.IS_TESTING:
        return '123'

    token = request.META.get('HTTP_X_ACCESSTOKEN')
    if not token:
        return error_response('not authorized')

    user_info = db.auth_tokens.find_one({"token": token})
    if user_info:
       user_id = user_info['user_id']
    else:
        url = 'https://mixbytes.eu.auth0.com/userinfo'
        headers = {'authorization': 'Bearer {}'.format(token)}
        try:
            resp = requests.get(url, headers=headers)
            user_info = resp.json()
            print("[DEBUG][AUTH][USER] {}".format(str(user_info)))
        except Exception:
            return error_response('authorization error')

        user_id = user_info['sub']
        db.auth_tokens.replace_one({"token": token}, {"token": token, 'user_id': user_id}, upsert=True)


    print("[DEBUG][AUTH] {}".format(str(user_id)))
    return user_id