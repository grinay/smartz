import json

from django.test import TestCase
from django.urls import reverse

import utils.common

def q(request, db):
    return 123

class ConstructViewTests(TestCase):

    def setUp(self):
        utils.common.auth = q

    def test_payment_code_required(self):
        return
        #todo after postgre

        response = self.client.post(
            reverse('constructor-upload'),
            json.dumps({
                "payment_address": "0x0000000000000000000000000000000000000001",
                "name": "ctor",
                "description": "ctor",
                "ctor_file": ""
            }),
            content_type='application/json'
        )

        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(response.content, {'ok': True})
        # self.assertContains(response, "No polls are available.")
        # self.assertQuerysetEqual(response.context['latest_question_list'], [])
