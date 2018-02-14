import React, {Component} from 'react';
import {find} from 'lodash';

import api from 'Api/Api';
import {processControlForm, processResult, getNetworkName, getNetworkEtherscanAddress} from 'Eth/Eth';
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
    api(this.props.auth).post('/get_instance_details', {'instance_id': this.state.instanceId})

      .then(response => {
        this.setState({instance: response.data});
        return response.data;
      })

      .then(instance => {
        api(this.props.auth).post('/list_ctors')
          .then(response => {
            instance.ctor = find(response.data, {ctor_id: instance.ctor_id});
          })
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
    console.log(instance);

    return (
      <div>
        <div className="container">
          {instance &&
            <div className="instance">
              <h1>
                {instance.instance_title}
                {instance.ctor &&
                  <span>
                    &emsp;(
                    <a href={`/deploy/${instance.ctor.ctor_id}`}>
                      {instance.ctor.ctor_name}
                    </a>)
                  </span>
                }
              </h1>

              {instance.address &&
                <p className="address">
                  {instance.address + ` (${getNetworkName(instance.network_id.toString())})`}
                  &emsp;
                  <a className="etherscan" href={getNetworkEtherscanAddress(instance.network_id.toString()) + `/address/${instance.address}`}>
                    see on Etherscan
                  </a>
                </p>
              }

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
