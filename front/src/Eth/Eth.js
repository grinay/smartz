import React, {Component} from 'react';



class Eth extends Component {
  render() {
    const bar = 'foo';


	function runDeployContract(id) {
		console.log("run deploy");
		var contractData = getContractDataFromBackend(42);
		console.log("got contract data");
		console.log(contractData);
		deployContract(contractData);
	}

	function getContractDataFromBackend(id) {
		return {	contract_id: 42,
					txs_to_send: [ { bytecode: '6060604052341561000f57600080fd5b61015f8061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663f72ec61b8114610045575b600080fd5b341561005057600080fd5b61009660046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061009895505050505050565b005b7fcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab8160405160208082528190810183818151815260200191508051906020019080838360005b838110156100f65780820151838201526020016100de565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390a1505600a165627a7a7230582047fcc23e8545a178049f522976d0ccc66c7977e7e03df4ddef8bb5b2bf6515640029',
									 abi: [{"constant":false,"inputs":[{"name":"msg","type":"string"}],"name":"logthis","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"msg","type":"string"}],"name":"Log","type":"event"}]
								  } ] };
	}
	
	function deployContract(contractData) {
		var cData = contractData['txs_to_send'][0];

		const EthQuery = require('ethjs-query');
		const EthContract = require('ethjs-contract');
		const eth = new EthQuery(web3.currentProvider)
		const contract = new EthContract(eth);
		eth.accounts().then((accounts) => {
			const SimpleStore = contract(cData['abi'], cData['bytecode'], {	from: accounts[0], gas: 300000});

			SimpleStore.new((error, result) => {
				if (error) {
					alert(error);
				} else {
					alert(result);
				}
				// result null '0x928sdfk...' (i.e. the transaction hash)
			});
		});
	}
	runDeployContract(42);


    return (
      <div className="container">
        <button>Hack eth right here!</button>
      </div>
    );
  }
}

export default Eth;
