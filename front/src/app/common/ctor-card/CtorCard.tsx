import * as React from 'react';
import { Link } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';

import { IS_MOBILE_OS } from '../../../helpers/detect-device';
import history from '../../../helpers/history';
import Auth from '../../auth/Auth';
import ImageDefault from '../image-default/ImageDefault';

import './CtorCard.less';


interface ICtorCardProps {
  ctor: any;
}


export default class CtorCard extends React.Component<ICtorCardProps, {}> {
  public render() {
    const { ctor } = this.props;

    const isAuthenticated = Auth.isAuthenticated();
    const userId = isAuthenticated && Auth.userProfile ? Auth.userProfile['user_id'] : -1;

    return (
      <article className="ctor-card">
        <div className="ctor-card__link screen">
          <Link to={`/deploy/${ctor.id}`} className="ctor-card__link screen">
            <div className="ctor-card__img flex">
              <ImageDefault src={ctor.image} name={ctor.name} />
            </div>
            <section className="ctor-card__description">
              <h2 className="ctor-card__header">{ctor.name}</h2>
              <p className="ctor-card__text">{ctor.description}</p>
            </section>
            <section className="ctor-card__controls">
              <div className="ctor-card__buttons">
                <div
                  className="btn ctor-card__price"
                >
                  {ctor.price ? `${ctor.price} ETH` : 'Deploy free'}
                </div>

                {isAuthenticated &&
                  ctor.user_id === userId && (
                    <div
                      className="btn ctor-card__price"
                      onClick={(e) => { history.replace(`/constructors/${ctor.id}/update`); e.preventDefault(); }}
                    >
                      Update
                  </div>
                  )}

                <div className="ctor-card__comp-count flex">
                  <InlineSVG
                    className="count-img flex"
                    src={require('../../../assets/img/common/rocket.svg')}
                  />
                  <span className="text-count">{ctor.compilations_count}</span>
                </div>
              </div>
            </section>
          </Link>
        </div>
      </article>
    );
  }
}
