import React, {Component} from 'react';

import api from 'helpers/api';
import {processControlForm,
        processResult,
        getNetworkName,
        getNetworkEtherscanAddress} from 'helpers/eth';
import FunctionCard from './FunctionCard';
import Alert from 'common/Alert';

import './Instance.css';

class Instance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateCycleActive: false
    };
  }

  componentWillMount() {
    const {
      auth,
      fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess,
      fetchInstancesRequest, fetchInstancesFailure, fetchInstancesSuccess
    } = this.props;

    fetchCtorsRequest();
    api(auth).get('/list_ctors')
    .then(response => fetchCtorsSuccess(response.data))
    .catch(error => fetchCtorsFailure(error));

    fetchInstancesRequest();
    api(auth).get('/get_all_instances')
    .then(response => fetchInstancesSuccess(response.data))
    .catch(error => fetchInstancesFailure(error));
  }

  componentDidUpdate() {
    const {instance, ctor} = this.props;

    if (instance && ctor && !this.state.updateCycleActive) {
      this.setState({
        updateCycleActive: true
      });
      this.getConstants();
      setInterval(this.getConstants.bind(this), 60000);
    }
  }

  getConstants() {
    const {instance, instanceFuncResult} = this.props;

    instance.functions.forEach(func => {
      if (func.constant && func.inputs.minItems === 0) {
        processControlForm(instance.abi, func, [], instance.address, (error, result) => {
          if(error) {
            console.error(error);
          } else {
            instanceFuncResult(
              instance.instance_id,
              func.name,
              processResult(result)
            );
          }
        });
      }
    });
  }

  render() {
    const {metamaskStatus} = this.props;
    if (metamaskStatus) return (
      <div className="container">
        <Alert standardAlert={metamaskStatus} />
      </div>
    );

    const {instance, ctor, instanceFuncResult} = this.props;
    return (
      <div>
        <div className="container">
          {instance &&
            <div className="instance">
              <h1>
                {instance.instance_title}
                {ctor &&
                  <span>
                    &emsp;(
                    <a href={`/deploy/${ctor.ctor_id}`}>
                      {ctor.ctor_name}
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
              <p>This functions just provide an information about contract states and values.</p>
              <div className="instance-functions view-functions">
                {instance.functions && instance.functions.map((func, i) => {
                  if (func.constant && func.inputs.minItems === 0)
                    return (
                      <FunctionCard
                        func={func}
                        instance={instance}
                        key={i}
                      />);
                  else
                    return null;
                })}
              </div>

              <h3>Ask functions</h3>
              <p>This functions also provide an information about contract states and values, but related to some address or other conditions which you should provide. No any changes in blockchain are done by this functions.</p>
              <div className="instance-functions">
                {instance.functions && instance.functions.map((func, i) => {
                  if (func.constant && func.inputs.minItems !== 0)
                    return (
                      <FunctionCard
                        instance={instance}
                        func={func}
                        key={i}
                        instanceFuncResult={instanceFuncResult}
                      />);
                  else
                    return null;
                })}
              </div>

              <h3>Write functions</h3>
              <p>This functions are changing states and values of smart contract, placing new information to the blockchain. All this functions consume some amount of gas. Be careful, some of their actions can not be undone.</p>
              <div className="instance-functions">
                {instance.functions && instance.functions.map((func, i) => {
                  if (!func.constant)
                    return (
                      <FunctionCard
                        instance={instance}
                        func={func}
                        key={i}
                        refresh={this.getConstants.bind(this)}
                        instanceFuncResult={instanceFuncResult}
                      />);
                  else
                    return null;
                })}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Instance;
