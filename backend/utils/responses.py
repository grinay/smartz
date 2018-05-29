from django.http import JsonResponse

from smartzcore.service_instances import WithLogger


def error_response(string):
    logger = WithLogger()
    logger.set_logger_name()
    logger.logger.error('Error response: {}'.format(string))
    return JsonResponse({'error': string})


def engine_error_response(res):
    return JsonResponse(res)