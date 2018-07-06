import * as React from 'react';
import { Link } from 'react-router-dom';

import compilationCountImg from '../../../assets/img/common/constructor/compilation-count.svg';
import history from '../../../helpers/history';
import Auth from '../../auth/Auth';

import './CtorCard.less';


interface ICtorCardProps {
  ctor: any;
}

class CtorCard extends React.Component<ICtorCardProps, {}> {
  public render() {
    const { ctor } = this.props;

    const isAuthenticated = Auth.isAuthenticated();
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['user_id'] : -1;

    return (
      <article className="ctor-card">
        <Link to={`/deploy/${ctor.ctor_id}`} className="ctor-card__link screen">
          <div className="ctor-card__img flex">
            {ctor.image ? (
              <img src={require(`./img/${ctor.image}`)} alt={`${ctor.ctor_name} dapp`} />
            ) : (
                <div className="empty_img flex">
                  <p>{ctor.ctor_name.charAt(0).toUpperCase()}</p>
                </div>
              )}
          </div>
          <section className="ctor-card__description">
            <h2 className="ctor-card__header">{ctor.ctor_name}</h2>
            <p className="ctor-card__text">{ctor.ctor_descr}</p>
          </section>
          <section className="ctor-card__controls">
            <div className="ctor-card__buttons">
              <div
                onClick={() => history.replace(`/deploy/${ctor.ctor_id}`)}
                className="btn ctor-card__price"
              >
                {ctor.price ? `${ctor.price} ETH` : 'Deploy free'}
              </div>

              {isAuthenticated &&
                ctor.user_id === userId && (
                  <div
                    onClick={() => history.replace(`/constructors/${ctor.ctor_id}/update`)}
                    className="btn ctor-card__price"
                  >
                    Update
                  </div>
                )}

              <div className="ctor-card__comp-count">
                <img src={compilationCountImg} alt="compilation count" />
                <span>{'1987'}</span>
              </div>
            </div>
          </section>
        </Link>
      </article>
    );
  }
}

export default CtorCard;
