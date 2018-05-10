import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../auth/Auth';

import './CtorCard.less';

class CtorCard extends Component {
  render() {
    const { ctor } = this.props;
    const isAuthenticated = Auth.isAuthenticated();
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['sub'] : '-1';

    const buttonText = isAuthenticated
      ? (ctor.price_eth
        ? `Deploy for ${ctor.price_eth} ETH`
        : 'Deploy free')
      : 'Login to deploy';
    return (
      <li className="gallery__item">
        <article className="gallery__card  contract-card">
          <Link to={`/deploy/${ctor.ctor_id}`} className="contract-card__link">
            <div className="contract-card__wrapper">
              <img
                className="contract-card__img"
                src={ctor.image
                  ? require(`./i/${ctor.image}`)
                  : `https://lorempixel.com/640/400/?${Math.random()}`
                }
                width="644" height="404"
                alt={`${ctor.ctor_name} contract`}
              />
            </div>
            <div className="contract-card__inner">
              <h1 className="contract-card__header">
                {ctor.ctor_name}
              </h1>
              <p className="contract-card__description">
                {ctor.ctor_descr}
              </p>
            </div>
          </Link>
          <div className="contract-card__inner  contract-card__inner--position">
            <p className="contract-card__info">
              <Link
                to={`/deploy/${ctor.ctor_id}`}
                className="btn-square  contract-card__price">
                {buttonText}
              </Link>

              {
                isAuthenticated && ctor.user_id === userId &&
                <Link to={`/constructors/${ctor.ctor_id}/update`} className="btn-square contract-card__price">
                  Update
                  </Link>
              }

              {/*<span className="contract-card__quantity">2510</span>*/}
            </p>
          </div>
        </article>
      </li>
    );
  }
}

export default CtorCard;
