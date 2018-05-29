import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../../api/apiRequests';
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import CtorCard from '../common/ctor-card/CtorCard';
import Auth from '../auth/Auth';
import DevBlock from './../common/dev-block/DevBlock';

import './MyDapps.less';

class MyDapps extends Component {
  componentWillMount() {
    api.getConstructors();
  }

  render() {
    const { ctors, metamaskStatus } = this.props;

    const isAuthenticated = Auth.isAuthenticated();
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['user_id'] : '-1';

    return (
      <main className="page-main  my-dapps">
        {metamaskStatus !== 'okMetamask' &&
          <Alert standardAlert={metamaskStatus} />
        }
        <div className="ctor-section">
          {ctors &&
            <ul className="ctor-list">
              {ctors.filter(el => isAuthenticated && el.user_id === userId).map((el, i) =>
                <li key={i} className="ctor-item">
                  <CtorCard key={i} ctor={el} />
                </li>
              )}
            </ul>
          }

          {!ctors &&
            <Spinner text="Loading contracts" width="100" />
          }
        </div>
      </main>
    );
  }
}

export default MyDapps;
