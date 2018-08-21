import { currentDapp } from './currentDapp';


export const search = {
  address: {
    type: 'dapp',
    dapp: currentDapp,
  },
};

const abi = [
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'stop',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'guy',
        'type': 'address'
      },
      {
        'name': 'wad',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'owner_',
        'type': 'address'
      }
    ],
    'name': 'setOwner',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'src',
        'type': 'address'
      },
      {
        'name': 'dst',
        'type': 'address'
      },
      {
        'name': 'wad',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'dst',
        'type': 'address'
      },
      {
        'name': 'wad',
        'type': 'uint128'
      }
    ],
    'name': 'push',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'name_',
        'type': 'bytes32'
      }
    ],
    'name': 'setName',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'wad',
        'type': 'uint128'
      }
    ],
    'name': 'mint',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'src',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'stopped',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'authority_',
        'type': 'address'
      }
    ],
    'name': 'setAuthority',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'src',
        'type': 'address'
      },
      {
        'name': 'wad',
        'type': 'uint128'
      }
    ],
    'name': 'pull',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'wad',
        'type': 'uint128'
      }
    ],
    'name': 'burn',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'dst',
        'type': 'address'
      },
      {
        'name': 'wad',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'start',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'authority',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'src',
        'type': 'address'
      },
      {
        'name': 'guy',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': 'symbol_',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'type': 'constructor'
  },
  {
    'anonymous': true,
    'inputs': [
      {
        'indexed': true,
        'name': 'sig',
        'type': 'bytes4'
      },
      {
        'indexed': true,
        'name': 'guy',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'foo',
        'type': 'bytes32'
      },
      {
        'indexed': true,
        'name': 'bar',
        'type': 'bytes32'
      },
      {
        'indexed': false,
        'name': 'wad',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'fax',
        'type': 'bytes'
      }
    ],
    'name': 'LogNote',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'authority',
        'type': 'address'
      }
    ],
    'name': 'LogSetAuthority',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'owner',
        'type': 'address'
      }
    ],
    'name': 'LogSetOwner',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  }
];

const uis = [
  {
    'id': 2,
    'name': 'ERC20',
    'slug': 'erc20',
    'blockchain': 'ethereum',
    'network_id': '1',
    'address': '0x27695e09149adc738a978e9a678f99e4c39e9eb9',
    'description': 'erc20',
    'abi': [
      {
        'name': 'transfer',
        'type': 'function',
        'inputs': [
          {
            'name': '_to',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'balanceOf',
        'type': 'function',
        'inputs': [
          {
            'name': '_owner',
            'type': 'address'
          }
        ],
        'outputs': [
          {
            'name': 'balance',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'totalSupply',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': 'totalSupply',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'transferFrom',
        'type': 'function',
        'inputs': [
          {
            'name': '_from',
            'type': 'address'
          },
          {
            'name': '_to',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      }
    ],
    'functions': {
      'transfer': {
        'title': 'Transfer tokens'
      },
      'balanceOf': {
        'title': 'Check balance of address'
      },
      'totalSupply': {
        'title': 'Total tokesn supply'
      },
      'transferFrom': {
        'title': 'Transfer from'
      }
    },
    'function_specs': [
      {
        'name': 'transfer',
        'title': 'Transfer tokens',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_to'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              },
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'balanceOf',
        'title': 'Check balance of address',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_owner'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'balance'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'totalSupply',
        'title': 'Total tokesn supply',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'totalSupply'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'transferFrom',
        'title': 'Transfer from',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_from'
            },
            {
              '$ref': '#/definitions/address',
              'title': '_to'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            }
          ],
          'maxItems': 3,
          'minItems': 3,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      }
    ],
    'dashboard_functions': [
      'totalSupply'
    ],
    'sorting_order': 0,
    'created_at': '2018-08-15T09:49:06.029531Z',
    'updated_at': '2018-08-15T09:49:06.029549Z',
    'image': '',
    'user': 24
  },
  {
    'id': 3,
    'name': 'kick',
    'slug': 'kick',
    'blockchain': 'ethereum',
    'network_id': '1',
    'address': '0x27695e09149adc738a978e9a678f99e4c39e9eb9',
    'description': 'Kickcoin (kickico.com)',
    'abi': [
      {
        'name': 'allAgingTimesAdded',
        'type': 'function',
        'inputs': [],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'name',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': '',
            'type': 'string'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'approve',
        'type': 'function',
        'inputs': [
          {
            'name': '_spender',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'disableTransfers',
        'type': 'function',
        'inputs': [
          {
            'name': '_disable',
            'type': 'bool'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'totalSupply',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': 'totalSupply',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'mintToken',
        'type': 'function',
        'inputs': [
          {
            'name': 'target',
            'type': 'address'
          },
          {
            'name': 'mintedAmount',
            'type': 'uint256'
          },
          {
            'name': 'agingTime',
            'type': 'uint256'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'transferFrom',
        'type': 'function',
        'inputs': [
          {
            'name': '_from',
            'type': 'address'
          },
          {
            'name': '_to',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'calculateDividends',
        'type': 'function',
        'inputs': [
          {
            'name': 'limit',
            'type': 'uint256'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'allowManuallyBurnTokens',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': '',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'decimals',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': '',
            'type': 'uint8'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'burn',
        'type': 'function',
        'inputs': [
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'standard',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': '',
            'type': 'string'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'balanceOf',
        'type': 'function',
        'inputs': [
          {
            'name': '_owner',
            'type': 'address'
          }
        ],
        'outputs': [
          {
            'name': 'balance',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'disableManuallyBurnTokens',
        'type': 'function',
        'inputs': [
          {
            'name': '_disable',
            'type': 'bool'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'receiveDividends',
        'type': 'function',
        'inputs': [],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'issue',
        'type': 'function',
        'inputs': [
          {
            'name': '_to',
            'type': 'address'
          },
          {
            'name': '_amount',
            'type': 'uint256'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'addAgingTime',
        'type': 'function',
        'inputs': [
          {
            'name': 'time',
            'type': 'uint256'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'owner',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': '',
            'type': 'address'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'symbol',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': '',
            'type': 'string'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'destroy',
        'type': 'function',
        'inputs': [
          {
            'name': '_from',
            'type': 'address'
          },
          {
            'name': '_amount',
            'type': 'uint256'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'changeOwner',
        'type': 'function',
        'inputs': [
          {
            'name': 'newOwner',
            'type': 'address'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'transfer',
        'type': 'function',
        'inputs': [
          {
            'name': '_to',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'transfersEnabled',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': '',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'approveAndCall',
        'type': 'function',
        'inputs': [
          {
            'name': '_spender',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          },
          {
            'name': '_extraData',
            'type': 'bytes'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'accountBalance',
        'type': 'function',
        'inputs': [
          {
            'name': '_address',
            'type': 'address'
          }
        ],
        'outputs': [
          {
            'name': 'balance',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'addressByIndex',
        'type': 'function',
        'inputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': '',
            'type': 'address'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'allowance',
        'type': 'function',
        'inputs': [
          {
            'name': '_owner',
            'type': 'address'
          },
          {
            'name': '_spender',
            'type': 'address'
          }
        ],
        'outputs': [
          {
            'name': 'remaining',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'agingBalanceOf',
        'type': 'function',
        'inputs': [
          {
            'name': '',
            'type': 'address'
          },
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'addAgingTimesForPool',
        'type': 'function',
        'inputs': [
          {
            'name': 'poolAddress',
            'type': 'address'
          },
          {
            'name': 'agingTime',
            'type': 'uint256'
          }
        ],
        'outputs': [],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'countAddresses',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': 'length',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'type': 'constructor',
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable'
      },
      {
        'type': 'fallback',
        'payable': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'Transfer',
        'type': 'event',
        'inputs': [
          {
            'name': 'from',
            'type': 'address',
            'indexed': true
          },
          {
            'name': 'to',
            'type': 'address',
            'indexed': true
          },
          {
            'name': 'value',
            'type': 'uint256',
            'indexed': false
          }
        ],
        'anonymous': false
      },
      {
        'name': 'AgingTransfer',
        'type': 'event',
        'inputs': [
          {
            'name': 'from',
            'type': 'address',
            'indexed': true
          },
          {
            'name': 'to',
            'type': 'address',
            'indexed': true
          },
          {
            'name': 'value',
            'type': 'uint256',
            'indexed': false
          },
          {
            'name': 'agingTime',
            'type': 'uint256',
            'indexed': false
          }
        ],
        'anonymous': false
      },
      {
        'name': 'Approval',
        'type': 'event',
        'inputs': [
          {
            'name': '_owner',
            'type': 'address',
            'indexed': true
          },
          {
            'name': '_spender',
            'type': 'address',
            'indexed': true
          },
          {
            'name': '_value',
            'type': 'uint256',
            'indexed': false
          }
        ],
        'anonymous': false
      },
      {
        'name': 'Issuance',
        'type': 'event',
        'inputs': [
          {
            'name': '_amount',
            'type': 'uint256',
            'indexed': false
          }
        ],
        'anonymous': false
      },
      {
        'name': 'Destruction',
        'type': 'event',
        'inputs': [
          {
            'name': '_amount',
            'type': 'uint256',
            'indexed': false
          }
        ],
        'anonymous': false
      },
      {
        'name': 'Burn',
        'type': 'event',
        'inputs': [
          {
            'name': 'from',
            'type': 'address',
            'indexed': true
          },
          {
            'name': 'value',
            'type': 'uint256',
            'indexed': false
          }
        ],
        'anonymous': false
      },
      {
        'name': 'NewSmartToken',
        'type': 'event',
        'inputs': [
          {
            'name': '_token',
            'type': 'address',
            'indexed': false
          }
        ],
        'anonymous': false
      }
    ],
    'functions': {
      'transfer': {
        'title': 'Transfer tokens'
      },
      'balanceOf': {
        'title': 'Check balance of address'
      },
      'totalSupply': {
        'title': 'Total tokesn supply'
      },
      'transferFrom': {
        'title': 'Transfer from'
      }
    },
    'function_specs': [
      {
        'name': 'allAgingTimesAdded',
        'title': 'allAgingTimesAdded',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'name',
        'title': 'name',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'string',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'approve',
        'title': 'approve',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_spender'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'disableTransfers',
        'title': 'disableTransfers',
        'inputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': '_disable',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'totalSupply',
        'title': 'Total tokesn supply',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'totalSupply'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'mintToken',
        'title': 'mintToken',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': 'target'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': 'mintedAmount'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': 'agingTime'
            }
          ],
          'maxItems': 3,
          'minItems': 3,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'transferFrom',
        'title': 'Transfer from',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_from'
            },
            {
              '$ref': '#/definitions/address',
              'title': '_to'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            }
          ],
          'maxItems': 3,
          'minItems': 3,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'calculateDividends',
        'title': 'calculateDividends',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'limit'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'allowManuallyBurnTokens',
        'title': 'allowManuallyBurnTokens',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': '',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'decimals',
        'title': 'decimals',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint8',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'burn',
        'title': 'burn',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'standard',
        'title': 'standard',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'string',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'balanceOf',
        'title': 'Check balance of address',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_owner'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'balance'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'disableManuallyBurnTokens',
        'title': 'disableManuallyBurnTokens',
        'inputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': '_disable',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'receiveDividends',
        'title': 'receiveDividends',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'issue',
        'title': 'issue',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_to'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_amount'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'addAgingTime',
        'title': 'addAgingTime',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'time'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'owner',
        'title': 'owner',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'symbol',
        'title': 'symbol',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'string',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'destroy',
        'title': 'destroy',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_from'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_amount'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'changeOwner',
        'title': 'changeOwner',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': 'newOwner'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'transfer',
        'title': 'Transfer tokens',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_to'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'transfersEnabled',
        'title': 'transfersEnabled',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': '',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'approveAndCall',
        'title': 'approveAndCall',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_spender'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            },
            {
              '$ref': '#/definitions/bytes',
              'title': '_extraData'
            }
          ],
          'maxItems': 3,
          'minItems': 3,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'accountBalance',
        'title': 'accountBalance',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_address'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'balance'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'addressByIndex',
        'title': 'addressByIndex',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'allowance',
        'title': 'allowance',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_owner'
            },
            {
              '$ref': '#/definitions/address',
              'title': '_spender'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'remaining'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'agingBalanceOf',
        'title': 'agingBalanceOf',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': ''
            },
            {
              '$ref': '#/definitions/uint256',
              'title': ''
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': ''
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'addAgingTimesForPool',
        'title': 'addAgingTimesForPool',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': 'poolAddress'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': 'agingTime'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'countAddresses',
        'title': 'countAddresses',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'length'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': '',
        'title': '',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'payable': false,
        'constant': false
      }
    ],
    'dashboard_functions': [
      'totalSupply'
    ],
    'sorting_order': 0,
    'created_at': '2018-08-15T09:50:58.091547Z',
    'updated_at': '2018-08-15T09:50:58.091562Z',
    'image': '',
    'user': 24
  },
  {
    'id': 1,
    'name': 'ERC20 simple',
    'slug': 'erc20simple',
    'blockchain': 'ethereum',
    'network_id': '1',
    'address': '0x27695e09149adc738a978e9a678f99e4c39e9eb9',
    'description': 'ERC20 simple ui',
    'abi': [
      {
        'name': 'transfer',
        'type': 'function',
        'inputs': [
          {
            'name': '_to',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'outputs': [
          {
            'name': 'success',
            'type': 'bool'
          }
        ],
        'payable': false,
        'constant': false,
        'stateMutability': 'nonpayable'
      },
      {
        'name': 'balanceOf',
        'type': 'function',
        'inputs': [
          {
            'name': '_owner',
            'type': 'address'
          }
        ],
        'outputs': [
          {
            'name': 'balance',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      },
      {
        'name': 'totalSupply',
        'type': 'function',
        'inputs': [],
        'outputs': [
          {
            'name': 'totalSupply',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'constant': true,
        'stateMutability': 'view'
      }
    ],
    'functions': {
      'transfer': {
        'title': 'Transfer tokens'
      },
      'balanceOf': {
        'title': 'Check balance of address'
      },
      'totalSupply': {
        'title': 'Total tokesn supply'
      }
    },
    'function_specs': [
      {
        'name': 'transfer',
        'title': 'Transfer tokens',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_to'
            },
            {
              '$ref': '#/definitions/uint256',
              'title': '_value'
            }
          ],
          'maxItems': 2,
          'minItems': 2,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              'type': 'boolean',
              'title': 'success',
              'default': false
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': false
      },
      {
        'name': 'balanceOf',
        'title': 'Check balance of address',
        'inputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/address',
              'title': '_owner'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'balance'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      },
      {
        'name': 'totalSupply',
        'title': 'Total tokesn supply',
        'inputs': {
          'type': 'array',
          'maxItems': 0,
          'minItems': 0
        },
        'outputs': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/uint256',
              'title': 'totalSupply'
            }
          ],
          'maxItems': 1,
          'minItems': 1,
          'definitions': {
            'hash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$'
            },
            'uint': {
              '$ref': '#/definitions/uint256'
            },
            'bytes': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$'
            },
            'uint8': {
              'type': 'integer',
              'maximum': 255,
              'minimum': 0
            },
            'uint16': {
              'type': 'integer',
              'maximum': 65535,
              'minimum': 0
            },
            'uint32': {
              'type': 'integer',
              'maximum': 4294967295,
              'minimum': 0
            },
            'uint64': {
              'type': 'integer',
              'maximum': 18446744073709552000,
              'minimum': 0
            },
            'address': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
            },
            'bytes32': {
              'type': 'string',
              'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$'
            },
            'uint128': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 39,
              'minLength': 1
            },
            'uint256': {
              'type': 'string',
              'pattern': '^[0-9]+$',
              'maxLength': 78,
              'minLength': 1
            },
            'ethCount': {
              'type': 'string',
              'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'fileHash': {
              'type': 'string',
              'pattern': '^0x[0-9a-fA-F]{64}$',
              '$comment': 'deprecated, use hash instead'
            },
            'unixTime': {
              'type': 'integer',
              'maximum': 2147483647,
              'minimum': 1
            },
            'uintMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/uintMappingEntry'
              }
            },
            'addressArray': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/address'
              }
            },
            'addressMapping': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/addressMappingEntry'
              }
            },
            'ethCountPositive': {
              'type': 'string',
              'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$'
            },
            'uintMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/uint'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            },
            'addressMappingEntry': {
              'type': 'array',
              'items': [
                {
                  '$ref': '#/definitions/address'
                },
                {}
              ],
              'maxItems': 2,
              'minItems': 2
            }
          }
        },
        'payable': false,
        'constant': true
      }
    ],
    'dashboard_functions': [
      'totalSupply'
    ],
    'sorting_order': 0,
    'created_at': '2018-08-15T09:48:15.177734Z',
    'updated_at': '2018-08-15T09:48:15.177751Z',
    'image': '',
    'user': 24
  }
];

const raw = [
        {
          'name': 'name',
          'constant': true,
          'payable': false,
          'title': 'name',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/bytes32',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'stop',
          'constant': false,
          'payable': false,
          'title': 'stop',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          }
        },
        {
          'name': 'approve',
          'constant': false,
          'payable': false,
          'title': 'approve',
          'inputs': {
            'type': 'array',
            'minItems': 2,
            'maxItems': 2,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'guy'
              },
              {
                '$ref': '#/definitions/uint256',
                'title': 'wad'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                'type': 'boolean',
                'default': false,
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'setOwner',
          'constant': false,
          'payable': false,
          'title': 'setOwner',
          'inputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'owner_'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          }
        },
        {
          'name': 'totalSupply',
          'constant': true,
          'payable': false,
          'title': 'totalSupply',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/uint256',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'transferFrom',
          'constant': false,
          'payable': false,
          'title': 'transferFrom',
          'inputs': {
            'type': 'array',
            'minItems': 3,
            'maxItems': 3,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'src'
              },
              {
                '$ref': '#/definitions/address',
                'title': 'dst'
              },
              {
                '$ref': '#/definitions/uint256',
                'title': 'wad'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                'type': 'boolean',
                'default': false,
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'decimals',
          'constant': true,
          'payable': false,
          'title': 'decimals',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/uint256',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'push',
          'constant': false,
          'payable': false,
          'title': 'push',
          'inputs': {
            'type': 'array',
            'minItems': 2,
            'maxItems': 2,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'dst'
              },
              {
                '$ref': '#/definitions/uint128',
                'title': 'wad'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                'type': 'boolean',
                'default': false,
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'setName',
          'constant': false,
          'payable': false,
          'title': 'setName',
          'inputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/bytes32',
                'title': 'name_'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          }
        },
        {
          'name': 'mint',
          'constant': false,
          'payable': false,
          'title': 'mint',
          'inputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/uint128',
                'title': 'wad'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          }
        },
        {
          'name': 'balanceOf',
          'constant': true,
          'payable': false,
          'title': 'balanceOf',
          'inputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'src'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/uint256',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'stopped',
          'constant': true,
          'payable': false,
          'title': 'stopped',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                'type': 'boolean',
                'default': false,
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'setAuthority',
          'constant': false,
          'payable': false,
          'title': 'setAuthority',
          'inputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'authority_'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          }
        },
        {
          'name': 'pull',
          'constant': false,
          'payable': false,
          'title': 'pull',
          'inputs': {
            'type': 'array',
            'minItems': 2,
            'maxItems': 2,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'src'
              },
              {
                '$ref': '#/definitions/uint128',
                'title': 'wad'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                'type': 'boolean',
                'default': false,
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'owner',
          'constant': true,
          'payable': false,
          'title': 'owner',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'burn',
          'constant': false,
          'payable': false,
          'title': 'burn',
          'inputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/uint128',
                'title': 'wad'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          }
        },
        {
          'name': 'symbol',
          'constant': true,
          'payable': false,
          'title': 'symbol',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/bytes32',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'transfer',
          'constant': false,
          'payable': false,
          'title': 'transfer',
          'inputs': {
            'type': 'array',
            'minItems': 2,
            'maxItems': 2,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'dst'
              },
              {
                '$ref': '#/definitions/uint256',
                'title': 'wad'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                'type': 'boolean',
                'default': false,
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'start',
          'constant': false,
          'payable': false,
          'title': 'start',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          }
        },
        {
          'name': 'authority',
          'constant': true,
          'payable': false,
          'title': 'authority',
          'inputs': {
            'type': 'array',
            'minItems': 0,
            'maxItems': 0
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        },
        {
          'name': 'allowance',
          'constant': true,
          'payable': false,
          'title': 'allowance',
          'inputs': {
            'type': 'array',
            'minItems': 2,
            'maxItems': 2,
            'items': [
              {
                '$ref': '#/definitions/address',
                'title': 'src'
              },
              {
                '$ref': '#/definitions/address',
                'title': 'guy'
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          },
          'outputs': {
            'type': 'array',
            'minItems': 1,
            'maxItems': 1,
            'items': [
              {
                '$ref': '#/definitions/uint256',
                'title': ''
              }
            ],
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
                '$comment': 'deprecated, use hash instead',
                'type': 'string',
                'pattern': '^0x[0-9a-fA-F]{64}$'
              },
              'hash': {
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
              'bytes1': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{2}$'
              },
              'bytes2': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{4}$'
              },
              'bytes3': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{6}$'
              },
              'bytes4': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{8}$'
              },
              'bytes5': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{10}$'
              },
              'bytes6': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{12}$'
              },
              'bytes7': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{14}$'
              },
              'bytes8': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{16}$'
              },
              'bytes9': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{18}$'
              },
              'bytes10': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{20}$'
              },
              'bytes11': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{22}$'
              },
              'bytes12': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{24}$'
              },
              'bytes13': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{26}$'
              },
              'bytes14': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{28}$'
              },
              'bytes15': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{30}$'
              },
              'bytes16': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{32}$'
              },
              'bytes17': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{34}$'
              },
              'bytes18': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{36}$'
              },
              'bytes19': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{38}$'
              },
              'bytes20': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$'
              },
              'bytes21': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{42}$'
              },
              'bytes22': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{44}$'
              },
              'bytes23': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{46}$'
              },
              'bytes24': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{48}$'
              },
              'bytes25': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{50}$'
              },
              'bytes26': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{52}$'
              },
              'bytes27': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{54}$'
              },
              'bytes28': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{56}$'
              },
              'bytes29': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{58}$'
              },
              'bytes30': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{60}$'
              },
              'bytes31': {
                'type': 'string',
                'pattern': '^(?:0[Xx])?[0-9a-fA-F]{62}$'
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
            }
          }
        }
      ];

export function searchContractUi() {
  const response = {
    'address': {
      'type': 'contract_ui',
      'uis': [
        {
          'id': 3,
          'name': 'kick',
          'slug': 'kick',
          'blockchain': 'ethereum',
          'network_id': '1',
          'address': '0x27695e09149adc738a978e9a678f99e4c39e9eb9',
          'description': 'Kickcoin (kickico.com)',
          'abi': [
            {
              'name': 'allAgingTimesAdded',
              'type': 'function',
              'inputs': [],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable'
            },
            {
              'name': 'name',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': '',
                  'type': 'string'
                }
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view'
            },
            {
              'name': 'approve',
              'type': 'function',
              'inputs': [
                {
                  'name': '_spender',
                  'type': 'address'
                },
                {
                  'name': '_value',
                  'type': 'uint256'
                }
              ],
              'outputs': [
                {
                  'name': 'success',
                  'type': 'bool'
                }
              ],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable'
            },
            {
              'name': 'disableTransfers',
              'type': 'function',
              'inputs': [
                {
                  'name': '_disable',
                  'type': 'bool',
                }
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'totalSupply',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': 'totalSupply',
                  'type': 'uint256'
                }
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'mintToken',
              'type': 'function',
              'inputs': [
                {
                  'name': 'target',
                  'type': 'address',
                },
                {
                  'name': 'mintedAmount',
                  'type': 'uint256',
                },
                {
                  'name': 'agingTime',
                  'type': 'uint256',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'transferFrom',
              'type': 'function',
              'inputs': [
                {
                  'name': '_from',
                  'type': 'address',
                },
                {
                  'name': '_to',
                  'type': 'address',
                },
                {
                  'name': '_value',
                  'type': 'uint256',
                },
              ],
              'outputs': [
                {
                  'name': 'success',
                  'type': 'bool',
                },
              ],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'calculateDividends',
              'type': 'function',
              'inputs': [
                {
                  'name': 'limit',
                  'type': 'uint256',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'allowManuallyBurnTokens',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': '',
                  'type': 'bool',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'decimals',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': '',
                  'type': 'uint8',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'burn',
              'type': 'function',
              'inputs': [
                {
                  'name': '_value',
                  'type': 'uint256',
                },
              ],
              'outputs': [
                {
                  'name': 'success',
                  'type': 'bool',
                },
              ],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'standard',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': '',
                  'type': 'string',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'balanceOf',
              'type': 'function',
              'inputs': [
                {
                  'name': '_owner',
                  'type': 'address',
                },
              ],
              'outputs': [
                {
                  'name': 'balance',
                  'type': 'uint256',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'disableManuallyBurnTokens',
              'type': 'function',
              'inputs': [
                {
                  'name': '_disable',
                  'type': 'bool',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'receiveDividends',
              'type': 'function',
              'inputs': [],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'issue',
              'type': 'function',
              'inputs': [
                {
                  'name': '_to',
                  'type': 'address',
                },
                {
                  'name': '_amount',
                  'type': 'uint256',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'addAgingTime',
              'type': 'function',
              'inputs': [
                {
                  'name': 'time',
                  'type': 'uint256',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'owner',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': '',
                  'type': 'address',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'symbol',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': '',
                  'type': 'string',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'destroy',
              'type': 'function',
              'inputs': [
                {
                  'name': '_from',
                  'type': 'address',
                },
                {
                  'name': '_amount',
                  'type': 'uint256',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'changeOwner',
              'type': 'function',
              'inputs': [
                {
                  'name': 'newOwner',
                  'type': 'address',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'transfer',
              'type': 'function',
              'inputs': [
                {
                  'name': '_to',
                  'type': 'address',
                },
                {
                  'name': '_value',
                  'type': 'uint256',
                },
              ],
              'outputs': [
                {
                  'name': 'success',
                  'type': 'bool',
                },
              ],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'transfersEnabled',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': '',
                  'type': 'bool',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'approveAndCall',
              'type': 'function',
              'inputs': [
                {
                  'name': '_spender',
                  'type': 'address',
                },
                {
                  'name': '_value',
                  'type': 'uint256',
                },
                {
                  'name': '_extraData',
                  'type': 'bytes',
                },
              ],
              'outputs': [
                {
                  'name': 'success',
                  'type': 'bool',
                },
              ],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'accountBalance',
              'type': 'function',
              'inputs': [
                {
                  'name': '_address',
                  'type': 'address',
                },
              ],
              'outputs': [
                {
                  'name': 'balance',
                  'type': 'uint256',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'addressByIndex',
              'type': 'function',
              'inputs': [
                {
                  'name': '',
                  'type': 'uint256',
                },
              ],
              'outputs': [
                {
                  'name': '',
                  'type': 'address',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'allowance',
              'type': 'function',
              'inputs': [
                {
                  'name': '_owner',
                  'type': 'address',
                },
                {
                  'name': '_spender',
                  'type': 'address',
                },
              ],
              'outputs': [
                {
                  'name': 'remaining',
                  'type': 'uint256',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'agingBalanceOf',
              'type': 'function',
              'inputs': [
                {
                  'name': '',
                  'type': 'address',
                },
                {
                  'name': '',
                  'type': 'uint256',
                },
              ],
              'outputs': [
                {
                  'name': '',
                  'type': 'uint256',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'name': 'addAgingTimesForPool',
              'type': 'function',
              'inputs': [
                {
                  'name': 'poolAddress',
                  'type': 'address',
                },
                {
                  'name': 'agingTime',
                  'type': 'uint256',
                },
              ],
              'outputs': [],
              'payable': false,
              'constant': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'countAddresses',
              'type': 'function',
              'inputs': [],
              'outputs': [
                {
                  'name': 'length',
                  'type': 'uint256',
                },
              ],
              'payable': false,
              'constant': true,
              'stateMutability': 'view',
            },
            {
              'type': 'constructor',
              'inputs': [],
              'payable': false,
              'stateMutability': 'nonpayable',
            },
            {
              'type': 'fallback',
              'payable': false,
              'stateMutability': 'nonpayable',
            },
            {
              'name': 'Transfer',
              'type': 'event',
              'inputs': [
                {
                  'name': 'from',
                  'type': 'address',
                  'indexed': true,
                },
                {
                  'name': 'to',
                  'type': 'address',
                  'indexed': true,
                },
                {
                  'name': 'value',
                  'type': 'uint256',
                  'indexed': false,
                },
              ],
              'anonymous': false,
            },
            {
              'name': 'AgingTransfer',
              'type': 'event',
              'inputs': [
                {
                  'name': 'from',
                  'type': 'address',
                  'indexed': true,
                },
                {
                  'name': 'to',
                  'type': 'address',
                  'indexed': true,
                },
                {
                  'name': 'value',
                  'type': 'uint256',
                  'indexed': false,
                },
                {
                  'name': 'agingTime',
                  'type': 'uint256',
                  'indexed': false,
                },
              ],
              'anonymous': false,
            },
            {
              'name': 'Approval',
              'type': 'event',
              'inputs': [
                {
                  'name': '_owner',
                  'type': 'address',
                  'indexed': true,
                },
                {
                  'name': '_spender',
                  'type': 'address',
                  'indexed': true,
                },
                {
                  'name': '_value',
                  'type': 'uint256',
                  'indexed': false,
                },
              ],
              'anonymous': false,
            },
            {
              'name': 'Issuance',
              'type': 'event',
              'inputs': [
                {
                  'name': '_amount',
                  'type': 'uint256',
                  'indexed': false,
                },
              ],
              'anonymous': false,
            },
            {
              'name': 'Destruction',
              'type': 'event',
              'inputs': [
                {
                  'name': '_amount',
                  'type': 'uint256',
                  'indexed': false,
                },
              ],
              'anonymous': false,
            },
            {
              'name': 'Burn',
              'type': 'event',
              'inputs': [
                {
                  'name': 'from',
                  'type': 'address',
                  'indexed': true,
                },
                {
                  'name': 'value',
                  'type': 'uint256',
                  'indexed': false,
                },
              ],
              'anonymous': false,
            },
            {
              'name': 'NewSmartToken',
              'type': 'event',
              'inputs': [
                {
                  'name': '_token',
                  'type': 'address',
                  'indexed': false,
                },
              ],
              'anonymous': false,
            },
          ],
          'functions': {
            'transfer': {
              'title': 'Transfer tokens',
            },
            'balanceOf': {
              'title': 'Check balance of address',
            },
            'totalSupply': {
              'title': 'Total tokesn supply',
            },
            'transferFrom': {
              'title': 'Transfer from',
            },
          },
          'function_specs': [
            {
              'name': 'allAgingTimesAdded',
              'title': 'allAgingTimesAdded',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'name',
              'title': 'name',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'string',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'approve',
              'title': 'approve',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_spender',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '_value',
                  },
                ],
                'maxItems': 2,
                'minItems': 2,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': 'success',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'disableTransfers',
              'title': 'disableTransfers',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': '_disable',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'totalSupply',
              'title': 'Total tokesn supply',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'totalSupply',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'mintToken',
              'title': 'mintToken',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': 'target',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'mintedAmount',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'agingTime',
                  },
                ],
                'maxItems': 3,
                'minItems': 3,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'transferFrom',
              'title': 'Transfer from',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_from',
                  },
                  {
                    '$ref': '#/definitions/address',
                    'title': '_to',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '_value',
                  },
                ],
                'maxItems': 3,
                'minItems': 3,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': 'success',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'calculateDividends',
              'title': 'calculateDividends',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'limit',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'allowManuallyBurnTokens',
              'title': 'allowManuallyBurnTokens',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': '',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'decimals',
              'title': 'decimals',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint8',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'burn',
              'title': 'burn',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '_value',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': 'success',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'standard',
              'title': 'standard',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'string',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'balanceOf',
              'title': 'Check balance of address',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_owner',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'balance',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'disableManuallyBurnTokens',
              'title': 'disableManuallyBurnTokens',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': '_disable',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'receiveDividends',
              'title': 'receiveDividends',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'issue',
              'title': 'issue',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_to',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '_amount',
                  },
                ],
                'maxItems': 2,
                'minItems': 2,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'addAgingTime',
              'title': 'addAgingTime',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'time',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'owner',
              'title': 'owner',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'symbol',
              'title': 'symbol',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'string',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'destroy',
              'title': 'destroy',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_from',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '_amount',
                  },
                ],
                'maxItems': 2,
                'minItems': 2,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'changeOwner',
              'title': 'changeOwner',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': 'newOwner',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'transfer',
              'title': 'Transfer tokens',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_to',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '_value',
                  },
                ],
                'maxItems': 2,
                'minItems': 2,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': 'success',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'transfersEnabled',
              'title': 'transfersEnabled',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': '',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'approveAndCall',
              'title': 'approveAndCall',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_spender',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '_value',
                  },
                  {
                    '$ref': '#/definitions/bytes',
                    'title': '_extraData',
                  },
                ],
                'maxItems': 3,
                'minItems': 3,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    'type': 'boolean',
                    'title': 'success',
                    'default': false,
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'accountBalance',
              'title': 'accountBalance',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_address',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'balance',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'addressByIndex',
              'title': 'addressByIndex',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'allowance',
              'title': 'allowance',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '_owner',
                  },
                  {
                    '$ref': '#/definitions/address',
                    'title': '_spender',
                  },
                ],
                'maxItems': 2,
                'minItems': 2,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'remaining',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'agingBalanceOf',
              'title': 'agingBalanceOf',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': '',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '',
                  },
                ],
                'maxItems': 2,
                'minItems': 2,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': '',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': 'addAgingTimesForPool',
              'title': 'addAgingTimesForPool',
              'inputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/address',
                    'title': 'poolAddress',
                  },
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'agingTime',
                  },
                ],
                'maxItems': 2,
                'minItems': 2,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
            {
              'name': 'countAddresses',
              'title': 'countAddresses',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'items': [
                  {
                    '$ref': '#/definitions/uint256',
                    'title': 'length',
                  },
                ],
                'maxItems': 1,
                'minItems': 1,
                'definitions': {
                  'hash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                  },
                  'uint': {
                    '$ref': '#/definitions/uint256',
                  },
                  'bytes': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]+$',
                  },
                  'uint8': {
                    'type': 'integer',
                    'maximum': 255,
                    'minimum': 0,
                  },
                  'uint16': {
                    'type': 'integer',
                    'maximum': 65535,
                    'minimum': 0,
                  },
                  'uint32': {
                    'type': 'integer',
                    'maximum': 4294967295,
                    'minimum': 0,
                  },
                  'uint64': {
                    'type': 'integer',
                    'maximum': 18446744073709552000,
                    'minimum': 0,
                  },
                  'address': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{40}$',
                  },
                  'bytes32': {
                    'type': 'string',
                    'pattern': '^(?:0[Xx])?[0-9a-fA-F]{64}$',
                  },
                  'uint128': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 39,
                    'minLength': 1,
                  },
                  'uint256': {
                    'type': 'string',
                    'pattern': '^[0-9]+$',
                    'maxLength': 78,
                    'minLength': 1,
                  },
                  'ethCount': {
                    'type': 'string',
                    'pattern': '^(0|[1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'fileHash': {
                    'type': 'string',
                    'pattern': '^0x[0-9a-fA-F]{64}$',
                    '$comment': 'deprecated, use hash instead',
                  },
                  'unixTime': {
                    'type': 'integer',
                    'maximum': 2147483647,
                    'minimum': 1,
                  },
                  'uintMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/uintMappingEntry',
                    },
                  },
                  'addressArray': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/address',
                    },
                  },
                  'addressMapping': {
                    'type': 'array',
                    'items': {
                      '$ref': '#/definitions/addressMappingEntry',
                    },
                  },
                  'ethCountPositive': {
                    'type': 'string',
                    'pattern': '^([1-9][0-9]{0,54}|[0-9]{1,55}\\.[0-9]{0,17}[1-9])$',
                  },
                  'uintMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/uint',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                  'addressMappingEntry': {
                    'type': 'array',
                    'items': [
                      {
                        '$ref': '#/definitions/address',
                      },
                      {},
                    ],
                    'maxItems': 2,
                    'minItems': 2,
                  },
                },
              },
              'payable': false,
              'constant': true,
            },
            {
              'name': '',
              'title': '',
              'inputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'outputs': {
                'type': 'array',
                'maxItems': 0,
                'minItems': 0,
              },
              'payable': false,
              'constant': false,
            },
          ],
          'dashboard_functions': [
            'totalSupply',
          ],
          'sorting_order': 0,
          'created_at': '2018-08-15T09:50:58.091547Z',
          'updated_at': '2018-08-15T09:50:58.091562Z',
          'image': '',
          'user': 24,
        },
      ],
    },
  };

  return [200, response];
}

export function searchAbi() {
  const response = {
    'address': {
      'type': 'abi',
      'abi': abi,
      'uis': uis,
      'raw_abi_function_specs': raw
    },
  };

  return [200, response];
}

export function searchAbiNoType() {
  const response = {
    'address': {
      'type': 'abi',
      'abi': abi,
      'uis': [],
      'raw_abi_function_specs': raw
    },
  };

  return [200, response];
}
