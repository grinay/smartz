import * as eosInstance from 'eosjs';
import axios from 'axios';
import { eosConstants } from '../constants/constants';
import * as binaryen from 'binaryen';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    scatter: any;
  }
}

class Eos {
  private network: any;
  private configEosInstance: any;
  private eos: any;
  private identity: any;

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

    this.sendTransaction = this.sendTransaction.bind(this);
  }

  private getIdentity() {
    return this.getScatter().getIdentity({ accounts: [this.network] });
  }

  private setIdentity() {
    this.getIdentity()
      .then((identity) => {
        this.identity = identity;
      })
      .catch((error) => {
        throw Error('setIdentity: problem with getIdentity!');
      });
  }

  // private getEos(): any {
  //   this.getScatter()
  //     .suggestNetwork(this.network)
  //     .then(() => this.getIdentity())
  //     .then((identity) => {
  //       this.identity = identity;
  //       return this.getScatter().eos(
  //         this.network,
  //         eosInstance,
  //         this.configEosInstance,
  //         eosConstants.PROTOCOL
  //       );
  //     })
  //     .catch((error) => {
  //       throw Error('getEos: Error getIdentity');
  //     });
  // }

  private setEos() {
    this.eos = this.getEos();
  }

  private getAccountName(identity: any) {
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

    // accept current network
    return this.scatter
      .suggestNetwork(this.network)
      .then((ok) => this.scatter.getIdentity({ accounts: [this.network] }))
      .then((identity) => {
        this.currentIdentity = identity;

        let accountName;
        if (Array.isArray(identity.accounts) && identity.accounts.length > 0) {
          accountName = identity.accounts[0].name;
        } else {
          throw Error('Account not found!');
        }

        // send smart-contract
        return this.getEos().setcode(accountName, 0, 0, bin);
      })
      .then((param) => {
        return this.getEos().setabi(this.currentIdentity.accounts[0].name, JSON.parse(abi));
      });
  };

  public getEos() {
    if (this.eos === null) {
      this.eos = this.scatter.eos(
        this.network,
        eosInstance,
        this.configEosInstance,
        this.network.protocol,
      );
      return this.eos;
    } else {
      return this.eos;
    }
  }

  public checkAccount() {
    return this.scatter.getIdentity({ accounts: [this.network] });
  }

  public getScatter() {
    if (this.scatter) {
      return this.scatter;
    } else {
      throw Error('Scatter don`t init!');
    }
  }

  public sendTransaction(funcName: string, formData: any) {
    this.scatter
      .suggestNetwork(this.network)
      .then((ok) => this.scatter.getIdentity({ accounts: [this.network] }))
      .then((identity) => {
        this.currentIdentity = identity;

        let accountName;
        if (Array.isArray(identity.accounts) && identity.accounts.length > 0) {
          accountName = identity.accounts[0].name;
        } else {
          throw Error('Account not found!');
        }

        this.eos = this.scatter.eos(this.network, eosInstance, this.configEosInstance);

        // very bad hardcode //TODO:remove after
        if (funcName === 'transfer' || funcName === 'issue') {
          return this.eos.transaction(accountName, (contract) => {
            let data = {};
            if (formData.length === 3) {
              data = { from: formData[0], to: formData[1], quantity: formData[2] };
            }
            if (formData.length === 2) {
              data = { to: formData[0], quantity: formData[1] };
            }
            contract[funcName](data, { authorization: accountName });
          });
        } else if (funcName === 'account') {
          return this.eos.getTableRows({
            json: true,
            code: formData[0],
            scope: formData[0],
            table: 'account',
          });
        }
      });
  }
}

export default new Eos();
