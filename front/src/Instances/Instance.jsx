import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { find } from 'lodash';

import api from '../helpers/api';
import {
  processControlForm,
  processResult,
  makeEtherscanLink
} from '../helpers/eth';
import FunctionCard from './FunctionCard/FunctionCardContainer';
import Alert from '../common/Alert';
import Transaction from './Transaction/Transaction';

import './Instance.css';

class Instance extends Component {
  constructor(props) {
    super(props);

    const { instance } = this.props;
    const funcActive = find(instance.functions, f => (
      f.inputs.minItems !== 0 || !f.constant
    ));

    this.state = {
      updateCycleActive: false,
      funcActive
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
    api(auth).get(`/instances/${this.props.match.params.id}`)
      .then(response => fetchInstancesSuccess([response.data]))
      .catch(error => fetchInstancesFailure(error));
  }

  componentDidUpdate() {
    const { instance, ctor } = this.props;
    if (instance && ctor && !this.state.updateCycleActive) {
      this.getConstants();
    }
    /*
    const {instance, ctor} = this.props;

    if (instance && ctor && !this.state.updateCycleActive) {
      this.setState({
        updateCycleActive: true
      });
      this.getConstants();
      setInterval(this.getConstants.bind(this), 60000);
    }
    */
  }

  getConstants() {
    const { instance, viewFuncResult } = this.props;

    instance.functions.forEach(func => {
      if (func.constant && func.inputs.minItems === 0) {
        processControlForm(instance.abi, func, [], instance.address, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            viewFuncResult(
              instance.instance_id,
              func.name,
              processResult(result)
            );
          }
        });
      }
    });
  }

  getFunctionsByType(instance, type) {
    const result = [];
    instance.functions && instance.functions.forEach(func => {
      switch (type) {
        case 'view':
          if (func.constant && func.inputs.minItems === 0)
            result.push(func);
          break;
        case 'ask':
          if (func.constant && func.inputs.minItems !== 0)
            result.push(func);
          break;
        case 'write':
          if (!func.constant)
            result.push(func);
          break;
        default:
      }
    });
    return result;
  }

  render() {
    const { metamaskStatus } = this.props;
    if (metamaskStatus) return (
      <div className="container">
        <Alert standardAlert={metamaskStatus} />
      </div>
    );

    const { instance, ctor } = this.props;
    return (
      <main className="page-main  page-main--contracts  page-main--running-contract">
        <Link to="/dashboard" className="page-main__link">
          <svg className="page-main__icon" width="58" height="10" viewBox="0 0 58 10">
            <use href="#back"></use>
          </svg>
          Back
        </Link>

        {ctor && instance &&
          <aside className="block-half">
            <section className="contract-info" style={{ marginBottom: '20px' }}>
              <div className="contract-info__logo">
                <img
                  className="contract-info__img"
                  src={ctor.image
                    ? require(`../Ctors/i/${ctor.image}`)
                    : `https://lorempixel.com/640/400/?${Math.random()}`
                  }
                  width="644" height="404"
                  alt={`${ctor.ctor_name} contract`} />
              </div>

              <div className="contract-info__wrapper">
                <p className="contract-info__info  contract-info__info--column">
                  <span className="contract-info__name">
                    {ctor.ctor_name}
                  </span>
                </p>

                <p className="contract-info__description">
                  {ctor.ctor_descr}
                </p>
              </div>
            </section>

            {instance.transactions &&
              <section className="transactions">
                <p className="transactions__header">Transactions:</p>
                {instance.transactions.reverse().map((transaction, i) => (
                  <Transaction
                    transaction={transaction}
                    netId={instance.network_id}
                    key={i}
                  />
                ))}
              </section>
            }

            <section className="contract-functions">
              <h2 className="contract-functions__header">
                View functions
              </h2>
              <p className="contract-functions__description">
                This functions just provide an information about contract states and values. Results of this fuctions are alrewady shown left.
              </p>
              {this.getFunctionsByType(instance, 'view').map((func, i) => (
                <p key={i} className="contract-functions__description">
                  <b>{func.title}</b> — {func.description}
                </p>
              ))}
            </section>
          </aside>
        }

        {ctor && instance &&
          <section className="block  contract-controls">
            <h2 className="block__header">
              {instance.instance_title}
            </h2>

            <div className="block__wrapper">
              {instance.address &&

                <span className="contract-controls__section-header  contract-controls__wallet-key">
                  {makeEtherscanLink(instance.address, instance.network_id, true)}
                </span>
              }

              <div className="contract-controls__wrapper  contract-controls__wrapper--margin">
                <table className="table  table--big">
                  <tbody className="table__tbody">
                    {instance.functions && instance.functions.map((func, i) => {
                      if (func.constant && func.inputs.minItems === 0) {
                        return (
                          <tr key={i} className="table__tr">
                            <td className="table__label">
                              {func.title}
                            </td>

                            <td className="table__data">
                              <div className="table__inner">
                                <span>
                                  {(instance.funcResults && instance.funcResults[func.name] !== undefined)
                                    ? makeEtherscanLink(instance.funcResults[func.name], instance.network_id)
                                    : ''
                                  }
                                </span>
                              </div>
                            </td>
                          </tr>
                        );

                      } else {
                        return null;
                      }
                    })}
                  </tbody>
                </table>
              </div>

              {this.getFunctionsByType(instance, 'ask').length > 0 &&
                <div className="contract-controls__wrapper">
                  <span className="contract-controls__section-header">
                    Ask functions
                  </span>

                  <ul className="contract-controls__list">
                    {this.getFunctionsByType(instance, 'ask').map((func, i) => (
                      <li key={i} className="contract-controls__item">
                        <button
                          className="btn-contract contract-controls__button"
                          type="button"
                          onClick={() => this.setState({ funcActive: func })}
                        >
                          {func.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              }

              {this.getFunctionsByType(instance, 'write').length > 0 &&
                <div className="contract-controls__wrapper">
                  <span className="contract-controls__section-header">
                    Write functions
                  </span>

                  <ul className="contract-controls__list">
                    {this.getFunctionsByType(instance, 'write').map((func, i) => (
                      <li key={i} className="contract-controls__item">
                        <button
                          className="btn-contract contract-controls__button"
                          type="button"
                          onClick={() => this.setState({ funcActive: func })}
                        >
                          {func.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              }

              <FunctionCard
                instance={instance}
                func={this.state.funcActive
                  || this.getFunctionsByType(instance, 'ask')[0]
                  || this.getFunctionsByType(instance, 'write')[0]
                }
                refresh={this.getConstants.bind(this)}
              />
            </div>
          </section>
        }
      </main>
    );
  }
}

export default Instance;
