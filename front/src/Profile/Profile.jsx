import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
  render() {
    const {auth, profile} = this.props;

    if (!auth.isAuthenticated())
      return (<Redirect to="/" />);

    return (
      <main className="page-main">
        {profile &&
          <section>
            <h2>{profile.name}</h2>
            <img
              src={profile.picture} alt="profile pic"
              style={{maxWidth: '200px'}}
            />
            <p>
              {`Locale: ${profile.locale}`}
            </p>
            <button
              className="button block__button"
              onClick={this.props.auth.logout}
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
