import * as classNames from 'classnames';
import * as React from 'react';

import './Button.less';


interface IButtonProps {
  content?: string;
  children?: any;
  className?: string;
  disabled?: boolean;
  type?: 'green' | 'white' | 'lightgreen' | 'gray' | 'small' | 'large';
  onClick?: () => void;
}

export default class Button extends React.PureComponent<IButtonProps, {}> {
  public render() {
    const {
      content = null,
      className = null,
      onClick = null,
      type = null,
      children = null,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={
          classNames('component-button', className, {
            'component-button-green': type === 'green',
            'component-button-white': type === 'white',
            'component-button-lightgreen': type === 'lightgreen',
            'component-button-gray': type === 'gray',
            'component-button-small': type === 'small',
            'component-button-large': type === 'large',
          })}
        type="button"
      >
        {content}
        {children}
      </button >
    );
  }
}
