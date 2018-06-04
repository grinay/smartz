import React, { PureComponent } from 'react';

import EthResult from './eth-result/EthResult';
import EosResult from './eos-result/EosResult';

export default class DeployStep3 extends PureComponent {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { status, txHash, netId, instance, contractAddress, blockchain } = this.props;

    let content;

    switch (blockchain) {
      case 'ethereum':
        content = <EthResult {...this.props} />
        break;
      case 'eos':
        content = <EosResult />
        break;
      default:
        content = null;
        break;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
};
