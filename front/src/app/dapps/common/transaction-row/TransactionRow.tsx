import * as classNames from 'classnames';
import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { formatTime } from '../../../../helpers/normalize';
import { copyTextToClipboard } from '../../../../helpers/utils';
import AddressString from '../../../common/address-string/AddressString';
import Loader from '../../../common/loader/Loader';

import './TransactionRow.less';


interface ITransactionRowProps {
  transaction: any;
  onClick: (request: any) => any;
}

export default class TransactionRow extends React.PureComponent<ITransactionRowProps, {}> {
  public render() {
    const { transaction, onClick } = this.props;

    let icon;
    if ('is_success' in transaction) {
      const path = transaction.is_success
        ? require('../../../../assets/img/common/dapp/status-green.svg')
        : require('../../../../assets/img/common/dapp/status-red.svg');

      icon = (
        <div className="transaction-icon">
          <InlineSVG
            className="error-icon"
            src={path}
          />
        </div>
      );
    } else {
      icon = (
        <div className="transaction-icon">
          <Loader
            className="tx-icon"
            size={17}
          />
        </div>
      );
    }

    return (
      <div className="transaction-row">
        <div className="transaction-row-wrapper flex-v" onClick={onClick(transaction)}>
          <p className="transaction-time">{formatTime(transaction.execution_datetime)}</p>
          {icon}
          <p className={classNames('transaction-description', {
            error: 'is_success' in transaction && !transaction.is_success,
          })}>{transaction.function_title}</p>
          <div className="transaction-hash flex-v">
            <AddressString str={'tx_id' in transaction ? transaction.tx_id : '-----'} />
          </div>
        </div>
        <p className="transaction-buttons">
          <button
            onClick={() => copyTextToClipboard(transaction.tx_id)}
            className="round-btn copy-btn flex"
            type="button"
            aria-label="Copy"
          >
            <InlineSVG
              className="copy-icon"
              src={require('../../../../assets/img/common/components/copy.svg')}
            />
          </button>
          {/* <a
            className="round-btn link flex"
            href={`${getNetworkEtherscanAddress(dapp.network_id)}/tx/${transaction.tx_id}`}
            target="_blank"
            aria-label="Search etherscan"
          >
            <InlineSVG
              className="etherscan-icon"
              src={require('../../../../assets/img/common/etherscan.svg')}
            />
          </a> */}
        </p>
      </div>
    );
  }
}

