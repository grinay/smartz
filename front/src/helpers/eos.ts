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
  public scatter: any;

  constructor() {
    document.addEventListener('scatterLoaded', (scatterExtension) => {
      this.scatter = window.scatter;
      window.scatter = null;
    });
  }

  public deployContract = (bin: string) => {
    this.scatter.requireVersion(5.0);

    const network = {
      port: eosConstants.PORT,
      host: eosConstants.HOST,
      blockchain: eosConstants.BLOCKCHAIN,
    };

    // accept current network
    return this.scatter
      .suggestNetwork(network)
      .then((ok) => this.scatter.getIdentity({ accounts: [network] }))
      .then((identity) => {
        let accountName;
        if (Array.isArray(identity.accounts) && identity.accounts.length > 0) {
          accountName = identity.accounts[0].name;
        }
        const configEosInstance = {
          binaryen,
          chainId: eosConstants.CHAIN_ID,
          mockTransactions: () => null,
        };

        // send smart-contract
        return this.scatter
          .eos(network, eosInstance, configEosInstance)
          .setcode(accountName, 0, 0, bin);
      });
  };
}

export default new Eos();
