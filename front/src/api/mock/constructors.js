export const constructorList = [
    {
        "ctor_id": "5ac4ae8ae1d04400095ce6ad",
        "ctor_name": "dsfdfsdf",
        "price_eth": 0.1,
        "ctor_descr": "sfsfd",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ac4b039e1d04400095ce6ae",
        "ctor_name": "fsdffdf",
        "price_eth": 0.1,
        "ctor_descr": "ваыаы",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ac5f459e1d04400095ce6af",
        "ctor_name": "equty",
        "price_eth": 0.14,
        "ctor_descr": "dsfsdf",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ac60afce1d044000b1bf939",
        "ctor_name": "simple_ico",
        "price_eth": 0.1,
        "ctor_descr": "sdfdasfdfsd",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ac63e3be1d044000b1bf93b",
        "ctor_name": "erc20_token_constructor",
        "price_eth": 0.1,
        "ctor_descr": "Some desc",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ac72d56e1d044000b1bf93c",
        "ctor_name": "multisig_wallet_constructor",
        "price_eth": 0,
        "ctor_descr": "some desc",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ad609e86ed8ba0006975a34",
        "ctor_name": "Atomic swap",
        "price_eth": 0.1,
        "ctor_descr": "sfasdfadfafdafasfadsf",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ad8a7cc6ed8ba0006407392",
        "ctor_name": "eeeeeeeeeeeeeeeeeeeeeeeee",
        "price_eth": 0.1,
        "ctor_descr": "simple_ico_constructordddddddddddddd",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
    {
        "ctor_id": "5ad8c1daa47fe30006b7dcb6",
        "ctor_name": "Booking",
        "price_eth": 0,
        "ctor_descr": "booking_constructor.py",
        "is_public": true,
        "user_id": "auth0|5ac3533a41747b0c5b12968c",
    },
];

export const constructorListProd = [
    {
        "ctor_id": "5ad9a4f7672dfe000a7e0a30",
        "ctor_name": "Simple ICO",
        "price_eth": 0,
        "ctor_descr": "Simple and reliable smart contracts system for ICO. You get ERC20 token with custom name and ticker and crowdsale with settable sale period, hardcap and token to Ether rate.",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
    {
        "ctor_id": "5ad9a507672dfe000a7e0a31",
        "ctor_name": "ERC20 Token",
        "price_eth": 0,
        "ctor_descr": "Standard ERC20 token with custom name, ticker and optional minting, burning, emission limit, premint and pause functions.",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
    {
        "ctor_id": "5ad9a517672dfe000a7e0a32",
        "ctor_name": "Multisignature Wallet",
        "price_eth": 0,
        "ctor_descr": "Wallet contract to keep your funds under defence of more than one signature. Number of signatures and quorum are adjustable, for example 2/3 or 3/5.",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
    {
        "ctor_id": "5ad9a527672dfe000a7e0a33",
        "ctor_name": "Simple Voting",
        "price_eth": 0,
        "ctor_descr": "Just simple and robust ballot contract. Suitable for fast cooking crypto-protected voting in any organisation.",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
    {
        "ctor_id": "5ad9a539672dfe000a7e0a34",
        "ctor_name": "Atomic Swap for ERC20",
        "price_eth": 0,
        "ctor_descr": "Two participants can swap tokens for ether or tokens with this simple smart contract.",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
    {
        "ctor_id": "5ad9a54e672dfe000a7e0a35",
        "ctor_name": "Multitoken",
        "price_eth": 0,
        "ctor_descr": "In this smart contract you can create a variety of non-standard tokens",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
    {
        "ctor_id": "5ad9a602672dfe000a7e0a36",
        "ctor_name": "Booking",
        "price_eth": 0,
        "ctor_descr": "Contract for the rental of real estate",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
    {
        "ctor_id": "5ad9a612672dfe000a7e0a37",
        "ctor_name": "Ledger",
        "price_eth": 0,
        "ctor_descr": "Universal ledger",
        "is_public": true,
        "user_id": "facebook|1467280236722219",
    },
]

export const ctorJson = {
    "ctor_id": "5ac72d56e1d044000b1bf93c",
    "fetchStatus": "success",
    "ctor_name": "multisig_wallet_constructor",
    "ctor_descr": "some desc",
    "price_eth": 0,
    "schema": {
        "type": "object",
        "required": [
            "signs_count",
            "owners"
        ],
        "additionalProperties": false,
        "properties": {
            "signs_count": {
                "type": "integer",
                "minimum": 1,
                "default": 2,
                "maximum": 250,
                'title': 'Signatures quorum',
                'description': 'Number of signatures required to withdraw funds or modify signatures'
            },
            'owners': {
                'title': 'Addresses of owners',
                'description': 'Addresses (signatures) of owners of a new wallet',
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/address'
                },
                'minItems': 1,
                'maxItems': 250
            },
            'file_hash': {
                'title': 'File',
                'description': 'File to hash',
                '$ref': '#/definitions/fileHash',
                'format': 'data-url'
            },
        },
        'definitions': {
            'fileHash': {
                'type': 'string',
                'pattern': '^[0-9a-fA-F]{64}$'
            },
            'address': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'addressArray': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/address'
                }
            },
            'unixTime': {
                'type': 'integer',
                'minimum': 1,
                'maximum': 2147483647
            },
            'addressMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/address'
                    },
                    {}
                ]
            },
            'addressMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/addressMappingEntry'
                }
            },
            'uintMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/uint'
                    },
                    {}
                ]
            },
            'uintMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/uintMappingEntry'
                }
            },
            'uint256': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 78,
                'pattern': '^[0-9]+$'
            },
            'uint': {
                '$ref': '#/definitions/uint256'
            },
            'bytes32': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'bytes': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 255
            },
            'uint16': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 65535
            },
            'uint32': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 4294967295
            },
            'uint64': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 18446744073709552000
            },
            'uint128': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 39,
                'pattern': '^[0-9]+$'
            }
        },
    },
    'ui_schema': {
        'signs_count': {
            'ui:widget': 'updown'
        },
        'owners': {
            'items': {
                'ui:placeholder': 'Valid Ethereum address'
            },
            'ui:options': {
                'orderable': false
            }
        },
    },
}

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
                'description': 'Number of signatures required to withdraw funds or modify signatures'
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
}

export const ctorAtomicSwap = {
    'ctor_name': 'Atomic Swap for ERC20',
    'ctor_descr': 'Two participants can swap tokens for ether or tokens with this simple smart contract.',
    'price_eth': 0,
    'schema': {
        'type': 'object',
        'required': [
            'participant1',
            'participant2'
        ],
        'additionalProperties': false,
        'properties': {
            'participant1': {
                'type': 'object',
                'title': 'Participant #1',
                'required': [
                    'token',
                    'count'
                ],
                'properties': {
                    'use_my_address': {
                        'type': 'boolean',
                        'title': 'Use my address',
                        'description': 'Deployer\'s address would be got as participant #1 address',
                        'default': true
                    },
                    'token': {
                        'title': 'Token address',
                        'description': 'Address of ERC20 token smart contract, which participant #1 will swap',
                        '$ref': '#/definitions/address'
                    },
                    'count': {
                        'title': 'Tokens count',
                        'description': 'Tokens count, which participant #1 will swap for participant #2 tokens/ether. Token decimals must be <= 18',
                        'type': 'string',
                        'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
                    }
                },
                'dependencies': {
                    'use_my_address': {
                        'oneOf': [
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            true
                                        ]
                                    }
                                }
                            },
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            false
                                        ]
                                    },
                                    'address': {
                                        'title': 'Address',
                                        'description': 'Address where tokens/ether from participant #2 will be sent',
                                        '$ref': '#/definitions/address'
                                    }
                                },
                                'required': [
                                    'address'
                                ]
                            }
                        ]
                    }
                }
            },
            'participant2': {
                'type': 'object',
                'title': 'Participant #2',
                'required': [
                    'swap_type'
                ],
                'properties': {
                    'swap_type': {
                        'title': 'Swap type',
                        'description': 'Swap tokens of participant #1 for participant\'s #2:',
                        'type': 'string',
                        'enum': [
                            'Ether',
                            'ERC20 tokens'
                        ],
                        'default': 'Ether'
                    },
                    'use_my_address': {
                        'type': 'boolean',
                        'title': 'Use my address',
                        'description': 'Deployer\'s address would be got as participant #1 address',
                        'default': false
                    }
                },
                'dependencies': {
                    'use_my_address': {
                        'oneOf': [
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            true
                                        ]
                                    }
                                }
                            },
                            {
                                'properties': {
                                    'use_my_address': {
                                        'enum': [
                                            false
                                        ]
                                    },
                                    'address': {
                                        'title': 'Address',
                                        'description': 'Address where tokens/ether from participant #1 will be sent',
                                        '$ref': '#/definitions/address'
                                    }
                                },
                                'required': [
                                    'address'
                                ]
                            }
                        ]
                    },
                    'swap_type': {
                        'oneOf': [
                            {
                                'properties': {
                                    'swap_type': {
                                        'enum': [
                                            'Ether'
                                        ]
                                    },
                                    'count': {
                                        'title': 'Ether count',
                                        'description': 'Ether count, which participant #2 will swap for participant #2 tokens',
                                        'type': 'string',
                                        'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
                                    }
                                },
                                'required': [
                                    'count'
                                ]
                            },
                            {
                                'properties': {
                                    'swap_type': {
                                        'enum': [
                                            'ERC20 tokens'
                                        ]
                                    },
                                    'token': {
                                        'title': 'Token address',
                                        'description': 'Address of ERC20 token smart contract, which participant #2 will swap',
                                        '$ref': '#/definitions/address'
                                    },
                                    'count': {
                                        'title': 'Tokens count',
                                        'description': 'Tokens count, which participant #2 will swap for participant #1 tokens. . Token decimals must be <= 18',
                                        'type': 'string',
                                        'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
                                    }
                                },
                                'required': [
                                    'token',
                                    'count'
                                ]
                            }
                        ]
                    }
                }
            },
            'check_transfers': {
                'type': 'boolean',
                'title': 'Verify token transfers',
                'description': 'Verify that token balances of participants after swap are greater for the amount of transfer (or more). If not, the transaction will be canceled.',
                'default': true
            }
        },
        'definitions': {
            'address': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'addressArray': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/address'
                }
            },
            'unixTime': {
                'type': 'integer',
                'minimum': 1,
                'maximum': 2147483647
            },
            'fileHash': {
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'addressMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/address'
                    },
                    {}
                ]
            },
            'addressMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/addressMappingEntry'
                }
            },
            'uintMappingEntry': {
                'type': 'array',
                'minItems': 2,
                'maxItems': 2,
                'items': [
                    {
                        '$ref': '#/definitions/uint'
                    },
                    {}
                ]
            },
            'uintMapping': {
                'type': 'array',
                'items': {
                    '$ref': '#/definitions/uintMappingEntry'
                }
            },
            'uint256': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 78,
                'pattern': '^[0-9]+$'
            },
            'uint': {
                '$ref': '#/definitions/uint256'
            },
            'bytes32': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'bytes': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 255
            },
            'uint16': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 65535
            },
            'uint32': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 4294967295
            },
            'uint64': {
                'type': 'integer',
                'minimum': 0,
                'maximum': 18446744073709552000
            },
            'uint128': {
                'type': 'string',
                'minLength': 1,
                'maxLength': 39,
                'pattern': '^[0-9]+$'
            },
            'ethCount': {
                'type': 'string',
                'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'ethCountPositive': {
                'type': 'string',
                'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            }
        },
    },
    'ui_schema': {
        'participant1': {
            'ui:order': [
                '*',
                'token',
                'count'
            ]
        },
        'participant2': {
            'swap_type': {
                'ui:widget': 'radio'
            }
        },
    },
};
