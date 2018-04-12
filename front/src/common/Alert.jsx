import React, { Component } from 'react';
import classNames from 'classnames';
import { IS_MOBILE_OS, IS_ANDROID } from '../helpers/detect-device';

class Alert extends Component {
  render() {
    let { standardAlert, header, message, children } = this.props;

    const commonHeader = 'Greetings, fellow!';
    const msgCommonPart = (
      <span>
        <p>Are you a developer? Then go to the page <a href='https://platform.smartz.io/docs/contract-uploading-en'>Contract uploading</a> and learn how to upload your own smart contract.</p>
        <p>Need Assistance? Welcome to our community <a href='https://t.me/smartz_en'>Telegram chat</a></p>
      </span>
    );

    if (IS_MOBILE_OS) {
      header = commonHeader;
      message = IS_ANDROID ?
        (
          <span>
            <p>First time on our platform? Let's give you a few instructions. First of all you need to register and install <a href='https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp'>Trust wallet</a> for your mobile device.</p>
            {msgCommonPart}
          </span>
        ) :
        (
          <span>
            <p>First time on our platform? Let's give you a few instructions. First of all you need to register and install <a href='https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409?mt=8'>Trust wallet</a> for your mobile device.</p>
            {msgCommonPart}
          </span>
        );
    } else {
      switch (standardAlert) {
        case 'noMetamask':
          header = commonHeader;
          message = (
            <span>
              <p>First time on our platform? Let's give you a few instructions. First of all you need to register and install Metamask. It's well described on the documentation page <a href='https://platform.smartz.io/docs/first-steps-en'>First Steps</a></p>
              {msgCommonPart}
            </span>
          );
          break;
        case 'unlockMetamask':
          header = 'Unlock MetaMask!';
          message = (
            <span>
              <p><b>Unlock MetaMask to avoid errors while working with Smartz platform.</b></p>
              <p>Click on MetaMask icon in your browser extensions panel, enter your password and unlock your MetaMask wallet.</p>
            </span>
          );
          break;

        default:
          break;
      }
    }

    return (
      <div className={classNames('alert', this.props.color)} {...this.props}>
        {header && <h2>{header}</h2>}
        {message || children}
      </div>
    );
  }
}

export default Alert;
