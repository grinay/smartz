import axios from 'axios';
import * as binaryen from 'binaryen';
import * as Eos from 'eosjs';
import { find } from 'lodash';

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
  private configEosDapp: any;
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

    this.configEosDapp = {
      binaryen,
      // mockTransactions: () => null,
    };

    this.sendTransaction = this.sendTransaction.bind(this);
    this.getAccountName = this.getAccountName.bind(this);
    this.setChainId = this.setChainId.bind(this);
    this.executeFunc = this.executeFunc.bind(this);
    this.getIdentity = this.getIdentity.bind(this);
  }

  public setChainId() {
    return new Promise((resolve, reject) => {
      if (!this.configEosDapp.chainId) {
        axios
          .get(this.url + '/v1/chain/get_info')
          .then((result) => {
            if (result.status === 200) {
              this.configEosDapp.chainId = result.data.chain_id;
              resolve();
            }
          })
          .catch((error) => reject(error));
      } else {
        return resolve();
      }
    });
  }

  public getAccountName(identity) {
    if (identity.accounts && Array.isArray(identity.accounts) && identity.accounts.length > 0) {
      return identity.accounts[0].name;
    } else {
      throw Error('Account not found!');
    }
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
            .eos(this.network, Eos, this.configEosDapp, this.network.protocol)
            .setcode(this.accountName, 0, 0, bin);
        })
        .then(() => {
          // send smart-contract abi
          return this.scatter
            .eos(this.network, Eos, this.configEosDapp, this.network.protocol)
            .setabi(this.accountName, abi);
        })
    );
  }

  public getIdentity() {
    return this.scatter.getIdentity({ accounts: [this.network] });
  }

  public sendTransaction(func: any, formData: any) {
    return new Promise((resolve, reject) => {
      this.setChainId()
        .then(() => this.scatter.suggestNetwork(this.network))
        .then(() => this.scatter.getIdentity({ accounts: [this.network] }))
        .then((identity) => {
          this.currentIdentity = identity;

          let accountName = this.getAccountName(identity);

          this.eos = this.scatter.eos(this.network, Eos, this.configEosDapp);

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
        })
        .catch((error) => reject(error));
    });
  }

  public readTable(address: any, tableKey: any, func: any, formData: any) {
    return new Promise((resolve, reject) => {
      this.setChainId()
        .then(() => {
          this.eos = this.scatter.eos(this.network, Eos, this.configEosDapp);

          return this.eos.getTableRows({
            json: true,
            code: address,
            scope: address,
            table: func.name,
            table_key: tableKey,
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
        })
        .catch((error) => reject(error));
    });
  }

  public executeFunc(abi: any, func: any, address: any, formData: any) {
    return new Promise((resolve, reject) => {
      switch (getFuncType(func)) {
        case 'write':
          this.sendTransaction(func, formData)
            .then(() => resolve('success'))
            .catch((error) => reject(error));
          break;
        case 'ask':
          const table = find(abi.tables, { name: func.name });
          const tableKey = table.key_names[0];

          this.readTable(address, tableKey, func, formData)
            .then((data: any) => {
              const rows = data.result.rows;

              let result =
                rows.length > 0 && data.formData[0].toString() === rows[0][tableKey].toString()
                  ? data.result.rows[0]
                  : 'Not found';

              let strString = JSON.stringify(result);
              strString = strString.substr(1, strString.length - 2);

              resolve(strString);
            })
            .catch((error) => reject(error));
          break;
        case 'view':
          return null;
        default:
          break;
      }
    });
  }
}

export default new EosClass();
