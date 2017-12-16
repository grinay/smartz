import React, {Component} from 'react';
import axios from 'axios';

import {API_URL} from 'constants';

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
    /*
    axios.get(`${API_URL}/list_ctors`)
      .then(response => this.setState({ctors: response.data.message}))
      .catch(error => this.setState({message: error.message}));
    */
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
    this.forceUpdate();
  }
  render() {
    const {isAuthenticated} = this.props.auth;
    const {ctors} = this.state;
    return (
      <div className="container">
        {isAuthenticated() &&
          <div>
            <h4>Choose smart contract:</h4>
            {ctors &&
              ctors.map((el, i) => (
                <li key={i}>
                  <a href={`/ctor/${el.ctor_id}`}>{el.ctor_name}</a>
                </li>
              ))
            }
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
