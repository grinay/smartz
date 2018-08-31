import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { blockchains } from '../../../constants/constants';
import { getViewFunctionConstants } from '../../../helpers/common';
import { IContractUi } from '../../../helpers/entities/contract-ui';
import { IDapp } from '../../../helpers/entities/dapp';
import store from '../../../store/store';
import ImageDefault from '../../common/image-default/ImageDefault';
import Loader from '../../common/loader/Loader';
import TypeDisplay from '../../common/type-display/TypeDisplay';
import { viewFuncResult } from '../../dapps/DappActions';
import Title from '../../ui-kit/title/Title';

import './DappCard.less';


interface IDappCardProps {
    dataCard: IDapp | IContractUi;
    type: 'dapp' | 'contractUi';
    className?: string;
}

interface IDappCardState {
    data: any;
}

export default class DappCard extends React.PureComponent<IDappCardProps, IDappCardState> {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };

        this.updateConstants = this.updateConstants.bind(this);
        this.prepareData = this.prepareData.bind(this);
    }

    private updateConstants(data: any, type: IDappCardProps['type']) {
        const { abi, address, functions, dashboardFunctions } = data;

        getViewFunctionConstants(abi, address, functions, dashboardFunctions)
            .then((result) => {
                // console.log(result);
                if (type === 'dapp') {
                    store.dispatch(viewFuncResult(data.id, result));
                } else {
                    this.setState({
                        data: {
                            ...data,
                            funcResult: result,
                        },
                    });
                }
            })
            .catch((error) => console.error(error));
    }

    // dapp and contactUi to one interface
    private prepareData(dataCard: IContractUi | IDapp, type: IDappCardProps['type']): any {
        const data = {
            blockchain: dataCard.blockchain,
            dashboardFunctions: dataCard.dashboard_functions,
            address: dataCard.address,
            id: dataCard.id,
            abi: dataCard.abi,
        };

        if (type === 'dapp') {
            data['functions'] = dataCard.functions;
            data['funcResult'] = 'funcResults' in dataCard ? dataCard.funcResults : null;
            data['image'] = dataCard.constructor != null ? (dataCard as IDapp).constructor.image : '';
            data['title'] = (dataCard as IDapp).title;
            data['description'] = dataCard.constructor != null ? dataCard.constructor.name : '-';
        } else {
            data['functions'] = (dataCard as IContractUi).function_specs;
            data['funcResult'] = null;
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
        if (nextProps.dataCard.id !== this.props.dataCard.id) {
            this.updateConstants(nextProps.dataCard, nextProps.type);

            // clear old value
            this.setState((prevState) => ({
                data: {
                    ...prevState.data,
                    funcResult: null,
                },
            }));
        } else {
            this.setState({ data: this.prepareData(nextProps.dataCard, nextProps.type) });
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
                                <p>{funcObj.title}</p>
                                {data.funcResult != null
                                    ? <p><TypeDisplay
                                        fnDescription={data.functions.find((func) => func.name === dFuncName)}
                                        fnResult={data.funcResult[dFuncName]}
                                    /></p>
                                    : <Loader size={20} />}
                            </li>
                        );
                    })}
                </ul>
            );
        }

        const content = (
            <article className="">
                <div className="dapp-card__wrapper">
                    <div className="dapp-card__logo">
                        <ImageDefault src={data.image} name={data.name} />
                    </div>
                    <div className="dapp-card__info">
                        <Title type="small">{data.title}</Title>
                        <span className="dapp-card__description">
                            {data.description}
                        </span>
                    </div>
                </div>
                {viewFuncContent}
            </article>
        );

        if (type === 'dapp') {
            return (
                <Link to={`/dapp/${data.id}`} className={classNames('dapp-card', className)}>
                    {content}
                </Link>
            );
        } else {
            return { content };
        }
    }
}
