import React, { Component } from 'react';
import { find } from 'lodash';
import { Link } from 'react-router-dom';

import {
  processControlForm, processResult
} from '../helpers/eth';
import api from '../api/api';
import Alert from '../common/Alert';

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
    api(auth).get('/constructors')
      .then(response => fetchCtorsSuccess(response.data))
      .catch(error => fetchCtorsFailure(error));

    fetchInstancesRequest();
    api(auth).get('/instances')
      .then(response => fetchInstancesSuccess(response.data))
      .catch(error => fetchInstancesFailure(error));
  }

  componentDidUpdate() {
    const { ctors, instances } = this.props;
    if (instances.length && ctors.length && !this.state.updateCycleActive) {
      this.updateCycle();
    }
    /*
    const {ctors, instances} = this.props;

    if (instances.length && ctors.length && !this.state.updateCycleActive) {
      this.setState({
        updateCycleActive: true
      });
      this.updateCycle();
      setInterval(this.updateCycle.bind(this), 60000);
    }
    */
  }

  updateCycle() {
    const { instances, viewFuncResult } = this.props;

    instances.forEach((inst, j) => {
      const {
        instance_id, abi, address, dashboard_functions, functions
      } = inst;

      if (dashboard_functions) {
        dashboard_functions.forEach(dFunc => {
          const fSpec = find(functions, { name: dFunc });
          if (!fSpec) {
            return;
          }
          processControlForm(abi, fSpec, [], address, (error, result) => {
            if (error) {
              console.error(error);
            } else {
              viewFuncResult(
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
    const { metamaskStatus } = this.props;
    if (metamaskStatus) return (
      <div className="container">
        <Alert standardAlert={metamaskStatus} />
      </div>
    );

    const { ctors, ctorsError, instances, instancesError } = this.props;
    instances.forEach(inst => {
      inst.ctor = find(ctors, { ctor_id: inst.ctor_id }) || {};
    });

    return (
      <main className="page-main  page-main--my-contracts">
        {(ctorsError || instancesError) &&
          <Alert>
            {ctorsError && <p>{ctorsError}</p>}
            {instancesError && <p>{instancesError}</p>}
          </Alert>
        }

        <section className="my-contracts">
          <ul className="my-contracts__list">
            {instances && instances.map((inst, j) => (
              <li key={j} className="my-contracts__item">
                <Link to={`/instance/${inst.instance_id}`} className="my-contracts__link">
                  <article className="my-contract">
                    <section className="contract-info  contract-info--contract-card">
                      <div className="contract-info__wrapper">
                        <div className="contract-info__logo">
                          <img
                            className="contract-info__img"
                            src={inst.ctor.image
                              ? require(`../Ctors/i/${inst.ctor.image}`)
                              : `https://lorempixel.com/640/400/?${Math.random()}`
                            }
                            width="644" height="404"
                            alt="Contract" />
                        </div>
                        <p className="contract-info__info">
                          <span className="contract-info__name">
                            {inst.instance_title}
                          </span>
                          <span className="contract-info__description">
                            {inst.ctor.ctor_name}
                          </span>
                        </p>
                      </div>
                      {inst.funcResults &&
                        <table className="table  table--contract-card">
                          <tbody className="table__tbody">
                            {inst.dashboard_functions.map((func, k) => {
                              const funcObj = find(inst.functions, { name: func });
                              if (!funcObj) return null;
                              return (
                                <tr className="table__tr" key={k}>
                                  <td className="table__label">
                                    {funcObj.title}
                                  </td>
                                  <td className="table__data">
                                    <div className="table__inner">
                                      <span>
                                        {inst.funcResults[func]}
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      }
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
