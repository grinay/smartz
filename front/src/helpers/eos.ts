import axios from 'axios';
import * as binaryen from 'binaryen';
import * as Eos from 'eosjs';

import { eosConstants } from '../constants/constants';


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

  public scatter: any = window.scatter;
  public currentIdentity: any;

  constructor() {
    document.addEventListener('scatterLoaded', (scatterExtension) => {
      this.scatter = window.scatter;
      window.scatter = null;
    });
    this.currentIdentity = null;
    this.network = {
      port: eosConstants.PORT,
      host: eosConstants.HOST,
      blockchain: eosConstants.BLOCKCHAIN,
      protocol: eosConstants.PROTOCOL,
    };

    this.configEosInstance = {
      binaryen,
      chainId: eosConstants.CHAIN_ID,
      // mockTransactions: () => null,
    };
    this.eos = null;
    this.identity = null;
    this.accountName = null;

    this.sendTransaction = this.sendTransaction.bind(this);
    this.getAccountName = this.getAccountName.bind(this);
  }

  private getAccountName(identity) {
    if (identity.accounts && Array.isArray(identity.accounts) && identity.accounts.length > 0) {
      return identity.accounts[0].name;
    } else {
      throw Error('Account not found!');
    }
  }

  public suggestNetwork(network: any = null) {
    if (this.scatter) {
      return this.scatter.suggestNetwork(network === null ? this.network : network);
    } else {
      throw Error('Scatter don`t init!');
    }
  }

  public deployContract = (bin: string, abi: any) => {
    this.scatter.requireVersion(5.0);

    return (
      this.scatter
        // accept current network
        .suggestNetwork(this.network)
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

  public sendTransaction(funcName: string, data: any) {
    return this.scatter
      .suggestNetwork(this.network)
      .then((ok) => this.scatter.getIdentity({ accounts: [this.network] }))
      .then((identity) => {
        this.currentIdentity = identity;

        let accountName = this.getAccountName(identity);

        this.eos = this.scatter.eos(this.network, Eos, this.configEosInstance);

        // very bad hardcode //TODO:remove after
        return this.eos.transaction(accountName, (contract) => {
          contract[funcName](data, { authorization: accountName });
        });
      });
  }

  public readTable(tableName: string, formData: any) {
    this.scatter
      .suggestNetwork(this.network)
      .then((ok) => this.scatter.getIdentity({ accounts: [this.network] }))
      .then((identity) => {
        this.currentIdentity = identity;

        let accountName = this.getAccountName(identity);

        this.eos = this.scatter.eos(this.network, Eos, this.configEosInstance);

        this.eos.transaction(accountName, () => {
          this.eos
            .getTableRows({
              json: true,
              code: formData,
              scope: formData,
              table: tableName,
            })
            .then((result) => {
              console.log('result: ', result);
            })
            .catch((error) => {
              console.error('err in eos: ', error);
            });
        });
      });
  }
}

export default new EosClass();
