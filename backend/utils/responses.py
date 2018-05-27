import logging

from django.http import JsonResponse


logger = logging.getLogger(__name__)


def error_response(string):
    logger.error('Error response: {}'.format(string))
    return JsonResponse({'error': string})


def engine_error_response(res):
    return JsonResponse(res)