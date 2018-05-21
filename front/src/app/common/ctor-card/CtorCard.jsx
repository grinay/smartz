import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../auth/Auth';

import './CtorCard.less';

class CtorCard extends Component {
  render() {
    const { ctor } = this.props;

    const isAuthenticated = Auth.isAuthenticated();
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['sub'] : '-1';

    return (
      <article className="ctor-card">
        <Link
          to={`/deploy/${ctor.ctor_id}`}
          className="ctor-card__link screen">
          <div className="ctor-card__img flex">
            {ctor.image
              ? <img
                src={require(`./img/${ctor.image}`)}
                alt={`${ctor.ctor_name} contract`} />
              : <p>{ctor.ctor_name.charAt(0).toUpperCase()}</p>
            }
          </div>
          <section className="ctor-card__description">
            <h2 className="ctor-card__header">
              {ctor.ctor_name}
            </h2>
            <p className="ctor-card__text">
              {ctor.ctor_descr}
            </p>
          </section>
          <section className="ctor-card__controls">
            <p className="ctor-card__buttons">
              <Link
                to={`/deploy/${ctor.ctor_id}`}
                className="btn ctor-card__price">
                {ctor.price_eth ? `${ctor.price_eth} ETH` : 'Deploy free'}
              </Link>

              {
                isAuthenticated && ctor.user_id === userId &&
                <Link
                  to={`/constructors/${ctor.ctor_id}/update`}
                  className="btn ctor-card__price">
                  Update
                  </Link>
              }

              {/*<span className="ctor-card__quantity">2510</span>*/}
            </p>
          </section>
        </Link>
      </article>
    );
  }
}

export default CtorCard;
