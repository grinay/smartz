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
}

interface ITransactionsState {
  tab: Tab;
  isShowAll: boolean;
}

export default class Transactions extends React.PureComponent<ITransactionsProps, ITransactionsState> {
  private readonly showCountItems: number;
  public show: boolean;

  constructor(props) {
    super(props);

    this.showCountItems = 5;
    this.show = true;

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
    this.show = true;
    console.log(this.show);
    // this.setState({});
    this.forceUpdate();
  }

  public render() {
    console.log('render');
    const { dapp } = this.props;
    // const { netId, dapp, transaction } = this.props;
    // const { time, func, formData, txHash, result, timeMined } = transaction;
    const { tab, isShowAll } = this.state;

    let tabContent: any;
    // let tabContent: JSX.Element;
    switch (tab) {
      case Tab.Request:
        const dappListLength = dapp.requests.length;
        let r = [];

        if (dappListLength > 0) {
          if (dappListLength > 5) {
            this.show = false;
          }
          //   this.show = false;

          // }

          for (let i = 1; i <= dappListLength; i++) {
            console.log(i);
            if (i > 5 && !this.show) {
              continue;
            }

            console.log('dappIndex: ', dappListLength - i);
            r.push(
              <li key={i} className="transaction-item progress">
                <RequestRow request={dapp.requests[dappListLength - i]} />
              </li>,
            );
          }

          tabContent = r;

          // tabContent = dapp.requests.map((request, i) => {
          //   return (
          //     <li key={i} className="transaction-item progress">
          //       <RequestRow request={request} />
          //     </li>
          //   );
          // });
        } else {
          tabContent = <p>Empty</p>;
        }
        break;

      case Tab.Transactions:
        if (dapp.transactions.length > 0) {
          tabContent = dapp.requests.map((transaction, i) => {
            return (
              <li key={i} className="transaction-item progress">
                <TransactionRow transaction={transaction} />
              </li>
            );
          });
        } else {
          tabContent = <p>Empty</p>;
        }
        break;

      default:
        break;
    }
    // console.log(tabContent);

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
        {!this.show && <ShowMoreBtn onClick={this.onClickShowMore} />}
      </div>
    );
  }
}
