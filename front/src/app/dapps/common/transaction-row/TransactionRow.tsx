import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import AddressString from '../../../common/address-string/AddressString';

import './TransactionRow.less';


interface ITransactionRowProps {
  transaction: any;
}

export default class TransactionRow extends React.PureComponent<ITransactionRowProps, {}> {
  public render() {
    let time = new Date().getTime();


    return (
      <div className="transaction-row">
        <p className="transaction-time">01:54:50</p>
        <p className="transaction-description">Vote by ID</p>
        {/* <p className="transaction-hash"> */}
        <AddressString str={'0x3bbff17a094367ea63272d698586cc'} />
        {/* </p> */}
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
