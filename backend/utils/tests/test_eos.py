from unittest import TestCase

from utils.eos import recover_addr_from_signed


class LoginStartTests(TestCase):

    priv_key = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
    pub_key = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV'

    def test_verify(self):

        assert self.pub_key == recover_addr_from_signed(
            # signed by eosjs-ecc message
           'SIG_K1_Kg417TSLuhzSpU2bGa21kD1UNaTfAZSCcKmKpZ6fnx3Nqu22gzG3ND4Twur7bzX8oS1J91JvV4rMJcFycGqFBSaY2SJcEQ',
            "data"
        ), "expected that sign is true"

