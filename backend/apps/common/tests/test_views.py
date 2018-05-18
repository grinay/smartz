import json

from django.test import TestCase


class ExceptionMiddlewareTests(TestCase):
    def test_exception(self):
        response = self.client.get(
            '/__tests/exception',
            content_type='application/json'
        )

        self.assertEqual(response.status_code, 500)
        self.assertJSONEqual(response.content, {'error': 'Something got wrong'})

    def test_public_exception(self):
        response = self.client.get(
            '/__tests/public_exception',
            content_type='application/json'
        )

        self.assertEqual(response.status_code, 400)
        self.assertJSONEqual(response.content, {'error': 'Custom public error'})
