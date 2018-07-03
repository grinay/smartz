import React, { PureComponent } from 'react';
import tlgImg from '../../../assets/img/common/telegram-baner.svg';

import './Banner.less';
import { sendClickEvent } from '../../../helpers/statictics';
import { clickTypes } from '../../../constants/constants';

export default class Banner extends PureComponent {
  render() {
    return (
      <a
        href="https://t.me/SmartzCommunityEn"
        target="_blanc"
        onClick={() => {
          sendClickEvent(clickTypes.JOIN_CHAT);
        }}
        className="banner-telegram flex-v">
        <p className="description">
          Get the latest news, communicate with like-minded people and ask questions.
        </p>
        <p className="chat-link">Join chat</p>
        <div className="bg-wrapper flex-v">
          <div className="bg" />
        </div>
        <img src={tlgImg} alt="telegram" className="tlg" />
      </a>
    );
  }
}
