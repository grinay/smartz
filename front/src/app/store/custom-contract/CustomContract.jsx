import React, { PureComponent } from 'react';

import CustomContractImg from '../../../assets/img/common/contract/custom-contract.png';

import './CustomContract.less';

export default class CustomContract extends PureComponent {
    render() {
        return (
            <article
                className="custom-contract ctor-card"
                onClick={() => window.location = "mailto:hello@smartz.io"}>
                <div className="ctor-card__link screen">
                    <div className="ctor-card__img flex">
                        <img
                            src={CustomContractImg}
                            alt={`Custom contract`} />
                    </div>
                    <section className="ctor-card__description">
                        <h2 className="ctor-card__header">
                            Custom contract
                        </h2>
                        <p className="ctor-card__text">
                            We can develop or customize any smart contract, or just provide a UI for managing your custom contract. If this follows the trend of Smartz Platform, we can do this pro bono.
                        </p>
                    </section>
                    <section className="ctor-card__controls">
                        <p className="ctor-card__buttons">
                            <a
                                href="mailto:hello@smartz.io"
                                className="btn flex">
                                MAIL US
                            </a>
                            <span className="ctor-card__email">hello@smartz.io</span>
                        </p>
                    </section>
                </div>
            </article>
        );
    }
};
