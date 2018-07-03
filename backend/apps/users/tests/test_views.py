import coincurve
from django.conf import settings
from django_webtest import WebTest
from eth_utils import encode_hex
from ethereum.utils import ecsign, sha3, normalize_key

from utils.ethereum import sign_as_hex


class LoginStartTests(WebTest):
    def test_incorrect_blockchain(self):
        response = self.app.post_json(
            '/api/users/login/start',
            params={"blockchain": "usdchain", "identity": "123"},
            expect_errors=True
        )

        self.assertEqual(response.status_int, 200)
        self.assertJSONEqual(response.body, {'error': "Blockchain 'usdchain' is not supported"})


class LoginViewsIntegrationTests(WebTest):

    eth_priv_key = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3'
    eth_addr = '0x627306090abab3a6e1400e9345bc60c78a8bef57'

    eos_priv_key = '5K75vkoHnPkbggFpuGbb8p5LrWdjr1bY7KhRdnFrQi51RZHe2cD'
    eos_pub_key = 'EOS7eNjDTKnkDmoohBWsS3KRnoCzJcLBZzFWdQrujZUWWcpBHoW5x'


    def test_register_eth_complex(self):

        resp_start = self.app.post_json('/api/users/login/start', params={"blockchain": "ethereum", "identity": self.eth_addr})

        assert 'description' in resp_start.json
        assert 'Sign this text message to login to smartz.io.\nYour address: {}.'.format(self.eth_addr) \
               in resp_start.json['description']

        assert 'rand_data' in resp_start.json
        assert type(resp_start.json['rand_data']) == str
        assert len(resp_start.json['rand_data']) == 32

        signed_data = sign_as_hex(
            "{}{}".format(resp_start.json['description'], resp_start.json['rand_data']),
            self.eth_priv_key
        )


        resp_finish = self.app.post_json(
            '/api/users/login/finish',
            params={
                "blockchain": "ethereum",
                "identity": self.eth_addr,
                "rand_data": resp_start.json['rand_data'],
                "signed_data": signed_data
            }
        )


        assert 'token' in resp_finish.json
        assert type(resp_finish.json['token']) == str
        token = resp_finish.json['token']


        resp = self.app.get('/api/dapps')
        assert 'error' in resp.json
        assert resp.json['error'] == 'not authorized'

        resp = self.app.get('/api/dapps', headers={'x-accesstoken': token})
        assert 'error' not in resp.json
        assert resp.json == []

    def test_register_eos_simple(self):
        pass
        # todo implement sigh