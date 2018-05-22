import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.less';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <section className="page-footer__wrapper">
          <h2 className="visually-hidden">
            SEO header
          </h2>
          <p className="page-footer__logo">
            <img
              src={require('./i/logo.svg')}
              alt="Logo"
            />
          </p>
          <div className="page-footer__block">
            {/* Store */}
            <div className="page-footer__section  page-footer__section--store">
              <h3 className="page-footer__header">
                Store
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <Link to="/" className="page-footer__link">
                    All
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="/" className="page-footer__link">
                    Business
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="/" className="page-footer__link">
                    Finance
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="/" className="page-footer__link">
                    Lifestyle
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="/" className="page-footer__link">
                    Sports
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="/" className="page-footer__link">
                    Utilities
                  </Link>
                </li>
              </ul>
            </div>
            {/* Developers */}
            <div className="page-footer__section  page-footer__section--contracts">
              <h3 className="page-footer__header">
                Developers
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <a
                    className="page-footer__link"
                    target="_blank"
                    href=" https://wiki.smartz.io/en/contract-uploading">
                    Docs
                    </a>
                </li>
                <li className="page-footer__item">
                  <Link to="/ctor-add" className="page-footer__link">
                    Add contract
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="/my-dapps" className="page-footer__link">
                    My sandbox
                  </Link>
                </li>
              </ul>
            </div>
            {/* Dashboard */}
            <div className="page-footer__section  page-footer__section--dashboard">
              <h3 className="page-footer__header">
                Dashboard
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <Link to="/dashboard" className="page-footer__link">
                    My contracts
                  </Link>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div className="page-footer__section  page-footer__section--support">
              <h3 className="page-footer__header">
                Support
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <a className="page-footer__link" href="#">Help center</a>
                </li>
                <li className="page-footer__item">
                  <a className="page-footer__link" href="#">Contact support</a>
                </li>
                <li className="page-footer__item">
                  <a className="page-footer__link" href="#">Developers</a>
                </li>
                <li className="page-footer__item">
                  <a className="page-footer__link" href="https://medium.com/@SmartzPlatform">Blog</a>
                </li>
              </ul>
            </div>
            {/* Follow us */}
            <div className="page-footer__section  page-footer__section--social">
              <h3 className="page-footer__header">
                Follow us
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <a
                    href="https://about.smartz.io/"
                    className="page-footer__link"
                    target="_blank"
                    rel="noopener noreferrer">
                    About Smartz
                  </a>
                </li>
                <li className="page-footer__item">
                  <ul className="social">
                    <li className="social__item">
                      <a
                        href="https://www.facebook.com/SmartzPlatform/"
                        className="social__link  social__link--facebook"
                        aria-label="Follow us on Facebook"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg className="social__icon  social__icon--facebook" width="26" height="26">
                          <use href="#social-fb"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="https://twitter.com/SmartzPlatform" className="social__link  social__link--twitter" aria-label="Follow us on Twitter" target="_blank" rel="noopener noreferrer">
                        <svg className="social__icon  social__icon--twitter" width="27" height="22">
                          <use href="#social-twitter"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="https://github.com/mixbytes" className="social__link  social__link--github" aria-label="Follow us on Github" target="_blank" rel="noopener noreferrer">
                        <svg className="social__icon  social__icon--github" width="26" height="26">
                          <use href="#social-github"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="https://www.youtube.com/channel/UCn4kywh7NwNNHce2a2murSg" className="social__link  social__link--youtube" aria-label="Follow us on Youtube" target="_blank" rel="noopener noreferrer">
                        <svg className="social__icon  social__icon--youtube" width="26" height="18">
                          <use href="#social-youtube"></use>
                        </svg>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="https://t.me/smartz_en" className="social__link  social__link--telegram" aria-label="Follow us on Telegram" target="_blank" rel="noopener noreferrer">
                        <svg className="social__icon  social__icon--telegram" width="23" height="20">
                          <use href="#social-telegram"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="page-footer__item">
                  <a href="mailto:mailbox@smartz.io" className="page-footer__link">
                    mailbox@smartz.io
                  </a>
                </li>
                <li className="page-footer__item">
                  <a href="https://t.me/LoungerX" className="page-footer__link" target="_blank" rel="noopener noreferrer">
                    t.me/LoungerX
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="page-footer__wrapper">
          <h2 className="visually-hidden">
            SEO header
          </h2>
          <p className="page-footer__info">
            We do not store your private keys, passwords or your cryptocurrency.
            <br />Smartz is just a provider to conclude a smart contract.
          </p>
          <p className="page-footer__copyright">
            <a href="/legal/Smartz_privacy-policy.pdf">Privacy policy</a>
            &nbsp;&nbsp;&nbsp;
            <a href="/legal/Smartz_terms-and-conditions.pdf">Terms & conditions</a>
          </p>
          <p className="page-footer__copyright">
            <span>&#169; Smartz, </span><a href="https://mixbytes.io" target="_blank" rel="noopener noreferrer">MixBytes</a> <span>2018</span>
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;