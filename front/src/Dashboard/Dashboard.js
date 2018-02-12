import React, {Component} from 'react';
import {find} from 'lodash';

import api from 'Api/Api';
import {processControlForm, processResult} from 'Eth/Eth';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: props.auth.isAuthenticated(),
      ctors: []
    };
  }

  componentWillMount() {
    // Get contracts
    api(this.props.auth).get('/list_ctors')

      .then(response => {
        this.setState({ctors: response.data});
        const getInstancesPromises = [];

        response.data.forEach((ctor) => {
          getInstancesPromises.push(
            api(this.props.auth).post('/list_instances', {'ctor_id': ctor.ctor_id})
          );
        });

        return Promise.all(getInstancesPromises);
      })

      // Get instances of every contract
      .then(rawInstances => {
        const ctors = [...this.state.ctors];
        const getInstDetailsPromises = [];

        rawInstances.forEach((rawInst, i) => {
          const instances = [];

          rawInst.data.forEach(instId => {
            instances.push({instance_id: instId});

            getInstDetailsPromises.push(
              api(this.props.auth).post('/prepare_instance_control_interface', {'instance_id': instId})
            );
          })

          ctors[i].instances = instances;
        });

        this.setState({ctors});
        return Promise.all(getInstDetailsPromises);
      })

      // Get details of every instance
      .then(instDetails => {
        const ctors = [...this.state.ctors];

        ctors.forEach(ctor => {
          ctor.instances.forEach(inst => {
            inst.details = instDetails.shift().data;
          });
        });

        this.setState({ctors});
        return ctors;
      })

      // Get data from blockchain
      .then(ctors => {
        ctors.forEach((ctor, i) => {
          ctor.instances.forEach((inst, j) => {
            const {abi, address, dashboard_functions, functions} = inst.details;
            if (dashboard_functions) {
              inst.dashboard_values = {};

              dashboard_functions.forEach(dFunc => {
                const fSpec = find(functions, {name: dFunc});
                processControlForm(abi, fSpec, [], address,
                                  (error, result) => {
                  if(!error) {
                    const res = processResult(result);
                    inst.dashboard_values[dFunc] = res;
                    this.setState({ctors});
                  } else
                    console.error(error);
                });
              });
            }
          });
        });
      })

      .catch(error => this.setState({message: error.message}));
  }

  render() {
    const {message, ctors} = this.state;

    return (
      <div className="container dashboard">

        <h1>My smart contracts</h1>
        {message &&
          <div className="alert alert-danger" role="alert">
            <p>{message}</p>
          </div>
        }

        {ctors && ctors.map((ctor, i) => (
          <div key={i}>
            {(ctor.instances && ctor.instances.length > 0) &&
              ctor.instances.map((inst, j) => (

                <div className="card" key={j}>
                  <div className="card-body">
                    <h3 className="card-title">{ctor.ctor_name}</h3>

                    {inst.details &&
                      <p className="card-text desc">
                        {inst.details.address || inst.details.error}
                      </p>
                    }

                    {inst.details && inst.dashboard_values &&
                      <div className="dashboard-functions">
                        {inst.details.dashboard_functions.map((func, k) => (
                          <div key={k}>
                            <span>{func}</span><br />
                            {inst.dashboard_values[func]}
                          </div>
                        ))}
                      </div>
                    }

                    {inst.details && inst.details.address &&
                      <div className="manage">
                        <a href={`./instance/${inst.instance_id}`}>
                          Manage contract
                        </a>
                      </div>
                    }

                    {inst.details && inst.details.error &&
                      <div className="manage">
                        <a href={`/deploy/${inst.instance_id}`}>
                          Deploy now
                        </a> [in development]
                      </div>
                    }

                  </div>
                </div>

              ))
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
