import React, { PureComponent } from 'react';
import tlgImg from '../../../assets/img/common/telegram-baner.svg';

import './Banner.less';

export default class Banner extends PureComponent {
    render() {
        return (
            <div className="banner-telegram flex-v">
                <p className="description">Get the latest news, communicate with like-minded people and ask questions.</p>
                <a
                    href="https://t.me/smartz_en"
                    target="_blanc"
                    className="chat-link">Join chat</a>
                <div className="bg-wrapper flex-v">
                    <div className="bg" />
                </div>
                <img src={tlgImg} alt="telegram" className="tlg" />
            </div>
        );
    }
};