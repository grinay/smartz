import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../Auth';
import { blockchains } from '../../../constants/constants';
import { web3, getMetamaskStatus } from '../../../helpers/eth';
import { sendLoginEvent } from '../../../helpers/statictics';

import * as api from '../../../api/apiRequests';
import Alert from '../../common/Alert';

import store from '../../../store/store';
const { dispatch } = store;

import { loginErrorAction } from './LoginActions';
import Eos from '../../../helpers/eos';

import './Login.less';

class Login extends Component {
  constructor(props) {
    super(props);

    this.stage = null;

    this.metamaskLogin = this.metamaskLogin.bind(this);
    this.scatterLogin = this.scatterLogin.bind(this);
  }

  componentDidMount() {
    window.Intercom('update');
  }

  metamaskLogin() {
    switch (getMetamaskStatus()) {
      case 'unlockMetamask':
        alert('Unlock metamask first');
        break;
      case 'noMetamask':
        alert('Install metamask first');
        break;
      case 'okMetamask':
        api.startLogin(blockchains.ethereum, web3.eth.accounts[0]);
        this.stage = 1;
      default:
        break;
    }
  }

  scatterLogin() {
    if (!Eos.scatter) {
      alert('Scatter is not active');
      return;
    }

    Eos.scatter
      .getIdentity()
      .then((identity) => {
        api.startLogin(blockchains.eos, identity.publicKey);
        this.stage = 1;
      })
      .catch((error) => console.warn(error));
  }

  componentWillReceiveProps(nextProps) {
    const { description, rand_data, blockchain, identity, token } = nextProps.login;

    if (this.stage === 1) {
      const signMsg = `${description}${rand_data}`;

      switch (blockchain) {
        case blockchains.ethereum:
          web3.personal.sign(web3.toHex(signMsg), identity, (error, signedMsg) => {
            if (error) {
              console.warn(error);
              dispatch(loginErrorAction('Sign canceled'));
              this.stage = null;
            } else {
              api.finishLogin(blockchain, identity, rand_data, signedMsg);
              this.stage = 2;
            }
          });
          break;

        case blockchains.eos:
          Eos.scatter
            .getArbitrarySignature(identity, signMsg, 'Login Authentication', false)
            .then((signedMsg) => {
              api.finishLogin(blockchain, identity, rand_data, signedMsg);
              this.stage = 2;
            })
            .catch((e) => {
              dispatch(loginErrorAction('Sign canceled'));
              this.stage = null;
            });
          break;

        default:
          break;
      }
    }

    if (this.stage === 2) {
      if (blockchain === blockchains.eos) {
        Eos.scatter.forgetIdentity().then(() => {
          Auth.handleAuthentication(token);
          sendLoginEvent(blockchain);
        });
      } else {
        Auth.handleAuthentication(token);
        sendLoginEvent(blockchain);
      }

      this.stage = null;
    }
  }

  render() {
    const { error } = this.props.login;

    if (Auth.isAuthenticated()) {
      return <Redirect to="/profile" />;
    }

    return (
      <main className="login-page flex">
        {error && <Alert>{error}</Alert>}

        <button className="button block__button" onClick={this.metamaskLogin}>
          Login with your Ethereum signature
        </button>

        <button className="button block__button" onClick={this.scatterLogin}>
          Login with your EOS signature via Scatter
        </button>
      </main>
    );
  }
}

export default Login;
