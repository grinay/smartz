import React, { Component } from 'react';
import { find } from 'lodash';
import { Link } from 'react-router-dom';

import * as api from '../../api/apiRequests';
import { processControlForm, processResult, getNetworkId } from '../../helpers/eth';
import Alert from '../common/Alert';

import './Dashboard.less';
import { blockchains } from './../../constants/constants';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateCycleActive: false,
      filterDapps: [],
      networkId: null
    };
  }

  componentWillMount() {
    const { metamaskStatus } = this.props;

    api.getConstructors();
    api.getDapps();

    if (metamaskStatus !== 'noMetamask') {
      getNetworkId((networkId) => {
        this.setState({ networkId });
      });
    }
  }

  componentDidMount() {
    window.Intercom('update');
  }

  componentWillReceiveProps(nextProps) {
    const { metamaskStatus, dapps } = this.props;
    let filterDapps = [];

    // const isEthContractExist =
    //   typeof find(dapps, { blockchain: blockchains.ethereum }) !== 'undefined';

    // if (isEthContractExist && metamaskStatus !== 'noMetamask') {
    //     if (inst.network_id.toString() === networkId) {
    //       console.log(filterDapps);
    //       filterDapps.push(inst);
    //     }
    // }

    for (let i = 0; i < dapps.length; i++) {
      let inst = dapps[i];
      switch (inst.blockchain) {
        case blockchains.ethereum:
          if (metamaskStatus !== 'noMetamask') {
            if (inst.network_id.toString() === this.state.networkId) {
              filterDapps.push(inst);
            }
          }
          break;
        case blockchains.eos:
          filterDapps.push(inst);
          break;
        default:
          break;
      }
    }
    // console.log(filterDapps);
    this.setState({
      filterDapps
    });
  }

  componentDidUpdate() {
    const { ctors, dapps, metamaskStatus } = this.props;
    const { filterDapps } = this.state;

    if (
      filterDapps.length &&
      ctors.length &&
      !this.state.updateCycleActive &&
      metamaskStatus !== 'noMetamask'
    ) {
      this.updateCycle();
    }
  }

  updateCycle() {
    const { dapps, viewFuncResult } = this.props;

    dapps.forEach((inst, j) => {
      const { instance_id, abi, address, dashboard_functions, functions, blockchain } = inst;

      if (blockchain === blockchains.ethereum && dashboard_functions) {
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
    const { filterDapps } = this.state;

    if (
      find(filterDapps, { blockchain: blockchains.ethereum }) &&
      metamaskStatus === 'noMetamask'
    ) {
      return (
        <p style={{ textAlign: 'center', margin: '100px', fontSize: '20px' }}>
          Fellow, you need a Metamask plugin!
        </p>
      );
    }

    const { ctors, ctorsError, dapps, dappsError } = this.props;

    filterDapps.forEach((inst) => {
      inst.ctor = find(ctors, { ctor_id: inst.ctor_id }) || {};
    });

    return (
      <main className="page-main  page-main--my-contracts">
        {(ctorsError || dappsError) && (
          <Alert>
            {ctorsError && <p>{ctorsError}</p>}
            {dappsError && <p>{dappsError}</p>}
          </Alert>
        )}

        <section className="my-contracts">
          <ul className="my-contracts__list">
            {filterDapps.length > 0 &&
              filterDapps.map((inst, j) => (
                <li key={j} className="my-contracts__item">
                  <Link to={`/dapp/${inst.instance_id}`} className="my-contracts__link screen">
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
                            <span className="contract-info__name">{inst.dapp_title}</span>
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
