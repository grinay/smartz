import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactTooltip from 'react-tooltip';
import InlineSVG from 'svg-inline-react';

import { blockchains } from '../../../constants/constants';
import { getFunctionsByType } from '../../../helpers/common';
import renderDappWidget from '../../common/dapp-widgets/DappWidgets';
import AddressBar from './address-bar/AddressBar';

import './ViewFunc.less';


interface IViewFuncProps {
  dapp: any;
  profile: any;
}

interface IViewFuncState { }

export default class ViewFunc extends React.PureComponent<IViewFuncProps, IViewFuncState> {
  public render() {
    const { dapp, profile } = this.props;

    let viewFuncElement: JSX.Element;
    if (dapp.blockchain === blockchains.ethereum) {
      const viewFunctions: any[] = getFunctionsByType(dapp.functions, 'view');

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
        <div className={classNames('card-body', { 'bg-bottom': viewFuncStandart.length <= 3 })}>
          <div className="card-header">

            {viewFuncPresentable.map((func, i) => {
              return (
                <div key={i} className="card-intro">
                  <p className="card-label">{func.title}</p>
                  <p className="card-title">{renderDappWidget(func, dapp)}</p>
                </div>
              );
            })}

          </div>
          <ul className="card-table">

            {viewFuncStandart.map((func, i) => {
              return (
                <li key={i} className="card-row">
                  <p className="card-label">
                    <span className="card-text">{func.title}</span>
                    <InlineSVG
                      data-tip={func.description}
                      className="question-icon"
                      src={require('../../../assets/img/common/question-icon.svg')}
                    />
                  </p>
                  <p className="card-data">{renderDappWidget(func, dapp)}</p>
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
