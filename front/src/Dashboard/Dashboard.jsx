import React, {Component} from 'react';
import {find} from 'lodash';

import {
  processControlForm, processResult, getNetworkName,
  getNetworkEtherscanAddress
} from 'helpers/eth';
import api from 'helpers/api';
import Alert from 'common/Alert';

import './Dashboard.css';

class Dashboard extends Component {
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
    const {ctors, instances} = this.props;

    if (instances.length && ctors.length && !this.state.updateCycleActive) {
      this.setState({
        updateCycleActive: true
      });
      this.updateCycle();
      setInterval(this.updateCycle.bind(this), 60000);
    }
  }

  updateCycle() {
    const {instances, instanceFuncResult} = this.props;

    instances.forEach((inst, j) => {
      const {
        instance_id, abi, address, dashboard_functions, functions
      } = inst;

      if (dashboard_functions) {
        dashboard_functions.forEach(dFunc => {
          const fSpec = find(functions, {name: dFunc});
          processControlForm(abi, fSpec, [], address, (error, result) => {
            if(error) {
              console.error(error);
            } else {
              instanceFuncResult(
                instance_id,
                dFunc,
                processResult(result)
              );
            }
          });
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

    const {ctors, ctorsError, instances, instancesError} = this.props;
    return (
      <div className="container dashboard">
        <h1>My smart contracts</h1>

        {(ctorsError || instancesError) &&
          <div className="alert alert-danger" role="alert">
            {ctorsError && <p>{ctorsError}</p>}
            {instancesError && <p>{instancesError}</p>}
          </div>
        }

        {instances && instances.map((inst, j) => (
          <div className="card" key={j}>
            <div className="card-body">
              <div>
                <h3 className="card-title">
                  <a href={`/instance/${inst.instance_id}`}>
                    {inst.instance_title}
                  </a>
                  &nbsp;({find(ctors, {ctor_id: inst.ctor_id})
                  ? find(ctors, {ctor_id: inst.ctor_id}).ctor_name
                  : ''})
                </h3>
                <p className="card-text desc">
                  {inst.address}&emsp;({getNetworkName(inst.network_id.toString())})&emsp;
                  <a className="etherscan" href={getNetworkEtherscanAddress(inst.network_id.toString()) + `/address/${inst.address}`}>
                    see on Etherscan
                  </a>
                </p>
              </div>

              {inst.funcResults &&
                <div className="dashboard-functions">
                  {inst.dashboard_functions.map((func, k) => (
                    <div key={k}>
                      <span>{find(inst.functions, {name: func}).title}</span><br />
                      {inst.funcResults[func]}
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Dashboard;
