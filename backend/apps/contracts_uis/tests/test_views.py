from django_webtest import WebTest

from apps.contracts_uis.models import ContractUI
from apps.dapps.models import Dapp
from apps.users.models import User
from apps.users.services import UsersService


class ContractsUIsIntegrationTests(WebTest):

    def test_get_empty(self):
        resp = self.app.get('/api/contracts_uis')
        assert resp.json == []

    def test_get(self):
        ui = ContractUI(
            name='erc20',
            slug='erc20',
            blockchain='ethereum',
            address='0x000',
            description='qqqqqqq',
            functions={
                "fake": {
                    'title': 'arg1'
                }
            }
        )
        ui.clean()
        ui.save()
        resp = self.app.get('/api/contracts_uis')
        assert len(resp.json) == 1
        assert 'name' in resp.json[0]
        assert resp.json[0]['name'] == 'erc20'


class AddTest(WebTest):

    def setUp(self):
        self.user = User()
        self.user.save()

        self.auth_header = {'X_ACCESSTOKEN':  UsersService().generate_token(self.user, 'ethereum')}

    def test_add(self):
        ui = ContractUI(
            name='erc202', slug='erc202', blockchain='ethereum', description='qq',
            functions={
                'transfer': {'title': 'arg1'},
                'symbol': {'title': 'arg1'},
                'decimal': {'title': 'arg1'},
                'name': {'title': 'arg1'},
            },
            abi=ETH_ABI
        )
        ui.full_clean(exclude=['abi', 'created_at', 'updated_at', 'user'])
        ui.save()

        resp = self.app.post_json(
            '/api/contracts_uis/erc202/add-to-dashboard',
            params={
                'network_id': '4',
                'address': '0x000000000000000000000000000000000007'
            },
            headers=self.auth_header
        )
        self.assertIn('ok', resp.json)

        dapps = Dapp.objects.filter(address='0x000000000000000000000000000000000007', network_id='4')
        self.assertEqual(1, len(dapps))
        self.assertEqual(dapps[0].contract_ui, ui)



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