# Equity Contract
## How to Deploy an Equity Contract

These are tokens with the voting right, which are similar to the company shares. Equity tokens provide the shares of company ownership (CJSC, JSC, Pty Ltd, etc.). Tokens are distributed in pre-specified proportions.

The Equity token is issued according to the ERC20 standard.

## Data for Creating a Smart Contract

On Smartz.io platform, you need to specify the token information in the [Equity token](https://smartz.io/deploy/5aaa7a92ab3d71000bd0c69e) page:

* **Instance name**: the name of the smart contract;
* **Name of a token**: the name of the token;
* **Token Symbol**: the token symbol.

As well as information about shareholders:

* **Address**: the Ethereum address where the shares are stored;
* **Full name**: the full name of a shareholder;
* **Shares in possession**: the number of shares in possession.

After entering the required data, you will receive the contract code.

The contract will be deployed for 0.1 ether (through the MetaMask wallet).

After network deployment, you can view the deployed contract at Etherscan or manage the contract in the [My contracts](https://smartz.io/dashboard) page.

## Detailed Information on the Contract

The following information about the created contract is available:

* **Equity name** (`name`): the name of the shares;
* **Total shares** (`totalSupply`): the number of shares issued;
* **Decimal places** (`decimals`): the number of decimal places;
* **Equity ticker** (`symbol`): the abbreviated name of the shares used on the exchanges.

## Ask Functions

You can use the Ask functions to obtain information on the status of the contract and the values associated with any address or other conditions that you need to specify. These functions don't make any changes to the blockchain:

* **Get balance** (`balanceOf`): view the balance of shares at any address;
* **View allowance** (`allowance`): view the number of shares that the address of owner has transferred to the address of spender.

## Write Functions

To change the states and values of a smart contract, you need to use Write functions that enter new information to the blockchain. All these functions consume some amount of gas:

* **Approve spending** (`approve`): allows the specified address to spend the specified number of shares;
* **Transfer from** (`transferFrom`): transfers shares from one account to another;
* **Decrease approval** (`decreaseApproval`): reduces the number of shares that can be spent at the specified address;
* **Transfer shares** (`transfer`): transfers part of your shares to another address;
* **Increase approval** (`increaseApproval`): increases the number of shares that can be spent at the specified address.
