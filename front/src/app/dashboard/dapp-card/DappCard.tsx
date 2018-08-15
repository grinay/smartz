import * as React from 'react';
import { Link } from 'react-router-dom';

import { blockchains } from '../../../constants/constants';
import { getViewFunctionConstants } from '../../../helpers/common';
import { IDapp } from '../../../helpers/entities/dapp';
import store from '../../../store/store';
import ImageDefault from '../../common/image-default/ImageDefault';
import Loader from '../../common/loader/Loader';
import { viewFuncResult } from '../../dapps/DappActions';

import './DappCard.less';


interface IDappCardProps {
    dapp: IDapp;
}

interface IDappCardState {

}

export default class DappCard extends React.PureComponent<IDappCardProps, IDappCardState> {
    public componentDidMount() {
        const { dapp } = this.props;

        getViewFunctionConstants(dapp)
            .then((result) => store.dispatch(viewFuncResult(dapp.id, result)))
            .catch((error) => console.error(error));
    }

    public render() {
        const { dapp } = this.props;

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
                                    ? <p>{dapp.funcResults[dFuncName].toString()}</p>
                                    : <Loader size={20} />}
                            </li>
                        );
                    })}
                </ul>
            );
        }

        return (
            <Link to={`/dapp/${dapp.id}`} className="dapp-card">
                <article className="">
                    <div className="dapp-card__wrapper">
                        <div className="dapp-card__logo">
                            <ImageDefault src={dapp.ctor.image} name={dapp.title} />
                        </div>
                        <p className="dapp-card__info">
                            <span className="dapp-card__name">{dapp.title}</span>
                            <span className="dapp-card__description">
                                {dapp.ctor.name}
                            </span>
                        </p>
                    </div>
                    {viewFuncContent}
                </article>
            </Link>
        );
    }
}
