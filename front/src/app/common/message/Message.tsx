import * as classNames from 'classnames';
import * as React from 'react';

import './Message.less';


interface IMessageProps {
  children: any;
  type?: 'green' | 'red' | 'gray';
}

export default class Message extends React.PureComponent<IMessageProps, {}> {
  public render() {
    const { children, type = 'green' } = this.props;

    return (
      <div className={classNames('component-message', {
        green: type === 'green',
        red: type === 'red',
        gray: type === 'gray',
      })}>
        {children}
      </div>
    );
  }
}
