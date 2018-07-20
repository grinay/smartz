from django_webtest import WebTest

from apps.contracts_uis.models import ContractUI


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
            functions=[
                {
                    'title': 'arg1'
                }
            ]
        )
        ui.clean()
        ui.save()
        resp = self.app.get('/api/contracts_uis')
        assert len(resp.json) == 1
        assert 'name' in resp.json[0]
        assert resp.json[0]['name'] == 'erc20'