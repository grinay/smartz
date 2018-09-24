import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { blockchains } from '../../../constants/constants';
import { getFunctionsByType, getViewFunctionConstants } from '../../../helpers/common';
import { IContractUi } from '../../../helpers/entities/contract-ui';
import { IDapp, IFunction } from '../../../helpers/entities/dapp';
import { Blockchain } from '../../../helpers/entities/types';
import ImageDefault from '../../common/image-default/ImageDefault';
import Loader from '../../common/loader/Loader';
import TypeDisplay from '../../common/type-display/TypeDisplay';
import Title from '../../ui-kit/title/Title';

import './DappCard.less';


interface IDappCardProps {
  dataCard: IDapp | IContractUi;
  type: 'dapp' | 'contractUi';
  className?: string;
}

interface IDappCardState {
  data: {
    blockchain: Blockchain,
    dashboardFunctions: string[],
    address: string,
    id: string | number,
    abi: any,
    functions: IFunction[],
    funcResult: any;
    image: string;
    title: string;
    description: string;
  };
}

export default class DappCard extends React.PureComponent<IDappCardProps, IDappCardState> {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

    this.updateConstants = this.updateConstants.bind(this);
    this.prepareData = this.prepareData.bind(this);
    this.fillDashFuncs = this.fillDashFuncs.bind(this);
  }

  private updateConstants(data: IDappCardState['data'], type: IDappCardProps['type']) {
    const { abi, address, functions, dashboardFunctions, id } = data;

    getViewFunctionConstants(abi, address, functions, dashboardFunctions)
      .then((result) => {
        this.setState({
          data: {
            ...data,
            funcResult: result,
          },
        });
      })
      .catch((error) => console.error(error));
  }

  // add first 4 funcs if empty
  private fillDashFuncs(dashboardFunctions: string[], functions: IFunction[]): string[] {
    if (dashboardFunctions.length === 0) {
      const viewFuncs = getFunctionsByType(functions, 'view');

      const dashFuncs: string[] = [];
      for (let i = 0; i < viewFuncs.length; i++) {
        if (i >= 4) {
          continue;
        }

        dashFuncs.push(viewFuncs[i].name);
      }

      return dashFuncs;
    } else {
      return dashboardFunctions;
    }
  }

  // dapp and contactUi to one interface
  private prepareData(dataCard: IContractUi | IDapp, type: IDappCardProps['type']): any {
    const data = {
      blockchain: dataCard.blockchain,
      address: dataCard.address,
      id: dataCard.id,
      abi: dataCard.abi,
      funcResult: null,
    };

    if (type === 'dapp') {
      data['functions'] = dataCard.functions;
      data['dashboardFunctions'] = this.fillDashFuncs(
        dataCard.dashboard_functions, dataCard.functions);
      data['image'] = dataCard.constructor != null ? (dataCard as IDapp).constructor.image : '';
      data['title'] = (dataCard as IDapp).title;
      data['description'] = dataCard.constructor != null ? dataCard.constructor.name : '-';
    } else {
      data['functions'] = (dataCard as IContractUi).function_specs;
      data['dashboardFunctions'] = this.fillDashFuncs(
        dataCard.dashboard_functions, (dataCard as IContractUi).function_specs);
      data['image'] = (dataCard as IContractUi).image;
      data['title'] = (dataCard as IContractUi).name;
      data['description'] = (dataCard as IContractUi).description;
    }

    return data;
  }

  public componentDidMount() {
    const { data } = this.state;
    const { type } = this.props;

    this.updateConstants(data, type);
  }

  public componentWillMount() {
    const { dataCard = null, type } = this.props;

    this.setState({ data: this.prepareData(dataCard, type) });
  }

  public componentWillReceiveProps(nextProps: IDappCardProps) {
    const { type, dataCard } = nextProps;

    const preparedData = this.prepareData(dataCard, type);

    if (dataCard.id !== this.props.dataCard.id) {
      // clear old value
      this.setState((prevState: IDappCardState) => ({
        data: {
          ...prevState.data,
          funcResult: null,
        },
      }));


      this.updateConstants(preparedData, type);
    } else {
      this.setState((prevState: IDappCardState) => ({
        data: {
          ...preparedData,
          funcResult: prevState.data.funcResult,
        },
      }));
    }
  }

  public render() {
    const { className = null, type } = this.props;
    const { data } = this.state;

    let viewFuncContent;
    if (data.blockchain === blockchains.ethereum) {

      viewFuncContent = (
        <ul className="dapp-card__function-list">
          {data.dashboardFunctions.map((dFuncName, i) => {
            const funcObj = data.functions.find((func) => func.name === dFuncName);

            if (!funcObj) {
              return null;
            }

            return (
              <li key={i} className="dapp-card__function-item">
                <p className="dapp-card__function-title">{funcObj.title}</p>
                <div className="dapp-card__function-value">
                  {data.funcResult != null
                    ? <TypeDisplay
                      fnDescription={data.functions.find((func) => func.name === dFuncName)}
                      fnResult={data.funcResult[dFuncName]}
                    />
                    : <Loader size={20} />}
                </div>
              </li>
            );
          })}
        </ul>
      );
    }

    const content = (
      <div>
        <div className="dapp-card__wrapper">
          <div className="dapp-card__logo">
            <ImageDefault src={data.image} name={data.title} />
          </div>
          <div className="dapp-card__info">
            <Title type="small">{data.title}</Title>
            <span className="dapp-card__description">
              {data.description}
            </span>
          </div>
        </div>
        {viewFuncContent}
      </div>
    );

    if (type === 'dapp') {
      return (
        <Link to={`/dapp/${data.id}`} className={classNames('dapp-card', className)}>
          {content}
        </Link>
      );
    } else {
      return (
        <article className={classNames('dapp-card', className)}>
          {content}
        </article>
      );
    }
  }
}
