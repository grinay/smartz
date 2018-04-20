export const instanceJson = {
    "instance_id": "5ad8c2fca47fe30006b7dcb7",
    "instance_title": "Booking",
    "network_id": 4,
    "ctor_id": "5ad8c1daa47fe30006b7dcb6",
    "address": "0x28af362ecb799180aee13dfb3b4e125801936dfe",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "m_client",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getCurrentState",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_cancellationFee",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "refund",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "cancelBooking",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_rentDateEnd",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_rentDateStart",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_description",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "rejectPayment",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_noCancelPeriod",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_price",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_fileUrl",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_fileHash",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "startRent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "m_acceptObjectPeriod",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "newState",
                    "type": "uint8"
                }
            ],
            "name": "StateChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        }
    ],
    "functions": [
        {
            "name": "m_client",
            "constant": true,
            "payable": false,
            "title": "Client address",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/address",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 5
        },
        {
            "name": "m_description",
            "constant": true,
            "payable": false,
            "title": "Object description",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "type": "string",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 10
        },
        {
            "name": "m_fileUrl",
            "constant": true,
            "payable": false,
            "title": "Description url",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "type": "string",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "description": "Url of file with additional description",
            "sorting_order": 11
        },
        {
            "name": "m_fileHash",
            "constant": true,
            "payable": false,
            "title": "Description hash",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/bytes32",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "description": "Hash (keccak256) of file with additional description",
            "sorting_order": 12
        },
        {
            "name": "m_rentDateStart",
            "constant": true,
            "payable": false,
            "title": "Start rent time",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/uint256",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 20,
            "ui:widget": "unixtime"
        },
        {
            "name": "m_rentDateEnd",
            "constant": true,
            "payable": false,
            "title": "End rent time",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/uint256",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 30,
            "ui:widget": "unixtime"
        },
        {
            "name": "m_price",
            "constant": true,
            "payable": false,
            "title": "Rent price",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/uint256",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "description": "Rent price for whole period",
            "sorting_order": 40,
            "ui:widget": "ethCount"
        },
        {
            "name": "m_cancellationFee",
            "constant": true,
            "payable": false,
            "title": "Cancellation fee",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/uint256",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 50,
            "ui:widget": "ethCount"
        },
        {
            "name": "m_noCancelPeriod",
            "constant": true,
            "payable": false,
            "title": "\"No cancel\" time",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/uint256",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 60
        },
        {
            "name": "m_acceptObjectPeriod",
            "constant": true,
            "payable": false,
            "title": "Accept object time",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/uint256",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 70
        },
        {
            "name": "getCurrentState",
            "constant": true,
            "payable": false,
            "title": "Get booking state",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/uint8",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "sorting_order": 80,
            "ui:widget": "enum",
            "ui:widget_options": {
                "enum": [
                    "Offer",
                    "Paid",
                    "No cancel period",
                    "Rent",
                    "Finished"
                ]
            }
        },
        {
            "name": "refund",
            "constant": false,
            "payable": false,
            "title": "Refund (customer)",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "sorting_order": 200
        },
        {
            "name": "rejectPayment",
            "constant": false,
            "payable": false,
            "title": "Reject payment (owner)",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "sorting_order": 210
        },
        {
            "name": "cancelBooking",
            "constant": false,
            "payable": false,
            "title": "Cancel booking (owner)",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "sorting_order": 220
        },
        {
            "name": "startRent",
            "constant": false,
            "payable": false,
            "title": "Start rent (customer)",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "sorting_order": 230
        },
        {
            "name": "transferOwnership",
            "constant": false,
            "payable": false,
            "title": "Transfer ownership (owner)",
            "inputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/address",
                        "title": "New owner address"
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            },
            "outputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "description": "Transfer ownership of contract",
            "sorting_order": 240
        },
        {
            "name": "owner",
            "constant": true,
            "payable": false,
            "title": "owner",
            "inputs": {
                "type": "array",
                "minItems": 0,
                "maxItems": 0
            },
            "outputs": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": [
                    {
                        "$ref": "#/definitions/address",
                        "title": ""
                    }
                ],
                "definitions": {
                    "address": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{40}$"
                    },
                    "addressArray": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/address"
                        }
                    },
                    "unixTime": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 2147483647
                    },
                    "fileHash": {
                        "type": "string",
                        "pattern": "^0x[0-9a-fA-F]{64}$"
                    },
                    "addressMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/address"
                            },
                            {}
                        ]
                    },
                    "addressMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/addressMappingEntry"
                        }
                    },
                    "uintMappingEntry": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 2,
                        "items": [
                            {
                                "$ref": "#/definitions/uint"
                            },
                            {}
                        ]
                    },
                    "uintMapping": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/uintMappingEntry"
                        }
                    },
                    "uint256": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 78,
                        "pattern": "^[0-9]+$"
                    },
                    "uint": {
                        "$ref": "#/definitions/uint256"
                    },
                    "bytes32": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]{64}$"
                    },
                    "bytes": {
                        "type": "string",
                        "pattern": "^(?:0[Xx])?[0-9a-fA-F]+$"
                    },
                    "uint8": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "uint16": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 65535
                    },
                    "uint32": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 4294967295
                    },
                    "uint64": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 18446744073709552000
                    },
                    "uint128": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 39,
                        "pattern": "^[0-9]+$"
                    },
                    "ethCount": {
                        "type": "string",
                        "pattern": "^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    },
                    "ethCountPositive": {
                        "type": "string",
                        "pattern": "^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$"
                    }
                }
            }
        }
    ],
    "dashboard_functions": [
        "ballotName"
    ]
}