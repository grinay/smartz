import * as classNames from 'classnames';
import * as React from 'react';

import './SwitchBox.less';


interface ISwitchBoxProps {
  children?: any;
  isPush: boolean;
  className?: string;
  pushedClassName?: string;
  onClick?: (e?) => void;
}

interface ISwitchBoxState { }

export default class SwitchBox extends React.PureComponent<ISwitchBoxProps, ISwitchBoxState> {
  public render() {
    const { children, isPush, className = null, pushedClassName = '', onClick } = this.props;

    return (
      <div
        className={classNames('component-switch-box',
          className, { [`${pushedClassName}`]: isPush })}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
