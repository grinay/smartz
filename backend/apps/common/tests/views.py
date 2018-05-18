from smartzcore.exceptions import PublicException


def exception_view(request):
    return 1/0


def public_exception_view(request):
    raise PublicException("Custom public error")
