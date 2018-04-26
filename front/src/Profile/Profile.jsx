import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../App/Auth/Auth';

import './Profile.css';

class Profile extends Component {
  render() {
    const { profile } = this.props;

    if (!Auth.isAuthenticated())
      return (<Redirect to="/" />);

    return (
      <main className="page-main">
        {profile &&
          <section>
            <h2>{profile.name}</h2>
            <img
              src={profile.picture} alt="profile pic"
              style={{ maxWidth: '200px' }}
            />
            <p>
              {`Locale: ${profile.locale}`}
            </p>
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
