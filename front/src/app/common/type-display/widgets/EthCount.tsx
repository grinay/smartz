import axios from 'axios';
import * as React from 'react';

import { getOption, getResult } from '../../../../helpers/common';
import { web3 } from '../../../../helpers/eth';
import { moneyAbbr2Symbol } from '../../../../helpers/localization';


interface IEthCountProps {
  fnDescription: any;
  fnResult: any;
}

interface IEthCountState {
  fnDescription: any;
  currency: any;
  symbol: any;
}

export default class EthCount extends React.PureComponent<IEthCountProps, IEthCountState> {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      currency: null,
      symbol: null,
    };
  }

  public componentDidMount() {
    const { fnDescription } = this.props;

    const showCurrency = getOption(fnDescription, 'show_currency', undefined);

    if (showCurrency === undefined) {
      return null;
    }

    const url = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=${showCurrency}`;

    axios
      .get(url)
      .then((response) => {
        const { data, status } = response;

        if (status === 200 && Array.isArray(data) && data.length > 0) {
          const priceString = data[0][`price_${showCurrency.toLowerCase()}`];
          const priceFloat = parseFloat(priceString);

          this.setState({
            currency: priceFloat,
            symbol: `${moneyAbbr2Symbol(showCurrency)}`,
          });
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  public render() {
    const { currency, symbol } = this.state;
    const { fnResult } = this.props;

    let res = web3.toBigNumber(getResult(fnResult, 0));
    res = res.div(web3.toWei(1, 'ether'));

    return currency === null
      ? res.valueOf()
      : `${res.valueOf()} (${symbol} ${(currency * res.valueOf()).toFixed(2)})`;
  }
}
