#!/usr/bin/env python3                                                                                                                                                                                             import re
import json

from django.utils.deprecation import MiddlewareMixin

class SmartzMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Headers"] = "x-accesstoken"
        return response


class JSONMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if 'CONTENT_TYPE' in request.META and 'application/json' in request.META['CONTENT_TYPE']:
            request.data = json.loads(request.body)
        else:
            request.data = {}

        return self.get_response(request)
