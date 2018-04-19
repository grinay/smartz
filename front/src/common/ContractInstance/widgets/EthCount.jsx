import BaseWidget from "./BaseWidget";
import { web3 } from "../../../helpers/eth";


export default class EthCount extends BaseWidget {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      contractInstance: props.contractInstance
    }
  }

  render() {
    let res = web3.toBigNumber(this.getResult(0));
    res = res.div(web3.toWei(1, 'ether'));

    return res.valueOf();
  }
};
