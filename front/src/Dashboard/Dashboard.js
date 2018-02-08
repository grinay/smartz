import React, {Component} from 'react';
import axios from 'axios';
import {find} from 'lodash';

import {API_URL} from '../constants';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.auth.isAuthenticated(),
      ctors: []
    };
  }

  componentWillMount() {
    if (this.state.auth) {
      axios.get(`${API_URL}/list_ctors`)
        .then(response => {
          this.setState({
            ctors: response.data
          });
          response.data.forEach((ctor) => {
            axios.post(`${API_URL}/list_instances`, {
              'ctor_id': ctor.ctor_id
            })
              .then(res2 => {
                const ctors = [...this.state.ctors];
                find(ctors, (obj) => (
                  obj.ctor_id === ctor.ctor_id
                )).instances = res2.data;
                this.setState({ctors});
              })
              .catch(error => this.setState({message: error.message}));
          });
        })
        .catch(error => this.setState({message: error.message}));
    }
  }

  render() {
    const {message, ctors} = this.state;
    console.log(ctors);
    return (
      <div className="container">
        <h1>My smart contracts</h1>
        <h3>Deployed instances</h3>
        {message &&
          <div className="alert alert-danger" role="alert">
            <p>{message}</p>
          </div>
        }
        {ctors &&
          <ul>
            {ctors.map((ctor, i) => (
              ctor.instances && ctor.instances.map((inst, j) => (
                <li key={i+j}>
                  <a href={`./instance/${inst}`}>
                    {`"${ctor.ctor_name}", instance ${inst}`}
                  </a>
                </li>
              ))
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default Dashboard;
