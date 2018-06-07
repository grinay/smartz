import * as eosInstance from 'eosjs';
import axios from 'axios';
import { eosConstants } from '../constants/constants';
import * as binaryen from 'binaryen';
import { abi } from './abi';

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

  public scatter: any;
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
    };
    this.configEosInstance = {
      binaryen,
      chainId: eosConstants.CHAIN_ID,
      mockTransactions: () => null,
    };
    this.eos = null;
  }

  public suggestNetwork(network: any = null) {
    return this.scatter.suggestNetwork(network === null ? this.network : network);
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
      this.eos = this.scatter.eos(this.network, eosInstance, this.configEosInstance);
      return this.eos;
    } else {
      return this.eos;
    }
  }
}

export default new Eos();
