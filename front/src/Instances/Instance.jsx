import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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

  printFunctions(instance, type, cb) {
    const result = [];
    instance.functions && instance.functions.map((func, i) => {
      switch (type) {
        case 'view':
          if (func.constant && func.inputs.minItems === 0)
            result.push(cb(func));
          break;
        case 'ask':
          if (func.constant && func.inputs.minItems !== 0)
            result.push(cb(func));
          break;
        case 'write':
          if (!func.constant)
            result.push(cb(func));
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

    const {instance, ctor, instanceFuncResult} = this.props;
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
                  alt={`${ctor.ctor_name} contract image`} />
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

            <section class="contract-functions">
              <h2 class="contract-functions__header">
                View functions
              </h2>
              <p class="contract-functions__description">
                This functions just provide an information about contract states and values. Results of this fuctions are alrewady shown left.
              </p>
              {this.printFunctions(instance, 'view', (func) => (
                <p class="contract-functions__description">
                  <b>{func.title}</b> — {func.description}
                </p>
              ))}
            </section>

            <section class="contract-functions">
              <h2 class="contract-functions__header">
                Ask functions
              </h2>
              <p class="contract-functions__description">
                This functions also provide an information about contract states and values, but related to some address or other conditions which you should provide. No any changes in blockchain are done by this functions.
              </p>
              {this.printFunctions(instance, 'ask', (func) => (
                <p class="contract-functions__description">
                  <b>{func.title}</b> — {func.description}
                </p>
              ))}
            </section>

            <section class="contract-functions">
              <h2 class="contract-functions__header">
                Write functions
              </h2>
              <p class="contract-functions__description">
                This functions are changing states and values of smart contract, placing new information to the blockchain. All this functions consume some amount of gas. Be careful, their actions can not be undone.
              </p>
              {this.printFunctions(instance, 'write', (func) => (
                <p class="contract-functions__description">
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
                          <tr className="table__tr">
                            <td className="table__label">
                              {func.title}
                            </td>
                            <td className="table__data">
                              <div className="table__inner">
                                <span id="contract-stage">
                                  {instance.funcResults
                                    ? instance.funcResults[func.name]
                                    : ''
                                  }
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
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
                  {this.printFunctions(instance, 'ask', (func) => (
                    <li className="contract-controls__item">
                      <button className="btn-contract  contract-controls__button" type="button">
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
                  {this.printFunctions(instance, 'write', (func) => (
                    <li className="contract-controls__item">
                      <button className="btn-contract  contract-controls__button" type="button">
                        {func.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <FunctionCard instance={instance} func={instance.functions[8]} />

            </div>
          </section>
        }
        {/*
        <div>
          <div className="container">
            {instance &&
              <div className="instance">
                <h1>
                  {instance.instance_title}
                  {ctor &&
                    <span>
                      &emsp;(
                      <Link to={`/deploy/${ctor.ctor_id}`}>
                        {ctor.ctor_name}
                      </Link>)
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
        */}
      </main>
    );
  }
}

export default Instance;
