import * as React from 'react';

import SortDirection from './sort-direction/SortDirection';

import './SortBar.less';


export default class SortBar extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="sort-bar flex-v">
        <SortDirection text="Rank" className="list-dapp-id" />
        <SortDirection text="Name" className="name list-dapp-info" />
        <SortDirection text="Tx" className="list-dapp-transaction-count" />
        <SortDirection text="Volume" className="list-dapp-eth-volume" />
        <SortDirection text="DUU" className="list-dapp-hour24" />
        <SortDirection text="WUU" className="list-dapp-week" />
      </div>
    );
  }
}
