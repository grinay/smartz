import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import moment from 'moment';

class CtorCard extends Component {
  render() {
    const {ctor, auth} = this.props;
    const isAuthenticated = auth.isAuthenticated();

    const buttonText = isAuthenticated
      ? (ctor.price_eth
        ? `Deploy for ${ctor.price_eth} ETH`
        : 'Deploy free')
      : 'Login to deploy';
    return (
      <li className="gallery__item">
        <article className="gallery__card  contract-card">
          <a href="contract-about.html" className="contract-card__link">
            <div className="contract-card__wrapper">
              <img
                className="contract-card__img"
                src={ctor.image
                  ? require(`./i/${ctor.image}`)
                  : `https://lorempixel.com/640/400/?${Math.random()}`
                }
                width="644" height="404"
                alt={`${ctor.ctor_name} contract image`}
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
          </a>
          <div className="contract-card__inner  contract-card__inner--position">
            <p className="contract-card__info">
              <Link to={`/deploy/${ctor.ctor_id}`} onClick={(e) => {
                if (!isAuthenticated) {
                  e.preventDefault();
                  auth.login();
                }
              }} className="btn-square  contract-card__price">
                {buttonText}
              </Link>
              {/*<span className="contract-card__quantity">2510</span>*/}
            </p>
          </div>
        </article>
      </li>
    );
    /*
    <div className="card ctor-card">
      <img className="card-img-top" src={`https://lorempixel.com/400/100/?${Math.random()}`} alt="" />
      <div className="card-body">
        <h3 className="card-title">{ctor.ctor_name}</h3>
        <p className="card-text desc">{ctor.ctor_descr}</p>

        {!isAuthenticated &&
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={auth.login}
          >
            Login to deploy
          </Button>
        }

        {isAuthenticated &&
          <Link to={`/deploy/${ctor.ctor_id}`} className="btn btn-success btn-deploy">
            {ctor.price_eth
              ? <span>Deploy for {ctor.price_eth} ETH</span>
              : <span>Deploy free</span>
            }
          </Link>
        }
        <p className="card-text">
          <small className="text-muted">
            Author: {ctor.author || 'Vladimir Khramov'}<br />
            Updated: {ctor.updated || moment().format('ll')}
          </small>
        </p>
      </div>
    </div>
    */
  }
}

export default CtorCard;
