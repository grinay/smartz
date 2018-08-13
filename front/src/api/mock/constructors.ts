export const constructorList = [
    {
        'id': '4abfc8a77e26cd3bbced9f45',
        'name': 'Bet me',
        'description': 'Make a bet for whatever you want and invite a specific person to take it or broadcast it widely.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'assertion',
                'deadline',
            ],
            'additionalProperties': true,
            'properties': {
                'assertion': {
                    'title': 'Assertion text',
                    'description': 'You as owner of contract will bet this assertion is true, while your opponent will bet it is false. You can change this later, but just before you make a bet.',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 400,
                    'pattern': '^.+$',
                },
                'deadline': {
                    'title': 'Deadline',
                    'description': 'Dispute should be resolved before this point in time, otherwise no one considered a winner. Choose a date and time in the future, otherwise deploy will fail.',
                    '$ref': '#/definitions/unixTime',
                },
                'arbiterAddr': {
                    'title': 'Arbiter address',
                    'description': 'Arbiter decides is the assertion true, false or can not be checked. She gets the fee for judging and stakes deposit as a guarantee of motivation to get job done. When arbiter agrees to judge, contract\'s terms become inviolable.',
                    '$ref': '#/definitions/address',
                },
                'feePercent': {
                    'title': 'Arbiter fee percent',
                    'description': 'Arbiter fee as % of bet amount, should be in range [0-100). For example, if you bet for 1 ether and feePercent is 10, arbiter will receive 0.1 ether, and the winner will receive 0.9 ether.',
                    '$ref': '#/definitions/ethCount',
                },
                'opponentAddr': {
                    'title': 'Opponent address',
                    'description': 'Opponent bet for assertion is false. Leave this field blank to let anyone become an opponent.',
                    '$ref': '#/definitions/address',
                },
                'arbiterPenaltyAmount': {
                    'title': 'Arbiter penalty amount',
                    'description': 'Ether value to be sent by arbiter as a guarantee of his motivation and returned to him after he made decision.',
                    '$ref': '#/definitions/ethCount',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'deadline': {
                'ui:widget': 'unixTime',
            },
            'feePercent': {
                'ui:widget': 'ethCount',
            },
            'arbiterPenaltyAmount': {
                'ui:widget': 'ethCount',
            },
        },
        'blockchain': 'ethereum',
        'image': 'betme.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 2,
    },
    {
        'id': 'cec1727ed5a63fb9aaf81ff1',
        'name': 'Merkle Airdrop',
        'description': 'Airdrop contract based on Merkle Tree. Very efficient for large airdrop list.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'tokenAddress',
                'merkleRoot',
            ],
            'additionalProperties': false,
            'properties': {
                'tokenAddress': {
                    'title': 'Token address',
                    'description': 'Address of ERC20 token contract to be distributed. Remember to send tokens to your new airdrop contract when it\'s deployed.',
                    '$ref': '#/definitions/address',
                },
                'merkleRoot': {
                    'title': 'Airdrop whitelist',
                    'description': 'Upload .txt file with your Airdrop participant list. File format is <address> <amount in Wei> (one address per line). BE AWARE that addresses should be in lower case and amout of tokens should be in Wei (smallest quant of your token). File will be automatically converted into Merkle Tree format and uploaded to IPFS. Merkle root will be saved to contract, but your should keep IPFS address and provide it to your airdrop users. Example whitelist file:\nhttps://ipfs.io/ipfs/QmcnbeYUmYfRreMuoQSR6R4FpjV155rrjatJ2XQMg5H26u/airdrop_list.txt\n',
                    '$ref': '#/definitions/hash',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'merkleRoot': {
                'ui:widget': 'merkleRoot',
                'ui:options': {
                    'blockchain': 'ethereum',
                },
            },
        },
        'blockchain': 'ethereum',
        'image': 'airdrop.png',
        'is_public': true,
        'user_id': 562,
        'compilations_count': 15,
    },
    {
        'id': '1526f08c6689fbf6f33f7643',
        'name': 'Merkle Airdrop for EOS',
        'description': 'Airdrop contract based on Merkle Tree. Very efficient for large airdrop list.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'tokenSymbol',
                'tokenDecimals',
                'tokenContractName',
            ],
            'additionalProperties': false,
            'eosProps': {
                'permissions': [
                    {
                        'name': 'eosio.code',
                    },
                ],
            },
            'properties': {
                'tokenSymbol': {
                    'title': 'Token symbol',
                    'description': 'Symbol of token for airdrop (1..7 characters, upper case only)',
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 7,
                    'pattern': '^[A-Z]+$',
                },
                'tokenDecimals': {
                    'title': 'Token decimals',
                    'description': 'Token decimals count (0..255)',
                    'type': 'integer',
                    'minLength': 0,
                    'maxLength': 255,
                },
                'tokenContractName': {
                    'title': 'Token contract name',
                    'description': 'Name of token contract (1..12 characters, lower case only)',
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 12,
                    'pattern': '^[a-z.]+$',
                },
            },
            'definitions': {
                'account_name': {
                    'type': 'string',
                    'pattern': '^[1-5a-z]{2,12}$',
                },
                'name': {
                    'type': 'string',
                    'pattern': '^[1-5a-z]{2,12}$',
                },
                'asset': {
                    'type': 'string',
                    'pattern': '^[0-9]+\\.[0-9]+\\ [A-Z]+',
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'checksum256': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'eos',
        'image': 'airdrop-eos.png',
        'is_public': true,
        'user_id': 562,
        'compilations_count': 10,
    },
    {
        'id': '5aaa7a85ab3d71000bd0c69d',
        'name': 'ERC20 Token',
        'description': 'Standard ERC20 token with custom name, ticker and optional minting, burning, emission limit, premint and pause functions.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'name',
                'symbol',
                'decimals',
            ],
            'additionalProperties': false,
            'properties': {
                'name': {
                    'title': 'Name of a token',
                    'description': 'Token human-friendly name (3..100 characters, letters, digits and spaces only)',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 100,
                    'pattern': '^[a-zA-Z0-9 ]+$',
                },
                'symbol': {
                    'title': 'Token Symbol',
                    'description': 'Token ticker (2..10 characters, letters and digits only)',
                    'type': 'string',
                    'minLength': 2,
                    'maxLength': 10,
                    'pattern': '^[a-zA-Z0-9]+$',
                },
                'decimals': {
                    'title': 'Decimals',
                    'description': 'Token decimals (0..18)',
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18,
                },
                'is_mintable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is mintable',
                    'description': 'Can token owner mint new tokens?',
                },
                'max_tokens_count': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 9223372036854776000,
                    'default': 100,
                    'title': 'Max tokens count',
                    'description': 'Max tokens count. Used for mintable tokens. Leave blank for unlimited tokens count',
                },
                'premint': {
                    'type': 'integer',
                    'default': 50,
                    'minimum': 1,
                    'maximum': 9223372036854776000,
                    'title': 'Premint tokens',
                    'description': 'Premint tokens will be sent to token owner. Leave blank for no premint',
                },
                'is_burnable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is token burnable?',
                    'description': 'Can token holders burn their tokens?',
                },
                'is_pausable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is token pausable?',
                    'description': 'Token owner will be able to pause token functions',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'ethereum',
        'image': 'erc-20.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 387,
    },
    {
        'id': '24edba7fcea109e727b79953',
        'name': 'EOS simple token',
        'description': 'Example of token for EOS platform',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'ticker',
                'decimals',
            ],
            'additionalProperties': false,
            'properties': {
                'ticker': {
                    'title': 'Token ticker',
                    'description': 'Only uppercase symbols (with length 3-7)',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 7,
                    'pattern': '^[A-Z][A-Z0-5]+$',
                },
                'decimals': {
                    'title': 'Decimals',
                    'description': 'Token decimals (0..8)',
                    'type': 'integer',
                    'min': 0,
                    'max': 8,
                },
            },
            'definitions': {
                'account_name': {
                    'type': 'string',
                    'pattern': '^[1-5a-z]{2,12}$',
                },
                'name': {
                    'type': 'string',
                    'pattern': '^[1-5a-z]{2,12}$',
                },
                'asset': {
                    'type': 'string',
                    'pattern': '^[0-9]+\\.[0-9]+\\ [A-Z]+',
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'checksum256': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'eos',
        'image': '',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 77,
    },
    {
        'id': 'f8df8d0f873c1d21b4302483',
        'name': 'ERC721 Token',
        'description': 'Standard ERC721 non-fungible token',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'name',
                'symbol',
            ],
            'additionalProperties': false,
            'properties': {
                'name': {
                    'title': 'Name of a token',
                    'description': 'Token human-friendly name (3..100 characters, letters, digits and spaces only)',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 100,
                    'pattern': '^[a-zA-Z0-9 ]+$',
                },
                'symbol': {
                    'title': 'Token Symbol',
                    'description': 'Token ticker (2..10 characters, letters and digits only)',
                    'type': 'string',
                    'minLength': 2,
                    'maxLength': 10,
                    'pattern': '^[a-zA-Z0-9]+$',
                },
                'max_tokens_count': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 9223372036854776000,
                    'default': 100,
                    'title': 'Max tokens count',
                    'description': 'Max tokens count. Used for mintable tokens. Leave blank for unlimited tokens count',
                },
                'is_burnable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is token burnable?',
                    'description': 'Can token holders burn their tokens?',
                },
                'is_pausable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is token pausable?',
                    'description': 'Token owner will be able to pause token functions',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'ethereum',
        'image': 'erc721.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 159,
    },
    {
        'id': '5aaa7a76ab3d71000bd0c69c',
        'name': 'Simple ICO',
        'description': 'Simple and reliable smart contracts system for ICO. You get ERC20 token with custom name and ticker and crowdsale with settable sale period, hardcap and token to Ether rate.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'name',
                'symbol',
                'date_start',
                'date_end',
                'rate',
                'hard_cap',
                'funds_address',
            ],
            'additionalProperties': false,
            'properties': {
                'name': {
                    'title': 'Name of a token',
                    'description': 'Token human-friendly name (3..100 characters, letters, digits and spaces only)',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 100,
                    'pattern': '^[a-zA-Z0-9 ]+$',
                },
                'symbol': {
                    'title': 'Token Symbol',
                    'description': 'Token ticker (2..10 characters, letters and digits only)',
                    'type': 'string',
                    'minLength': 2,
                    'maxLength': 10,
                    'pattern': '^[a-zA-Z0-9]+$',
                },
                'is_burnable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is token burnable?',
                    'description': 'Can token holders burn their tokens?',
                },
                'date_start': {
                    'title': 'Start date',
                    'description': 'ICO start date and time (UTC)',
                    '$ref': '#/definitions/unixTime',
                },
                'date_end': {
                    'title': 'End date',
                    'description': 'ICO end date and time (UTC)',
                    '$ref': '#/definitions/unixTime',
                },
                'rate': {
                    'title': 'Exchange rate',
                    'description': 'Tokens to issue per 1 Ether',
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 1000000,
                },
                'hard_cap': {
                    'title': 'Hard cap',
                    'description': 'Hard cap in Ether',
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 1000000000,
                },
                'funds_address': {
                    'title': 'Funds address',
                    'description': 'All collected funds will be transferred to this address',
                    '$ref': '#/definitions/address',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'date_start': {
                'ui:widget': 'unixTime',
            },
            'date_end': {
                'ui:widget': 'unixTime',
            },
        },
        'blockchain': 'ethereum',
        'image': 'simple-ico.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 118,
    },
    {
        'id': '5afdfdba4f815b000abfc02e',
        'name': 'Crowdfunding for ERC20 token',
        'description': 'Easily raise Ether funds for your startup in exchange for your ERC20 tokens. Just deploy and share the dapp link to your potential contributors.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'name',
                'symbol',
                'date_start',
                'date_end',
                'rate',
                'hard_cap',
                'funds_address',
            ],
            'additionalProperties': false,
            'properties': {
                'name': {
                    'title': 'Public name of the token',
                    'description': 'Usually coincides with a project name, 3 to 100 symbols',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 100,
                    'pattern': '^[a-zA-Z0-9 ]+$',
                },
                'symbol': {
                    'title': 'Token ticker',
                    'description': 'Public short designation of your token, used by exchanges and not only. Check for matches with existing tokens. 2 to 10 characters, letters and digits only',
                    'type': 'string',
                    'minLength': 2,
                    'maxLength': 10,
                    'pattern': '^[a-zA-Z0-9]+$',
                },
                'is_burnable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is token burnable?',
                    'description': 'If checked, token holders will be able to destroy own tokens by burning them',
                },
                'date_start': {
                    'title': 'Crowdfunding start time',
                    'description': 'Pick the day and UTC time when your crowdfunding campaing will start. Until this time all Ether sent to contract will return. Actual start time may bе a few minutes late. Should be in future',
                    '$ref': '#/definitions/unixTime',
                },
                'date_end': {
                    'title': 'Crowdfunding end time',
                    'description': 'Pick the day and UTC time when your crowdfunding campaing will start. Until this time all Ether sent to contract will return. Actual end time may bе a few minutes late. Should be in future and after the start time',
                    '$ref': '#/definitions/unixTime',
                },
                'rate': {
                    'title': 'Ether-token exchange rate',
                    'description': 'How many tokens will your donators get for each donaed Ether. From 1 to 1 million',
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 1000000,
                },
                'hard_cap': {
                    'title': 'Hard cap',
                    'description': 'Maximum amount of funds to raise. After this amount collected all Ether sent to contract will return. From 1 to 1 billion',
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 1000000000,
                },
                'funds_address': {
                    'title': 'Ether vault address',
                    'description': 'All collected Ether will be transferred to this address. We strongly recommend a secure multisignature wallet contract',
                    '$ref': '#/definitions/address',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'date_start': {
                'ui:widget': 'unixTime',
            },
            'date_end': {
                'ui:widget': 'unixTime',
            },
        },
        'blockchain': 'ethereum',
        'image': 'crowdfunding-erc20.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 69,
    },
    {
        'id': '5abd2628882820000c1ebf56',
        'name': 'Smartz token',
        'description': 'ERC20-compatible token with additional features: freezing tokens, burning tokens, approveAndCall function. Used as Smartz platform token.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'signs_count',
                'owners',
                'name',
                'symbol',
                'decimals',
            ],
            'additionalProperties': false,
            'properties': {
                'signs_count': {
                    'type': 'integer',
                    'minimum': 1,
                    'default': 2,
                    'maximum': 250,
                    'title': 'Signatures quorum',
                    'description': 'Number of signatures required to send control transactions',
                },
                'owners': {
                    'title': 'Addresses of owners',
                    'description': 'Addresses (signatures) of owners of a token',
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                    'minItems': 1,
                    'maxItems': 250,
                },
                'name': {
                    'title': 'Name of a token',
                    'description': 'Token human-friendly name (3..100 characters, letters, digits and spaces only)',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 100,
                    'pattern': '^[a-zA-Z0-9 ]+$',
                },
                'symbol': {
                    'title': 'Token Symbol',
                    'description': 'Token ticker (2..10 characters, letters and digits only)',
                    'type': 'string',
                    'minLength': 2,
                    'maxLength': 10,
                    'pattern': '^[a-zA-Z0-9]+$',
                },
                'decimals': {
                    'title': 'Decimals',
                    'description': 'Token decimals (0..18)',
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18,
                },
                'premint2sender': {
                    'title': 'Tokens for creator',
                    'description': 'Send this amount of tokens (in base units) to the deployer of the token.',
                    '$ref': '#/definitions/uint',
                },
                'is_burnable': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Is token burnable?',
                    'description': 'Can token holders burn their tokens?',
                },
                'has_approveAndCall': {
                    'type': 'boolean',
                    'default': false,
                    'title': 'Add approveAndCall function?',
                    'description': 'This function allows token holder to pay other contract in tokens and immediately get desired actions from the called contract.',
                },
                'frozen_premint': {
                    'title': 'Preminted frozen tokens',
                    'description': 'Give some tokens to holders right after token construction, but in frozen state.',
                    'type': 'array',
                    'items': {
                        'type': 'object',
                        'required': [
                            'holder',
                            'amount',
                            'thaw_ts',
                        ],
                        'additionalProperties': false,
                        'properties': {
                            'holder': {
                                'title': 'Address of token holder',
                                '$ref': '#/definitions/address',
                            },
                            'amount': {
                                'title': 'Amount of tokens',
                                'description': 'Specified in the smallest units of the token.',
                                '$ref': '#/definitions/uint',
                            },
                            'thaw_ts': {
                                'title': 'Date and time of unfreezing',
                                'description': 'On this time tokens of this holder will become available for transfer and spending.',
                                '$ref': '#/definitions/unixTime',
                            },
                        },
                    },
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'frozen_premint': {
                'items': {
                    'thaw_ts': {
                        'ui:widget': 'unixTime',
                    },
                },
            },
        },
        'blockchain': 'ethereum',
        'image': 'smartz-token.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 26,
    },
    {
        'id': '5aaa7aa2ab3d71000bd0c69f',
        'name': 'Multisignature Wallet',
        'description': 'Wallet contract to keep your funds under defence of more than one signature. Number of signatures and quorum are adjustable, for example 2/3 or 3/5.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'signs_count',
                'owners',
            ],
            'additionalProperties': false,
            'properties': {
                'signs_count': {
                    'type': 'integer',
                    'minimum': 1,
                    'default': 2,
                    'maximum': 250,
                    'title': 'Signatures quorum',
                    'description': 'Number of signatures required to withdraw funds or modify signatures',
                },
                'owners': {
                    'title': 'Addresses of owners',
                    'description': 'Addresses (signatures) of owners of a new wallet',
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                    'minItems': 1,
                    'maxItems': 250,
                },
                'thaw_ts': {
                    'title': 'Thaw time',
                    'description': 'Until that time any funds or tokens which is held by this contract will be frozen - no one will be able to transfer it.',
                    '$ref': '#/definitions/unixTime',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'signs_count': {
                'ui:widget': 'updown',
            },
            'owners': {
                'items': {
                    'ui:placeholder': 'Valid Ethereum address',
                },
                'ui:options': {
                    'orderable': false,
                },
            },
            'thaw_ts': {
                'ui:widget': 'unixTime',
            },
        },
        'blockchain': 'ethereum',
        'image': 'multisig.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 59,
    },
    {
        'id': '5ac50d4e34d83a000d115517',
        'name': 'Atomic Swap for ERC20',
        'description': 'Two participants can swap tokens for ether or tokens with this simple smart contract.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'participant1',
                'participant2',
            ],
            'additionalProperties': false,
            'properties': {
                'participant1': {
                    'type': 'object',
                    'title': 'Participant #1',
                    'required': [
                        'token',
                        'count',
                    ],
                    'properties': {
                        'use_my_address': {
                            'type': 'boolean',
                            'title': 'Use my address',
                            'description': 'Deployer\'s address would be got as participant #1 address',
                            'default': true,
                        },
                        'token': {
                            'title': 'Token address',
                            'description': 'Address of ERC20 token smart contract, which participant #1 will swap',
                            '$ref': '#/definitions/address',
                        },
                        'count': {
                            'title': 'Tokens count',
                            'description': 'Tokens count, which participant #1 will swap for participant #2 tokens/ether. Token decimals must be <= 18',
                            'type': 'string',
                            'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                        },
                    },
                    'dependencies': {
                        'use_my_address': {
                            'oneOf': [
                                {
                                    'properties': {
                                        'use_my_address': {
                                            'enum': [
                                                true,
                                            ],
                                        },
                                    },
                                },
                                {
                                    'properties': {
                                        'use_my_address': {
                                            'enum': [
                                                false,
                                            ],
                                        },
                                        'address': {
                                            'title': 'Address',
                                            'description': 'Address where tokens/ether from participant #2 will be sent',
                                            '$ref': '#/definitions/address',
                                        },
                                    },
                                    'required': [
                                        'address',
                                    ],
                                },
                            ],
                        },
                    },
                },
                'participant2': {
                    'type': 'object',
                    'title': 'Participant #2',
                    'required': [
                        'swap_type',
                    ],
                    'properties': {
                        'swap_type': {
                            'title': 'Swap type',
                            'description': 'Swap tokens of participant #1 for participant\'s #2:',
                            'type': 'string',
                            'enum': [
                                'Ether',
                                'ERC20 tokens',
                            ],
                            'default': 'Ether',
                        },
                        'use_my_address': {
                            'type': 'boolean',
                            'title': 'Use my address',
                            'description': 'Deployer\'s address would be got as participant #1 address',
                            'default': false,
                        },
                    },
                    'dependencies': {
                        'use_my_address': {
                            'oneOf': [
                                {
                                    'properties': {
                                        'use_my_address': {
                                            'enum': [
                                                true,
                                            ],
                                        },
                                    },
                                },
                                {
                                    'properties': {
                                        'use_my_address': {
                                            'enum': [
                                                false,
                                            ],
                                        },
                                        'address': {
                                            'title': 'Address',
                                            'description': 'Address where tokens/ether from participant #1 will be sent',
                                            '$ref': '#/definitions/address',
                                        },
                                    },
                                    'required': [
                                        'address',
                                    ],
                                },
                            ],
                        },
                        'swap_type': {
                            'oneOf': [
                                {
                                    'properties': {
                                        'swap_type': {
                                            'enum': [
                                                'Ether',
                                            ],
                                        },
                                        'count': {
                                            'title': 'Ether count',
                                            'description': 'Ether count, which participant #2 will swap for participant #2 tokens',
                                            'type': 'string',
                                            'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                                        },
                                    },
                                    'required': [
                                        'count',
                                    ],
                                },
                                {
                                    'properties': {
                                        'swap_type': {
                                            'enum': [
                                                'ERC20 tokens',
                                            ],
                                        },
                                        'token': {
                                            'title': 'Token address',
                                            'description': 'Address of ERC20 token smart contract, which participant #2 will swap',
                                            '$ref': '#/definitions/address',
                                        },
                                        'count': {
                                            'title': 'Tokens count',
                                            'description': 'Tokens count, which participant #2 will swap for participant #1 tokens. . Token decimals must be <= 18',
                                            'type': 'string',
                                            'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                                        },
                                    },
                                    'required': [
                                        'token',
                                        'count',
                                    ],
                                },
                            ],
                        },
                    },
                },
                'check_transfers': {
                    'type': 'boolean',
                    'title': 'Verify token transfers',
                    'description': 'Verify that token balances of participants after swap are greater for the amount of transfer (or more). If not, the transaction will be canceled.',
                    'default': true,
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'participant1': {
                'ui:order': [
                    '*',
                    'token',
                    'count',
                ],
            },
            'participant2': {
                'swap_type': {
                    'ui:widget': 'radio',
                },
            },
        },
        'blockchain': 'ethereum',
        'image': 'atomic-swap-erc20.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 15,
    },
    {
        'id': '5ada07d44a5ad7000a19d643',
        'name': 'Ledger',
        'description': 'Universal registry contract to store hashes of any important documents.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'description',
                'name',
                'record_name',
            ],
            'properties': {
                'name': {
                    'title': 'Ledger name',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 200,
                    'pattern': '^[a-zA-Z0-9,\\.\\?\\$\\:\\& ]+$',
                },
                'description': {
                    'title': 'Ledger description',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 1000,
                    'pattern': '^[a-zA-Z0-9,\\.\\?\\$\\:\\& ]+$',
                },
                'record_name': {
                    'title': 'Record name',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 1000,
                    'pattern': '^[a-zA-Z0-9 ]+$',
                },
                'text_field': {
                    'title': 'Text field',
                    'type': 'object',
                    'properties': {
                        'use_text_field': {
                            'type': 'boolean',
                            'title': 'Use text field',
                            'description': 'Todo',
                            'default': true,
                        },
                    },
                    'dependencies': {
                        'use_text_field': {
                            'oneOf': [
                                {
                                    'properties': {
                                        'use_text_field': {
                                            'enum': [
                                                false,
                                            ],
                                        },
                                    },
                                },
                                {
                                    'properties': {
                                        'use_text_field': {
                                            'enum': [
                                                true,
                                            ],
                                        },
                                        'text_field_descr': {
                                            'title': 'Text field description',
                                            'type': 'string',
                                            'minLength': 3,
                                            'maxLength': 30,
                                            'pattern': '^[a-zA-Z0-9,\\.\\?\\$\\:\\& ]+$',
                                        },
                                    },
                                    'required': [
                                        'text_field_descr',
                                    ],
                                },
                            ],
                        },
                    },
                },
                'text_hash_field': {
                    'title': 'Text hash field',
                    'type': 'object',
                    'properties': {
                        'use_text_hash_field': {
                            'type': 'boolean',
                            'title': 'Use text hash field',
                            'description': 'Todo',
                            'default': false,
                        },
                    },
                    'dependencies': {
                        'use_text_hash_field': {
                            'oneOf': [
                                {
                                    'properties': {
                                        'use_text_hash_field': {
                                            'enum': [
                                                false,
                                            ],
                                        },
                                    },
                                },
                                {
                                    'properties': {
                                        'use_text_hash_field': {
                                            'enum': [
                                                true,
                                            ],
                                        },
                                        'text_hash_field_descr': {
                                            'title': 'Text hash field description',
                                            'type': 'string',
                                            'minLength': 3,
                                            'maxLength': 30,
                                            'pattern': '^[a-zA-Z0-9,\\.\\?\\$\\:\\& ]+$',
                                        },
                                    },
                                    'required': [
                                        'text_hash_field_descr',
                                    ],
                                },
                            ],
                        },
                    },
                },
                'url_field': {
                    'title': 'Url field',
                    'type': 'object',
                    'properties': {
                        'use_url_field': {
                            'type': 'boolean',
                            'title': 'Use url field',
                            'description': 'Todo',
                            'default': false,
                        },
                    },
                    'dependencies': {
                        'use_url_field': {
                            'oneOf': [
                                {
                                    'properties': {
                                        'use_url_field': {
                                            'enum': [
                                                false,
                                            ],
                                        },
                                    },
                                },
                                {
                                    'properties': {
                                        'use_url_field': {
                                            'enum': [
                                                true,
                                            ],
                                        },
                                        'url_field_descr': {
                                            'title': 'Url field description',
                                            'type': 'string',
                                            'minLength': 3,
                                            'maxLength': 30,
                                            'pattern': '^[a-zA-Z0-9,\\.\\?\\$\\:\\& ]+$',
                                        },
                                    },
                                    'required': [
                                        'url_field_descr',
                                    ],
                                },
                            ],
                        },
                    },
                },
                'file_hash_field': {
                    'title': 'File hash field',
                    'type': 'object',
                    'properties': {
                        'use_file_hash_field': {
                            'type': 'boolean',
                            'title': 'Use file hash field',
                            'description': 'Todo',
                            'default': false,
                        },
                    },
                    'dependencies': {
                        'use_file_hash_field': {
                            'oneOf': [
                                {
                                    'properties': {
                                        'use_file_hash_field': {
                                            'enum': [
                                                false,
                                            ],
                                        },
                                    },
                                },
                                {
                                    'properties': {
                                        'use_file_hash_field': {
                                            'enum': [
                                                true,
                                            ],
                                        },
                                        'file_hash_field_descr': {
                                            'title': 'File hash field description',
                                            'type': 'string',
                                            'minLength': 3,
                                            'maxLength': 30,
                                            'pattern': '^[a-zA-Z0-9,\\.\\?\\$\\:\\& ]+$',
                                        },
                                    },
                                    'required': [
                                        'file_hash_field_descr',
                                    ],
                                },
                            ],
                        },
                    },
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'text_field': {
                'ui:order': [
                    'use_text_field',
                    '*',
                ],
            },
            'text_hash_field': {
                'ui:order': [
                    'use_text_hash_field',
                    '*',
                ],
            },
            'url_field': {
                'ui:order': [
                    'use_url_field',
                    '*',
                ],
            },
            'file_hash_field': {
                'ui:order': [
                    'use_file_hash_field',
                    '*',
                ],
            },
        },
        'blockchain': 'ethereum',
        'image': 'ledger.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 34,
    },
    {
        'id': '5ada07c94a5ad7000a19d642',
        'name': 'Booking',
        'description': 'Contract for the rental of real estate',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'address',
                'price',
                'cancellationFee',
                'rentDateStart',
                'rentDateEnd',
                'noCancelPeriod',
                'acceptObjectPeriod',
            ],
            'additionalProperties': false,
            'properties': {
                'address': {
                    'title': 'Object address',
                    'description': 'Including such details as: city, street, house, apartment',
                    'type': 'string',
                    'minLength': 10,
                    'maxLength': 300,
                    'pattern': '^[a-zA-Z0-9а-яА-ЯёЁ,\\.\\?\\/\\!\\?\\@\\#\\$\\%\\^\\&\\*\\(\\)\\-\\+\\[\\]\\{\\}"\\:\\;\\<\\> ]+$',
                },
                'description': {
                    'title': 'Object description',
                    'description': 'Additional object description (quality of the object, tips on how to get there, etc)',
                    'type': 'string',
                    'minLength': 20,
                    'maxLength': 500,
                    'pattern': '^[a-zA-Z0-9а-яА-ЯёЁ,\\.\\?\\/\\!\\?\\@\\#\\$\\%\\^\\&\\*\\(\\)\\-\\+\\[\\]\\{\\}"\\:\\;\\<\\> ]+$',
                },
                'rentDateStart': {
                    'title': 'Start rent time',
                    '$ref': '#/definitions/unixTime',
                },
                'rentDateEnd': {
                    'title': 'End rent time',
                    '$ref': '#/definitions/unixTime',
                },
                'price': {
                    'title': 'Price',
                    'description': 'Price in ether for rent of object for whole rent period',
                    '$ref': '#/definitions/ethCountPositive',
                },
                'fileUrl': {
                    'title': 'Url of file with additional description',
                    'description': 'Photo, pdf, presentation',
                    'type': 'string',
                    'minLength': 10,
                    'maxLength': 300,
                },
                'fileHash': {
                    'title': 'Hash of file above',
                    'description': 'Just upload file, hash will be calculated automatically',
                    '$ref': '#/definitions/hash',
                },
                'noCancelPeriod': {
                    'title': 'No cancel time (in hours)',
                    'description': 'After this time before start rent time cancellation fee would be collected from the customer',
                    'type': 'integer',
                },
                'acceptObjectPeriod': {
                    'title': 'Accept object time (in hours)',
                    'description': 'Time for customer after start rent time to accept object',
                    'type': 'integer',
                },
                'cancellationFee': {
                    'title': 'Cancellation fee',
                    'description': 'For canceling after "no cancel" time. In ether',
                    '$ref': '#/definitions/ethCount',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'fileHash': {
                'ui:widget': 'fileHash',
            },
            'rentDateStart': {
                'ui:widget': 'unixTime',
            },
            'rentDateEnd': {
                'ui:widget': 'unixTime',
            },
        },
        'blockchain': 'ethereum',
        'image': 'booking.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 9,
    },
    {
        'id': '5aaa7aaeab3d71000bd0c6a0',
        'name': 'Simple Voting',
        'description': 'Just simple and robust ballot contract. Suitable for fast cooking crypto-protected voting in any organisation.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'name',
                'variants',
            ],
            'additionalProperties': false,
            'properties': {
                'name': {
                    'title': 'Ballot topic',
                    'description': 'Name or description of the vote (string of 200 chars max)',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 200,
                    'pattern': '^[a-zA-Z0-9,\\.\\? \\:а-яА-Я]+$',
                },
                'variants': {
                    'title': 'Variants',
                    'description': 'List of answer variants. One account can vote only for one variant',
                    'type': 'array',
                    'minItems': 1,
                    'maxItems': 100,
                    'items': {
                        'title': 'Variant',
                        'type': 'string',
                        'minLength': 1,
                        'maxLength': 200,
                        'pattern': '^[a-zA-Z0-9,\\.\\? а-яА-Я]+$',
                    },
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'ethereum',
        'image': 'simple-voting.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 69,
    },
    {
        'id': '5ac50d5a34d83a000d115518',
        'name': 'Multitoken',
        'description': 'Inside this smart contract you can create a variety of non-ERC20 tokens.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'mask',
                'decimals',
            ],
            'additionalProperties': false,
            'properties': {
                'decimals': {
                    'title': 'Decimals',
                    'description': 'Token decimals (0..18)',
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18,
                    'default': 18,
                },
                'mask': {
                    'type': 'string',
                    'default': '0xffffffff',
                    'title': 'Mask for subtokens ID',
                    'description': 'Logical operation AND of subtoken ID and mask must be TRUE',
                    'pattern': '^0x[0-9a-zA-Z]{1,16}$',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'ethereum',
        'image': 'multitoken.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 54,
    },
    {
        'id': '5af135eb84f78a000a8f6533',
        'name': 'Smartz platform features',
        'description': 'Demo of smartz platform features (widgets and the like). Deploy it and look at the dashboard!',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'string',
                'integer',
                'enum',
            ],
            'additionalProperties': false,
            'properties': {
                'string': {
                    'title': 'String field',
                    'description': 'Length from 3 to 30 characters wit pattern [0-9a-z]. Required',
                    'type': 'string',
                    'minLength': 3,
                    'maxLength': 30,
                    'pattern': '^[a-z0-9]+$',
                },
                'integer': {
                    'title': 'Integer field',
                    'description': 'from 2 to 100 inclusive. Required',
                    'minimum': 2,
                    'maximum': 100,
                    'type': 'integer',
                },
                'boolean_checkbox': {
                    'title': 'Boolean field with checkbox',
                    'type': 'boolean',
                },
                'enum': {
                    'title': 'Radiobox (several string variants)',
                    'description': 'Default - variant 2',
                    'type': 'string',
                    'default': 'Without errors',
                    'enum': [
                        'Global error',
                        'Without errors',
                        'Fields error',
                    ],
                },
                'address': {
                    'title': 'Address',
                    'description': 'See for more definitions https://github.com/smartzplatform/SDK/blob/master/json-schema/ethereum-sc.json',
                    '$ref': '#/definitions/address',
                },
                'number': {
                    'title': 'Float field',
                    'description': 'from 2 to 100 inclusive',
                    'minimum': 2,
                    'maximum': 100,
                    'type': 'number',
                },
                'block1': {
                    'title': 'Block',
                    'description': 'Some fields can be in block',
                    'type': 'object',
                    'properties': {
                        'ethCountPositive': {
                            'title': 'Positive ether count',
                            'description': 'Float like field with without exp notation. Greater than zero',
                            '$ref': '#/definitions/ethCountPositive',
                        },
                        'ethCount': {
                            'title': 'Ether count',
                            'description': 'Float like field with without exp notation. Greater or equal zero',
                            '$ref': '#/definitions/ethCountPositive',
                        },
                    },
                },
                'unxtimeWidget': {
                    'title': 'Unixtime with widget',
                    'description': 'Unixtime will be sent',
                    '$ref': '#/definitions/unixTime',
                },
                'fileHash': {
                    'title': 'File hash',
                    'description': 'Just upload file, hash (keccak256) of it will be sent',
                    '$ref': '#/definitions/hash',
                },
                'stringHash': {
                    'title': 'String hash',
                    'description': 'Just type text, hash (keccak256) of it will be sent',
                    '$ref': '#/definitions/hash',
                },
                'stringHashSha256': {
                    'title': 'String hash (sha256)',
                    'description': 'Just type text, hash (sha256) of it will be sent',
                    '$ref': '#/definitions/hash',
                },
                'addressArray': {
                    'title': 'Address array',
                    'description': 'Address array with minimum 1 element',
                    'minItems': 1,
                    '$ref': '#/definitions/addressArray',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {
            'enum': {
                'ui:widget': 'radio',
            },
            'unxtimeWidget': {
                'ui:widget': 'unixTime',
            },
            'fileHash': {
                'ui:widget': 'fileHash',
            },
            'stringHash': {
                'ui:widget': 'stringHash',
            },
            'stringHashSha256': {
                'ui:widget': 'stringHash',
                'ui:options': {
                    'algorithm': 'sha256',
                },
            },
        },
        'blockchain': 'ethereum',
        'image': 'platform-features.png',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 18,
    },
    {
        'id': 'd195bf680dcb120dd598896f',
        'name': 'Multiblockchain atomic swap registry',
        'description': 'Proof of concept. DO NOT USE IT IN MAINNET WITH REAL FUNDS.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'dummy',
            ],
            'additionalProperties': false,
            'properties': {
                'dummy': {
                    'type': 'string',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'ethereum',
        'image': '',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 17,
    },
    {
        'id': '5cdfcf1df8b7433b4d7438ad',
        'name': 'P2p multichain exchange',
        'description': 'Proof of concept. DO NOT USE IT IN MAINNET WITH REAL FUNDS.',
        'price': 0,
        'schema': {
            'type': 'object',
            'required': [
                'address',
            ],
            'additionalProperties': false,
            'properties': {
                'address': {
                    'title': 'Address of Swap registry contract',
                    '$ref': '#/definitions/address',
                },
            },
            'definitions': {
                'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                },
                'addressArray': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/address',
                    },
                },
                'unixTime': {
                    'type': 'integer',
                    'minimum': 1,
                    'maximum': 2147483647,
                },
                'fileHash': {
                    '$comment': 'deprecated, use hash instead',
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                },
                'addressMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/address',
                        },
                        {},
                    ],
                },
                'addressMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/addressMappingEntry',
                    },
                },
                'uintMappingEntry': {
                    'type': 'array',
                    'minItems': 2,
                    'maxItems': 2,
                    'items': [
                        {
                            '$ref': '#/definitions/uint',
                        },
                        {},
                    ],
                },
                'uintMapping': {
                    'type': 'array',
                    'items': {
                        '$ref': '#/definitions/uintMappingEntry',
                    },
                },
                'uint256': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 78,
                    'pattern': '^[0-9]+$',
                },
                'uint': {
                    '$ref': '#/definitions/uint256',
                },
                'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                },
                'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                },
                'uint8': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 255,
                },
                'uint16': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 65535,
                },
                'uint32': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 4294967295,
                },
                'uint64': {
                    'type': 'integer',
                    'minimum': 0,
                    'maximum': 18446744073709552000,
                },
                'uint128': {
                    'type': 'string',
                    'minLength': 1,
                    'maxLength': 39,
                    'pattern': '^[0-9]+$',
                },
                'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
                'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                },
            },
        },
        'ui_schema': {},
        'blockchain': 'ethereum',
        'image': '',
        'is_public': true,
        'user_id': 5,
        'compilations_count': 16,
    },
];

export const ctorJson = {
    'ctor_id': '5ac72d56e1d044000b1bf93c',
    'fetchStatus': 'success',
    'ctor_name': 'multisig_wallet_constructor',
    'ctor_descr': 'some desc',
    'price_eth': 0,
    'schema': {
        'type': 'object',
        'required': [
            'signs_count',
            'owners',
        ],
        'additionalProperties': false,
        'properties': {
            'signs_count': {
                'type': 'integer',
                'minimum': 1,
                'default': 2,
                'maximum': 250,
                'title': 'Signatures quorum',
                'description': 'Number of signatures required to withdraw funds or modify signatures',
            },
            'owners': {
                'title': 'Addresses of owners',
                'description': 'Addresses (signatures) of owners of a new wallet',
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/address',
                },
                'minItems': 1,
                'maxItems': 250,
            },
            'file_hash': {
                'title': 'File',
                'description': 'File to hash',
                '$ref': '#/definitions/fileHash',
                'format': 'data-url',
            },
        },
        'definitions': {
            'fileHash': {
                'type': 'string',
                'pattern': '^[0-9a-fA-F]{64}$',
            },
            'address': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
            },
            'addressArray': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/address',
                },
            },
            'unixTime': {
                'type': 'integer',
                'minimum': 1,
                'maximum': 2147483647,
            },
            'addressMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/address',
                    },
                    {},
                ],
            },
            'addressMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/addressMappingEntry',
                },
            },
            'uintMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/uint',
                    },
                    {},
                ],
            },
            'uintMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/uintMappingEntry',
                },
            },
            'uint256': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 78,
                'pattern': '^[0-9]+$',
            },
            'uint': {
                '$ref': '#/definitions/uint256',
            },
            'bytes32': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
            },
            'bytes': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
            },
            'uint8': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 255,
            },
            'uint16': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 65535,
            },
            'uint32': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 4294967295,
            },
            'uint64': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 18446744073709552000,
            },
            'uint128': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 39,
                'pattern': '^[0-9]+$',
            },
        },
    },
    'ui_schema': {
        'signs_count': {
            'ui:widget': 'updown',
        },
        'owners': {
            'items': {
                'ui:placeholder': 'Valid Ethereum address',
            },
            'ui:options': {
                'orderable': false,
            },
        },
    },
};

export const ctorCustom = {
    'ctor_id': '5ac72d56e1d044000b1bf93c',
    'fetchStatus': 'success',
    'ctor_name': 'Custom name text test',
    'ctor_descr': 'Full description',
    'price_eth': 0,
    'schema': {
        'type': 'object',
        'required': [
            // "file_hash",
        ],
        'additionalProperties': false,
        'properties': {
            // "file_hash": {
            //     "title": "File",
            //     "description": "File to hash",
            //     "$ref": "#/definitions/fileHash",
            // },
            'string_hash': {
                'title': 'String2hash',
                'description': 'String to hash',
                '$ref': '#/definitions/fileHash',
            },
            'signs_count': {
                'type': 'integer',
                'minimum': 1,
                'default': 2,
                'maximum': 250,
                'title': 'Signatures quorum',
                'description': 'Number of signatures required to withdraw funds or modify signatures',
            },
        },
        'definitions': {
            'fileHash': {
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$',
            },
        },
    },
    'ui_schema': {
        'file_hash': {
            'ui:widget': 'fileHash',
        },
        'string_hash': {
            'ui:widget': 'stringHash',
        },
        'signs_count': {
            'ui:widget': 'updown',
        },
    },
    // "error_schema": {
    //     "file_hash": {
    //         "errors": "Noooooooooooooooo"
    //     },
    //     "dapp_title": {
    //         "errors": "Noooooooooooooooo 3 characters"
    //     }
    // }
};

export const ctorAtomicSwap = {
    'ctor_name': 'Atomic Swap for ERC20',
    'ctor_descr': 'Two participants can swap tokens for ether or tokens with this simple smart contract.',
    'price_eth': 0,
    'schema': {
        'type': 'object',
        'required': [
            'participant1',
            'participant2',
        ],
        'additionalProperties': false,
        'properties': {
            'participant1': {
                'type': 'object',
                'title': 'Participant #1',
                'required': [
                    'token',
                    'count',
                ],
                'properties': {
                    'use_my_address': {
                        'type': 'boolean',
                        'title': 'Use my address',
                        'description': 'Deployer\'s address would be got as participant #1 address',
                        'default': true,
                    },
                    'token': {
                        'title': 'Token address',
                        'description': 'Address of ERC20 token smart contract, which participant #1 will swap',
                        '$ref': '#/definitions/address',
                    },
                    'count': {
                        'title': 'Tokens count',
                        'description': 'Tokens count, which participant #1 will swap for participant #2 tokens/ether. Token decimals must be <= 18',
                        'type': 'string',
                        'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                    },
                },
                'dependencies': {
                    'use_my_address': {
                        'oneOf': [
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            true,
                                        ],
                                    },
                                },
                            },
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            false,
                                        ],
                                    },
                                    'address': {
                                        'title': 'Address',
                                        'description': 'Address where tokens/ether from participant #2 will be sent',
                                        '$ref': '#/definitions/address',
                                    },
                                },
                                'required': [
                                    'address',
                                ],
                            },
                        ],
                    },
                },
            },
            'participant2': {
                'type': 'object',
                'title': 'Participant #2',
                'required': [
                    'swap_type',
                ],
                'properties': {
                    'swap_type': {
                        'title': 'Swap type',
                        'description': 'Swap tokens of participant #1 for participant\'s #2:',
                        'type': 'string',
                        'enum': [
                            'Ether',
                            'ERC20 tokens',
                        ],
                        'default': 'Ether',
                    },
                    'use_my_address': {
                        'type': 'boolean',
                        'title': 'Use my address',
                        'description': 'Deployer\'s address would be got as participant #1 address',
                        'default': false,
                    },
                },
                'dependencies': {
                    'use_my_address': {
                        'oneOf': [
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            true,
                                        ],
                                    },
                                },
                            },
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            false,
                                        ],
                                    },
                                    'address': {
                                        'title': 'Address',
                                        'description': 'Address where tokens/ether from participant #1 will be sent',
                                        '$ref': '#/definitions/address',
                                    },
                                },
                                'required': [
                                    'address',
                                ],
                            },
                        ],
                    },
                    'swap_type': {
                        'oneOf': [
                            {
                                'properties': {
                                    'swap_type': {
                                        'enum': [
                                            'Ether',
                                        ],
                                    },
                                    'count': {
                                        'title': 'Ether count',
                                        'description': 'Ether count, which participant #2 will swap for participant #2 tokens',
                                        'type': 'string',
                                        'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                                    },
                                },
                                'required': [
                                    'count',
                                ],
                            },
                            {
                                'properties': {
                                    'swap_type': {
                                        'enum': [
                                            'ERC20 tokens',
                                        ],
                                    },
                                    'token': {
                                        'title': 'Token address',
                                        'description': 'Address of ERC20 token smart contract, which participant #2 will swap',
                                        '$ref': '#/definitions/address',
                                    },
                                    'count': {
                                        'title': 'Tokens count',
                                        'description': 'Tokens count, which participant #2 will swap for participant #1 tokens. . Token decimals must be <= 18',
                                        'type': 'string',
                                        'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                                    },
                                },
                                'required': [
                                    'token',
                                    'count',
                                ],
                            },
                        ],
                    },
                },
            },
            'check_transfers': {
                'type': 'boolean',
                'title': 'Verify token transfers',
                'description': 'Verify that token balances of participants after swap are greater for the amount of transfer (or more). If not, the transaction will be canceled.',
                'default': true,
            },
        },
        'definitions': {
            'address': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
            },
            'addressArray': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/address',
                },
            },
            'unixTime': {
                'type': 'integer',
                'minimum': 1,
                'maximum': 2147483647,
            },
            'fileHash': {
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$',
            },
            'addressMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/address',
                    },
                    {},
                ],
            },
            'addressMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/addressMappingEntry',
                },
            },
            'uintMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/uint',
                    },
                    {},
                ],
            },
            'uintMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/uintMappingEntry',
                },
            },
            'uint256': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 78,
                'pattern': '^[0-9]+$',
            },
            'uint': {
                '$ref': '#/definitions/uint256',
            },
            'bytes32': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
            },
            'bytes': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
            },
            'uint8': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 255,
            },
            'uint16': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 65535,
            },
            'uint32': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 4294967295,
            },
            'uint64': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 18446744073709552000,
            },
            'uint128': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 39,
                'pattern': '^[0-9]+$',
            },
            'ethCount': {
                'type': 'string',
                'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
            },
            'ethCountPositive': {
                'type': 'string',
                'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
            },
        },
    },
    'ui_schema': {
        'participant1': {
            'ui:order': [
                '*',
                'token',
                'count',
            ],
        },
        'participant2': {
            'swap_type': {
                'ui:widget': 'radio',
            },
        },
    },
};
