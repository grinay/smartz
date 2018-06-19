import React, { PureComponent } from 'react';
import tlgImg from '../../../assets/img/common/telegram-baner.svg';

import './Banner.less';

export default class Banner extends PureComponent {
    render() {
        return (
            <a
                href="https://t.me/SmartzCommunityEn"
                target="_blanc"
                className="banner-telegram flex-v">
                <p className="description">Get the latest news, communicate with like-minded people and ask questions.</p>
                <p className="chat-link">Join chat</p>
                <div className="bg-wrapper flex-v">
                    <div className="bg" />
                </div>
                <img src={tlgImg} alt="telegram" className="tlg" />
            </a>
        );
    }
};