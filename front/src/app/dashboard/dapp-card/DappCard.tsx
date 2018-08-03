import { find } from 'lodash';
import * as React from 'react';
import { Link } from 'react-router-dom';

import ImageDefault from '../../common/image-default/ImageDefault';

import './DappCard.less';


interface IDappCardProps {
    dapp: any;
}

interface IDappCardState {

}

export default class DappCard extends React.PureComponent<IDappCardProps, IDappCardState> {
    public render() {
        const { dapp } = this.props;

        return (
            <Link to={`/dapp/${dapp.id}`} className="dapp-card">
                <article className="">
                    <div className="dapp-card__wrapper">
                        <div className="dapp-card__logo">
                            {/* <img
                                className="dapp-card__img"
                                alt="Dapp"
                                src={dapp.ctor.image
                                    ? require(`../../common/ctor-card/img/${dapp.ctor.image}`)
                                    : `https://lorempixel.com/640/400/?${Math.random()}`}
                            /> */}

                            <ImageDefault src={dapp.ctor.image} />
                        </div>
                        <p className="dapp-card__info">
                            <span className="dapp-card__name">{dapp.title}</span>
                            <span className="dapp-card__description">
                                {dapp.ctor.name}
                            </span>
                        </p>
                    </div>
                    {dapp.funcResults && (
                        <ul className="dapp-card__function-list">
                            {dapp.dashboard_functions.map((func, i) => {
                                const funcObj = find(dapp.functions, { name: func });

                                if (!funcObj) {
                                    return null;
                                }

                                return (
                                    <li key={i} className="dapp-card__function-item">
                                        <p>{funcObj.title}</p>
                                        <p>{dapp.funcResults[func]}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </article>
            </Link>
        );
    }
}
