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
                "title": "Signatures quorum",
                "description": "Number of signatures required to withdraw funds or modify signatures"
            },
            "owners": {
                "title": "Addresses of owners",
                "description": "Addresses (signatures) of owners of a new wallet",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/address"
                },
                "minItems": 1,
                "maxItems": 250
            },
            "file_hash": {
                "title": "File",
                "description": "File to hash",
                "$ref": "#/definitions/fileHash",
                "format": "data-url"
            },
        },
        "definitions": {
            "fileHash": {
                "type": "string",
                "pattern": "^[0-9a-fA-F]{64}$"
            },
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
            }
        }
    },
    "ui_schema": {
        "signs_count": {
            "ui:widget": "updown"
        },
        "owners": {
            "items": {
                "ui:placeholder": "Valid Ethereum address"
            },
            "ui:options": {
                "orderable": false
            }
        }
    }
}

export const ctorCustom = {
    "ctor_id": "5ac72d56e1d044000b1bf93c",
    "fetchStatus": "success",
    "ctor_name": "Custom name text test",
    "ctor_descr": "Full description",
    "price_eth": 0,
    "schema": {
        "type": "object",
        "required": [
            "file_hash",
        ],
        "additionalProperties": false,
        "properties": {
            "file_hash": {
                "title": "File",
                "description": "File to hash",
                "$ref": "#/definitions/fileHash",
            },
        },
        "definitions": {
            "fileHash": {
                "type": "string",
                "pattern": "^[0-9a-fA-F]{64}$"
            },
        }
    },
    "ui_schema": {
        "file_hash": {
            "ui:widget": "fileHash"
        },
    }
}
