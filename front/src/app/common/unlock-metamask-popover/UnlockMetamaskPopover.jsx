import React, { PureComponent } from 'react';
import metamaskImg from '../../../assets/img/common/metamask.png';
import InlineSVG from 'svg-inline-react';

import './UnlockMetamaskPopover.less';

export default class UnlockMetamaskPopover extends PureComponent {
  render() {
    return (
      <div className="unlock-metamask-popover">
        <img className="firefox" src={metamaskImg} alt="metamask" />
        <p>Unlock me to deploy</p>
        <InlineSVG className="arrow" src={require('../../../assets/img/common/arrow.svg')} />
      </div>
    );
  }
}
