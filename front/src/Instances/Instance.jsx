import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {find} from 'lodash';

import api from 'helpers/api';
import {processControlForm,
        processResult,
        getNetworkName,
        getNetworkEtherscanAddress} from 'helpers/eth';
import FunctionCard from './FunctionCard/FunctionCardContainer';
import Alert from 'common/Alert';
import Transaction from './Transaction/Transaction';

import './Instance.css';

class Instance extends Component {
  constructor(props) {
    super(props);

    const {instance} = this.props;
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
    const {instance, viewFuncResult} = this.props;

    instance.functions.forEach(func => {
      if (func.constant && func.inputs.minItems === 0) {
        processControlForm(instance.abi, func, [], instance.address, (error, result) => {
          if(error) {
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
    const {metamaskStatus} = this.props;
    if (metamaskStatus) return (
      <div className="container">
        <Alert standardAlert={metamaskStatus} />
      </div>
    );

    const {instance, ctor} = this.props;
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
            <section className="contract-info" style={{marginBottom: '20px'}}>
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

            <section className="contract-functions">
              <h2 className="contract-functions__header">
                Ask functions
              </h2>
              <p className="contract-functions__description">
                This functions also provide an information about contract states and values, but related to some address or other conditions which you should provide. No any changes in blockchain are done by this functions.
              </p>
              {this.getFunctionsByType(instance, 'ask').map((func, i) => (
                <p key={i} className="contract-functions__description">
                  <b>{func.title}</b> — {func.description}
                </p>
              ))}
            </section>

            <section className="contract-functions">
              <h2 className="contract-functions__header">
                Write functions
              </h2>
              <p className="contract-functions__description">
                This functions are changing states and values of smart contract, placing new information to the blockchain. All this functions consume some amount of gas. Be careful, their actions can not be undone.
              </p>
              {this.getFunctionsByType(instance, 'write').map((func, i) => (
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
                  <a
                    href={getNetworkEtherscanAddress(instance.network_id.toString()) + `/address/${instance.address}`}
                    style={{textTransform: 'uppercase'}}
                    target="_blank"
                  >
                    {instance.address}
                  </a> ({getNetworkName(instance.network_id.toString())})
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
                                <span id="contract-stage">
                                  {(instance.funcResults && instance.funcResults[func.name] !== undefined)
                                    ? instance.funcResults[func.name].toString()
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
                        onClick={() => this.setState({funcActive: func})}
                      >
                        {func.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

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
                        onClick={() => this.setState({funcActive: func})}
                      >
                        {func.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <FunctionCard
                instance={instance}
                func={this.state.funcActive
                  || this.getFunctionsByType(instance, 'ask')[0]
                  || this.getFunctionsByType(instance, 'write')[0]
                }
                refresh={this.getConstants.bind(this)}
              />

              {instance.transactions &&
                <div className="transactions">
                  Transactions:
                  {instance.transactions.reverse().map((transaction, i) => (
                    <Transaction transaction={transaction} key={i}/>
                  ))}
                </div>
              }

            </div>
          </section>
        }
      </main>
    );
  }
}

export default Instance;
