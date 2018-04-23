import BaseWidget from "./BaseWidget";
import { web3 } from "../../../helpers/eth";
import axios from 'axios';


export default class EthCount extends BaseWidget {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      contractInstance: props.contractInstance,
      currency: null,
    }
  }

  componentDidMount() {
    const showCurrency = this.getOption('show_currency');

    if (showCurrency === undefined) {
      return null;
    }

    if (Array.isArray(showCurrency)) {
      //todo logic
    } else if (typeof showCurrency === 'string') {
      const url = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=${showCurrency}`;

      axios.get(url)
        .then(response => {
          const { data, status } = response;

          if (status === 200 && Array.isArray(data) && data.length > 0) {
            this.setState({ currency: `${showCurrency} ${data[0].price_usd}` });
          }
        })
        .catch(error => {
          console.warn(error);
        });
    }
  }

  render() {
    const { currency } = this.state;
    let res = web3.toBigNumber(this.getResult(0));
    res = res.div(web3.toWei(1, 'ether'));

    return currency === null ? res.valueOf() : `${res.valueOf()} (${currency})`;
  }
};
