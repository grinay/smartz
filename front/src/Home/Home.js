import React, {Component} from 'react';
import axios from 'axios';

import {API_URL} from '../constants';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.auth.isAuthenticated() && this.getCtors();
  }
  login() {
    this.props.auth.login();
  }
  getCtors() {
    axios.get(`${API_URL}/list_ctors`)
      .then(response => {
        this.setState({ctors: response.data});
        console.log(response.data);
      })
      .catch(error => this.setState({message: error.message}));
    /*
    this.setState({ctors: [
      {
        ctor_id: 1,
        ctor_name: 'Simple Equity Token'
      },
      {
        ctor_id: 2,
        ctor_name: 'Equity Token with Dividends Distribution'
      },
      {
        ctor_id: 3,
        ctor_name: 'Token with Crowdsale'
      },
    ]});
    */
  }
  render() {
    const {isAuthenticated} = this.props.auth;
    const {ctors} = this.state;
    return (
      <div className="container">
        {isAuthenticated() &&
          <div>
            <h4>Available smart contracts:</h4>
            {ctors &&
              <div className="contracts-cards">
                {ctors.map((el, i) => (
                  <div className="card" key={i}>
                    <img className="card-img-top" src={`http://lorempixel.com/400/100/?${i}`} alt="Card image cap" />
                    <div className="card-body">
                      <h3 className="card-title">{el.ctor_name}</h3>
                      <p className="card-text desc">Contract description. Lorem ipsum vestibulum sed turpis curabitur magna, consequat aliquet bibendum in amet aliquet, leo nam iaculis posuere vitae.</p>
                      <a href={`/ctor/${el.ctor_id}`} className="btn btn-success btn-deploy">
                        Deploy free
                      </a>
                      <p className="card-text"><small class="text-muted">Uploaded 21 dec 2017</small></p>
                    </div>
                  </div>
                ))}
              </div>
            }
            {!ctors &&
              <p>Contracts loading</p>
            }
            <br /><br />
            <h4>If you are developer</h4>
            <p>You can <a href="/ctor-add">add smart contract</a> to our platform.</p>
          </div>
        }
        {!isAuthenticated() &&
          <h4>
            You are not logged in! Please{' '}
            <a
              style={{ cursor: 'pointer' }}
              onClick={this.login.bind(this)}
            >
              Log In
            </a>
            {' '}to continue.
          </h4>
        }
      </div>
    );
  }
}

export default Home;
