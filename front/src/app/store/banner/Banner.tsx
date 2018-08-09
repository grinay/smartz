import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './Banner.less';


export default class Banner extends React.PureComponent {
  public render() {
    return (
      <a href="https://t.me/smartz_en" target="_blanc" className="banner-telegram flex-v">
        <p className="description">
          Get the latest news, communicate with like-minded people and ask questions.
        </p>
        <p className="chat-link">Join chat</p>
        <div className="bg-wrapper flex-v">
          <div className="bg" />
        </div>
        <InlineSVG className="tlg-img" src={require('../../../assets/img/common/telegram-baner.svg')} />
      </a>
    );
  }
}
