import * as classNames from 'classnames';
import * as React from 'react';

import * as api from '../../../api/apiRequests';
import { IDapp } from '../../../helpers/entities/dapp';
import Loader from '../../common/loader/Loader';
import RequestRow from '../common/request-row/RequestRow';
import ShowMoreBtn from '../common/show-more-btn/ShowMoreBtn';
import TransactionRow from '../common/transaction-row/TransactionRow';

import './Records.less';


enum Tab {
  Request,
  Transactions,
}

interface IRecordsProps {
  dapp: IDapp;
  netId?: any;
  transaction?: any;
  onSelectRecord?: (record: any) => void;
}

interface IRecordsState {
  tab: Tab;
  isShowAll: boolean;
}

export default class Records extends React.PureComponent<IRecordsProps, IRecordsState> {
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
    this.fetch = this.fetch.bind(this);
  }

  private fetch(tab: Tab, dapp: IDapp) {
    switch (tab) {
      case Tab.Request:
        api.getDappRequests(dapp.id);
        break;
      case Tab.Transactions:
        api.getDappTransactions(dapp.id);
        break;

      default:
        break;
    }
  }

  private onSelectTab(currentTab: Tab): any {
    return () => {
      const { dapp } = this.props;

      this.setState({ tab: currentTab });

      this.fetch(currentTab, dapp);
    };
  }

  private onClickShowMore() {
    this.setState({ isShowAll: true });
  }

  public componentDidMount() {
    const { tab } = this.state;
    const { dapp } = this.props;

    this.fetch(tab, dapp);
  }

  public render() {
    const { dapp, onSelectRecord } = this.props;
    const { tab, isShowAll } = this.state;

    let isVisibleButton: boolean = false;

    let tabContent: any;
    switch (tab) {
      case Tab.Request:
        if (dapp.requests !== null) {
          const requestListLength = dapp.requests.length;

          if (requestListLength > 0) {
            tabContent = [];

            if (requestListLength >= this.showCountItems) {
              isVisibleButton = true;
            }

            for (let i = 0; i < requestListLength; i++) {
              if (i >= this.showCountItems && !isShowAll) {
                continue;
              }

              tabContent.push(
                <li key={i} className="record-item">
                  <RequestRow
                    request={dapp.requests[i]}
                    onClick={onSelectRecord}
                  />
                </li>,
              );
            }
          } else {
            tabContent = <p className="empty">The DApp has no requests</p>;
          }
        } else {
          tabContent = <Loader />;
        }

        break;

      case Tab.Transactions:
        if (dapp.transactions !== null) {
          const transactionListLength = dapp.transactions.size;

          if (transactionListLength > 0) {
            tabContent = [];

            if (transactionListLength > this.showCountItems) {
              isVisibleButton = true;
            }

            let counter = 0;
            let transactions = new Map([...dapp.transactions].reverse());

            transactions.forEach((elem, key) => {
              counter += 1;

              if (counter > this.showCountItems && !isShowAll) {
                return;
              }

              tabContent.push(
                <li key={key.toString()} className="record-item">
                  <TransactionRow
                    transaction={elem}
                    onClick={onSelectRecord}
                  />
                </li>,
              );
            });

          } else {
            tabContent = <p className="empty">The DApp has no transactions</p>;
          }
        } else {
          tabContent = <Loader />;
        }

        break;

      default:
        break;
    }

    return (
      <div className="record">
        <div className="record-wrapper">
          <div className="record-top">
            <button
              onClick={this.onSelectTab(Tab.Request)}
              className={classNames('record-btn-tab', { active: tab === Tab.Request })}
              type="button"
            >Requests</button>
            <button
              onClick={this.onSelectTab(Tab.Transactions)}
              className={classNames('record-btn-tab', { active: tab === Tab.Transactions })}
              type="button"
            >Transactions</button>
          </div>
          <ul id="js-trans-list" className="record-list">
            {tabContent}
          </ul>
        </div>
        {isVisibleButton && !isShowAll && <ShowMoreBtn onClick={this.onClickShowMore} />}
      </div>
    );
  }
}
