import base58
import hashlib

import coincurve
from coincurve.utils import bytes_to_int, int_to_bytes


def decode_pubkey(key: str):
    """EOS.."""
    if key[:3] != 'EOS':
        raise Exception("Invalid pub key")

    return check_decode(key[3:])


def encode_pubkey(key):
    return 'EOS' + check_encode(key)


def decode_signed_msg(signed_data: str):
    """SIG_K1_.."""
    if signed_data[:7] != 'SIG_K1_':
        raise Exception("Invalid signed data")

    return check_decode(signed_data[7:], 'K1')


def check_decode(key, keytype = None):
    decoded = base58.b58decode(key)

    key_decoded = decoded[:-4]
    checksum = decoded[-4:]

    key_for_hash = key_decoded + keytype.encode() if keytype else key_decoded
    h = hashlib.new('ripemd160')
    h.update(key_for_hash)
    calculated_checksum = h.digest()[:4]

    if checksum != calculated_checksum:
        raise Exception("Invalid checksum")

    return key_decoded


def check_encode(key, keytype = None):

    key_for_hash = key + keytype.encode() if keytype else key
    h = hashlib.new('ripemd160')
    h.update(key_for_hash)
    calculated_checksum = h.digest()[:4]

    return base58.b58encode(key+calculated_checksum).decode()


def recover_addr_from_signed(signed_data, data):
    signed_data_decoded = decode_signed_msg(signed_data)

    # signed_data_decoded[:1] = i
    # signed_data_decoded[1:] = r+s

    i = (bytes_to_int(signed_data_decoded[:1]) - 27 ) & 3

    sign_coincurve = signed_data_decoded[1:] + int_to_bytes(i)

    try:
        pk = coincurve.PublicKey.from_signature_and_message(
            sign_coincurve,
            data.encode()
        )
        pub = pk.format()
    except BaseException:
        pub = b"\x00" * 33

    return encode_pubkey(pub)

    #todo sign and opensource
