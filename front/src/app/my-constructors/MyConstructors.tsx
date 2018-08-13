import * as React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../../api/apiRequests';
import Auth from '../auth/Auth';
import Alert from '../common/Alert';
import CtorCard from '../common/ctor-card/CtorCard';
import Loader from '../common/loader/Loader';

import './MyConstructors.less';


interface IMyConstructorsProps {
  ctors: any;
  metamaskStatus: any;
}

interface IMyConstructorsState { }

export default class MyConstructors extends React.Component
  <IMyConstructorsProps, IMyConstructorsState> {

  public componentWillMount() {
    api.getConstructors();
  }

  public componentDidMount() {
    window.Intercom('update');
  }

  public render() {
    const { ctors, metamaskStatus } = this.props;

    const isAuthenticated = Auth.isAuthenticated();
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['user_id'] : '-1';

    return (
      <main className="page-main  my-constructors">
        {metamaskStatus !== 'okMetamask' && <Alert standardAlert={metamaskStatus} />}
        <div className="ctor-section">
          {ctors && (
            <ul className="ctor-list">
              {ctors.filter((el) => isAuthenticated && el.user_id === userId).map((el, i) => (
                <li key={i} className="ctor-item">
                  <CtorCard key={i} ctor={el} />
                </li>
              ))}
            </ul>
          )}

          {!ctors && <Loader text="Loading constructors" width="100" />}
        </div>
      </main>
    );
  }
}
