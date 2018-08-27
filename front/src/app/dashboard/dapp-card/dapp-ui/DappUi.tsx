import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { blockchains } from '../../../../constants/constants';
import { getViewFunctionConstants } from '../../../../helpers/common';
import { IDapp } from '../../../../helpers/entities/dapp';
import store from '../../../../store/store';
import ImageDefault from '../../../common/image-default/ImageDefault';
import Loader from '../../../common/loader/Loader';
import TypeDisplay from '../../../common/type-display/TypeDisplay';
import { viewFuncResult } from '../../../dapps/DappActions';
import Title from '../../../ui-kit/title/Title';

import './DappUi.less';


interface IDappUiProps {
  dapp: IDapp;
  className?: string;
}

export default class DappUi extends React.PureComponent<IDappUiProps, {}> {
  public componentDidMount() {
    const { dapp } = this.props;

    getViewFunctionConstants(dapp.abi, dapp.address, dapp.functions, dapp.dashboard_functions)
      .then((result) => store.dispatch(viewFuncResult(dapp.id, result)))
      .catch((error) => console.error(error));
  }

  public render() {
    const { dapp, className = null } = this.props;

    let viewFuncContent;
    if (dapp.blockchain === blockchains.ethereum) {

      viewFuncContent = (
        <ul className="dapp-card__function-list">
          {dapp.dashboard_functions.map((dFuncName, i) => {
            const funcObj = dapp.functions.find((func) => func.name === dFuncName);

            if (!funcObj) {
              return null;
            }

            return (
              <li key={i} className="dapp-card__function-item">
                <p>{funcObj.title}</p>
                {'funcResults' in dapp
                  ? <p><TypeDisplay
                    fnDescription={dapp.functions.find(
                      (func) => func.name === dFuncName)}
                    fnResult={dapp.funcResults[dFuncName]}
                  /></p>
                  : <Loader size={20} />}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <Link to={`/dapp/${dapp.id}`} className={classNames('dapp-card', className)}>
        <article className="">
          <div className="dapp-card__wrapper">
            <div className="dapp-card__logo">
              <ImageDefault
                src={dapp.constructor != null ? dapp.constructor.image : ''}
                name={dapp.title}
              />
            </div>
            <div className="dapp-card__info">
              <Title type="small">{dapp.title}</Title>
              <span className="dapp-card__description">
                {dapp.constructor != null ? dapp.constructor.name : '-'}
              </span>
            </div>
          </div>
          {viewFuncContent}
        </article>
      </Link>
    );
  }
}
