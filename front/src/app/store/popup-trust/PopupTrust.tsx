import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { trust } from '../../../constants/constants';
import { IS_ANDROID, IS_IOS } from '../../../helpers/detect-device';

import './PopupTrust.less';


interface IPopupTrustProps {
  refLink: string;
  onClose: () => void;
}

export default class PopupTrust extends React.PureComponent<IPopupTrustProps, {}> {
  public render() {
    const { onClose, refLink } = this.props;

    let pic;
    let link;
    if (IS_IOS) {
      pic = require('../../../assets/img/common/app-store-badge.svg');
      link = `${trust.link}${refLink}`;
    } else if (IS_ANDROID) {
      link = `${trust.link}${refLink}`;
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
        <a
          className="link"
          href={link}
          target="_blanc"
          aria-label="Click to install app"
        >
          <InlineSVG
            src={pic}
          />
        </a>
        <button
          className="popup-trust-button"
          type="button"
          onClick={onClose}
        >
          Thank you, I know better what I should do
    </button>
      </div>
    );
  }
}

