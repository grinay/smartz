import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../../api/apiRequests';
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import CtorCard from '../common/ctor-card/CtorCard';
import Auth from '../auth/Auth';
import DevBlock from './../common/dev-block/DevBlock';

class MyDapps extends Component {
  componentWillMount() {
    api.getConstructors();
  }

  render() {
    const { ctors, metamaskStatus } = this.props;

    const isAuthenticated = Auth.isAuthenticated();
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['sub'] : '-1';

    return (
      <main className="page-main  page-main--store">
        {metamaskStatus !== 'okMetamask' &&
          <Alert standardAlert={metamaskStatus} />
        }
        <div className="ctor-block">
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
        <DevBlock />
      </main>
    );
  }
}

export default MyDapps;
