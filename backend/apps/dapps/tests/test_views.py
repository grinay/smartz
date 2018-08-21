import json

from django_webtest import WebTest

from apps.constructors.models import Constructor
from apps.dapps.models import Dapp, UserDapp
from apps.users.models import User
from apps.users.services import UsersService


class DappsCRUDIntegrationTests(WebTest):
    def setUp(self):
        self.user = User()
        self.user.save()

        self.constructor = Constructor.create(price=0)
        self.constructor.save()


        self.auth_header = {'X_ACCESSTOKEN':  UsersService().generate_token(self.user, 'ethereum')}

    def test_update(self):
        dapp = Dapp.create(constructor=self.constructor)
        dapp.save()
        UserDapp.objects.create(user=self.user, dapp=dapp, title=dapp.title)

        fields = {'address': '0x00', 'network_id': '2', 'has_public_access': True}
        for field, val in fields.items():
            resp = self.app.post_json(
                '/api/dapps/{}/update'.format(dapp.slug),
                params={field: val},
                headers=self.auth_header
            )
            assert resp.status_code == 200
            assert getattr(dapp, field) != val, "field {} mustn't be equal {}".format(field, val)
            dapp.refresh_from_db()
            assert getattr(dapp, field) == val, "field {} must be equal {}".format(field, val)

        user_dapp = UserDapp.objects.get(user=self.user, dapp=dapp)
        resp = self.app.post_json(
            '/api/dapps/{}/update'.format(dapp.slug),
            params={'title': 'new title'},
            headers=self.auth_header
        )
        assert resp.status_code == 200
        self.assertNotEqual(user_dapp.title, 'new title')
        user_dapp.refresh_from_db()
        self.assertEqual(user_dapp.title, 'new title')

    def test_list_cust_title(self):
        dapp = Dapp.create(constructor=self.constructor, address="addr", abi='[]', function_specs=[], dashboard_functions=[])
        dapp.save()
        UserDapp.objects.create(user=self.user, dapp=dapp, title='cust_title')

        resp = self.app.get(
            '/api/dapps'.format(dapp.slug),
            headers=self.auth_header
        )
        assert resp.status_code == 200
        self.assertEqual(resp.json[0]['title'], 'cust_title')

    def test_add_to_dashboard(self):
        user2 = User()
        user2.username = 'username'
        user2.save()

        dapp = Dapp.create(constructor=self.constructor)
        dapp.has_public_access = True
        dapp.title = 'titl'
        dapp.save()
        UserDapp.objects.create(user=user2, dapp=dapp, title=dapp.title)

        assert Dapp.objects.count() == 1

        resp = self.app.post_json(
            '/api/dapps/{}/add-to-dashboard'.format(dapp.slug),
            headers=self.auth_header
        )
        assert resp.status_code == 200
        assert 'ok' in resp.json

        self.assertEqual(1, Dapp.objects.count())
        dapps = Dapp.objects.order_by('created_at').all()
        assert dapps[0].pk == dapp.pk
        self.assertIn(self.user, dapps[0].users.all())
        self.assertIn(user2, dapps[0].users.all())

    def test_create_from_abi(self):
        resp = self.app.post_json(
            '/api/dapps/create-from-abi',
            params={
                'network_id': '4',
                'address': '0x000000000000000000000000000000000007',
                'abi': ETH_ABI,
                'blockchain': 'ethereum'
            },
            headers=self.auth_header
        )
        self.assertIn('ok', resp.json)

        dapps = Dapp.objects.filter(address='0x000000000000000000000000000000000007', network_id='4')
        self.assertEqual(1, len(dapps))
        self.assertEqual(json.loads(dapps[0].function_specs)[0]['name'], 'name')


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
                'function_arguments': [{"title": "arg1", 'description': 'descr', 'value': 'val'}],
                'info': {"ethereum": {"gas_price": 1000}},
                'is_success': True,
                'logs': [
                    {
                        'name': 'call',
                        'created_at': '2018-08-01T22:01:00+03:00',
                        'data': [{'name': 'param1', 'value': 'val1'}]
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
                'function_arguments': [{"title": "arg1", 'description': 'descr', 'value': 'val'}],
                'result': 55,
                'is_success': True,
            },
            headers=self.auth_header,
            expect_errors=True
        )
        assert resp.status_code == 201

        resp = self.app.get('/api/dapps/{}/requests'.format(self.dapp.slug), headers=self.auth_header)
        assert len(resp.json) == 1

ETH_ABI = \
[
   {
      "constant": True,
      "inputs":[

      ],
      "name":"name",
      "outputs":[
         {
            "name":"",
            "type":"string"
         }
      ],
      "payable":False,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":False,
      "inputs":[
         {
            "name":"_spender",
            "type":"address"
         },
         {
            "name":"_value",
            "type":"uint256"
         }
      ],
      "name":"approve",
      "outputs":[
         {
            "name":"success",
            "type":"bool"
         }
      ],
      "payable":False,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":True,
      "inputs":[

      ],
      "name":"totalSupply",
      "outputs":[
         {
            "name":"totalSupply",
            "type":"uint256"
         }
      ],
      "payable":False,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":False,
      "inputs":[
         {
            "name":"_from",
            "type":"address"
         },
         {
            "name":"_to",
            "type":"address"
         },
         {
            "name":"_value",
            "type":"uint256"
         }
      ],
      "name":"transferFrom",
      "outputs":[
         {
            "name":"success",
            "type":"bool"
         }
      ],
      "payable":False,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":True,
      "inputs":[

      ],
      "name":"decimals",
      "outputs":[
         {
            "name":"",
            "type":"uint8"
         }
      ],
      "payable":False,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":False,
      "inputs":[
         {
            "name":"_value",
            "type":"uint256"
         }
      ],
      "name":"burn",
      "outputs":[
         {
            "name":"success",
            "type":"bool"
         }
      ],
      "payable":False,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":True,
      "inputs":[
         {
            "name":"_owner",
            "type":"address"
         }
      ],
      "name":"balanceOf",
      "outputs":[
         {
            "name":"balance",
            "type":"uint256"
         }
      ],
      "payable":False,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":True,
      "inputs":[

      ],
      "name":"symbol",
      "outputs":[
         {
            "name":"",
            "type":"string"
         }
      ],
      "payable":False,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":False,
      "inputs":[
         {
            "name":"_to",
            "type":"address"
         },
         {
            "name":"_value",
            "type":"uint256"
         }
      ],
      "name":"transfer",
      "outputs":[
         {
            "name":"success",
            "type":"bool"
         }
      ],
      "payable":False,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[

      ],
      "payable":False,
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "payable":False,
      "stateMutability":"nonpayable",
      "type":"fallback"
   }

]


EOS_ABI = \
{
  "____comment": "This file was generated by eosio-abigen. DO NOT EDIT - 2018-05-15T09:37:52",
  "types": [],
  "structs": [{
      "name": "account",
      "base": "",
      "fields": [{
          "name": "owner",
          "type": "account_name"
        },{
          "name": "balance",
          "type": "asset"
        }
      ]
    },{
      "name": "transfer",
      "base": "",
      "fields": [{
          "name": "from",
          "type": "account_name"
        },{
          "name": "to",
          "type": "account_name"
        },{
          "name": "quantity",
          "type": "asset"
        }
      ]
    },{
      "name": "issue",
      "base": "",
      "fields": [{
          "name": "to",
          "type": "account_name"
        },{
          "name": "quantity",
          "type": "asset"
        }
      ]
    }
  ],
  "actions": [{
      "name": "transfer",
      "type": "transfer",
      "ricardian_contract": ""
    },{
      "name": "issue",
      "type": "issue",
      "ricardian_contract": ""
    }
  ],
  "tables": [{
      "name": "account",
      "index_type": "i64",
      "key_names": [
        "owner"
      ],
      "key_types": [
        "account_name"
      ],
      "type": "account"
    }
  ],
  "ricardian_clauses": []
}
