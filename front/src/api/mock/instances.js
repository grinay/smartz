export const instanceList = [
    {
        "instance_id": "5ae1b6fd2a35e200093748d8",
        "instance_title": "1212121",
        "network_id": 4,
        "ctor_id": "5ad9a507672dfe000a7e0a31",
        "address": "0xd30f1771b7ffc33ab6631bf06a0787a67f8dfb93",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "mintingFinished",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rtd",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "view",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
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
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
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
                "name": "cap",
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
                "name": "unpause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": true,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "finishMinting",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
                "constant": true,
                "inputs": [],
                "name": "symbol",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
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
                "inputs": [],
                "payable": false,
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "burner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Burn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "MintFinished",
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
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ],
        "functions": [
            {
                "name": "mintingFinished",
                "constant": true,
                "payable": false,
                "title": "Minting finished",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true no more tokens could be created."
            },
            {
                "name": "name",
                "constant": true,
                "payable": false,
                "title": "Token name",
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
                "description": "Human-friendly name of the token."
            },
            {
                "name": "approve",
                "constant": false,
                "payable": false,
                "title": "Approve spending",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address to allow to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Allow some amount of your tokens to be spent by specified address."
            },
            {
                "name": "totalSupply",
                "constant": true,
                "payable": false,
                "title": "Total supply",
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
                "description": "Current total amount of the token. Specified in the smallest units of the token."
            },
            {
                "name": "transferFrom",
                "constant": false,
                "payable": false,
                "title": "Transfer from",
                "inputs": {
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "From",
                            "description": "Subtract tokens from this account."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Transfer tokens to this account."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers from one account to another. Account which tokens are transferred has to approve this spending."
            },
            {
                "name": "decimals",
                "constant": true,
                "payable": false,
                "title": "Decimal places",
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
                "description": "Allowed digits in fractional part of the token. E.g. decimal places of US dollar is 2."
            },
            {
                "name": "cap",
                "constant": true,
                "payable": false,
                "title": "Maximum tokens",
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
                "description": "Maximum number of tokens which could be created. Return value is specified in the smallest units of the token."
            },
            {
                "name": "unpause",
                "constant": false,
                "payable": true,
                "title": "Enable circulation",
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
                "description": "Enables token transfers in case they were paused. Callable only by token owner."
            },
            {
                "name": "mint",
                "constant": false,
                "payable": false,
                "title": "Mint new tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Transfer tokens to this address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Creates new tokens out-of-thin-air and gives them to specified address. Callable only by token owner."
            },
            {
                "name": "burn",
                "constant": false,
                "payable": true,
                "title": "Burn tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                "description": "Burns specified amount of tokens owned by current account."
            },
            {
                "name": "paused",
                "constant": true,
                "payable": false,
                "title": "Paused",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true any token transfers are disabled."
            },
            {
                "name": "decreaseApproval",
                "constant": false,
                "payable": false,
                "title": "Decrease approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Decreases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "balanceOf",
                "constant": true,
                "payable": false,
                "title": "Get balance",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address"
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "balance"
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
                "description": "Gets the token balance of any address. Return value is specified in the smallest units of the token."
            },
            {
                "name": "finishMinting",
                "constant": false,
                "payable": false,
                "title": "Finish minting",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "Disables any further token creation via minting. Callable only by token owner."
            },
            {
                "name": "pause",
                "constant": false,
                "payable": false,
                "title": "Pause circulation",
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
                "description": "Disable any token transfers. Callable only by token owner."
            },
            {
                "name": "owner",
                "constant": true,
                "payable": false,
                "title": "Owner",
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
                "description": "Address of the token owner."
            },
            {
                "name": "symbol",
                "constant": true,
                "payable": false,
                "title": "Token ticker",
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
                "description": "Abbreviated name of the token used on exchanges etc."
            },
            {
                "name": "transfer",
                "constant": false,
                "payable": false,
                "title": "Transfer tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Recipient address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers some amount of your tokens to another address."
            },
            {
                "name": "increaseApproval",
                "constant": false,
                "payable": false,
                "title": "Increase approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Increases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "allowance",
                "constant": true,
                "payable": false,
                "title": "View allowance",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of owner",
                            "description": "Address which allowed to spend his tokens."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of spender",
                            "description": "Address which was allowed to spend tokens."
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
                "description": "View amount of tokens which some token holder allowed to spend by another address."
            },
            {
                "name": "transferOwnership",
                "constant": false,
                "payable": false,
                "title": "Transfer ownership",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which'll receive ownership rights."
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
                "description": "Transfers ownership of the token to another address. Ownership rights are required to perform some administrative operations."
            }
        ],
        "dashboard_functions": [
            "symbol",
            "totalSupply",
            "paused",
            "mintingFinished"
        ]
    },
    {
        "instance_id": "5ae1b6fd2a35e200093748d7",
        "instance_title": "1212121",
        "network_id": 4,
        "ctor_id": "5ad9a507672dfe000a7e0a31",
        "address": "0xd30f1771b7ffc33ab6631bf06a0787a67f8dfb93",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "mintingFinished",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rtd",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "view",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
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
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
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
                "name": "cap",
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
                "name": "unpause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": true,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "finishMinting",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
                "constant": true,
                "inputs": [],
                "name": "symbol",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
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
                "inputs": [],
                "payable": false,
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "burner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Burn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "MintFinished",
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
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ],
        "functions": [
            {
                "name": "mintingFinished",
                "constant": true,
                "payable": false,
                "title": "Minting finished",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true no more tokens could be created."
            },
            {
                "name": "name",
                "constant": true,
                "payable": false,
                "title": "Token name",
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
                "description": "Human-friendly name of the token."
            },
            {
                "name": "approve",
                "constant": false,
                "payable": false,
                "title": "Approve spending",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address to allow to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Allow some amount of your tokens to be spent by specified address."
            },
            {
                "name": "totalSupply",
                "constant": true,
                "payable": false,
                "title": "Total supply",
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
                "description": "Current total amount of the token. Specified in the smallest units of the token."
            },
            {
                "name": "transferFrom",
                "constant": false,
                "payable": false,
                "title": "Transfer from",
                "inputs": {
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "From",
                            "description": "Subtract tokens from this account."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Transfer tokens to this account."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers from one account to another. Account which tokens are transferred has to approve this spending."
            },
            {
                "name": "decimals",
                "constant": true,
                "payable": false,
                "title": "Decimal places",
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
                "description": "Allowed digits in fractional part of the token. E.g. decimal places of US dollar is 2."
            },
            {
                "name": "cap",
                "constant": true,
                "payable": false,
                "title": "Maximum tokens",
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
                "description": "Maximum number of tokens which could be created. Return value is specified in the smallest units of the token."
            },
            {
                "name": "unpause",
                "constant": false,
                "payable": true,
                "title": "Enable circulation",
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
                "description": "Enables token transfers in case they were paused. Callable only by token owner."
            },
            {
                "name": "mint",
                "constant": false,
                "payable": false,
                "title": "Mint new tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Transfer tokens to this address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Creates new tokens out-of-thin-air and gives them to specified address. Callable only by token owner."
            },
            {
                "name": "burn",
                "constant": false,
                "payable": true,
                "title": "Burn tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                "description": "Burns specified amount of tokens owned by current account."
            },
            {
                "name": "paused",
                "constant": true,
                "payable": false,
                "title": "Paused",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true any token transfers are disabled."
            },
            {
                "name": "decreaseApproval",
                "constant": false,
                "payable": false,
                "title": "Decrease approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Decreases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "balanceOf",
                "constant": true,
                "payable": false,
                "title": "Get balance",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address"
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "balance"
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
                "description": "Gets the token balance of any address. Return value is specified in the smallest units of the token."
            },
            {
                "name": "finishMinting",
                "constant": false,
                "payable": false,
                "title": "Finish minting",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "Disables any further token creation via minting. Callable only by token owner."
            },
            {
                "name": "pause",
                "constant": false,
                "payable": false,
                "title": "Pause circulation",
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
                "description": "Disable any token transfers. Callable only by token owner."
            },
            {
                "name": "owner",
                "constant": true,
                "payable": false,
                "title": "Owner",
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
                "description": "Address of the token owner."
            },
            {
                "name": "symbol",
                "constant": true,
                "payable": false,
                "title": "Token ticker",
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
                "description": "Abbreviated name of the token used on exchanges etc."
            },
            {
                "name": "transfer",
                "constant": false,
                "payable": false,
                "title": "Transfer tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Recipient address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers some amount of your tokens to another address."
            },
            {
                "name": "increaseApproval",
                "constant": false,
                "payable": false,
                "title": "Increase approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Increases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "allowance",
                "constant": true,
                "payable": false,
                "title": "View allowance",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of owner",
                            "description": "Address which allowed to spend his tokens."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of spender",
                            "description": "Address which was allowed to spend tokens."
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
                "description": "View amount of tokens which some token holder allowed to spend by another address."
            },
            {
                "name": "transferOwnership",
                "constant": false,
                "payable": false,
                "title": "Transfer ownership",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which'll receive ownership rights."
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
                "description": "Transfers ownership of the token to another address. Ownership rights are required to perform some administrative operations."
            }
        ],
        "dashboard_functions": [
            "symbol",
            "totalSupply"
        ]
    },
    {
        "instance_id": "5ae1b6fd2a35e200093748d6",
        "instance_title": "1212121",
        "network_id": 4,
        "ctor_id": "5ad9a507672dfe000a7e0a31",
        "address": "0xd30f1771b7ffc33ab6631bf06a0787a67f8dfb93",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "mintingFinished",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rtd",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "view",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
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
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
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
                "name": "cap",
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
                "name": "unpause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": true,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "finishMinting",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
                "constant": true,
                "inputs": [],
                "name": "symbol",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
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
                "inputs": [],
                "payable": false,
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "burner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Burn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "MintFinished",
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
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ],
        "functions": [
            {
                "name": "mintingFinished",
                "constant": true,
                "payable": false,
                "title": "Minting finished",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true no more tokens could be created."
            },
            {
                "name": "name",
                "constant": true,
                "payable": false,
                "title": "Token name",
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
                "description": "Human-friendly name of the token."
            },
            {
                "name": "approve",
                "constant": false,
                "payable": false,
                "title": "Approve spending",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address to allow to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Allow some amount of your tokens to be spent by specified address."
            },
            {
                "name": "totalSupply",
                "constant": true,
                "payable": false,
                "title": "Total supply",
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
                "description": "Current total amount of the token. Specified in the smallest units of the token."
            },
            {
                "name": "transferFrom",
                "constant": false,
                "payable": false,
                "title": "Transfer from",
                "inputs": {
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "From",
                            "description": "Subtract tokens from this account."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Transfer tokens to this account."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers from one account to another. Account which tokens are transferred has to approve this spending."
            },
            {
                "name": "decimals",
                "constant": true,
                "payable": false,
                "title": "Decimal places",
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
                "description": "Allowed digits in fractional part of the token. E.g. decimal places of US dollar is 2."
            },
            {
                "name": "cap",
                "constant": true,
                "payable": false,
                "title": "Maximum tokens",
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
                "description": "Maximum number of tokens which could be created. Return value is specified in the smallest units of the token."
            },
            {
                "name": "unpause",
                "constant": false,
                "payable": true,
                "title": "Enable circulation",
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
                "description": "Enables token transfers in case they were paused. Callable only by token owner."
            },
            {
                "name": "mint",
                "constant": false,
                "payable": false,
                "title": "Mint new tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Transfer tokens to this address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Creates new tokens out-of-thin-air and gives them to specified address. Callable only by token owner."
            },
            {
                "name": "burn",
                "constant": false,
                "payable": true,
                "title": "Burn tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                "description": "Burns specified amount of tokens owned by current account."
            },
            {
                "name": "paused",
                "constant": true,
                "payable": false,
                "title": "Paused",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true any token transfers are disabled."
            },
            {
                "name": "decreaseApproval",
                "constant": false,
                "payable": false,
                "title": "Decrease approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Decreases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "balanceOf",
                "constant": true,
                "payable": false,
                "title": "Get balance",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address"
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "balance"
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
                "description": "Gets the token balance of any address. Return value is specified in the smallest units of the token."
            },
            {
                "name": "finishMinting",
                "constant": false,
                "payable": false,
                "title": "Finish minting",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "Disables any further token creation via minting. Callable only by token owner."
            },
            {
                "name": "pause",
                "constant": false,
                "payable": false,
                "title": "Pause circulation",
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
                "description": "Disable any token transfers. Callable only by token owner."
            },
            {
                "name": "owner",
                "constant": true,
                "payable": false,
                "title": "Owner",
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
                "description": "Address of the token owner."
            },
            {
                "name": "symbol",
                "constant": true,
                "payable": false,
                "title": "Token ticker",
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
                "description": "Abbreviated name of the token used on exchanges etc."
            },
            {
                "name": "transfer",
                "constant": false,
                "payable": false,
                "title": "Transfer tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Recipient address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers some amount of your tokens to another address."
            },
            {
                "name": "increaseApproval",
                "constant": false,
                "payable": false,
                "title": "Increase approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Increases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "allowance",
                "constant": true,
                "payable": false,
                "title": "View allowance",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of owner",
                            "description": "Address which allowed to spend his tokens."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of spender",
                            "description": "Address which was allowed to spend tokens."
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
                "description": "View amount of tokens which some token holder allowed to spend by another address."
            },
            {
                "name": "transferOwnership",
                "constant": false,
                "payable": false,
                "title": "Transfer ownership",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which'll receive ownership rights."
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
                "description": "Transfers ownership of the token to another address. Ownership rights are required to perform some administrative operations."
            }
        ],
        "dashboard_functions": [
            "symbol",
            "totalSupply"
        ]
    },
    {
        "instance_id": "5ae1b6fd2a35e200093748d5",
        "instance_title": "1212121",
        "network_id": 4,
        "ctor_id": "5ad9a507672dfe000a7e0a31",
        "address": "0xd30f1771b7ffc33ab6631bf06a0787a67f8dfb93",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "mintingFinished",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rtd",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "view",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
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
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
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
                "name": "cap",
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
                "name": "unpause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": true,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "finishMinting",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
                "constant": true,
                "inputs": [],
                "name": "symbol",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
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
                "inputs": [],
                "payable": false,
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "burner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Burn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "MintFinished",
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
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ],
        "functions": [
            {
                "name": "mintingFinished",
                "constant": true,
                "payable": false,
                "title": "Minting finished",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true no more tokens could be created."
            },
            {
                "name": "name",
                "constant": true,
                "payable": false,
                "title": "Token name",
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
                "description": "Human-friendly name of the token."
            },
            {
                "name": "approve",
                "constant": false,
                "payable": false,
                "title": "Approve spending",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address to allow to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Allow some amount of your tokens to be spent by specified address."
            },
            {
                "name": "totalSupply",
                "constant": true,
                "payable": false,
                "title": "Total supply",
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
                "description": "Current total amount of the token. Specified in the smallest units of the token."
            },
            {
                "name": "transferFrom",
                "constant": false,
                "payable": false,
                "title": "Transfer from",
                "inputs": {
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "From",
                            "description": "Subtract tokens from this account."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Transfer tokens to this account."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers from one account to another. Account which tokens are transferred has to approve this spending."
            },
            {
                "name": "decimals",
                "constant": true,
                "payable": false,
                "title": "Decimal places",
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
                "description": "Allowed digits in fractional part of the token. E.g. decimal places of US dollar is 2."
            },
            {
                "name": "cap",
                "constant": true,
                "payable": false,
                "title": "Maximum tokens",
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
                "description": "Maximum number of tokens which could be created. Return value is specified in the smallest units of the token."
            },
            {
                "name": "unpause",
                "constant": false,
                "payable": true,
                "title": "Enable circulation",
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
                "description": "Enables token transfers in case they were paused. Callable only by token owner."
            },
            {
                "name": "mint",
                "constant": false,
                "payable": false,
                "title": "Mint new tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Transfer tokens to this address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Creates new tokens out-of-thin-air and gives them to specified address. Callable only by token owner."
            },
            {
                "name": "burn",
                "constant": false,
                "payable": true,
                "title": "Burn tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                "description": "Burns specified amount of tokens owned by current account."
            },
            {
                "name": "paused",
                "constant": true,
                "payable": false,
                "title": "Paused",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true any token transfers are disabled."
            },
            {
                "name": "decreaseApproval",
                "constant": false,
                "payable": false,
                "title": "Decrease approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Decreases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "balanceOf",
                "constant": true,
                "payable": false,
                "title": "Get balance",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address"
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "balance"
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
                "description": "Gets the token balance of any address. Return value is specified in the smallest units of the token."
            },
            {
                "name": "finishMinting",
                "constant": false,
                "payable": false,
                "title": "Finish minting",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "Disables any further token creation via minting. Callable only by token owner."
            },
            {
                "name": "pause",
                "constant": false,
                "payable": false,
                "title": "Pause circulation",
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
                "description": "Disable any token transfers. Callable only by token owner."
            },
            {
                "name": "owner",
                "constant": true,
                "payable": false,
                "title": "Owner",
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
                "description": "Address of the token owner."
            },
            {
                "name": "symbol",
                "constant": true,
                "payable": false,
                "title": "Token ticker",
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
                "description": "Abbreviated name of the token used on exchanges etc."
            },
            {
                "name": "transfer",
                "constant": false,
                "payable": false,
                "title": "Transfer tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Recipient address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers some amount of your tokens to another address."
            },
            {
                "name": "increaseApproval",
                "constant": false,
                "payable": false,
                "title": "Increase approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Increases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "allowance",
                "constant": true,
                "payable": false,
                "title": "View allowance",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of owner",
                            "description": "Address which allowed to spend his tokens."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of spender",
                            "description": "Address which was allowed to spend tokens."
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
                "description": "View amount of tokens which some token holder allowed to spend by another address."
            },
            {
                "name": "transferOwnership",
                "constant": false,
                "payable": false,
                "title": "Transfer ownership",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which'll receive ownership rights."
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
                "description": "Transfers ownership of the token to another address. Ownership rights are required to perform some administrative operations."
            }
        ],
        "dashboard_functions": [
            "symbol",
            "totalSupply"
        ]
    },
    {
        "instance_id": "5ae1b6fd2a35e200093748d4",
        "instance_title": "1212121",
        "network_id": 4,
        "ctor_id": "5ad9a507672dfe000a7e0a31",
        "address": "0xd30f1771b7ffc33ab6631bf06a0787a67f8dfb93",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "mintingFinished",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rtd",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "view",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
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
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
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
                "name": "cap",
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
                "name": "unpause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": true,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "finishMinting",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
                "constant": true,
                "inputs": [],
                "name": "symbol",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
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
                "inputs": [],
                "payable": false,
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "burner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Burn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "MintFinished",
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
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ],
        "functions": [
            {
                "name": "mintingFinished",
                "constant": true,
                "payable": false,
                "title": "Minting finished",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true no more tokens could be created."
            },
            {
                "name": "name",
                "constant": true,
                "payable": false,
                "title": "Token name",
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
                "description": "Human-friendly name of the token."
            },
            {
                "name": "approve",
                "constant": false,
                "payable": false,
                "title": "Approve spending",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address to allow to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Allow some amount of your tokens to be spent by specified address."
            },
            {
                "name": "totalSupply",
                "constant": true,
                "payable": false,
                "title": "Total supply",
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
                "description": "Current total amount of the token. Specified in the smallest units of the token."
            },
            {
                "name": "transferFrom",
                "constant": false,
                "payable": false,
                "title": "Transfer from",
                "inputs": {
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "From",
                            "description": "Subtract tokens from this account."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Transfer tokens to this account."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers from one account to another. Account which tokens are transferred has to approve this spending."
            },
            {
                "name": "decimals",
                "constant": true,
                "payable": false,
                "title": "Decimal places",
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
                "description": "Allowed digits in fractional part of the token. E.g. decimal places of US dollar is 2."
            },
            {
                "name": "cap",
                "constant": true,
                "payable": false,
                "title": "Maximum tokens",
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
                "description": "Maximum number of tokens which could be created. Return value is specified in the smallest units of the token."
            },
            {
                "name": "unpause",
                "constant": false,
                "payable": true,
                "title": "Enable circulation",
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
                "description": "Enables token transfers in case they were paused. Callable only by token owner."
            },
            {
                "name": "mint",
                "constant": false,
                "payable": false,
                "title": "Mint new tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Transfer tokens to this address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Creates new tokens out-of-thin-air and gives them to specified address. Callable only by token owner."
            },
            {
                "name": "burn",
                "constant": false,
                "payable": true,
                "title": "Burn tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                "description": "Burns specified amount of tokens owned by current account."
            },
            {
                "name": "paused",
                "constant": true,
                "payable": false,
                "title": "Paused",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true any token transfers are disabled."
            },
            {
                "name": "decreaseApproval",
                "constant": false,
                "payable": false,
                "title": "Decrease approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Decreases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "balanceOf",
                "constant": true,
                "payable": false,
                "title": "Get balance",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address"
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "balance"
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
                "description": "Gets the token balance of any address. Return value is specified in the smallest units of the token."
            },
            {
                "name": "finishMinting",
                "constant": false,
                "payable": false,
                "title": "Finish minting",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "Disables any further token creation via minting. Callable only by token owner."
            },
            {
                "name": "pause",
                "constant": false,
                "payable": false,
                "title": "Pause circulation",
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
                "description": "Disable any token transfers. Callable only by token owner."
            },
            {
                "name": "owner",
                "constant": true,
                "payable": false,
                "title": "Owner",
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
                "description": "Address of the token owner."
            },
            {
                "name": "symbol",
                "constant": true,
                "payable": false,
                "title": "Token ticker",
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
                "description": "Abbreviated name of the token used on exchanges etc."
            },
            {
                "name": "transfer",
                "constant": false,
                "payable": false,
                "title": "Transfer tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Recipient address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers some amount of your tokens to another address."
            },
            {
                "name": "increaseApproval",
                "constant": false,
                "payable": false,
                "title": "Increase approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Increases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "allowance",
                "constant": true,
                "payable": false,
                "title": "View allowance",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of owner",
                            "description": "Address which allowed to spend his tokens."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of spender",
                            "description": "Address which was allowed to spend tokens."
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
                "description": "View amount of tokens which some token holder allowed to spend by another address."
            },
            {
                "name": "transferOwnership",
                "constant": false,
                "payable": false,
                "title": "Transfer ownership",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which'll receive ownership rights."
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
                "description": "Transfers ownership of the token to another address. Ownership rights are required to perform some administrative operations."
            }
        ],
        "dashboard_functions": [
            "symbol",
            "totalSupply"
        ]
    },
    {
        "instance_id": "5ae1b6fd2a35e200093748d3",
        "instance_title": "1212121",
        "network_id": 4,
        "ctor_id": "5ad9a507672dfe000a7e0a31",
        "address": "0xd30f1771b7ffc33ab6631bf06a0787a67f8dfb93",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "mintingFinished",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rtd",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "view",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
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
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
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
                "name": "cap",
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
                "name": "unpause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": true,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "finishMinting",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
                "constant": true,
                "inputs": [],
                "name": "symbol",
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
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseApproval",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
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
                "inputs": [],
                "payable": false,
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "burner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Burn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "MintFinished",
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
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ],
        "functions": [
            {
                "name": "mintingFinished",
                "constant": true,
                "payable": false,
                "title": "Minting finished",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true no more tokens could be created."
            },
            {
                "name": "name",
                "constant": true,
                "payable": false,
                "title": "Token name",
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
                "description": "Human-friendly name of the token."
            },
            {
                "name": "approve",
                "constant": false,
                "payable": false,
                "title": "Approve spending",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address to allow to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Allow some amount of your tokens to be spent by specified address."
            },
            {
                "name": "totalSupply",
                "constant": true,
                "payable": false,
                "title": "Total supply",
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
                "description": "Current total amount of the token. Specified in the smallest units of the token."
            },
            {
                "name": "transferFrom",
                "constant": false,
                "payable": false,
                "title": "Transfer from",
                "inputs": {
                    "type": "array",
                    "minItems": 3,
                    "maxItems": 3,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "From",
                            "description": "Subtract tokens from this account."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Transfer tokens to this account."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers from one account to another. Account which tokens are transferred has to approve this spending."
            },
            {
                "name": "decimals",
                "constant": true,
                "payable": false,
                "title": "Decimal places",
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
                "description": "Allowed digits in fractional part of the token. E.g. decimal places of US dollar is 2."
            },
            {
                "name": "cap",
                "constant": true,
                "payable": false,
                "title": "Maximum tokens",
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
                "description": "Maximum number of tokens which could be created. Return value is specified in the smallest units of the token."
            },
            {
                "name": "unpause",
                "constant": false,
                "payable": true,
                "title": "Enable circulation",
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
                "description": "Enables token transfers in case they were paused. Callable only by token owner."
            },
            {
                "name": "mint",
                "constant": false,
                "payable": false,
                "title": "Mint new tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Transfer tokens to this address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Creates new tokens out-of-thin-air and gives them to specified address. Callable only by token owner."
            },
            {
                "name": "burn",
                "constant": false,
                "payable": true,
                "title": "Burn tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                "description": "Burns specified amount of tokens owned by current account."
            },
            {
                "name": "paused",
                "constant": true,
                "payable": false,
                "title": "Paused",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "If true any token transfers are disabled."
            },
            {
                "name": "decreaseApproval",
                "constant": false,
                "payable": false,
                "title": "Decrease approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Decreases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "balanceOf",
                "constant": true,
                "payable": false,
                "title": "Get balance",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address"
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "balance"
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
                "description": "Gets the token balance of any address. Return value is specified in the smallest units of the token."
            },
            {
                "name": "finishMinting",
                "constant": false,
                "payable": false,
                "title": "Finish minting",
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
                            "type": "boolean",
                            "default": false,
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
                "description": "Disables any further token creation via minting. Callable only by token owner."
            },
            {
                "name": "pause",
                "constant": false,
                "payable": false,
                "title": "Pause circulation",
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
                "description": "Disable any token transfers. Callable only by token owner."
            },
            {
                "name": "owner",
                "constant": true,
                "payable": false,
                "title": "Owner",
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
                "description": "Address of the token owner."
            },
            {
                "name": "symbol",
                "constant": true,
                "payable": false,
                "title": "Token ticker",
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
                "description": "Abbreviated name of the token used on exchanges etc."
            },
            {
                "name": "transfer",
                "constant": false,
                "payable": false,
                "title": "Transfer tokens",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "To",
                            "description": "Recipient address."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
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
                "description": "Transfers some amount of your tokens to another address."
            },
            {
                "name": "increaseApproval",
                "constant": false,
                "payable": false,
                "title": "Increase approval",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which was allowed to spend tokens."
                        },
                        {
                            "$ref": "#/definitions/uint256",
                            "title": "Amount",
                            "description": "Amount must be specified in the smallest units of the token."
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
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "type": "boolean",
                            "default": false,
                            "title": "success"
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
                "description": "Increases amount of your tokens which are allowed to be spent by specified address."
            },
            {
                "name": "allowance",
                "constant": true,
                "payable": false,
                "title": "View allowance",
                "inputs": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of owner",
                            "description": "Address which allowed to spend his tokens."
                        },
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address of spender",
                            "description": "Address which was allowed to spend tokens."
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
                "description": "View amount of tokens which some token holder allowed to spend by another address."
            },
            {
                "name": "transferOwnership",
                "constant": false,
                "payable": false,
                "title": "Transfer ownership",
                "inputs": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "items": [
                        {
                            "$ref": "#/definitions/address",
                            "title": "Address",
                            "description": "Address which'll receive ownership rights."
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
                "description": "Transfers ownership of the token to another address. Ownership rights are required to perform some administrative operations."
            }
        ],
        "dashboard_functions": [
            "symbol",
            "totalSupply"
        ]
    }
]

// error deploy step 1. Server validating
export const instanceError = {
    result: 'success',
    errors: {
        check_transfers: 'Cho thie',
        participant2: ['ONe err', 'Two error'],
        participant1: {
            count: 'Bad count'
        }
    }
};

// error deploy step 1. Server validating. Global error
export const instanceErrorGlobal = {
    result: 'error',
    error_descr: 'Some problem',
};

// deploy step 2.
export const instanceCode = {
    "instance_id": "5ae1c7392a35e200093748da",
    "bin": "606060409081526005805460ff1916905560008054600160a060020a03338116600160a060020a03199283161783556001805483167385dd39c91a64167ba20732b228251e67caed1464179055600280549092167385dd39c91a64167ba20732b228251e67caed1462179182905560129391169163313ce5679151602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156100c557600080fd5b6102c65a03f115156100d657600080fd5b5050506040518051905060ff16111515156100f057600080fd5b600254600160a060020a031663313ce5676000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b151561015157600080fd5b6102c65a03f1151561016257600080fd5b5050506040518051905060ff16601203600a0a67a688906bd8b0000081151561018757fe5b046003556729a2241af62c0000600455600154600054600160a060020a03908116911614156101b257fe5b600254600160a060020a031615156101c657fe5b600354600090116101d357fe5b600454600090116101e057fe5b6107bb806101ef6000396000f30060606040526004361061008a5763ffffffff60e060020a6000350416630fbf3f6a81146100f85780631667b8851461011d578063590e1ae3146101305780637b352962146101435780638119c0651461016a578063a02018391461017d578063dc45111c146101ac578063e487fdb6146101bf578063e702701f146101d2578063ff75567b146101e5575b60055460ff161561009a57600080fd5b60015433600160a060020a039081169116146100b557600080fd5b6004543411156100f65733600160a060020a03166108fc60045434039081150290604051600060405180830381858888f1935050505015156100f657600080fd5b005b341561010357600080fd5b61010b6101f8565b60405190815260200160405180910390f35b341561012857600080fd5b61010b6101fe565b341561013b57600080fd5b6100f6610204565b341561014e57600080fd5b61015661039b565b604051901515815260200160405180910390f35b341561017557600080fd5b6100f66103a4565b341561018857600080fd5b6101906106da565b604051600160a060020a03909116815260200160405180910390f35b34156101b757600080fd5b6101906106e9565b34156101ca57600080fd5b61010b6106f8565b34156101dd57600080fd5b610190610772565b34156101f057600080fd5b61010b610781565b60045481565b60035481565b6000805433600160a060020a039081169116141561032757600254600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561027557600080fd5b6102c65a03f1151561028657600080fd5b50505060405180519150506000811161029e57600080fd5b60025460008054600160a060020a039283169263a9059cbb9291169084906040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561030657600080fd5b6102c65a03f1151561031757600080fd5b5050506040518051905050610398565b60015433600160a060020a0390811691161415610393576000600160a060020a033016311161035557600080fd5b600154600160a060020a039081169030163180156108fc0290604051600060405180830381858888f19350505050151561038e57600080fd5b610398565b600080fd5b50565b60055460ff1681565b600554600090819060ff16156103b957600080fd5b600454600160a060020a0330163110156103d257600080fd5b600254600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561042b57600080fd5b6102c65a03f1151561043c57600080fd5b5050506040518051600354909350831015905061045857600080fd5b6005805460ff191660019081179091556002549054600160a060020a03918216916370a08231911660006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156104c757600080fd5b6102c65a03f115156104d857600080fd5b5050506040518051600254600154600354929450600160a060020a03918216935063a9059cbb9291169060006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561054e57600080fd5b6102c65a03f1151561055f57600080fd5b50505060405180519050151561057457600080fd5b6003548211156106115760025460008054600354600160a060020a039384169363a9059cbb93921691908603906040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156105eb57600080fd5b6102c65a03f115156105fc57600080fd5b50505060405180519050151561061157600080fd5b600054600160a060020a039081169030163180156108fc0290604051600060405180830381858888f19350505050151561064a57600080fd5b60035460025460015491830191600160a060020a03918216916370a08231911660006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156106b157600080fd5b6102c65a03f115156106c257600080fd5b50505060405180519050101515156106d657fe5b5050565b600254600160a060020a031681565b600154600160a060020a031681565b600254600090600160a060020a03166370a0823130836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561075357600080fd5b6102c65a03f1151561076457600080fd5b505050604051805191505090565b600054600160a060020a031681565b600160a060020a03301631905600a165627a7a7230582055b3b239de37829f5a9933fdb5bbc2dac31932dee08ad09adbb1d505fd63c8ed0029",
    "source": "\npragma solidity ^0.4.18;\n\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  uint8 public decimals;\n\n  uint256 public totalSupply;\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n    \n\n/**\n * Copyright (C) 2018  Smartz, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\").\n * You may not use this file except in compliance with the License.\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND (express or implied).\n */\n \n/**\n * @title SwapTokenForEther\n * Swap tokens of participant1 for ether of participant2\n *\n * @author Vladimir Khramov <vladimir.khramov@smartz.io>\n */\ncontract Swap {\n\n    address public participant1;\n    address public participant2;\n\n    ERC20Basic public participant1Token;\n    uint256 public participant1TokensCount;\n\n    uint256 public participant2EtherCount;\n\n    bool public isFinished = false;\n\n\n    function Swap() public payable {\n\n        participant1 = msg.sender;\n        participant2 = 0x85dd39c91a64167ba20732b228251e67caed1464;\n\n        participant1Token = ERC20Basic(0x85dd39c91a64167ba20732b228251e67caed1462);\n        require(participant1Token.decimals() <= 18);\n        \n        participant1TokensCount = 12 ether / 10**(18-uint256(participant1Token.decimals()));\n\n        participant2EtherCount = 3 ether;\n        \n        assert(participant1 != participant2);\n        assert(participant1Token != address(0));\n        assert(participant1TokensCount > 0);\n        assert(participant2EtherCount > 0);\n        \n        \n    }\n\n    /**\n     * Ether accepted\n     */\n    function () external payable {\n        require(!isFinished);\n        require(msg.sender == participant2);\n\n        if (msg.value > participant2EtherCount) {\n            msg.sender.transfer(msg.value - participant2EtherCount);\n        }\n    }\n\n    /**\n     * Swap tokens for ether\n     */\n    function swap() external {\n        require(!isFinished);\n\n        require(this.balance >= participant2EtherCount);\n\n        uint256 tokensBalance = participant1Token.balanceOf(this);\n        require(tokensBalance >= participant1TokensCount);\n\n        isFinished = true;\n        \n        \n        //check transfer\n        uint token1Participant2InitialBalance = participant1Token.balanceOf(participant2);\n    \n\n        require(participant1Token.transfer(participant2, participant1TokensCount));\n        if (tokensBalance > participant1TokensCount) {\n            require(\n                participant1Token.transfer(participant1, tokensBalance - participant1TokensCount)\n            );\n        }\n\n        participant1.transfer(this.balance);\n        \n        \n        //check transfer\n        assert(participant1Token.balanceOf(participant2) >= token1Participant2InitialBalance+participant1TokensCount);\n    \n    }\n\n    /**\n     * Refund tokens or ether by participants\n     */\n    function refund() external {\n        if (msg.sender == participant1) {\n            uint256 tokensBalance = participant1Token.balanceOf(this);\n            require(tokensBalance>0);\n\n            participant1Token.transfer(participant1, tokensBalance);\n        } else if (msg.sender == participant2) {\n            require(this.balance > 0);\n            participant2.transfer(this.balance);\n        } else {\n            revert();\n        }\n    }\n    \n\n    /**\n     * Tokens count sent by participant #1\n     */\n    function participant1SentTokensCount() public view returns (uint256) {\n        return participant1Token.balanceOf(this);\n    }\n\n    /**\n     * Ether count sent by participant #2\n     */\n    function participant2SentEtherCount() public view returns (uint256) {\n        return this.balance;\n    }\n}\n    ",
    "price_eth": 0
};
