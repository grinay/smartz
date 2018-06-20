import axios from 'axios';
import * as binaryen from 'binaryen';
import * as Eos from 'eosjs';

import { eosConstants } from '../constants/constants';
import { getFuncType } from './common';


declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    scatter: any;
  }
}

class EosClass {
  private network: any;
  private configEosInstance: any;
  private eos: any;
  private identity: any;
  private accountName: any;
  private url: string;

  public scatter: any = window.scatter;
  public currentIdentity: any;

  constructor() {
    document.addEventListener('scatterLoaded', (scatterExtension) => {
      this.scatter = window.scatter;
      window.scatter = null;
    });
    this.identity = null;
    this.eos = null;
    this.currentIdentity = null;
    this.identity = null;
    this.accountName = null;
    this.network = {
      port: eosConstants.PORT,
      host: eosConstants.HOST,
      blockchain: eosConstants.BLOCKCHAIN,
      protocol: eosConstants.PROTOCOL,
    };
    this.url = eosConstants.PROTOCOL + '://' + eosConstants.HOST + ':' + eosConstants.PORT;

    this.configEosInstance = {
      binaryen,
      // mockTransactions: () => null,
    };

    this.sendTransaction = this.sendTransaction.bind(this);
    this.getAccountName = this.getAccountName.bind(this);
    this.setChainId = this.setChainId.bind(this);
    this.executeFunc = this.executeFunc.bind(this);
  }

  private getAccountName(identity) {
    if (identity.accounts && Array.isArray(identity.accounts) && identity.accounts.length > 0) {
      return identity.accounts[0].name;
    } else {
      throw Error('Account not found!');
    }
  }

  private setChainId() {
    return new Promise((resolve, reject) => {
      if (!this.configEosInstance.chainId) {
        axios
          .get(this.url + '/v1/chain/get_info')
          .then((result) => {
            if (result.status === 200) {
              this.configEosInstance.chainId = result.data.chain_id;
              resolve();
            }
          })
          .catch((error) => reject(error));
      } else {
        return resolve();
      }
    });
  }

  public deployContract = (bin: string, abi: any) => {
    this.scatter.requireVersion(5.0);

    return (
      this.setChainId()
        // accept current network
        .then(() => this.scatter.suggestNetwork(this.network))
        .then(() => this.scatter.getIdentity({ accounts: [this.network] }))
        .then((identity) => {
          this.currentIdentity = identity;
          this.accountName = this.getAccountName(identity);

          // send smart-contract code
          return this.scatter
            .eos(this.network, Eos, this.configEosInstance, this.network.protocol)
            .setcode(this.accountName, 0, 0, bin);
        })
        .then(() => {
          // send smart-contract abi
          return this.scatter
            .eos(this.network, Eos, this.configEosInstance, this.network.protocol)
            .setabi(this.accountName, JSON.parse(abi));
        })
    );
  };

  public checkAccount() {
    return this.scatter.getIdentity({ accounts: [this.network] });
  }

  public sendTransaction(func: any, formData: any) {
    return new Promise((resolve) => {
      this.setChainId()
        .then(() => this.scatter.suggestNetwork(this.network))
        .then(() => this.scatter.getIdentity({ accounts: [this.network] }))
        .then((identity) => {
          this.currentIdentity = identity;

          let accountName = this.getAccountName(identity);

          this.eos = this.scatter.eos(this.network, Eos, this.configEosInstance);

          return this.eos.transaction(accountName, (contract) => {
            contract[func.name](...formData, { authorization: accountName });
          });
        })
        .then((result) => {
          resolve({
            result,
            func,
            formData,
          });
        });
    });
  }

  public readTable(address: any, func: any, formData: any) {
    return new Promise((resolve) => {
      this.setChainId()
        .then(() => {
          this.eos = this.scatter.eos(this.network, Eos, this.configEosInstance);

          return this.eos.getTableRows({
            json: true,
            code: address,
            scope: address,
            table: func.name,
            lower_bound: formData[0],
            limit: 1,
          });
        })
        .then((result) => {
          resolve({
            result,
            func,
            formData,
          });
        });
    });
  }

  public executeFunc(func: any, address: any, formData: any) {
    let funcType = getFuncType(func);

    switch (funcType) {
      case 'write':
        return this.sendTransaction(func, formData);
      case 'ask':
        return this.readTable(address, func, formData);
      case 'view':
        return null;
      default:
        break;
    }
  }
}

export default new EosClass();
