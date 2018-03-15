import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <section className="page-footer__wrapper">
          <h2 className="visually-hidden">
            SEO header
          </h2>
          <p className="page-footer__logo">
            smartz
          </p>
          <div className="page-footer__block">
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
            <div className="page-footer__section  page-footer__section--contracts">
              <h3 className="page-footer__header">
                Contracts
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <Link to="/dashboard" className="page-footer__link">
                    Running
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="/dashboard" className="page-footer__link">
                    All my contracts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="page-footer__section  page-footer__section--contracts">
              <h3 className="page-footer__header">
                Developers
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <Link to="/my-dapps" className="page-footer__link">
                    My dapps
                  </Link>
                </li>
              </ul>
            </div>
            <div className="page-footer__section  page-footer__section--support">
              <h3 className="page-footer__header">
                Support
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <Link to="/docs" className="page-footer__link">
                    Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="page-footer__section  page-footer__section--social">
              <h3 className="page-footer__header">
                Follow us
              </h3>
              <ul className="page-footer__list">
                <li className="page-footer__item">
                  <ul className="social">
                    <li className="social__item">
                      <Link to="https://www.facebook.com/SmartzPlatform/" className="social__link  social__link--facebook" aria-label="Follow us on Facebook">
                        <svg className="social__icon  social__icon--facebook" width="26" height="26">
                          <use href="#social-fb"></use>
                        </svg>
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link to="https://twitter.com/SmartzPlatform" className="social__link  social__link--twitter" aria-label="Follow us on Twitter">
                        <svg className="social__icon  social__icon--twitter" width="27" height="22">
                          <use href="#social-twitter"></use>
                        </svg>
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link to="https://github.com/mixbytes" className="social__link  social__link--github" aria-label="Follow us on Github">
                        <svg className="social__icon  social__icon--github" width="26" height="26">
                          <use href="#social-github"></use>
                        </svg>
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link to="https://www.youtube.com/channel/UCn4kywh7NwNNHce2a2murSg" className="social__link  social__link--youtube" aria-label="Follow us on Youtube">
                        <svg className="social__icon  social__icon--youtube" width="26" height="18">
                          <use href="#social-youtube"></use>
                        </svg>
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link to="https://t.me/smartz_en" className="social__link  social__link--telegram" aria-label="Follow us on Telegram">
                        <svg className="social__icon  social__icon--telegram" width="23" height="20">
                          <use href="#social-telegram"></use>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="page-footer__item">
                  <Link to="mailto:mailbox@smartz.io" className="page-footer__link">
                    mailbox@smartz.io
                  </Link>
                </li>
                <li className="page-footer__item">
                  <Link to="https://t.me/LoungerX" className="page-footer__link">
                    t.me/LoungerX
                  </Link>
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
            Smartz is just a provider to conclude a smart contract.
          </p>
          <p className="page-footer__copyright">
            <span>&#169; Smartz, </span><Link to="https://mixbytes.io">MixBytes</Link> <span>2018</span>
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
