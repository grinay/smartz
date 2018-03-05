import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import Alert from 'common/Alert';
import Spinner from 'common/Spinner';
import api from 'helpers/api';
import CtorCard from 'Ctors/CtorCard';

import './Home.css';

class Home extends Component {
  componentWillMount() {
    const {
      auth, ctors,
      fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess // actions
    } = this.props;

    if (!ctors.length) { // get ctors from API
      fetchCtorsRequest();

      api(auth).get('/list_ctors')
      .then(response => fetchCtorsSuccess(response.data))
      .catch(error => fetchCtorsFailure(error.message));
    }
  }

  render() {
    const {ctors, metamaskStatus, auth} = this.props;

    return (
      <div className="container">
        {metamaskStatus &&
          <Alert standardAlert={metamaskStatus} />
        }

        <Alert header="Attention!">
          <p>
            <b>Don't use our service with real ETH in Ethereum Mainnet!</b><br />
            We are in very early stage of development. Use it only for test and informational purposes with Rinkeby network chosen in your MetaMask client. Authors are not responsible for any possible loses in result of using our service.
          </p>
        </Alert>

        <div>
          <h4>Available smart contracts:</h4>
          {ctors &&
            <div className="contracts-cards">
              {ctors.map((el, i) => (
                <CtorCard key={i} ctor={el} auth={auth} />
              ))}
            </div>
          }

          {!ctors &&
            <Spinner text="Loading contracts" width="100" />
          }

          <br /><br />
          <h4>If you are developer</h4>
          <p>You can <Link to="/ctor-add">add a smart contract</Link> to our platform.</p>
        </div>
      </div>
    );
  }
}

export default Home;
