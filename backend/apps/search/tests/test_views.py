from django_webtest import WebTest

from apps.contracts_uis.models import ContractUI


class SearchTest(WebTest):

    def test_search_ui(self):
        ui = ContractUI(
            name='erc20',
            slug='erc20',
            blockchain='ethereum',
            address='0x0123456789012345678901234567890123456789',
            description='qqqqqqq',
            functions=[
                {
                    'title': 'arg1'
                }
            ]
        )
        ui.clean()
        ui.save()
        resp = self.app.get(
            '/api/search',
            params={'query':'0x0123456789012345678901234567890123456789'}
        )
        assert 'address' in resp.json
        assert len(resp.json['address']) == 1
        assert 'type' in resp.json['address'][0]
        assert resp.json['address'][0]['type'] == 'contract_ui'
        assert resp.json['address'][0]['data']['slug'] == 'erc20'

    def test_search_without_ui(self):
        resp = self.app.get(
            '/api/search',
            params={'query': '0x0123456789012345678901234567890123456789'}
        )
        assert 'address' in resp.json
        assert len(resp.json['address']) == 0
