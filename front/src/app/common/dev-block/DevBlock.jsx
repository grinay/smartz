import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import developersImg from '../../../assets/img/common/developers.jpg';

import './DevBlock.less';

export default class DevBlock extends PureComponent {
    render() {
        return (
            <div className="dev-block">
                <div className="description">
                    <h2>Developers!</h2>
                    <p>You can upload your smart contract to Smartz platform.</p>
                    <div className="buttons-block flex-v">
                        <Link
                            to="/ctor-add"
                            className="description__link upload flex">
                            Upload contract
                        </Link>
                        <a
                            href="https://wiki.smartz.io/en/contract-uploading"
                            className="description__link learn flex"
                            target="_blanc">
                            Learn more
                        </a>
                    </div>
                </div>
                <img src={developersImg} alt="for-dev" />
            </div>
        );
    }
};