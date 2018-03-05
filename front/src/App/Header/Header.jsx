import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css';

class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const {auth} = this.props;
    const isAuthenticated = auth.isAuthenticated();

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <div className="logo">
              <Navbar.Brand>
                <Link to="/">
                  <img src={require('./i/smartz-logo.jpg')} alt="Smartz logo" />
                </Link>
                <span className="version">v0.4.1 alpha</span>
              </Navbar.Brand>
            </div>

            <div className="nav-buttons">
              {!isAuthenticated && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={auth.login}
                >
                  Log In
                </Button>
              )}

              {isAuthenticated && (
                <span>
                  <Link to={'/dashboard'} className="btn btn-primary btn-margin">
                    My contracts
                  </Link>
                  <Link to={'/profile'} className="btn btn-primary btn-margin">
                    Profile
                  </Link>
                  <Button className="btn btn-primary btn-margin" onClick={auth.logout}>
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

export default Header;
