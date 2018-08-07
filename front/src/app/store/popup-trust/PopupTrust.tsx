import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { IS_ANDROID, IS_IOS } from '../../../helpers/detect-device';

import './PopupTrust.less';


export default class PopupTrust extends React.PureComponent<{}, {}> {
  public render() {

    let pic;
    let link;
    if (true) {
      pic = require('../../../assets/img/common/app-store-badge.svg');
      link = 'https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409?mt=8';
    } else if (IS_ANDROID) {
      link = 'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp';
      pic = require('../../../assets/img/common/google-play-badge.svg');
    }

    return (
      <div className="popup-trust">
        <div className="icon-wrapper">
          <img
            className="icon" src={require('../../../assets/img/common/trust-icon.png')}
            width="72"
            height="72"
            alt="Trust icon"
          />
        </div>
        <h2 className="header">Install Trust Wallet</h2>
        <p className="description">
          To use Smartz on mobile please open it through Trust wallet browser.
    </p>
        <a className="link" href="#" aria-label="Click to install app">
          <InlineSVG
            src={pic}
          />
        </a>
        <button className="popup-trust-button" type="button">
          Thank you, I know better what I should do
    </button>
      </div>
    );
  }
}

