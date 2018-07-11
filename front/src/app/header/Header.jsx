import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../auth/Auth';
import InlineSVG from 'svg-inline-react';

import './Header.less';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 'Store'
    };
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  logout() {
    Auth.logout();
  }

  setMenu(item) {
    return () => this.setState({ selectedMenu: item });
  }

  render() {
    const { profile, location } = this.props;
    const { selectedMenu } = this.state;

    let username;
    if (Auth.isAuthenticated()) {
      let profileName = profile && profile.last_name ? profile.last_name : 'Profile';

      // cut string, template '0x111...111'
      if (profileName.length > 8) {
        profileName =
          profileName.substring(0, 5) + '...' + profileName.substring(profileName.length - 3);
      }

      username = (
        <span className="user-block__name" style={{ display: 'inherit' }}>
          {profileName}
        </span>
      );
    } else {
      username = (
        <span>
          <InlineSVG className="lock-img" src={require('../../assets/img/common/header/lock.svg')} />
          <span className="user-block__login">Login</span>
        </span>
      );
    }

    return (
      <header id="js-header" className="page-header flex-v">
        <Link to="/" className="logo flex" onClick={this.setMenu('Store')}>
          <InlineSVG className="logo-img" src={require('../../assets/img/common/menu/logo.svg')} />
        </Link>
        <section className="title-main flex-v">
          <p>{selectedMenu}</p>
        </section>
        <nav className="main-navigation flex-v">
          <ul className="main-navigation__list flex-v">
            <NavLink
              to="/"
              exact={true}
              className="main-navigation__link"
              onClick={this.setMenu('Store')}
              activeClassName="active">
              <li className="main-navigation__item flex-v">
                <p>Store</p>
              </li>
            </NavLink>
            <NavLink
              to="/dashboard"
              className="main-navigation__link"
              onClick={this.setMenu('Dashboard')}
              activeClassName="active">
              <li className="main-navigation__item flex">
                <p>Dashboard</p>
              </li>
            </NavLink>
            <a href="https://wiki.smartz.io/" className="main-navigation__link" target="_blanc">
              <li className="main-navigation__item flex">
                <p>Docs</p>
              </li>
            </a>
            <a
              href="https://t.me/smartz_en"
              target="_blank"
              className="main-navigation__link">
              <li className={`main-navigation__item flex`}>
                <InlineSVG className="tgm-img" src={require('../../assets/img/common/menu/telegram.svg')} />
                <p>Chat</p>
              </li>
            </a>
            <Link to="/profile" className="main-navigation__link">
              <li className="main-navigation__item flex">{username}</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
