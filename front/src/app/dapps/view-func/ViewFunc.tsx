import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { blockchains } from '../../../constants/constants';
import { getFunctionsByType } from '../../../helpers/common';
import renderDappWidget from '../../common/dapp-widgets/DappWidgets';
import AddressBar from './address-bar/AddressBar';

import './ViewFunc.less';


interface IViewFuncProps {
  dapp: any;
}

interface IViewFuncState { }

export default class ViewFunc extends React.PureComponent<IViewFuncProps, IViewFuncState> {
  public render() {
    const { dapp } = this.props;

    let viewFuncElement: JSX.Element;
    if (dapp.blockchain === blockchains.ethereum) {
      const viewFunctions: any[] = getFunctionsByType(dapp.functions, 'view');

      viewFuncElement = (
        <div className="card-body">
          {/* <div className="card-header">
                <div className="card-intro">
                  <p className="card-label">
                    Winning variant name
                  </p>
                  <p className="card-title">Laura González</p>
                </div>
                <div className="card-intro">
                  <p className="card-label">
                    Winning variant votes count
                  </p>
                  <p className="card-title">9 256 100</p>
                </div>
              </div> */}
          <ul className="card-table">
            {viewFunctions.map((func, i) => {
              return (
                <li key={i} className="card-row">
                  <p className="card-label">
                    {func.title}
                    <InlineSVG
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
            <AddressBar dapp={dapp} />

            {viewFuncElement}
          </div>
        </section>
      </div>
    );
  }
}
