import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactTooltip from 'react-tooltip';
import InlineSVG from 'svg-inline-react';

import { blockchains } from '../../../constants/constants';
import { getFunctionsByType, getViewFunctionConstants, sortFuncs } from '../../../helpers/common';
import { IDapp, IFunction } from '../../../helpers/entities/dapp';
import store from '../../../store/store';
import Loader from '../../common/loader/Loader';
import TypeDisplay from '../../common/type-display/TypeDisplay';
import { viewFuncResult } from '../DappActions';
import AddressBar from './address-bar/AddressBar';

import './ViewFunc.less';


interface IViewFuncProps {
  dapp: IDapp;
  profile: any;
}

interface IViewFuncState { }

export default class ViewFunc extends React.PureComponent<IViewFuncProps, IViewFuncState> {
  public componentDidMount() {
    const { dapp } = this.props;

    getViewFunctionConstants(dapp.abi, dapp.address, dapp.functions)
      .then((result) => store.dispatch(viewFuncResult(dapp.id, result)))
      .catch((error) => console.error(error));
  }

  public render() {
    const { dapp, profile } = this.props;

    let viewFuncElement: JSX.Element;
    if (dapp.blockchain === blockchains.ethereum) {
      let viewFunctions: IFunction[] = getFunctionsByType(dapp.functions, 'view');
      viewFunctions = sortFuncs(viewFunctions);

      let viewFuncStandart: any[] = [];
      let viewFuncPresentable: any[] = [];

      for (let i = 0; i < viewFunctions.length; i++) {
        const func = viewFunctions[i];

        if (dapp.dashboard_functions.indexOf(func.name) === -1) {
          viewFuncStandart.push(func);
        } else {
          viewFuncPresentable.push(func);
        }
      }

      viewFuncElement = (
        <div className={classNames('card-body', { 'bg-bottom': viewFuncStandart.length === 0 })}>
          <div className="card-header">

            {viewFuncPresentable.map((viewFunc, i) => {
              return (
                <div key={i} className="card-intro">
                  <p className="card-label">{viewFunc.title}</p>
                  <div className="card-title">{'funcResults' in dapp
                    ? <TypeDisplay
                      fnDescription={dapp.functions.find(
                        (func) => func.name === viewFunc.name)}
                      fnResult={dapp.funcResults[viewFunc.name]}
                    />
                    : <Loader size={20} />}</div>
                </div>
              );
            })}

          </div>
          <ul className="card-table">

            {viewFuncStandart.map((viewFunc, i) => {
              return (
                <li key={i} className="card-row">
                  <p className="card-label standart">
                    <span className="card-text">{viewFunc.title}</span>
                    <InlineSVG
                      data-tip={viewFunc.description}
                      className="question-icon"
                      src={require('../../../assets/img/common/question-icon.svg')}
                    />
                  </p>
                  <div className="card-data">
                    {'funcResults' in dapp
                      ? <TypeDisplay
                        fnDescription={dapp.functions.find(
                          (func) => func.name === viewFunc.name)}
                        fnResult={dapp.funcResults[viewFunc.name]}
                      />
                      : <Loader size={20} />}
                  </div>
                </li>
              );
            })}

          </ul>
        </div>
      );
    }

    return (
      <div className="view-func">
        <section className="dapp-content">
          <div className="card">
            <AddressBar dapp={dapp} profile={profile} />
            {viewFuncElement}
            <ReactTooltip place={'bottom'} />
          </div>
        </section>
      </div>
    );
  }
}
