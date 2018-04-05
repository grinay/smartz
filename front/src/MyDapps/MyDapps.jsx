import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import api from '../helpers/api';
import CtorCard from '../Ctors/CtorCard';

class MyDapps extends Component {
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

    const isAuthenticated = auth.isAuthenticated();
    const userId = isAuthenticated && auth.userProfile ? auth.userProfile['sub'] : '-1';

    return (
      <main className="page-main  page-main--store">
        <div className="page-main__inner">
          {metamaskStatus &&
            <Alert standardAlert={metamaskStatus} />
          }

          <section className="contracts-gallery">
            <div className="contracts-gallery__gallery  gallery">
              {ctors &&
                <ul className="contracts-gallery__list  gallery__list">
                  {ctors.filter(el=>isAuthenticated && el.user_id===userId).map((el, i) => (
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

export default MyDapps;
