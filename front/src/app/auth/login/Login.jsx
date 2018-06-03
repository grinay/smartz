import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../Auth';
import {find} from "lodash";
import {blockchains} from "../../../helpers/constants";
import {web3} from "../../../helpers/eth";
import { finishLogin, startLogin } from '../../../api/apiRequests'
import Alert from '../../common/Alert'

import store from '../../../store/store';
const { dispatch } = store;

import auth from '../Auth'
import { loginErrorAction } from './LoginActions'
import Eos from "../../../helpers/eos2";



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.startedLogins = {};
    this.tokens = {}

    this.metamaskLogin = this.metamaskLogin.bind(this);
  }

  metamaskLogin() {
    const { metamaskStatus } = this.props;

    if (metamaskStatus !== 'okMetamask') {
      alert('Unlock metamask first')
    }

    startLogin(blockchains.ethereum, web3.eth.accounts[0])
  }

  scatterLogin() {
    if (!Eos.scatter) {
      alert("Scatter is not active");
      return;
    }

    Eos.scatter.getIdentity().then(identity => {
      startLogin(blockchains.eos, identity.publicKey)
    }).catch(error => {
      console.warn(error)
    });
  }

  componentDidUpdate() {
    const {startLoginData, blockchain, identity, token} = this.props.login;

    if (
      startLoginData && (
      blockchain !== startLoginData.blockchain || identity !== startLoginData.identity)
    ) {
      return;
    }

    if (startLoginData && !this.startedLogins[startLoginData.rand_data]) {
      const {description, rand_data, blockchain, identity} = startLoginData;
      this.startedLogins[rand_data] = true;

      const signMsg = `${description}${rand_data}`;

      if (blockchain === blockchains.ethereum) {
        web3.personal.sign(
          web3.toHex(signMsg),
          identity,
          (error, signedMsg) => {
            if (error) {
              console.warn(error)
              dispatch(loginErrorAction('Sign canceled'))
            } else {
              finishLogin(blockchain, identity, rand_data, signedMsg)
            }
          }
        );
      } else if (blockchain === blockchains.eos) {
        Eos.scatter.getArbitrarySignature(
            identity,
            signMsg,
            'Login Authentication',
            false
          )
          .then(signedMsg => finishLogin(blockchain, identity, rand_data, signedMsg))
          .catch(e => dispatch(loginErrorAction('Sign canceled')))
      } else {
        alert('Something went wrong')
      }


    }

    if (token && !this.tokens[token]) {
      this.tokens[token] = true;

      auth.handleAuthentication(token);
    }

  }

  render() {
    const { login } = this.props;

    if (Auth.isAuthenticated())
      return (<Redirect to="/profile" />);

    return (
      <main className="container">
        {login && login.error &&
          <Alert>{login.error}</Alert>
        }

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
