import React, {Component} from 'react';
import {Panel, ControlLabel, Glyphicon} from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  render() {
    const {profile} = this.props;

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
