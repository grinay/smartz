import { decodeEvent } from 'ethjs-abi';


// tslint:disable:variable-name

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    web3?: any;
    Web3?: any;
    ethereum?: any;
  }
}

export let web3Local;
window.addEventListener('load', () => getWeb3Instance());

export const getWeb3Instance = () => {
  if (window.ethereum) {
    // Request account access if needed
    window.ethereum.enable()
      .then(() => web3Local = new window.Web3(window.ethereum))
      .catch((error) => web3Local = 'not-available');
  } else if (window.web3) {
    web3Local = new window.Web3(window.web3.currentProvider);
  } else {
    web3Local = null;
  }
};

export const processControlForm = (abi, functionSpec, formData, address, callback) => {
  // preparing args

  const transactionParameters = {
    // value: ???,     // amount of ether to send with
    // gas: ???,       // amount of gas
    gasPrice: 5e9,
  };

  // converts user input to web3-compatible value
  function input2ethereum(input, abiType) {
    if (abiType === 'bool') return input ? 1 : 0;

    if (abiType === 'uint256' || abiType === 'uint' || abiType === 'uint128')
      return new web3Local.BigNumber(input);

    if (
      abiType === 'uint8' ||
      abiType === 'uint16' ||
      abiType === 'uint32' ||
      abiType === 'uint64'
    )
      return input * 1;

    if (
      abiType === 'address' ||
      abiType === 'bytes32' ||
      abiType === 'bytes' ||
      abiType === 'string'
    )
      return input; // 0x...

    if (abiType.endsWith('[]')) {
      if (!(input instanceof Array)) throw new Error('input is not an array');

      const item_type = abiType.substr(0, abiType.length - 2);
      return input.map((v) => input2ethereum(v, item_type));
    }

    throw new Error('type not supported: ' + abiType);
  }

  if (!(formData instanceof Array)) throw new Error('formData is not an array');

  if (functionSpec.type !== undefined && functionSpec.type === 'fallback') {
    let value;
    let result;

    if (formData.length === 1) {
      value = formData[0];
    } else {
      throw new Error('Incorrect form-data');
    }

    try {
      result = web3Local.eth.sendTransaction(
        {
          ...transactionParameters,
          value,
          to: address,
        },
        callback,
      );
    } catch (e) {
      console.error(e);
    }

    return result;
  }

  let functionAbi;
  abi.forEach((info) => {
    if (info.type === 'function' && info.name === functionSpec.name) functionAbi = info;
  });
  if (!functionAbi) throw new Error('not found abi of function ' + functionSpec.name);

  // get then delete 'Ether amount'(ethCount) prop from formData
  let formDataArr = [];
  let value = '';
  if (formData.length > 0 && functionSpec.payable) {
    // always last element in arr
    value = formData[formData.length - 1];
    // delete last element
    formDataArr = formData.slice(0, formData.length - 1);
  } else {
    formDataArr = formData;
  }

  const argsConverted2abi = formDataArr.map((input, index) => {
    return input2ethereum(input, functionAbi.inputs[index].type);
  });

  // calling/transacting

  const CtorDapp = web3Local.eth.contract(abi).at(address);

  // non-constant - there will be a transaction instead of a local call
  if (!functionAbi.constant) {
    if (value !== '') transactionParameters['value'] = value;

    argsConverted2abi.push(transactionParameters);
  }

  let result;
  try {
    result = CtorDapp[functionSpec.name](...argsConverted2abi, callback);
  } catch (e) {
    console.warn(e);
  }

  return result;
  /*
  if (functionAbi.constant) {
      // show in UI
      result.forEach(v => {l(v)});
  }
  */
};

// ALSO: for each functionSpec
//      if (functionSpec.constant && !functionSpec.payable && 0 === functionSpec.inputs.length)
//          processControlForm(abi, functionSpec, [], address); // right away!

// ALSO: render box with processControlForm() for each dashboard function

export const processResult = (res?, outputs?) => {
  switch (typeof res) {
    case 'object':
      if (Array.isArray(res)) {
        let resultText = '';

        for (let i in res) {
          if (!res.hasOwnProperty(i)) {
            continue;
          }

          resultText +=
            outputs && outputs[i] && outputs[i].title
              ? `${outputs[i].title}: ${res[i]}\n`
              : res[[i].toString()] + '\n';
        }

        return resultText;
      } else {
        return res.toString();
      }

    case 'boolean':
      return res ? 'yes' : 'no';

    default:
      return res;
  }
};

export const getNetworkId = (cb) => {
  web3Local.version.getNetwork((err, netId) => {
    // tslint:disable-next-line:no-unused-expression
    err && console.error(err);
    // tslint:disable-next-line:no-unused-expression
    netId && cb(netId);
  });
};

export const getNetworkName = (netId) => {
  switch (netId.toString()) {
    case '1':
      return 'Mainnet';
    case '3':
      return 'Ropsten';
    case '4':
      return 'Rinkeby';
    case '42':
      return 'Kovan';
    default:
      return 'Error! Unknown or deprecated network';
  }
};

export const getNetworkEtherscanAddress = (netId) => {
  switch (netId.toString()) {
    case '1':
      return 'https://etherscan.io';
    case '3':
      return 'https://ropsten.etherscan.io';
    case '4':
      return 'https://rinkeby.etherscan.io';
    case '42':
      return 'https://kovan.etherscan.io';
    default:
      return 'Error! Unknown or deprecated network';
  }
};

export const getMetamaskStatus = () => {
  if (!web3Local) {
    return 'noMetamask';
  }

  if (web3Local === 'not-available') {
    return 'notAvailable';
  }

  if (!web3Local.eth.accounts[0]) {
    return 'unlockMetamask';
  }

  return 'okMetamask';
};

export const getTxReceipt = (txHash, cb) => {
  web3Local.eth.getTransactionReceipt(txHash, (err, receipt) => {
    if (null == receipt) window.setTimeout(() => getTxReceipt(txHash, cb), 500);
    else {
      cb(receipt);
    }
  });
};

export const isAddress = (hash) => {
  if (typeof hash === 'string') {
    return /^0x([A-Fa-f0-9]{40})$/.test(hash);
  } else {
    return false;
  }
};

export const isTx = (hash) => {
  if (typeof hash === 'string') {
    return /^0x([A-Fa-f0-9]{64})$/.test(hash);
  } else {
    return false;
  }
};

export const getAccountAddress = () => {
  return web3Local.eth.defaultAccount;
};

/**
 * Return decoded event
 *
 * @param abi
 * @param log
 */
export const decodeEventOfContract = (abi, log) => {
  let eventAbi = null;

  for (let i = 0; i < abi.length; i++) {
    let item = abi[i];
    if (item.type !== 'event') continue;
    let signature =
      item.name +
      '(' +
      item.inputs
        .map(function (input) {
          return input.type;
        })
        .join(',') +
      ')';
    let hash = web3Local.sha3(signature);
    if (hash === log.topics[0]) {
      eventAbi = item;
      break;
    }
  }

  if (!eventAbi) {
    return false;
  }

  let decodedEvent;

  try {
    decodedEvent = decodeEvent(eventAbi, log.data, log.topics, false);
  } catch (e) {
    return false;
  }
  let event = {
    params: {},
    name: decodedEvent._eventName,
  };
  for (let prop in decodedEvent) {
    if (!decodedEvent.hasOwnProperty(prop)) {
      continue;
    }

    if (prop !== '_eventName') {
      event.params[prop] = decodedEvent[prop];
    }
  }

  return event;
};
