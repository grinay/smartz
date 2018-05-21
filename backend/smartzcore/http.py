from django.http import JsonResponse


def error_response(msg, status=200):
    return JsonResponse(
        {
            "error": str(msg)
        },
        status=status
    )


def assert_swagger_schema_validated(func):
    """Assert that swagger schema validation was called"""
    def decorator(view_func):
        def _wrapped_view(request, *args, **kwargs):
            assert hasattr(request, 'is_swagger_schema_validated'), "Swagger schema was not validated"
            assert request.is_swagger_schema_validated, "Invalid swagger schema, but view called"
            return view_func(request, *args, **kwargs)
        return _wrapped_view
    return decorator(func)
