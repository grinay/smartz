import * as React from 'react';

import './CopyButton.less';


interface ICopyButtonProps {
  className?: string;
  onClick: () => void;
}

export default class CopyButton extends React.PureComponent<ICopyButtonProps, {}> {
  public render() {
    const { className, onClick } = this.props;

    return (
      <div className={`copy-button ${className}`} onClick={onClick}>
        <img
          className="img-copy-button"
          src={require('../../../assets/img/common/components/copy.svg') as string}
          alt="copy"
        />
        <span>Copy</span>
      </div>
    );
  }
}
