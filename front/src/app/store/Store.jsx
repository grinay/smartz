import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import CtorCard from '../common/ctor-card/CtorCard';
import developersImg from './img/developers.jpg';
import * as api from '../../api/apiRequests';

import './Store.less';

class Store extends Component {
  componentDidMount() {
    api.getConstructors();
  }

  render() {
    const { ctors, metamaskStatus } = this.props;

    return (
      <main className="page-main  page-main--store">
        {/* <div className="page-main__inner"> */}
        {/* {metamaskStatus &&
            <Alert standardAlert={metamaskStatus} color="gray" />
          } */}

        <div className="ctor-block">
          {ctors &&
            <ul className="ctor-list">
              {ctors.filter(el => el.is_public).map((el, i) =>
                <li key={i} className="ctor-item">
                  <CtorCard ctor={el} />
                </li>
              )}
            </ul>
          }

          {!ctors &&
            <Spinner text="Loading contracts" width="100" />
          }
        </div>

        {/* <Alert header="If you are developer" color="green"
            style={{ marginTop: '80px' }}
          >
            <p>You can <Link to="/ctor-add">add a smart contract</Link> to our platform.</p>
          </Alert> */}
        <div className="dev-block">
          <div className="description">
            <h2>Developers!</h2>
            <p>You can upload your smart contract to Smartz platform.</p>
            <button>Learn more</button>
          </div>
          <img src={developersImg} alt="for-dev" />
        </div>
        {/* </div> */}
      </main>
    );
  }
}

export default Store;
