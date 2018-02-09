// const l = console.log;

if (window.Web3) {
  var web3 = new window.Web3(window.web3.currentProvider);
}

export const processControlForm = (contract_abi /* abi array */, function_spec /* ETHFunctionSpec */,
                            form_data /* data from react-jsonschema-form */,
                            contract_address, callback) => {

    // preparing args

    // converts user input to web3-compatible value
    function input2ethereum(input, abi_type) {
        if (abi_type === 'bool')
            return input ? 1 : 0;

        if (abi_type === 'uint256' || abi_type === 'uint')
            return new web3.BigNumber(input);

        if (abi_type === 'address' || abi_type === 'bytes32')
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
            // gasPrice: ???
        });
    }

    const result = CtorInstance[function_spec.name](...args_converted2abi, callback);

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
  if (res.isBigNumber) {
    return res.toNumber();
  } else {
    return res;
  }
}
