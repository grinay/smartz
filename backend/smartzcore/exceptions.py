class PublicException(Exception):
    def __init__(self, public_message, *args, **kwargs):
        self.public_message = public_message
        super(PublicException).__init__(*args, **kwargs)


class UnsupportedBlockchain(PublicException):
    def __init__(self, blockchain: str, *args, **kwargs):
        super(UnsupportedBlockchain).__init__("Blockchain {} is not supported".format(blockchain), *args, **kwargs)
