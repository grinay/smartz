import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import AddressString from '../../../common/address-string/AddressString';

import './TransactionRow.less';


interface ITransactionRowProps {
  transaction: any;
  onClick: (request: any) => any;
}

export default class TransactionRow extends React.PureComponent<ITransactionRowProps, {}> {
  public render() {
    const { transaction, onClick } = this.props;

    const diffTime = (new Date().getTime()) - transaction.time.format('x');
    const dayTimeInMs = 24 * 60 * 60 * 1000;

    const timeFormated = diffTime < dayTimeInMs
      ? transaction.time.format('HH:mm:ss')
      : transaction.time.format('MMM DD');

    return (
      <div className="transaction-row" onClick={onClick(transaction)}>
        <p className="transaction-time">{timeFormated}</p>
        <p className="transaction-description">{transaction.func.title}</p>
        <p className="transaction-hash">
          <AddressString str={transaction.txHash} />
        </p>
        <p className="transaction-buttons">
          <button className="round-btn copy-btn flex" type="button" aria-label="Copy">
            <InlineSVG
              className="copy-icon"
              src={require('../../../../assets/img/common/components/copy.svg')}
            />
          </button>
          <a className="round-btn link flex" href="#" target="_blank" aria-label="Search etherscan">
            <InlineSVG
              className="etherscan-icon"
              src={require('../../../../assets/img/common/etherscan.svg')}
            />
          </a>
        </p>
      </div>
    );
  }
}
