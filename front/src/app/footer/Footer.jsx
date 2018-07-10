import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';

import './Footer.less';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        {/* Logo */}
        <section className="logo">
          <InlineSVG
            className="logo-img"
            src={require('../../assets/img/common/footer/logo.svg')}
          />
        </section>
        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-list">
            <Link className="nav-item" to="/">
              <li>Store</li>
            </Link>
            <Link className="nav-item" to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link className="nav-item" to="/my-constructors">
              <li>Developers</li>
            </Link>
            <a className="nav-item" href="https://wiki.smartz.io/en/contract-uploading">
              <li>Docs</li>
            </a>
            <a className="nav-item" href="https://about.smartz.io/">
              <li>About</li>
            </a>
            <a className="nav-item" href="https://medium.com/@SmartzPlatform">
              <li>Blog</li>
            </a>
          </ul>
        </nav>
        {/* Follow us */}
        <section className="follow">
          <ul className="social">
            <li className="social__item">
              <a
                className="social__link"
                href="https://t.me/smartz_en"
                target="_blank"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/telegram.svg')}
                />
              </a>
            </li>
            <li className="social__item">
              <a
                className="social__link"
                target="_blank"
                href="https://www.facebook.com/SmartzPlatform/"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/fb.svg')}
                />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/smartzplatform"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/github.svg')}
                />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://medium.com/smartz-blog"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/medium.svg')}
                />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://steemit.com/@smartz"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/steemit.svg')}
                />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://twitter.com/SmartzPlatform"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/twitter.svg')}
                />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.youtube.com/smartz"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/youtube.svg')}
                />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/company/smartzplatform/"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <InlineSVG
                  className="social-img"
                  src={require('../../assets/img/common/footer/linkedin.svg')}
                />
              </a>
            </li>
          </ul>
        </section>
        {/* Search */}
        <section className="search">
          <div className="wrapper-input">
            <InlineSVG
              className="search-input"
              src={require('../../assets/img/common/footer/search.svg')}
            />
            <input placeholder="Contract name or address" type="text" className="search-field" />
          </div>
        </section>
        {/* Info */}
        <section className="info">
          <p className="page-footer__copyright">&#169; Smartz 2018</p>
          <a href="mailto:hello@smartz.io">hello@smartz.io</a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://t.me/LoungerX">t.me/LoungerX</a>
          <p>
            Designed by{' '}
            <a href="http://artdictators.ru/" target="_blank" rel="noopener noreferrer">
              Artdictators
            </a>
          </p>
        </section>
        {/* Policy */}
        <section className="policy">
          <div className="wrap-text">
            <p className="page-footer__info">
              We do not store your private keys, passwords or your cryptocurrency.
              <br />Smartz is just a provider to conclude a smart contract.
            </p>
            <p className="page-footer__copyright">
              <a
                href="/static/media/legal/Smartz_privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer">
                Privacy policy
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="/static/media/legal/Smartz_terms-and-conditions.pdf"
                target="_blank"
                rel="noopener noreferrer">
                Terms & conditions
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://github.com/smartzplatform/tech-docs/blob/master/Technical_WP_EN.md"
                target="_blank"
                rel="noopener noreferrer">
                Technical Whitepaper
              </a>
            </p>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
