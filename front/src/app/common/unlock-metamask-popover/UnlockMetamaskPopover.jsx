import React, { PureComponent } from 'react';
import metamaskImg from '../../../assets/img/common/metamask.png';
import arrowImg from '../img/arrow.svg';

import './UnlockMetamaskPopover.less';

export default class UnlockMetamaskPopover extends PureComponent {
    render() {
        return (
            <div className="unlock-metamask-popover">
                <img className="firefox" src={metamaskImg} alt="metamask" />
                <p>Unlock me to deploy</p>
                <img className="arrow" src={arrowImg} alt="metamask" />
            </div>
        );
    }
};