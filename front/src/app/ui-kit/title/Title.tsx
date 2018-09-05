import * as classNames from 'classnames';
import * as React from 'react';

import './Title.less';


interface ITitleProps {
  type?: 'big' | 'medium' | 'small' | 'thin';
  className?: string;
}

export default class Title extends React.PureComponent<ITitleProps, {}> {
  public render() {
    const { type = 'medium', className = null, children } = this.props;

    return (
      <h2 className={classNames('component-title', className, {
        'component-title-big': type === 'big',
        'component-title-medium': type === 'medium',
        'component-title-small': type === 'small',
        'component-title-thin': type === 'thin',
      })}>
        {children}
      </h2>
    );
  }
}
