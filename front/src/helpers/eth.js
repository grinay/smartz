import React from 'react';

export var web3 = window.Web3
  ? new window.Web3(window.web3.currentProvider)
  : undefined;

export const processControlForm = (contract_abi /* abi array */, function_spec /* ETHFunctionSpec */,
                            form_data /* data from react-jsonschema-form */,
                            contract_address, callback) => {

    // preparing args

    // converts user input to web3-compatible value
    function input2ethereum(input, abi_type) {
        if (abi_type === 'bool')
            return input ? 1 : 0;

        if (abi_type === 'uint256' || abi_type === 'uint' || abi_type === 'uint128')
            return new web3.BigNumber(input);

        if (abi_type === 'uint8' || abi_type === 'uint16' || abi_type === 'uint32' || abi_type === 'uint64')
            return input * 1;

        if (abi_type === 'address' || abi_type === 'bytes32' || abi_type === 'bytes' || abi_type === 'string')
            return input;   // 0x...

        if (abi_type.endsWith('[]')) {
            if (!(input instanceof Array))
                throw new Error('input is not an array');

            const item_type = abi_type.substr(0, abi_type.length - 2);
            return input.map(v => input2ethereum(v, item_type));
        }

        throw new Error('type not supported: ' + abi_type);
    }

    if (!(form_data instanceof Array))
        throw new Error('form_data is not an array');

    let function_abi;
    contract_abi.forEach(info => {
        if (info.type === "function" && info.name === function_spec.name)
            function_abi = info;
    });
    if (! function_abi)
        throw new Error('not found abi of function ' + function_spec.name);

    const args_converted2abi = form_data.map((input, index) => {
        return input2ethereum(input, function_abi.inputs[index].type);
    });


    // calling/transacting

    const CtorInstance = web3.eth.contract(contract_abi).at(contract_address);

    if (!function_abi.constant) {
        // non-constant - there will be a transaction instead of a local call
        args_converted2abi.push({
            // object with transaction parameters
            // value: ???,     // amount of ether to send with
            // gas: ???,       // amount of gas
            gasPrice: 5e9
        });
    }

    let result;
    try {
        result = CtorInstance[function_spec.name](...args_converted2abi, callback);
    } catch (e) {
        console.warn(e);
    }

    return result;
    /*
    if (function_abi.constant) {
        // show in UI
        result.forEach(v => {l(v)});
    }
    */
};


// ALSO: for each function_spec
//      if (function_spec.constant && !function_spec.payable && 0 === function_spec.inputs.length)
//          processControlForm(contract_abi, function_spec, [], contract_address); // right away!

// ALSO: render box with processControlForm() for each dashboard function

export const processResult = res => {
  switch (typeof res) {
    case 'object':
      return res.toString();

    case 'boolean':
      return res ? 'yes' : 'no';

    default:
      return res;
  }
};

export const getNetworkId = cb => {
  web3.version.getNetwork((err, netId) => {
    err && console.log(err);
    netId && cb(netId);
  });
};

export const getNetworkName = netId => {
  switch (netId.toString()) {
    case "1":
      return "Mainnet";
    case "3":
      return "Ropsten";
    case "4":
      return "Rinkeby";
    case "42":
      return "Kovan";
    default:
      return "Error! Unknown or deprecated network";
  }
};

export const getNetworkEtherscanAddress = netId => {
  switch (netId.toString()) {
    case "1":
      return "https://etherscan.io";
    case "3":
      return "https://ropsten.etherscan.io";
    case "4":
      return "https://rinkeby.etherscan.io";
    case "42":
      return "https://kovan.etherscan.io";
    default:
      return "Error! Unknown or deprecated network";
  }
};

export const checkMetaMask = () => {
  if (!window.Web3) {
    return 'noMetamask';
  }
  if (!web3.eth.accounts[0]) {
    return 'unlockMetamask';
  }
  return false;
};

export const getTxReceipt = (txHash, cb) => {
  web3.eth.getTransactionReceipt(txHash, (err, receipt) => {
    if (null == receipt)
      window.setTimeout(() => getTxReceipt(txHash, cb), 500);
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


export const makeEtherscanLink = (hash, netId, showNetworkName = false) => {
  if (!hash || !netId) return hash;

  const explorerAddress = getNetworkEtherscanAddress(netId);
  const networkName = getNetworkName(netId);
  if (isAddress(hash)) {
    return (
      <span>
        <a href={`${explorerAddress}/address/${hash}`} target="_blank">
          {hash}
        </a>{showNetworkName && ` (${networkName})`}
      </span>
    );
  } else {
    return hash;
  }
};
