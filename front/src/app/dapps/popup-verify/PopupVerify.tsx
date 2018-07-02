import * as React from 'react';

import './PopupVerify.less';


interface IPopupVerifyHeaderProps {
  dapp: any;
}

interface IPopupVerifyHeaderState {}

export default class PopupVerify extends React.PureComponent<
  IPopupVerifyHeaderProps,
  IPopupVerifyHeaderState
> {
  public render() {
    const { dapp } = this.props;

    return (
      <div className="popup-verify flex-h">
        <h2 className="popup-verify-title">Etherscan verification info</h2>
        <div className="contract-description flex-v">
          <section className="block-text">
            <p className="contract-text">Contract address:</p>
            <p className="contract-text">Contract name:</p>
            <p className="contract-text">Compiler:</p>
            <p className="contract-text">Optimization:</p>
          </section>
          <section className="block-info">
            <p className="contract-info">{dapp.address}</p>
            <p className="contract-info">{dapp.contract_name}</p>
            <p className="contract-info">{dapp.compiler_version}</p>
            <p className="contract-info">{dapp.optimization.toString()}</p>
          </section>
        </div>
        <div className="source-code">{dapp.source}</div>
      </div>
    );
  }
}
