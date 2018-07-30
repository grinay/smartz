import * as dateFormat from 'dateformat';
import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { formatTime } from '../../../../helpers/normalize';
import AddressString from '../../../common/address-string/AddressString';

import './TransactionRow.less';


interface ITransactionRowProps {
  transaction: any;
  onClick: (request: any) => any;
}

export default class TransactionRow extends React.PureComponent<ITransactionRowProps, {}> {
  public render() {
    const { transaction, onClick } = this.props;

    return (
      <div className="transaction-row" onClick={onClick(transaction)}>
        <p className="transaction-time">{formatTime(transaction.execution_datetime)}</p>
        {'status' in transaction && transaction.status === 'process' &&
          <p>Proces!!!s</p>
        }
        <p className="transaction-description">{transaction.function_title}</p>
        <p className="transaction-hash">
          <AddressString str={transaction.tx_id} />
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
