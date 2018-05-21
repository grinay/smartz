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
                    <p>You can <Link to="/ctor-add">upload your smart contract</Link> to Smartz platform.</p>
                    <a
                        href="https://wiki.smartz.io/"
                        className="description__link flex"
                        target="_blanc">
                        Learn more
                        </a>
                </div>
                <img src={developersImg} alt="for-dev" />
            </div>
        );
    }
};