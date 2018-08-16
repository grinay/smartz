import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { blockchains } from '../../../../constants/constants';
import { getViewFunctionConstants } from '../../../../helpers/common';
import { IContractUi } from '../../../../helpers/entities/contract-ui';
import { IDapp } from '../../../../helpers/entities/dapp';
import store from '../../../../store/store';
import renderDappWidget from '../../../common/dapp-widgets/DappWidgets';
import ImageDefault from '../../../common/image-default/ImageDefault';
import Loader from '../../../common/loader/Loader';
import { viewFuncResult } from '../../../dapps/DappActions';

import './ContractUi.less';


interface IContractUiProps {
  contract: IContractUi;
  className?: string;
}

interface IContractUiState {
  funcResult: any;
}

export default class ContractUi extends React.PureComponent<IContractUiProps, IContractUiState> {
  constructor(props) {
    super(props);

    this.state = {
      funcResult: null,
    };
  }

  public componentDidMount() {
    const { contract } = this.props;

    getViewFunctionConstants(
      contract.abi,
      contract.address,
      contract.dashboard_functions,
      contract.function_specs,
    )
      .then((result) =>,
        // store.dispatch(viewFuncResult(dapp.id, result))
      )
      .catch((error) => console.error(error));
  }

  public render() {
    const { contract, className = null } = this.props;
    const { funcResult } = this.state;

    let viewFuncContent;
    if (contract.blockchain === blockchains.ethereum) {

      viewFuncContent = (
        <ul className="dapp-card__function-list">
          {contract.dashboard_functions.map((dFuncName, i) => {
            const funcObj = contract.function_specs.find((func) => func.name === dFuncName);

            if (!funcObj) {
              return null;
            }

            return (
              <li key={i} className="dapp-card__function-item">
                <p>{funcObj.title}</p>
                {funcResult != null
                  ? <p>{renderDappWidget(contract.function_specs.find(
                    (func) => func.name === dFuncName), dapp)}</p>
                  : <Loader size={20} />}
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className={classNames('dapp-card', className)}>
        <article className="">
          <div className="dapp-card__wrapper">
            <div className="dapp-card__logo">
              <ImageDefault src={contract.image} name={contract.name} />
            </div>
            <p className="dapp-card__info">
              <span className="dapp-card__name">{contract.name}</span>
              <span className="dapp-card__description">
                {contract.description}
              </span>
            </p>
          </div>
          {viewFuncContent}
        </article>
      </div>
    );
  }
}
