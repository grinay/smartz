import * as React from 'react';

import './DappCustom.less';


export default class DappCustom extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="dapp-custom">
        <h2>Title</h2>
        <p>Description</p>
      </div>
    );
  }
}
