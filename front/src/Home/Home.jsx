import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import api from 'helpers/api';

import './Home.css';

class Home extends Component {
  componentWillMount() {
    const {
      auth, ctors,
      fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess // actions
    } = this.props;

    if (!ctors.length) {
      fetchCtorsRequest();

      api(auth).get('/list_ctors')
      .then(response => fetchCtorsSuccess(response.data))
      .catch(error => fetchCtorsFailure(error.message));
    }
  }

  render() {
    const {isAuthenticated} = this.props.auth;
    const {ctors} = this.props;
    console.log(this.props);

    return (
      <div className="container">
        {!window.Web3 &&
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Install MetaMask!</h4>
            <p>
              <b>You need MetaMask browser plugin to work with Smartz platform</b><br />
              MetaMask is available for Chrome, Opera and Firefox browsers. <a href="https://metamask.io/">Get it here</a>, it's free!
            </p>
          </div>
        }

        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Attention!</h4>
          <p>
            <b>Don't use our service with real ETH in Ethereum Mainnet!</b><br />
            We are in very early stage of development. Use it only for test and informational purposes with Rinkeby network chosen in your MetaMask client. Authors are not responsible for any possible loses in result of using our service.
          </p>
        </div>

        <div>
          <h4>Available smart contracts:</h4>
          {ctors &&
            <div className="contracts-cards">

              {ctors.map((el, i) => (
                <div className="card" key={i}>
                  <img className="card-img-top" src={`https://lorempixel.com/400/100/?${i}`} alt="" />
                  <div className="card-body">
                    <h3 className="card-title">{el.ctor_name}</h3>
                    <p className="card-text desc">{el.ctor_descr}</p>

                    {!isAuthenticated() &&
                      <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.props.auth.login()}
                      >
                        Login to deploy
                      </Button>
                    }

                    {
                      isAuthenticated() &&
                      <a href={`/deploy/${el.ctor_id}`} className="btn btn-success btn-deploy">
                        {el.price_eth ? <span>Deploy for {el.price_eth} ETH</span> : <span>Deploy free</span>}
                      </a>
                    }
                    <p className="card-text">
                      <small className="text-muted">
                        Author: Vladimir Khramov<br />
                        Updated: 11 feb 2018
                      </small>
                    </p>
                  </div>
                </div>

              ))}
            </div>
          }

          {!ctors &&
            <p>Contracts are loading</p>
          }

          <br /><br />
          <h4>If you are developer</h4>
          <p>You can <a href="/ctor-add">add a smart contract</a> to our platform.</p>
        </div>
      </div>
    );
  }
}

export default Home;
