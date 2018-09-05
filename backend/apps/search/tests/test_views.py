import requests
from django_webtest import WebTest

from apps.constructors.models import Constructor
from apps.contracts_uis.models import ContractUI
from apps.dapps.models import Dapp
from apps.users.models import User


class SearchTest(WebTest):

    def setUp(self):
        self.requests_get = requests.get
        requests.get = lambda params=None, **kwargs: []

    def tearDown(self):
        requests.get = self.requests_get

    def test_search_dapp(self):
        constructor = Constructor.create(price=0)
        constructor.save()
        dapp_testnet = Dapp.create(
            address='0x0123456789012345678901234567890123456789', constructor=constructor,
            abi='[]', function_specs='{}', dashboard_functions='[]', network_id='3', has_public_access=True
        )
        dapp_testnet.save()
        dapp = Dapp.create(
            address='0x0123456789012345678901234567890123456789', constructor=constructor,
            abi='[]', function_specs='{}', dashboard_functions='[]', network_id='1', has_public_access=True
        )
        dapp.save()

        resp = self.app.post_json(
            '/api/search',
            params={
                'query':'0x0123456789012345678901234567890123456789',
                'ethereum_network_id': '1'
            }
        )

        self.assertIn('address', resp.json)
        self.assertIsInstance(resp.json['address'], dict)
        self.assertIn('type', resp.json['address'])
        self.assertEqual(resp.json['address']['type'], 'dapp')

        self.assertIn('dapp', resp.json['address'])
        self.assertIn('id', resp.json['address']['dapp'])
        self.assertEqual(dapp.slug, resp.json['address']['dapp']['id'])

    def test_search_ui(self):
        ui = self.__create_contract_ui()
        resp = self.app.post_json(
            '/api/search',
            params={'query': ui.address, "ethereum_network_id": "1"}
        )
        self.assertIn('address', resp.json)
        self.assertIn('type', resp.json['address'])
        self.assertEqual(resp.json['address']['type'], 'contract_ui')

        self.assertIn('uis', resp.json['address'])
        self.assertEqual(1, len(resp.json['address']['uis']))

        self.assertEqual('erc20', resp.json['address']['uis'][0]['slug'])

    def test_search_abi_eth(self):
        ui = ContractUI(
            name='erc20', slug='erc20', blockchain='ethereum', description='qq',
            functions={
                'transfer': { 'title': 'arg1' },
                'symbol': {'title': 'arg1'},
                'decimal': {'title': 'arg1'},
            },
            abi=[]
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at', 'user'])
        ui.save()

        ui = ContractUI(
            name='erc201', slug='erc201', blockchain='ethereum', description='qq',
            functions={
                'transfer': { 'title': 'arg1' },
                'symbol': {'title': 'arg1'},
                'decimal': {'title': 'arg1'},
                'name': {'title': 'arg1'},
                'approve': {'title': 'arg1'},
            },
            abi=[]
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at', 'user'])
        ui.save()

        ui = ContractUI(
            name='erc202', slug='erc202', blockchain='ethereum', description='qq',
            functions={
                'transfer': { 'title': 'arg1' },
                'symbol': {'title': 'arg1'},
                'decimal': {'title': 'arg1'},
                'name': {'title': 'arg1'},
            },
            abi=[]
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at', 'user'])
        ui.save()

        resp = self.app.post_json(
            '/api/search',
            params={
                'query': '0x0123456789012345678901234567890123456789',
                'abi': self.ETH_ABI
            }
        )
        self.assertIn('address', resp.json)
        self.assertEqual(3, len(resp.json['address']['uis']))
        self.assertEqual('erc201', resp.json['address']['uis'][0]['slug'])
        self.assertEqual('erc202', resp.json['address']['uis'][1]['slug'])
        self.assertEqual('erc20', resp.json['address']['uis'][2]['slug'])

    def test_search_abi_eos(self):
        ui = ContractUI(
            name='erc20', slug='erc20', blockchain='eos', description='qq',
            functions={
                'fake': {'title': 'arg1'},
            },
            abi={}
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at', 'user'])
        ui.save()

        ui = ContractUI(
            name='erc201', slug='erc201', blockchain='eos', description='qq',
            functions={
                'transfer': {'title': 'arg1'},
                'issue': {'title': 'arg1'},
            },
            abi={}
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at', 'user'])
        ui.save()

        ui = ContractUI(
            name='erc202', slug='erc202', blockchain='eos', description='qq',
            functions={
                'transfer': { 'title': 'arg1' },
            },
            abi={}
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at', 'user'])
        ui.save()

        resp = self.app.post_json(
            '/api/search',
            params={
                'query': 'account',
                'abi': self.EOS_ABI
            }
        )
        self.assertIn('address', resp.json)
        self.assertEqual(2, len(resp.json['address']['uis']))
        self.assertEqual('erc201', resp.json['address']['uis'][0]['slug'])
        self.assertEqual('erc202', resp.json['address']['uis'][1]['slug'])

    def test_search_no_abi(self):
        ui = self.__create_contract_ui()
        resp = self.app.post_json(
            '/api/search',
            params={'query': '0x0123456789010000000000000000000000000000'}
        )
        self.assertIn('address', resp.json)
        self.assertIn('type', resp.json['address'])
        self.assertEqual(resp.json['address']['type'], 'no_abi')

        self.assertIn('uis', resp.json['address'])
        self.assertEqual(2, len(resp.json['address']['uis']))

        self.assertEqual('erc201', resp.json['address']['uis'][0]['slug'])

    def test_search_no_network(self):
        ui = self.__create_contract_ui()
        resp = self.app.post_json(
            '/api/search',
            params={'query': ui.address}
        )
        self.assertIn('address', resp.json)
        self.assertIn('type', resp.json['address'])
        self.assertEqual(resp.json['address']['type'], 'no_abi')

        self.assertIn('uis', resp.json['address'])
        self.assertEqual(2, len(resp.json['address']['uis']))

    def __create_contract_ui(self):
        user = User()
        user.save()

        ui_testnet = ContractUI(
            name='erc201',
            slug='erc201',
            blockchain='ethereum',
            address='0x0123456789012345678901234567890123456789',
            network_id='42',
            description='qqqqqqq',
            functions={
                'transfer': {
                    'title': 'arg1'
                }
            },
            abi=[],
            user=user
        )
        ui_testnet.full_clean(exclude=['abi', 'created_at', 'updated_at'])
        ui_testnet.save()

        ui = ContractUI(
            name='erc20',
            slug='erc20',
            blockchain='ethereum',
            address='0x0123456789012345678901234567890123456789',
            network_id='1',
            description='qqqqqqq',
            functions={
                'transfer': {
                    'title': 'arg1'
                }
            },
            abi=[],
            user=user
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at'])
        ui.save()
        return ui

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
