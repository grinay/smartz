from abc import ABCMeta


class BaseCompilerService(metaclass=ABCMeta):
    pass


class EthereumCompilerService(BaseCompilerService):
    pass


class EosCompilerService(BaseCompilerService):
    pass


########################################################################################################################


class BaseContractProcessor(metaclass=ABCMeta):
    pass


class EthereumContractProcessor(BaseContractProcessor):
    pass


class EosContractProcessor(BaseContractProcessor):
    pass
