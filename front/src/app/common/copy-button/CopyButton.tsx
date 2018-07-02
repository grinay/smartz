import * as React from 'react';

import copyImg from '../../../assets/img/common/dapp/copy.svg';

import './CopyButton.less';


export default class CopyButton extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="copy-button">
        <img src={copyImg} alt="copy" />
        <span>Copy</span>
      </div>
    );
  }
}
