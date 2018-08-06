import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './UnlockMetamaskPopover.less';


export default class UnlockMetamaskPopover extends React.PureComponent {
  public render() {
    return (
      <div className="unlock-metamask-popover">
        <img
          className="firefox"
          src={require('../../../assets/img/common/metamask.png')}
          alt="metamask"
        />
        <p>Unlock me to deploy</p>
        <InlineSVG className="arrow" src={require('../../../assets/img/common/arrow.svg')} />
      </div>
    );
  }
}
