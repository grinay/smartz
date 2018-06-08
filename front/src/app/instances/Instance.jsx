import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { find } from 'lodash';

import * as api from '../../api/apiRequests';
import { processControlForm, processResult, makeEtherscanLink } from '../../helpers/eth';
import FunctionCard from './FunctionCard/FunctionCardContainer';
import Alert from '../common/Alert';
import Transaction from './Transaction/Transaction';
import { sheme } from './sheme';

import FunctionButton from './function-button/FunctionButton';

import './Instance.less';
import renderInstanceWidget from '../common/contract-instance-widgets/ContractInstanceWidgets';
import { blockchains } from './../../constants/constants';

class Instance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateCycleActive: false,
      funcActive: null
    };
  }

  componentWillMount() {
    api.getInstance(this.props.match.params.id);
  }

  componentDidMount() {
    window.Intercom('update');
  }

  componentDidUpdate() {
    // TODO: refactor this shit
    const { instance, metamaskStatus } = this.props;

    if (instance && instance.blockchain === blockchains.ethereum && !this.state.updateCycleActive) {
      if (metamaskStatus === 'noMetamask' || metamaskStatus === 'unlockMetamask') {
        return null;
      }
      this.getConstants();
    }
  }

  getConstants() {
    const { instance, viewFuncResult } = this.props;
    if (!instance) {
      return;
    }

    //TODO:delete mock
    instance.functions = sheme;

    instance.functions.forEach((func) => {
      if (func.constant && func.inputs.minItems === 0) {
        processControlForm(instance.abi, func, [], instance.address, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            viewFuncResult(instance.instance_id, func.name, processResult(result));
          }
        });
      }
    });
  }

  getFunctionsByType(instance, type) {
    const result = [];
    if (!instance) {
      return result;
    }

    //TODO:delete mock
    instance.functions = sheme;

    instance.functions &&
      instance.functions.forEach((func) => {
        switch (type) {
          case 'view':
            if (func.constant && func.inputs.minItems === 0) result.push(func);
            break;
          case 'ask':
            if (func.constant && func.inputs.minItems !== 0) result.push(func);
            break;
          case 'write':
            if (!func.constant) result.push(func);
            break;
          default:
        }
      });
    return result;
  }

  render() {
    const { metamaskStatus, instance, instanceError } = this.props;

    if (
      instance &&
      instance.blockchain === blockchains.ethereum &&
      metamaskStatus !== 'okMetamask'
    ) {
      return (
        <div className="container">
          <Alert standardAlert={metamaskStatus} />
        </div>
      );
    }

    // TODO:delete mock
    if (instance && instance.functions) {
      instance.functions = sheme;
    }

    const viewFunctions = this.getFunctionsByType(instance, 'view');
    let viewFunctionsElements =
      viewFunctions.length > 0
        ? viewFunctions.map((func, i) => (
            <p key={i} className="contract-functions__description">
              <b>{func.title}</b> — {func.description}
            </p>
          ))
        : [];

    const askFunctions = this.getFunctionsByType(instance, 'ask');
    let askFunctionsElements =
      askFunctions.length > 0
        ? askFunctions.map((func, i) => (
            <FunctionButton
              key={i}
              title={func.title}
              onClick={() => this.setState({ funcActive: func })}
            />
          ))
        : [];

    const writeFunctions = this.getFunctionsByType(instance, 'write');
    let writeFunctionsElements =
      writeFunctions.length > 0
        ? writeFunctions.map((func, i) => (
            <FunctionButton
              key={i}
              title={func.title || 'Send ether'}
              onClick={() => this.setState({ funcActive: func })}
            />
          ))
        : [];

    return (
      <main className="page-main  page-main--contracts  page-main--running-contract">
        <Link to="/dashboard" className="page-main__link">
          <svg className="page-main__icon" width="58" height="10" viewBox="0 0 58 10">
            <use href="#back" />
          </svg>
          Back
        </Link>

        {instance && (
          <aside>
            <section className="form-title flex">
              <img
                className="form-title__img"
                src={
                  instance.constructor.image
                    ? require(`../common/ctor-card/img/${instance.constructor.image}`)
                    : `https://lorempixel.com/640/400/?${Math.random()}`
                }
                alt={`${instance.constructor.name} contract`}
              />
              <div className={'form-title__title'}>
                <h2>{instance.instance_title}</h2>
                <p className="flex-v">
                  <span>Contract: </span>
                  {instance.address && (
                    <span className="contract-controls__section-header  contract-controls__wallet-key">
                      {makeEtherscanLink(instance.address, instance.network_id, true)}
                    </span>
                  )}
                </p>
              </div>
            </section>

            {instance.transactions && (
              <section className="transactions">
                <p className="transactions__header">Transactions:</p>
                {instance.transactions
                  .reverse()
                  .map((transaction, i) => (
                    <Transaction
                      transaction={transaction}
                      contractInstance={instance}
                      netId={instance.network_id}
                      key={i}
                    />
                  ))}
              </section>
            )}

            <section className="contract-functions">
              <h2 className="contract-functions__header">View functions</h2>
              <p className="contract-functions__description">
                This functions just provide an information about contract states and values. Results
                of this fuctions are alrewady shown left.
              </p>
              {viewFunctionsElements}
            </section>
          </aside>
        )}

        {instance && (
          <section className="block  contract-controls">
            <div className="block__wrapper">
              <div className="contract-controls__wrapper  contract-controls__wrapper--margin">
                <table className="table  table--big">
                  <tbody className="table__tbody">
                    {instance.functions &&
                      instance.functions.map((func, i) => {
                        if (func.constant && func.inputs.minItems === 0) {
                          return (
                            <tr key={i} className="table__tr">
                              <td className="table__label">{func.title}</td>

                              <td className="table__data">
                                <div className="table__inner">
                                  <span>{renderInstanceWidget(func, instance)}</span>
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

              {/* ask functions block */}
              {askFunctionsElements.length > 0 && (
                <div className="contract-controls__wrapper">
                  <span className="contract-controls__section-header">Ask functions</span>

                  <ul className="contract-controls__list">{askFunctionsElements}</ul>
                </div>
              )}

              {/* write functions block */}
              {writeFunctionsElements.length > 0 && (
                <div className="contract-controls__wrapper">
                  <span className="contract-controls__section-header">Write functions</span>

                  <ul className="contract-controls__list">
                    {writeFunctionsElements}
                    {/* {defaultFunctionElement} */}
                  </ul>
                </div>
              )}

              {/* function block */}
              <FunctionCard
                instance={instance}
                func={this.state.funcActive || askFunctions[0] || writeFunctions[0]}
                refresh={this.getConstants.bind(this)}
              />
            </div>
          </section>
        )}
      </main>
    );
  }
}

export default Instance;
