import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Alert from 'common/Alert';
import Spinner from 'common/Spinner';
import api from 'helpers/api';
import CtorCard from 'Ctors/CtorCard';

class Store extends Component {
  componentWillMount() {
    const {
      auth,
      fetchCtorsRequest,
      fetchCtorsFailure,
      fetchCtorsSuccess
    } = this.props;

    fetchCtorsRequest();

    api(auth).get('/list_ctors')
    .then(response => fetchCtorsSuccess(response.data))
    .catch(error => fetchCtorsFailure(error.message));
  }

  render() {
    const {ctors, metamaskStatus, auth} = this.props;

    return (
      <main className="page-main  page-main--store">
        <div className="page-main__inner">
          {metamaskStatus &&
            <Alert standardAlert={metamaskStatus} />
          }

          <Alert>
            <p><b>Attention! Smartz platform is in early stage of development.</b></p>
            <p>So we recommend to use it only in learning, testing and informational purposes with one of test networks (like Rinkeby or Kovan). Authors are not responsible for any possible loses in result of using our service. Please, address your questions and report any bugs to <a href="mailto:mailbox@smartz.io">mailbox@smartz.io</a>.</p>
          </Alert>

          <section className="contracts-gallery">
            <div className="contracts-gallery__gallery  gallery">
              {ctors &&
                <ul className="contracts-gallery__list  gallery__list">
                  {ctors.map((el, i) => (
                    <CtorCard key={i} ctor={el} auth={auth} />
                  ))}
                </ul>
              }

              {!ctors &&
                <Spinner text="Loading contracts" width="100" />
              }
            </div>
          </section>

          <Alert header="If you are developer"
            style={{marginTop: '80px', background: '#88db88'}}
          >
            <p>You can <Link to="/ctor-add">add a smart contract</Link> to our platform.</p>
          </Alert>
        </div>
      </main>
    );
  }
}

export default Store;
