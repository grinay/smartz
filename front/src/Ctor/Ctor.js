import React, {Component} from 'react';
import {Panel, ControlLabel, Glyphicon} from 'react-bootstrap';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const {userProfile, getProfile} = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const {profile} = this.state;
    const {id} = this.props.match.params;
    return (
      <div className="container">
        <h1>{id}</h1>
        <Panel header="Profile">
          <img src={profile.picture} alt="profile" />
          <div>
            <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
            <h3>{profile.nickname}</h3>
          </div>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </Panel>
      </div>
    );
  }
}

export default Profile;
