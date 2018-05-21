import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../auth/Auth';
import telegramImg from './img/telegram.svg';
import logoImg from '../../assets/img/common/menu/logo.svg';

import './Header.less';

class Header extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    Auth.logout();
  }

  render() {
    const { profile, location } = this.props;
    const isAuthenticated = Auth.isAuthenticated();

    return (
      <header className="page-header flex-v">
        <Link to="/" className="logo flex">
          <img src={logoImg} alt="logo" />
        </Link>
        <nav className="main-navigation">
          <ul className="main-navigation__list flex-v">
            <Link
              to="/"
              className="main-navigation__link">
              <li className={`main-navigation__item flex-v ${location.pathname === '/' ? 'active' : ''}`}>
                Store
            </li>
            </Link>
            <Link
              to="/dashboard"
              className="main-navigation__link">
              <li className={`main-navigation__item flex ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                Dashboard
            </li>
            </Link>
            <a
              href="https://wiki.smartz.io/"
              className="main-navigation__link"
              target="_blanc">
              <li className="main-navigation__item flex">
                Support
            </li>
            </a>
            <a
              href="https://t.me/smartz_en"
              target="_blank"
              className="main-navigation__link">
              <li className={`main-navigation__item flex`}>
                <img
                  className={"tgm"}
                  src={telegramImg}
                  alt="telegram chat" />
                Chat
            </li>
            </a>
            <Link
              to="/profile"
              className="main-navigation__link">
              <li className="main-navigation__item flex">
                {isAuthenticated
                  ? <span className="user-block__name"
                    style={{ display: 'inherit' }}>
                    {profile && profile.name}
                  </span>
                  : <span>
                    <svg className="user-block__icon user-block__icon--lock" width="11" height="14">
                      <use href="#lock" />
                    </svg>
                    <span className="user-block__login">Login</span>
                  </span>
                }
              </li>
            </Link>
          </ul>
        </nav>
        {/* <div className="user-block">
        </div> */}
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
