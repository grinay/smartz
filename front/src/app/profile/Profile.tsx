import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../auth/Auth';

import './Profile.less';


interface IProfileProps {
  profile: any;
}

interface IProfileState { }

class Profile extends React.Component<IProfileProps, IProfileState> {
  public componentDidMount() {
    window.Intercom('update');
  }

  public render() {
    const { profile } = this.props;

    if (!Auth.isAuthenticated())
      return (<Redirect to="/" />);

    let names = [];
    if (profile) {
      if (profile.first_name) names.push(profile.first_name);
      if (profile.last_name) names.push(profile.last_name);
    }

    let name = names.join(' ');
    if (!name) {
      name = 'user';
    }

    return (
      <main className="page-main" style={{ margin: '0 50px' }}>
        {profile &&
          <section>
            <h2>{name}</h2>
            <button
              className="button block__button"
              onClick={Auth.logout}
            >
              Log Out
            </button>
          </section>
        }
      </main>
    );
  }
}

export default Profile;
