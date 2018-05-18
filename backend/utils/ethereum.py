import coincurve
from eth_utils import encode_hex, decode_hex, add_0x_prefix
from ethereum.utils import normalize_key, sha3


def sign_as_hex(text2sign, priv_key):
    """see pyethereum ecsign"""
    pk = coincurve.PrivateKey(normalize_key(priv_key))

    signature = pk.sign_recoverable(
        eth_text2sign(text2sign),
        hasher=None
    )
    return encode_hex(signature)


def recover_addr_from_signed(signed_data, data):
    try:
        pk = coincurve.PublicKey.from_signature_and_message(
            decode_hex(signed_data),
            eth_text2sign(data),
            hasher=None,
        )
        pub = pk.format(compressed=False)[1:]
    except BaseException:
        pub = b"\x00" * 64

    return pubtoaddr(encode_hex(pub))


def pubtoaddr(public_key):
    raw_pub_key = decode_hex(public_key)
    return encode_hex(sha3(raw_pub_key)[12:]).lower()


def eth_text2sign(rawtext):
    return sha3("\x19Ethereum Signed Message:\n{}{}".format(str(len(rawtext)), rawtext))