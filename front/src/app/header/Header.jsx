import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../auth/Auth';
import telegramImg from './img/telegram.svg';
import logoImg from '../../assets/img/common/menu/logo.svg';

import './Header.less';
import { sendFormDataDeployStep1 } from './../../api/apiRequests';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 'Store',
    };
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    Auth.logout();
  }

  setMenu(item) {
    return () => this.setState({ selectedMenu: item })
  }

  render() {
    const { profile, location } = this.props;
    const { selectedMenu } = this.state;

    let username;
    if (Auth.isAuthenticated()) {
      let profileName = profile && profile.last_name ? profile.last_name : 'Profile';

      // cut string, template '0x111...111'
      if (profileName.length > 8) {
        profileName = profileName.substring(0, 5)
          + '...' + profileName.substring(profileName.length - 3);
      }

      username = <span className="user-block__name" style={{ display: 'inherit' }}>
        {profileName}
      </span>;
    } else {
      username = <span>
        <svg className="user-block__icon user-block__icon--lock" width="11" height="14">
          <use href="#lock" />
        </svg>
        <span className="user-block__login">Login</span>
      </span>;
    }

    return (
      <header className="page-header flex-v">
        <Link to="/" className="logo flex" onClick={this.setMenu('Store')}>
          <img src={logoImg} alt="logo" />
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
              <li className='main-navigation__item flex-v'>
                <p>Store</p>
              </li>
            </NavLink>
            <NavLink
              to="/dashboard"
              className="main-navigation__link"
              onClick={this.setMenu('Dashboard')}
              activeClassName="active">
              <li className='main-navigation__item flex'>
                <p>Dashboard</p>
              </li>
            </NavLink>
            <NavLink
              to="/custom-contracts"
              className="main-navigation__link"
              onClick={this.setMenu('Custom Contracts')}
              activeClassName="active">
              <li className='main-navigation__item flex'>
                <p>Custom Contracts</p>
              </li>
            </NavLink>
            <a
              href="https://wiki.smartz.io/"
              className="main-navigation__link"
              target="_blanc">
              <li className="main-navigation__item flex">
                <p>Docs</p>
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
                <p>Chat</p>
              </li>
            </a>
            <Link
              to="/profile"
              className="main-navigation__link">
              <li className="main-navigation__item flex">
                {username}
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
