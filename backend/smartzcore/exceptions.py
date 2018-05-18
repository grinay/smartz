class PublicException(Exception):
    def __init__(self, public_message, *args, **kwargs):
        self.public_message = public_message
        super(PublicException).__init__(*args, **kwargs)
