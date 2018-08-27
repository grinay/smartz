import * as classNames from 'classnames';
import * as React from 'react';

import { blockchains } from '../../../../constants/constants';
import { getViewFunctionConstants } from '../../../../helpers/common';
import { IContractUi } from '../../../../helpers/entities/contract-ui';
import ImageDefault from '../../../common/image-default/ImageDefault';
import Loader from '../../../common/loader/Loader';
import TypeDisplay from '../../../common/type-display/TypeDisplay';
import Title from '../../../ui-kit/title/Title';

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

    this.updateConstants = this.updateConstants.bind(this);
  }

  private updateConstants(contract: any) {
    getViewFunctionConstants(
      contract.abi,
      contract.address,
      contract.function_specs,
      contract.dashboard_functions,
    )
      .then((result) => this.setState({ funcResult: result }))
      .catch((error) => console.error(error));
  }

  public componentDidMount() {
    const { contract } = this.props;

    this.updateConstants(contract);
  }

  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.contract.id !== this.props.contract.id) {
      this.updateConstants(nextProps.contract);

      // clear old value
      this.setState({ funcResult: null });
    }
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
                  ? <p><TypeDisplay
                    fnDescription={contract.function_specs.find(
                      (func) => func.name === dFuncName)}
                    fnResult={funcResult[dFuncName]}
                  /></p>
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
            <div className="dapp-card__info">
              <Title type="small">{contract.name}</Title>
              <span className="dapp-card__description">
                {contract.description}
              </span>
            </div>
          </div>
          {viewFuncContent}
        </article>
      </div>
    );
  }
}
