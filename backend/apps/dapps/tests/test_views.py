from django_webtest import WebTest

from apps.constructors.models import Constructor
from apps.dapps.models import Dapp
from apps.users.models import User
from apps.users.services import UsersService


class TransactionsCRUDIntegrationTests(WebTest):

    def setUp(self):
        self.constructor = Constructor.create(price=0)
        self.constructor.save()
        self.dapp = Dapp.create(constructor=self.constructor)
        self.dapp.save()

        self.user = User()
        self.user.save()

        self.auth_header = {'X_ACCESSTOKEN':  UsersService().generate_token(self.user, 'ethereum')}

    def test_get_empty(self):
        resp = self.app.get('/api/dapps/{}/transactions'.format(self.dapp.slug))
        assert resp.json == []

    def test_save_error(self):
        resp = self.app.post_json(
            '/api/dapps/{}/transactions'.format(self.dapp.slug),
            params={

            },
            expect_errors=True,
            headers=self.auth_header
        )
        assert resp.status_code == 400

    def test_save(self):
        resp = self.app.post_json(
            '/api/dapps/{}/transactions'.format(self.dapp.slug),
            params={
                'tx_id': 'dddfff000',
                'execution_datetime': '2018-08-01T22:00:00+03:00',
                'mining_datetime': '2018-08-01T22:00:00+03:00',
                'initiator_address': '0xffee00',
                'function_name': 'call_this',
                'function_title': 'Call this',
                'function_description': 'Call this please',
                'function_arguments': [{"title": "arg1"}],
                'info': {"ethereum": {"gas_price": 1000}},
                'is_success': True,
                'logs': [
                    {
                        'name': 'call',
                        'created_at': '2018-08-01T22:01:00+03:00',
                        'data': ['123', '456']
                    }
                ]
            },
            headers=self.auth_header,
            expect_errors=True
        )
        assert resp.status_code == 201


        resp = self.app.get('/api/dapps/{}/transactions'.format(self.dapp.slug), headers=self.auth_header)
        assert len(resp.json) == 1


class RequestsCRUDIntegrationTests(WebTest):

    def setUp(self):
        self.constructor = Constructor.create(price=0)
        self.constructor.save()
        self.dapp = Dapp.create(constructor=self.constructor)
        self.dapp.save()

        self.user = User()
        self.user.save()

        self.auth_header = {'X_ACCESSTOKEN':  UsersService().generate_token(self.user, 'ethereum')}

    def test_get_empty(self):
        resp = self.app.get('/api/dapps/{}/requests'.format(self.dapp.slug))
        assert resp.json == []

    def test_save_error(self):
        resp = self.app.post_json(
            '/api/dapps/{}/requests'.format(self.dapp.slug),
            params={

            },
            expect_errors=True,
            headers=self.auth_header
        )
        assert resp.status_code == 400

    def test_save(self):
        resp = self.app.post_json(
            '/api/dapps/{}/requests'.format(self.dapp.slug),
            params={
                'execution_datetime': '2018-08-01T22:00:00+03:00',
                'initiator_address': '0xffee00',
                'function_name': 'call_this',
                'function_title': 'Call this',
                'function_description': 'Call this please',
                'function_arguments': [{"title": "arg1"}],
                'result': 55,
                'is_success': True,
            },
            headers=self.auth_header,
            expect_errors=True
        )
        assert resp.status_code == 201

        resp = self.app.get('/api/dapps/{}/requests'.format(self.dapp.slug), headers=self.auth_header)
        assert len(resp.json) == 1