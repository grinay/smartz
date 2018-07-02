import * as React from 'react';

import { copyTextToClipboard } from '../../../helpers/utils';
import CopyButton from '../../common/copy-button/CopyButton';

import './PopupVerify.less';


interface IPopupVerifyHeaderProps {
  dapp: any;
}

interface IPopupVerifyHeaderState {}

export default class PopupVerify extends React.PureComponent<
  IPopupVerifyHeaderProps,
  IPopupVerifyHeaderState
> {
  constructor(props) {
    super(props);

    this.onClickCopy = this.onClickCopy.bind(this);
  }

  private onClickCopy(text: string): any {
    return () => copyTextToClipboard(text);
  }

  public render() {
    const { dapp } = this.props;

    return (
      <div className="popup-verify flex-h">
        <h2 className="popup-verify-title">Etherscan verification info</h2>
        <div className="contract-description flex-v">
          <section className="block-text">
            <p className="contract-text flex-v">Contract address:</p>
            <p className="contract-text flex-v">Contract name:</p>
            <p className="contract-text flex-v">Compiler:</p>
            <p className="contract-text flex-v">Optimization:</p>
          </section>
          <section className="block-info">
            <div className="contract-info flex-v">
              <p>{dapp.address}</p>
              <CopyButton onClick={this.onClickCopy(dapp.address)} />
            </div>
            <div className="contract-info flex-v">
              <p> {dapp.contract_name}</p>
              <CopyButton onClick={this.onClickCopy(dapp.contract_name)} />
            </div>
            <div className="contract-info flex-v">
              <p> {dapp.compiler_version}</p>
              <CopyButton onClick={this.onClickCopy(dapp.compiler_version)} />
            </div>
            <div className="contract-info flex-v">
              <p> {dapp.optimization.toString()}</p>
            </div>
          </section>
        </div>
        <div className="source-code flex">
          <CopyButton className="source-btn" onClick={this.onClickCopy(dapp.source)} />
          <div className="code">{dapp.source}</div>
        </div>
      </div>
    );
  }
}
