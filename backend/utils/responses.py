from django.http import JsonResponse


def error_response(string):
    print('[ERROR]: {}'.format(string))
    return JsonResponse({'error': string})


# todo delete this
def ok_response(result):
    return JsonResponse({'ok': True, 'result': result})


def engine_error_response(res):
    return JsonResponse(res)