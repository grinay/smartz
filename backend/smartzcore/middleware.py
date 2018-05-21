import collections
import json

from django.conf import settings
from django.utils.deprecation import MiddlewareMixin
from flex.core import validate_api_request, load
from flex.exceptions import ValidationError

from smartzcore.exceptions import PublicException
from smartzcore.http import error_response


class SmartzMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Headers"] = "content-type,x-accesstoken"
        return response


class JSONMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if 'CONTENT_TYPE' in request.META and 'application/json' in request.META['CONTENT_TYPE']:
            try:
                request.data = json.loads(request.body)
                assert isinstance(request.data, dict), 'Request body must be a dict'
            except Exception:
                request.data = {}
        else:
            request.data = {}

        return self.get_response(request)


class SwaggerRequestValidationMiddleware:
    """Validate swagger schema if exist for current path"""
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.method == 'OPTIONS':
            request.is_swagger_schema_validated = True
            return self.get_response(request)

        schema = load(settings.SMARTZ_INTERNAL_API_SWAGGER_SCHEMA)

        request.is_swagger_schema_validated = False
        try:
            validate_api_request(schema, request)
            request.is_swagger_schema_validated = True
        except ValidationError as err:
            if 'path' in err.detail and isinstance(err.detail['path'], collections.Iterable) \
                    and len(err.detail['path'])>0 and 'No paths found for' in str(err.detail['path'][0]):
                print("[NOTICE] {}".format(str(err.detail['path'][0])))
                request.is_swagger_schema_validated = True
            else:
                print("[ERROR] {}".format(err))
                return error_response(err)

        return self.get_response(request)


class CatchExceptionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        return self.get_response(request)

    def process_exception(self, request, exception):
        # todo maybe only for api
        print("[ERROR] {}".format(str(exception)))

        if isinstance(exception, PublicException):
            return error_response(exception.public_message, 200)
        else:
            return error_response('Something got wrong', 500)
