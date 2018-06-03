import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import CtorCard from '../Ctors/CtorCard';
import * as api from '../api/apiRequests';

class Store extends Component {
  componentDidMount() {
    api.getConstructors();

    window.Intercom("update");
  }

  render() {
    const { ctors, metamaskStatus } = this.props;

    return (
      <main className="page-main  page-main--store">
        <div className="page-main__inner">
          {metamaskStatus !== 'okMetamask' &&
            <Alert standardAlert={metamaskStatus} color="gray" />
          }

          <section className="contracts-gallery">
            <div className="contracts-gallery__gallery  gallery">
              {ctors &&
                <ul className="contracts-gallery__list  gallery__list">
                  {ctors.filter(el => el.is_public).map((el, i) => (
                    <CtorCard key={i} ctor={el} />
                  ))}
                </ul>
              }

              {!ctors &&
                <Spinner text="Loading contracts" width="100" />
              }
            </div>
          </section>

          <Alert header="If you are developer" color="green"
            style={{ marginTop: '80px' }}
          >
            <p>You can <Link to="/ctor-add">add a smart contract</Link> to our platform.</p>
          </Alert>
        </div>
      </main>
    );
  }
}

export default Store;
