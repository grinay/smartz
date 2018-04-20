import BaseWidget from "./BaseWidget";
import { web3 } from "../../../helpers/eth";
import axios from 'axios';


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

    const showCurrency = this.getOption('show_currency');
    const currency = null;

    if (showCurrency === undefined) {
      return res.valueOf();
    }

    if (Array.isArray(showCurrency)) {
      //todo logic
    } else if (typeof showCurrency === 'string') {
      const url = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=${showCurrency}`;

      axios.get(url)
        .then(response => {
          console.log(response);
          if (response.status === '200') {
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

  }
};
