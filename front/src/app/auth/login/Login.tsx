import * as React from 'react';
import { Redirect } from 'react-router-dom';

import * as api from '../../../api/apiRequests';
import { blockchains } from '../../../constants/constants';
import Eos from '../../../helpers/eos';
import { getMetamaskStatus, getWeb3Instance, web3Local } from '../../../helpers/eth';
import { sendLoginEvent } from '../../../helpers/statictics';
import store from '../../../store/store';
import Alert from '../../common/Alert';
import Auth from '../Auth';
import { loginErrorAction } from './LoginActions';

import './Login.less';


const { dispatch } = store;

interface ILoginProps {
  login: any;
}

class Login extends React.Component<ILoginProps, {}> {
  private stage: any;

  constructor(props) {
    super(props);

    this.stage = null;

    this.metamaskLogin = this.metamaskLogin.bind(this);
    this.scatterLogin = this.scatterLogin.bind(this);
  }

  public componentDidMount() {
    window.Intercom('update');
  }

  public metamaskLogin() {
    switch (getMetamaskStatus()) {
      case 'unlockMetamask':
        alert('Unlock metamask first');
        break;
      case 'notAvailable':
        getWeb3Instance();
        break;
      case 'noMetamask':
        alert('Install metamask first');
        break;
      case 'okMetamask':
        api.startLogin(blockchains.ethereum, web3Local.eth.accounts[0]);
        this.stage = 1;
      default:
        break;
    }
  }

  public scatterLogin() {
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

  public componentWillReceiveProps(nextProps) {
    const { description, rand_data, blockchain, identity, token } = nextProps.login;

    if (this.stage === 1) {
      const signMsg = `${description}${rand_data}`;

      switch (blockchain) {
        case blockchains.ethereum:
          web3Local.personal.sign(web3Local.toHex(signMsg), identity, (error, signedMsg) => {
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

  public render() {
    const { error } = this.props.login;

    if (Auth.isAuthenticated()) {
      return <Redirect to={Auth.redirectUri != null ? `${Auth.redirectUri}` : '/'} />;
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
