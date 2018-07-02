import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import fbImg from '../../assets/img/common/footer/fb.svg';
import githubImg from '../../assets/img/common/footer/github.svg';
import linkedinImg from '../../assets/img/common/footer/linkedin.svg';
import mediumImg from '../../assets/img/common/footer/medium.svg';
import telegramImg from '../../assets/img/common/footer/telegram.svg';
import twitterImg from '../../assets/img/common/footer/twitter.svg';
import youtubeImg from '../../assets/img/common/footer/youtube.svg';
import searchImg from '../../assets/img/common/footer/search.svg';
import logoImg from '../../assets/img/common/footer/logo.svg';
import steemitImg from '../../assets/img/common/footer/steemit.svg';

import './Footer.less';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        {/* Logo */}
        <section className="logo">
          <img src={logoImg} alt="Logo" />
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
            <Link className="nav-item" to="/my-dapps">
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
                <img src={telegramImg} alt="telegram" />
              </a>
            </li>
            <li className="social__item">
              <a
                className="social__link"
                target="_blank"
                href="https://www.facebook.com/SmartzPlatform/"
                rel="noopener noreferrer">
                <img src={fbImg} alt="fb" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/smartzplatform"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <img src={githubImg} alt="github" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://medium.com/smartz-blog"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <img src={mediumImg} alt="medium" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://steemit.com/@smartz"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <img src={steemitImg} alt="steemit" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://twitter.com/SmartzPlatform"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <img src={twitterImg} alt="twitter" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.youtube.com/smartz"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <img src={youtubeImg} alt="youtube" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/company/smartzplatform/"
                className="social__link"
                target="_blank"
                rel="noopener noreferrer">
                <img src={linkedinImg} alt="linkedin" />
              </a>
            </li>
          </ul>
        </section>
        {/* Search */}
        <section className="search">
          <div className="wrapper-input">
            <img className="search-input" src={searchImg} alt="search" />
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
              <a href="/legal/Smartz_privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
                Privacy policy
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="/legal/Smartz_terms-and-conditions.pdf"
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
