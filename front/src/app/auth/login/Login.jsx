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

  componentDidUpdate() {
    const {startLoginData, blockchain, identity, token} = this.props.login;

    if (startLoginData && !this.startedLogins[startLoginData.rand_data]) {
      const {descr, rand_data} = startLoginData;
      this.startedLogins[rand_data] = true;

      web3.personal.sign(
        web3.toHex(`${startLoginData.description}${startLoginData.rand_data}`),
        web3.eth.accounts[0],
        (error, signedMsg)=> {
          if (error) {
            dispatch(loginErrorAction('Sign canceled'))
          } else {
            finishLogin(blockchain, identity, rand_data, signedMsg)
          }
        }
      )
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
          Login with metamask
        </button>
      </main>
    );
  }

}

export default Login;
