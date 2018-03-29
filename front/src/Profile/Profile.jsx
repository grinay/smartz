import React, {Component} from 'react';
import {Panel, ControlLabel, Glyphicon} from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  render() {
    const {profile} = this.props;

    return (
      <div className="container">
        {profile &&
          <div className="profile-area">
            <h1>{profile.name}</h1>
            <Panel header="Profile">
              <img src={profile.picture} alt="profile" />
              <div>
                <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
                <h3>{profile.nickname}</h3>
              </div>
              <pre>{JSON.stringify(profile, null, 2)}</pre>
              <button
                className="btn btn-primary btn-margin"
                onClick={this.props.auth.logout}
              >
                Log Out
              </button>
            </Panel>
          </div>
        }
      </div>
    );
  }
}

export default Profile;
