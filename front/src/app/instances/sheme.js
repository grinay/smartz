export const sheme = [
  {
    name: 'account',
    title: 'Get balance',
    constant: true,
    payable: false,
    inputs: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: [
        { $ref: '#/definitions/name', title: 'Account name' },
        { $ref: '#/definitions/uint64', title: 'id' }
      ],
      definitions: {
        account_name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        asset: { type: 'string', pattern: '^[0-9]\\.[0-9]+\\ [a-zA-Z]+' },
        uint32: { type: 'integer', minimum: 0, maximum: 4294967295 },
        uint64: { type: 'integer', minimum: 0, maximum: 18446744073709552000 }
      }
    },
    outputs: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: [
        { $ref: '#/definitions/name', title: 'owner' },
        { $ref: '#/definitions/asset', title: 'balance' }
      ],
      definitions: {
        account_name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        asset: { type: 'string', pattern: '^[0-9]\\.[0-9]+\\ [a-zA-Z]+' },
        uint32: { type: 'integer', minimum: 0, maximum: 4294967295 },
        uint64: { type: 'integer', minimum: 0, maximum: 18446744073709552000 }
      }
    }
  },
  {
    name: 'state',
    title: '',
    constant: true,
    payable: false,
    inputs: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: [
        { $ref: '#/definitions/name', title: 'owner' },
        { $ref: '#/definitions/uint64', title: 'id' }
      ],
      definitions: {
        account_name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        asset: { type: 'string', pattern: '^[0-9]\\.[0-9]+\\ [a-zA-Z]+' },
        uint32: { type: 'integer', minimum: 0, maximum: 4294967295 },
        uint64: { type: 'integer', minimum: 0, maximum: 18446744073709552000 }
      }
    },
    outputs: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: [
        { $ref: '#/definitions/uint64', title: 'id' },
        { $ref: '#/definitions/asset', title: 'totalSupply' }
      ],
      definitions: {
        account_name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        asset: { type: 'string', pattern: '^[0-9]\\.[0-9]+\\ [a-zA-Z]+' },
        uint32: { type: 'integer', minimum: 0, maximum: 4294967295 },
        uint64: { type: 'integer', minimum: 0, maximum: 18446744073709552000 }
      }
    }
  },
  {
    name: 'transfer',
    title: 'Transfer',
    constant: false,
    payable: false,
    inputs: {
      type: 'array',
      minItems: 3,
      maxItems: 3,
      items: [
        { $ref: '#/definitions/name', title: 'From' },
        { $ref: '#/definitions/name', title: 'To' },
        { $ref: '#/definitions/asset', title: 'Quantity' }
      ],
      definitions: {
        account_name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        asset: { type: 'string', pattern: '^[0-9]\\.[0-9]+\\ [a-zA-Z]+' },
        uint32: { type: 'integer', minimum: 0, maximum: 4294967295 },
        uint64: { type: 'integer', minimum: 0, maximum: 18446744073709552000 }
      }
    },
    outputs: { type: 'array', minItems: 0, maxItems: 0 },
    description: 'Transfer tokens'
  },
  {
    name: 'issue',
    title: 'Issue',
    constant: false,
    payable: false,
    inputs: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: [
        { $ref: '#/definitions/name', title: 'To' },
        { $ref: '#/definitions/asset', title: 'Quantity' }
      ],
      definitions: {
        account_name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        name: { type: 'string', pattern: '^[1-5a-z]{2,12}$' },
        asset: { type: 'string', pattern: '^[0-9]\\.[0-9]+\\ [a-zA-Z]+' },
        uint32: { type: 'integer', minimum: 0, maximum: 4294967295 },
        uint64: { type: 'integer', minimum: 0, maximum: 18446744073709552000 }
      }
    },
    outputs: { type: 'array', minItems: 0, maxItems: 0 },
    description: 'Issue new tokens'
  },
  {
    name: 'totalSupply',
    title: 'Total supply',
    constant: true,
    payable: false,
    inputs: { type: 'array', minItems: 0, maxItems: 0 },
    outputs: { type: 'array', minItems: 0, maxItems: 0 }
  }
];
