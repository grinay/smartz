import {isAddress} from "../../../../helpers/eth";
import { blockchains } from '../../../../constants/constants';
import {keccak256, sha256} from "ethereumjs-util";

const { bufferToHex } = require('ethereumjs-util');


const fileLineValidators = {
  [blockchains.ethereum]: function (line) {
    let els = line.split(' ');
    if (els.length !== 2)
      return 'Incorrect line format';

    if (!isAddress(els[0]))
      return 'Incorrect line format (address)';

    if (els[0].toLowerCase() !== els[0])
      return 'Incorrect line format (address must be in lower case)';

    if (!/[0-9]+/.test(els[1]))
      return 'Incorrect line format (token amount)';

    return null;
  },
  [blockchains.eos]: function (line) {
    let els = line.split(' ');
    if (els.length !== 2)
      return 'Incorrect line format';

    if (!/[a-z1-5.]/.test(els[0]))
      return 'Incorrect line format (account name)';

    if (!/[0-9]+/.test(els[1]))
      return 'Incorrect line format (token amount)';

    return null;
  }
};


export default class MerkleTree {
  constructor(elements, hasher, blockchain) {
    this.hasher = blockchain === blockchains.ethereum ? keccak256 : sha256;
    if (hasher === 'keccak')
      this.hasher = keccak256;
    else if (hasher === 'sha256')
      this.hasher = sha256;

    // need hex '0x' prefix
    this.needHexPrefix = blockchain === blockchains.ethereum;

    // Filter empty strings and hash elements
    this.elements = elements.map(el => this.hasher(el));

    // Sort elements
    this.elements.sort(Buffer.compare);

    // Create layers
    this.layers = this.getLayers(this.elements);
  }

  getLayers (elements) {
    if (elements.length === 0) {
      return [['']];
    }

    const layers = [];
    layers.push(elements);

    // Get next layer until we reach the root
    while (layers[layers.length - 1].length > 1) {
      layers.push(this.getNextLayer(layers[layers.length - 1]));
    }

    return layers;
  }

  getNextLayer (elements) {
    return elements.reduce((layer, el, idx, arr) => {
      if (idx % 2 === 0) {
        // Hash the current element with its pair element
        layer.push(this.combinedHash(el, arr[idx + 1]));
      }

      return layer;
    }, []);
  }

  combinedHash (first, second) {
    if (!first) { return second; }
    if (!second) { return first; }

    return this.hasher(this.sortAndConcat(first, second));
  }

  getRoot () {
    return this.layers[this.layers.length - 1][0];
  }

  getHexRoot () {
    let hex = bufferToHex(this.getRoot());
    return (this.needHexPrefix ? hex : hex.substr(2));
  }

  sortAndConcat (...args) {
    return Buffer.concat([...args].sort(Buffer.compare));
  }

  getProof (el) {
    let idx = this.bufIndexOf(el, this.elements);

    if (idx === -1) {
      throw new Error('Element does not exist in Merkle tree');
    }

    return this.layers.reduce((proof, layer) => {
      const pairElement = this.getPairElement(idx, layer);

      if (pairElement) {
        proof.push(pairElement);
      }

      idx = Math.floor(idx / 2);

      return proof;
    }, []);
  }

  getHexProof (el) {
    const proof = this.getProof(el);

    return this.bufArrToHexArr(proof);
  }

  getPairElement (idx, layer) {
    const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;

    if (pairIdx < layer.length) {
      return layer[pairIdx];
    } else {
      return null;
    }
  }

  bufIndexOf (el, arr) {
    let hash;

    // Convert element to 32 byte hash if it is not one already
    if (el.length !== 32 || !Buffer.isBuffer(el)) {
      hash = this.hasher(el);
    } else {
      hash = el;
    }

    for (let i = 0; i < arr.length; i++) {
      if (hash.equals(arr[i])) {
        return i;
      }
    }

    return -1;
  }

  bufArrToHexArr (arr) {
    if (arr.some(el => !Buffer.isBuffer(el))) {
      throw new Error('Array is not an array of buffers');
    }

    return arr.map(el => (this.needHexPrefix ? '0x' : '') + el.toString('hex'));
  }

  static validateFileLine(line, blockchain) {
    if (blockchain in fileLineValidators)
      return fileLineValidators[blockchain](line);

    return 'Incorrect blockchain, support only: ' + Object.keys(fileLineValidators).join(', ');
  }

  static leafsFromFile(file, blockchain) {
    let leafs = file.split('\n').filter(line => line.length);

    leafs.forEach(line => {
      let err = this.validateFileLine(line, blockchain);
      if (err)
        throw err;
    });

    return leafs;
  }
}