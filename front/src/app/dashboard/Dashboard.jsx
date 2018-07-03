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
      filteredDapps: [],
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
    let filteredDapps = [];

    for (let i = 0; i < dapps.length; i++) {
      let dapp = dapps[i];
      switch (dapp.blockchain) {
        case blockchains.ethereum:
          if (metamaskStatus !== 'noMetamask') {
            if (dapp.network_id.toString() === this.state.networkId) {
              filteredDapps.push(dapp);
            }
          }
          break;
        case blockchains.eos:
          filteredDapps.push(dapp);
          break;
        default:
          break;
      }
    }

    this.setState({
      filteredDapps
    });
  }

  componentDidUpdate() {
    const { ctors, metamaskStatus } = this.props;
    const { filteredDapps } = this.state;

    if (
      filteredDapps.length &&
      ctors.length &&
      !this.state.updateCycleActive &&
      metamaskStatus !== 'noMetamask'
    ) {
      this.updateCycle();
    }
  }

  updateCycle() {
    const { dapps, viewFuncResult } = this.props;

    dapps.forEach((dapp, j) => {
      const { id, abi, address, dashboard_functions, functions, blockchain } = dapp;

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
              viewFuncResult(id, dFunc, processResult(result));
            }
          });
        });
      }
    });
  }

  render() {
    const { metamaskStatus } = this.props;
    const { filteredDapps } = this.state;

    if (
      find(filteredDapps, { blockchain: blockchains.ethereum }) &&
      metamaskStatus === 'noMetamask'
    ) {
      return (
        <p style={{ textAlign: 'center', margin: '100px', fontSize: '20px' }}>
          Fellow, you need a Metamask plugin!
        </p>
      );
    }

    const { ctors, ctorsError, dapps, dappsError } = this.props;

    filteredDapps.forEach((dapp) => {
      dapp.ctor = find(ctors, { ctor_id: dapp.ctor_id }) || {};
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
            {filteredDapps.length > 0 &&
              filteredDapps.map((dapp, j) => (
                <li key={j} className="my-contracts__item">
                  <Link to={`/dapp/${dapp.id}`} className="my-contracts__link screen">
                    <article className="my-contract">
                      <section className="contract-info  contract-info--contract-card">
                        <div className="contract-info__wrapper">
                          <div className="contract-info__logo">
                            <img
                              className="contract-info__img"
                              src={
                                dapp.ctor.image
                                  ? require(`../common/ctor-card/img/${dapp.ctor.image}`)
                                  : `https://lorempixel.com/640/400/?${Math.random()}`
                              }
                              alt="Contract"
                            />
                          </div>
                          <p className="contract-info__info">
                            <span className="contract-info__name">{dapp.title}</span>
                            <span className="contract-info__description">
                              {dapp.ctor.ctor_name}
                            </span>
                          </p>
                        </div>
                        {dapp.funcResults && (
                          <ul className="function-list">
                            {dapp.dashboard_functions.map((func, k) => {
                              const funcObj = find(dapp.functions, { name: func });

                              if (!funcObj) return null;

                              return (
                                <li key={k} className="function-item">
                                  <p>{funcObj.title}</p>
                                  <p>{dapp.funcResults[func]}</p>
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
