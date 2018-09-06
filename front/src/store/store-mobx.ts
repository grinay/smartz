import { observable } from 'mobx';


class DappStore {
  @observable public dappList;

  constructor() {
    this.dappList = null;
  }
}

export default new DappStore();
