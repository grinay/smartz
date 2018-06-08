import React, { Component } from 'react';
import { find } from 'lodash';
import { Link } from 'react-router-dom';

import * as api from '../../api/apiRequests';
import { processControlForm, processResult, getNetworkId } from '../../helpers/eth';
import Alert from '../common/Alert';

import './Dashboard.less';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateCycleActive: false,
      filterInstances: []
    };
  }

  componentWillMount() {
    api.getConstructors();
    api.getInstances();
  }

  componentDidMount() {
    window.Intercom('update');
  }

  componentWillReceiveProps(nextProps) {
    const { metamaskStatus, instances } = this.props;

    //TODO: how to filter contracts, if we've eos contracts
    // show all contracts
    this.setState({ filterInstances: instances });
    // if (metamaskStatus !== 'noMetamask') {
    //   if (instances.length > 0) {
    //     getNetworkId(networkId => {

    //       // show instances only current network
    //       const filterInstances = instances.filter(instance =>
    //         instance.network_id.toString() === networkId
    //       );

    //       this.setState({ filterInstances });
    //     });
    //   }
    // }
  }

  componentDidUpdate() {
    const { ctors, instances, metamaskStatus } = this.props;
    const { filterInstances } = this.state;

    if (
      filterInstances.length &&
      ctors.length &&
      !this.state.updateCycleActive &&
      metamaskStatus !== 'noMetamask'
    )
      this.updateCycle();
  }

  updateCycle() {
    const { instances, viewFuncResult } = this.props;

    instances.forEach((inst, j) => {
      const { instance_id, abi, address, dashboard_functions, functions, blockchain } = inst;

      if (blockchain === 'ethereum' && dashboard_functions) {
        dashboard_functions.forEach((dFunc) => {
          const fSpec = find(functions, { name: dFunc });
          if (!fSpec) {
            return;
          }
          processControlForm(abi, fSpec, [], address, (error, result) => {
            if (error) {
              console.error(error);
            } else {
              viewFuncResult(instance_id, dFunc, processResult(result));
            }
          });
        });
      }
    });
  }

  render() {
    const { metamaskStatus } = this.props;
    const { filterInstances } = this.state;

    if (metamaskStatus === 'noMetamask')
      return (
        <p
          style={{
            textAlign: 'center',
            margin: '100px',
            fontSize: '20px'
          }}>
          Fellow, you need a Metamask plugin!
        </p>
      );

    const { ctors, ctorsError, instances, instancesError } = this.props;

    filterInstances.forEach((inst) => {
      inst.ctor = find(ctors, { ctor_id: inst.ctor_id }) || {};
    });

    return (
      <main className="page-main  page-main--my-contracts">
        {(ctorsError || instancesError) && (
          <Alert>
            {ctorsError && <p>{ctorsError}</p>}
            {instancesError && <p>{instancesError}</p>}
          </Alert>
        )}

        <section className="my-contracts">
          <ul className="my-contracts__list">
            {filterInstances.length > 0 &&
              filterInstances.map((inst, j) => (
                <li key={j} className="my-contracts__item">
                  {console.log(inst)}
                  <Link to={`/instance/${inst.instance_id}`} className="my-contracts__link screen">
                    <article className="my-contract">
                      <section className="contract-info  contract-info--contract-card">
                        <div className="contract-info__wrapper">
                          <div className="contract-info__logo">
                            <img
                              className="contract-info__img"
                              src={
                                inst.ctor.image
                                  ? require(`../common/ctor-card/img/${inst.ctor.image}`)
                                  : `https://lorempixel.com/640/400/?${Math.random()}`
                              }
                              alt="Contract"
                            />
                          </div>
                          <p className="contract-info__info">
                            <span className="contract-info__name">{inst.instance_title}</span>
                            <span className="contract-info__description">
                              {inst.ctor.ctor_name}
                            </span>
                          </p>
                        </div>
                        {inst.funcResults && (
                          <ul className="function-list">
                            {inst.dashboard_functions.map((func, k) => {
                              const funcObj = find(inst.functions, { name: func });

                              if (!funcObj) return null;

                              return (
                                <li key={k} className="function-item">
                                  <p>{funcObj.title}</p>
                                  <p>{inst.funcResults[func]}</p>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </section>
                    </article>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default Dashboard;
