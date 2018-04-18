import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';

class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    Auth.logout();
  }

  render() {
    const { profile } = this.props;
    const isAuthenticated = Auth.isAuthenticated();

    return (
      <header className="page-header">
        <Link to="/" className="page-header__link" aria-label="Back to main page">
          <svg className="page-header__logo" width="120" height="23">
            <use href="#logo"></use>
          </svg>
        </Link>
        <nav className="main-navigation">
          <ul className="main-navigation__list">
            <li className="main-navigation__item">
              <Link to="/" className="main-navigation__link">
                Smart Store
              </Link>
            </li>
            <li className="main-navigation__item">
              <Link to="/dashboard" className="main-navigation__link">
                My Contracts
              </Link>
            </li>
            <li className="main-navigation__item">
              <Link to="/docs" className="main-navigation__link">
                Docs
              </Link>
            </li>
          </ul>
        </nav>
        <div className="user-block">
          <Link to="/profile" onClick={(e) => {
            if (!isAuthenticated) {
              e.preventDefault();
              Auth.login(`/profile`);
            }
          }} className="user-block__link">
            <svg className="user-block__icon user-block__icon--lock" width="11" height="14">
              <use href="#lock"></use>
            </svg>
            {isAuthenticated
              ? <span className="user-block__name"
                style={{ display: 'inherit' }}>
                {profile &&
                  profile.name
                }
              </span>
              : <span className="user-block__login">Login</span>
            }
          </Link>
        </div>
        {/*
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
                  onClick={Auth.login}
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
                  <Button className="btn btn-primary btn-margin" onClick={Auth.logout}>
                    Log Out
                  </Button>
                </span>
              )}
            </div>
          </Navbar.Header>
        </Navbar>
      </div>
      */}
      </header>
    );
  }
}

export default Header;
