import React, {Component} from 'react';

class Alert extends Component {
  render() {
    let {standardAlert, header, message, children} = this.props;

    switch (standardAlert) {
      case 'noMetamask':
        header = 'Install MetaMask!';
        message = (
          <p>
            <b>You need MetaMask browser plugin to work with Smartz platform.</b><br />
            MetaMask is available for Chrome, Opera and Firefox browsers. <a href="https://metamask.io/">Get it here</a>, it's free!
          </p>
        );
        break;

      case 'unlockMetamask':
        header = 'Unlock MetaMask!';
        message = (
          <p>
            <b>Unlock MetaMask to avoid errors while working with Smartz platform.</b><br />
            Click on MetaMask icon in your browser extensions panel, enter your password and unlock your MetaMask wallet.
          </p>
        );
        break;

      default:
    }

    return (
      <div className="alert alert-danger" role="alert">
        {header &&
          <h4 className="alert-heading">{header}</h4>
        }
        {message || children}
      </div>
    );
  }
}

export default Alert;
