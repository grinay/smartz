import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const {isAuthenticated} = this.props.auth;
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <div className="logo">
              <Navbar.Brand>
                <a href="/">SMARTZ</a>
                <span className="version">v0.1 pre-alpha</span>
              </Navbar.Brand>
            </div>
            <div className="nav-buttons">
              {!isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
              )}
              {isAuthenticated() && (
                <span>
                  <Button bsStyle="primary" className="btn-margin"
                    onClick={this.goTo.bind(this, 'dashboard')}>
                    My contracts
                  </Button>
                  <Button bsStyle="primary" className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}>
                    Profile
                  </Button>
                  <Button bsStyle="primary" className="btn-margin"
                    onClick={this.logout.bind(this)}>
                    Log Out
                  </Button>
                </span>
              )}
            </div>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
