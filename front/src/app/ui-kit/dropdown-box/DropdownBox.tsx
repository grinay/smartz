import * as classNames from 'classnames';
import * as React from 'react';

import './DropdownBox.less';


interface IDropdownBoxProps {
  children?: any;
  isOpen: boolean;
  className?: string;
}

interface IDropdownBoxState { }


export default class DropdownBox extends React.PureComponent<IDropdownBoxProps, IDropdownBoxState> {
  public render() {
    const { isOpen, children, className = null } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className={classNames('component-dropdown-box', className)}>
        {children}
      </div>
    );
  }
}
