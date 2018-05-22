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
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['sub'] : '-1';

    return (
      <main className="page-main  my-dapps">
        {metamaskStatus !== 'okMetamask' &&
          <Alert standardAlert={metamaskStatus} />
        }
        <div className="ctor-block">
          {ctors &&
            <ul className="ctor-list">
              {/* TODO: fix this */}
              {/* {ctors.filter(el => isAuthenticated && el.user_id === userId).map((el, i) => */}
              {ctors.map((el, i) => {
                if (i < 2) {
                  return (
                    <li key={i} className="ctor-item">
                      <CtorCard key={i} ctor={el} />
                    </li>
                  )
                } else {
                  return null;
                }
              }
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
