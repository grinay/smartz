#!/usr/bin/env python3                                                                                                                                                                                             import re
import requests
from django.conf import settings

from apps.users.models import AuthToken
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
def auth(request):
    # todo
    if settings.IS_TESTING:
        return '123'

    token = request.META.get('HTTP_X_ACCESSTOKEN')
    if not token or token=='null':
        return error_response('not authorized')

    try:
        auth_token = AuthToken.objects.get(token=token)
    except AuthToken.DoesNotExist:
        url = 'https://{}/userinfo'.format(settings.AUTH0_HOST)
        headers = {'authorization': 'Bearer {}'.format(token)}
        try:
            resp = requests.get(url, headers=headers)
            user_info = resp.json()
            print("[DEBUG][AUTH][USER] {}".format(str(user_info)))
        except Exception:
            return error_response('authorization error')

        auth_token = AuthToken(token=token, user_id=user_info['sub'])
        auth_token.save()

    print("[DEBUG][AUTH] {}".format(auth_token.user_id))
    return auth_token.user_id