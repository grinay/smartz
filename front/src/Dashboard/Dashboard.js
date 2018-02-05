import React, {Component} from 'react';
import axios from 'axios';

import {API_URL} from '../constants';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.auth.isAuthenticated(),
      instances: []
    };
  }

  componentWillMount() {
    if (this.state.auth) {
      axios.get(`${API_URL}/list_ctors`)
        .then(response => {
          response.data.forEach((ctor) => {
            axios.post(`${API_URL}/list_instances`, {
              'ctor_id': ctor.ctor_id
            })
              .then(res2 => {
                this.setState({
                  instances: this.state.instances.concat(res2.data)
                });
              })
              .catch(error => this.setState({message: error.message}));
          });
        })
        .catch(error => this.setState({message: error.message}));
    }
  }

  render() {
    const {message, instances} = this.state;
    return (
      <div className="container">
        <h1>My smart contracts</h1>
        {message &&
          <div className="alert alert-danger" role="alert">
            <p>{message}</p>
          </div>
        }
        {instances &&
          <ul>
            {instances.map((id, i) => (
              <li key={i}>{id}</li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default Dashboard;
