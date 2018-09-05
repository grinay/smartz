import * as React from 'react';

import ListDapp from './list-dapp/ListDapp';

import './DappStore.less';


export default class DappStore extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="dapp-store flex-v">
        <h1>Dapp store</h1>
        <ListDapp />
      </div>
    );
  }
}
