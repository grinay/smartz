import React, {Component} from 'react';

import api from 'Api/Api';
import {processControlForm, processResult} from 'Eth/Eth';
import FunctionCard from './FunctionCard';

import './Instance.css';

class Instance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.auth.isAuthenticated(),
      instanceId: this.props.match.params.id
    };
  }

  componentWillMount() {
    api(this.props.auth).post('/prepare_instance_control_interface', {'instance_id': this.state.instanceId})

      .then(response => {
        this.setState({instance: response.data});
        return response.data;
      })

      .then(instance => {
        instance.functions.forEach((func, i) => {
          if (func.constant && func.inputs.minItems === 0) {
            processControlForm(instance.abi, func, [], instance.address,
                              (error, result) => {
              if(!error) {
                // console.log(result);
                instance.functions[i].value = processResult(result);
                this.setState({instance});
              } else
                console.error(error);
            });
          }
        });
      })

      .catch(error => this.setState({message: error.message}));
  }

  render() {
    const {message, instance} = this.state;
    instance && console.log(instance.functions);

    return (
      <div>
        <div className="container">
          <h1>TODO: name of contract</h1>

          {instance &&
            <div className="instance">
              <h4>
                Contract instance address:<br />
                <a href={`https://etherscan.io/address/${instance.address}`}>
                  {instance.address}
                </a>
              </h4>

              <h3>View functions</h3>
              <div className="instance-functions view-functions">
                {instance.functions.map((func, i) => {
                  if (func.constant && func.inputs.minItems === 0)
                    return <FunctionCard func={func} key={i} />;
                  else
                    return null;
                })}
              </div>

              <h3>Ask functions</h3>
              <div className="instance-functions">
                {instance.functions.map((func, i) => {
                  if (func.constant && func.inputs.minItems !== 0)
                    return <FunctionCard func={func} key={i} />;
                  else
                    return null;
                })}
              </div>

              <h3>Write functions</h3>
              <div className="instance-functions">
                {instance.functions.map((func, i) => {
                  if (!func.constant)
                    return <FunctionCard func={func} key={i} />;
                  else
                    return null;
                })}
              </div>
            </div>
          }

          {message &&
            <div className="alert alert-danger" role="alert">
              <p>{message}</p>
            </div>
          }

        </div>
      </div>
    );
  }
}

export default Instance;
