import React, {Component} from 'react';
import classNames from 'classnames';

class Alert extends Component {
  render() {
    let {standardAlert, header, message, children} = this.props;

    switch (standardAlert) {
      case 'noMetamask':
        header = 'Install MetaMask!';
        message = (
          <span>
            <p><b>You need MetaMask browser plugin to work with Smartz platform.</b></p>
            <p>MetaMask is available for Chrome, Opera and Firefox browsers. <a href="https://metamask.io/">Get it here</a>, it's free!</p>
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
    }

    return (
      <div className={classNames('alert', this.props.color)} {...this.props}>
        {header &&
          <h2>{header}</h2>
        }
        {message || children}
      </div>
    );
  }
}

export default Alert;
