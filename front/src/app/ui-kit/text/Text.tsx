import * as classNames from 'classnames';
import * as React from 'react';

import './Text.less';


interface ITextProps {
  type?: 'big' | 'normal' | 'caption';
  className?: string;
  style?: any;
}

export default class Text extends React.PureComponent<ITextProps, {}> {
  public render() {
    const { type = 'normal', className = null, children, style = null } = this.props;

    return (
      <p className={classNames('component-text', className, {
        'component-text-big': type === 'big',
        'component-text-normal': type === 'normal',
        'component-text-caption': type === 'caption',
      })} style={style}>
        {children}
      </p>
    );
  }
}
