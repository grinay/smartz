import * as classNames from 'classnames';
import * as React from 'react';

import RequestRow from '../common/request-row/RequestRow';
import ShowMoreBtn from '../common/show-more-btn/ShowMoreBtn';
import TransactionRow from '../common/transaction-row/TransactionRow';

import './Transactions.less';


enum Tab {
  Request,
  Transactions,
}

interface ITransactionsProps {
  dapp: any;
  netId?: any;
  transaction?: any;
  onSelectRequest?: (request: any) => void;
  onSelectTransaction?: (transaction: any) => void;
}

interface ITransactionsState {
  tab: Tab;
  isShowAll: boolean;
}

export default class Transactions extends React.PureComponent<ITransactionsProps, ITransactionsState> {
  private readonly showCountItems: number;

  constructor(props) {
    super(props);

    this.showCountItems = 5;

    this.state = {
      tab: Tab.Request,
      isShowAll: false,
    };

    this.onSelectTab = this.onSelectTab.bind(this);
    this.onClickShowMore = this.onClickShowMore.bind(this);
  }

  private onSelectTab(currentTab: Tab): any {
    return () => this.setState({ tab: currentTab });
  }

  private onClickShowMore() {
    this.setState({ isShowAll: true });
  }

  public render() {
    const { dapp, onSelectRequest } = this.props;
    const { tab, isShowAll } = this.state;

    let isVisibleButton: boolean = false;

    let tabContent: any;
    switch (tab) {
      case Tab.Request:
        const requestListLength = dapp.requests.length;

        if (requestListLength > 0) {
          tabContent = [];

          if (requestListLength > this.showCountItems) {
            isVisibleButton = true;
          }

          for (let i = 1; i <= requestListLength; i++) {
            if (i > this.showCountItems && !isShowAll) {
              continue;
            }

            tabContent.push(
              <li key={i} className="transaction-item progress">
                <RequestRow
                  request={dapp.requests[requestListLength - i]}
                  onClick={onSelectRequest}
                />
              </li>,
            );
          }
        } else {
          tabContent = <p className="empty">The DApp has no requests</p>;
        }
        break;

      case Tab.Transactions:
        const transactionListLength = dapp.transactions.length;

        if (transactionListLength > 0) {
          tabContent = [];

          if (transactionListLength > this.showCountItems) {
            isVisibleButton = true;
          }

          for (let i = 1; i <= transactionListLength; i++) {
            if (i > this.showCountItems && !isShowAll) {
              continue;
            }

            tabContent.push(
              <li key={i} className="transaction-item progress">
                <TransactionRow
                  transaction={dapp.transactions[transactionListLength - i]}
                  onClick={onSelectRequest}
                />
              </li>,
            );
          }
        } else {
          tabContent = <p className="empty">The DApp has no transactions</p>;
        }
        break;

      default:
        break;
    }

    return (
      <div className="transaction">
        <div className="transaction-wrapper">
          <div className="transaction-top">
            <button
              onClick={this.onSelectTab(Tab.Request)}
              className={classNames('transaction-btn-tab', { active: tab === Tab.Request })}
              type="button"
            >Requests</button>
            <button
              onClick={this.onSelectTab(Tab.Transactions)}
              className={classNames('transaction-btn-tab', { active: tab === Tab.Transactions })}
              type="button"
            >Transactions</button>
          </div>
          <ul className="transaction-list">
            {tabContent}
          </ul>
        </div>
        {isVisibleButton && !isShowAll && <ShowMoreBtn onClick={this.onClickShowMore} />}
      </div>
    );
  }
}
