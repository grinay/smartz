import * as React from 'react';

import EthResult from './eth-result/EthResult';
import EosResult from './eos-result/EosResult';

import './DeployStep3.less';

interface IDeployStep3Props {
  status: any;
  txHash: any;
  netId: any;
  dapp: any;
  contractAddress: any;
  blockchain: any;
}

export default class DeployStep3 extends React.PureComponent<IDeployStep3Props, {}> {
  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    const { status, txHash, netId, dapp, contractAddress, blockchain } = this.props;

    let content;

    switch (blockchain) {
      case 'ethereum':
        content = <EthResult {...this.props} />;
        break;
      case 'eos':
        content = <EosResult {...this.props} />;
        break;
      default:
        content = null;
        break;
    }

    return <div className="deploy-step-3">{content}</div>;
  }
}
