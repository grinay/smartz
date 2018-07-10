import * as React from 'react';
import InlineSVG from 'svg-inline-react';

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
        <InlineSVG
          className="img-copy-button"
          src={require('../../../assets/img/common/components/copy.svg')}
        />
        <span>Copy</span>
      </div>
    );
  }
}
