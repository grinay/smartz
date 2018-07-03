import * as React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../../api/apiRequests';
import { blockchains } from '../../constants/constants';
import { getFuncType } from '../../helpers/common';
import { processControlForm, processResult } from '../../helpers/eth';
import Alert from '../common/Alert';
import renderDappWidget from '../common/contract-dapp-widgets/ContractDappWidgets';
import DappHeader from './dapp-header/DappHeader';
import FunctionButton from './function-button/FunctionButton';
import FunctionCard from './FunctionCard/FunctionCardContainer';
import Transaction from './Transaction/Transaction';

import './Dapp.less';


declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    Intercom: any;
  }
}

interface IDappProps {
  match: any;
  dapp: any;
  metamaskStatus: any;
  viewFuncResult: any;
}

interface IDappState {
  updateCycleActive: any;
  funcActive: any;
}

class Dapp extends React.Component<IDappProps, IDappState> {
  constructor(props) {
    super(props);

    this.state = {
      updateCycleActive: false,
      funcActive: null,
    };

    this.getConstants = this.getConstants.bind(this);
    this.getFuncButtonElements = this.getFuncButtonElements.bind(this);
    this.getFuncDescElements = this.getFuncDescElements.bind(this);
    this.getFunctionsByType = this.getFunctionsByType.bind(this);
  }

  public componentWillMount() {
    api.getDapp(this.props.match.params.id);
  }

  public componentDidMount() {
    window.Intercom('update');
  }

  public componentDidUpdate() {
    // TODO: refactor this shit
    const { dapp, metamaskStatus } = this.props;

    if (dapp && dapp.blockchain === blockchains.ethereum && !this.state.updateCycleActive) {
      if (metamaskStatus === 'noMetamask' || metamaskStatus === 'unlockMetamask') {
        return null;
      }
      this.getConstants();
    }
  }

  public getConstants() {
    const { dapp, viewFuncResult } = this.props;
    if (!dapp) {
      return;
    }

    dapp.functions.forEach((func) => {
      if (func.constant && func.inputs.minItems === 0) {
        processControlForm(dapp.abi, func, [], dapp.address, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            viewFuncResult(dapp.id, func.name, processResult(result));
          }
        });
      }
    });
  }

  public getFunctionsByType(functions: any, type: any): any {
    const result = [];

    if (Array.isArray(functions) && functions.length > 0) {
      functions.forEach((func) => {
        if (type === getFuncType(func)) {
          result.push(func);
        }
      });
    }

    return result;
  }

  public getFuncDescElements(functions: any): any {
    const result: any = [];

    if (Array.isArray(functions) && functions.length > 0) {
      for (let i = 0; i < functions.length; i++) {
        const func = functions[i];

        result.push(
          <p key={i} className="contract-functions__description">
            <b>{func.title}</b> — {func.description}
          </p>,
        );
      }
    }

    return result;
  }

  public getFuncButtonElements(functions: any): any {
    const result = [];

    if (Array.isArray(functions) && functions.length > 0) {
      for (let i = 0; i < functions.length; i++) {
        const func = functions[i];

        result.push(
          <FunctionButton
            key={i}
            title={func.title}
            onClick={() => this.setState({ funcActive: func })}
          />,
        );
      }
    }

    return result;
  }

  public render() {
    const { metamaskStatus, dapp } = this.props;

    if (!dapp) {
      return null;
    }

    if (dapp.blockchain === blockchains.ethereum && metamaskStatus !== 'okMetamask') {
      return (
        <div className="container">
          <Alert standardAlert={metamaskStatus} />
        </div>
      );
    }

    const viewFunctions = this.getFunctionsByType(dapp.functions, 'view');
    const viewFunctionDescription = this.getFuncDescElements(viewFunctions);

    const askFunctions = this.getFunctionsByType(dapp.functions, 'ask');
    const askFunctionDescription = this.getFuncDescElements(askFunctions);
    const askFunctionButtons = this.getFuncButtonElements(askFunctions);

    const writeFunctions = this.getFunctionsByType(dapp.functions, 'write');
    const writeFunctionDescription = this.getFuncDescElements(writeFunctions);
    const writeFunctionButtons = this.getFuncButtonElements(writeFunctions);

    return (
      <main className="page-main  page-main--contracts  page-main--running-contract">
        <Link to="/dashboard" className="page-main__link">
          <svg className="page-main__icon" width="58" height="10" viewBox="0 0 58 10">
            <use xlinkHref="#back" />
          </svg>
          Back
        </Link>

        <DappHeader dapp={dapp} />

        {dapp.transactions && (
          <section className="transactions">
            <p className="transactions__header">Transactions:</p>
            {dapp.transactions
              .reverse()
              .map((transaction, i) => (
                <Transaction
                  transaction={transaction}
                  contractDapp={dapp}
                  netId={dapp.network_id}
                  key={i}
                />
              ))}
          </section>
        )}

        {dapp.blockchain === blockchains.ethereum && (
          <section className="contract-functions">
            <h2 className="contract-functions__header">View functions</h2>
            <p className="contract-functions__description">
              This functions just provide an information about contract states and values. Results
              of this functions are already shown below.
            </p>
            {viewFunctionDescription}
          </section>
        )}

        <section className="contract-functions">
          <h2 className="contract-functions__header">Ask functions</h2>
          <p className="contract-functions__description" />
          {askFunctionDescription}
        </section>

        <section className="contract-functions">
          <h2 className="contract-functions__header">Write functions</h2>
          <p className="contract-functions__description" />
          {writeFunctionDescription}
        </section>
        <section className="block  contract-controls">
          <div className="block__wrapper">
            {/* view functions block */}
            {dapp.blockchain === blockchains.ethereum && (
              <div className="contract-controls__wrapper  contract-controls__wrapper--margin">
                <table className="table  table--big">
                  <tbody className="table__tbody">
                    {dapp.functions &&
                      dapp.functions.map((func, i) => {
                        if (func.constant && func.inputs.minItems === 0) {
                          return (
                            <tr key={i} className="table__tr">
                              <td className="table__label">{func.title}</td>

                              <td className="table__data">
                                <div className="table__inner">
                                  <span>{renderDappWidget(func, dapp)}</span>
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
            )}

            {/* ask functions block */}
            {askFunctionButtons.length > 0 && (
              <div className="contract-controls__wrapper">
                <span className="contract-controls__section-header">Ask functions</span>

                <ul className="contract-controls__list">{askFunctionButtons}</ul>
              </div>
            )}

            {/* write functions block */}
            {writeFunctionButtons.length > 0 && (
              <div className="contract-controls__wrapper">
                <span className="contract-controls__section-header">Write functions</span>

                <ul className="contract-controls__list">
                  {writeFunctionButtons}
                  {/* {defaultFunctionElement} */}
                </ul>
              </div>
            )}

            {/* function block */}
            <FunctionCard
              dapp={dapp}
              func={this.state.funcActive || askFunctions[0] || writeFunctions[0]}
              refresh={this.getConstants}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Dapp;
