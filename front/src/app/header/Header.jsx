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
    const isAuthenticated = Auth.isAuthenticated();

    return (
      <header className="page-header flex-v">
        <Link to="/" className="logo flex" onClick={this.setMenu('Store')}>
          <img src={logoImg} alt="logo" />
        </Link>
        <section className="title-main flex-v">
          <p>{selectedMenu}</p>
        </section>
        <nav className="main-navigation">
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
                {isAuthenticated
                  ? <span className="user-block__name"
                    style={{ display: 'inherit' }}>
                    {profile && profile.last_name}
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
      </header>
    );
  }
}

export default Header;
