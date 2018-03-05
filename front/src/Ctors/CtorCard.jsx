import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import moment from 'moment';

import Alert from 'common/Alert';
import api from 'helpers/api';

import './CtorCard.css';

class CtorCard extends Component {
  render() {
    const {ctor, auth} = this.props;
    const isAuthenticated = auth.isAuthenticated();

    return (
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
    );
  }
}

export default CtorCard;
