import * as classNames from 'classnames';
import * as React from 'react';

import Title from '../../ui-kit/title/Title';

import './TitleContentWrapper.less';


interface ITitleContentWrapperProps {
  children: any;
  title?: string;
  className?: string;
}

export default class TitleContentWrapper extends React.PureComponent
  <ITitleContentWrapperProps, {}> {

  public render() {
    const { title, children, className = null } = this.props;

    return (
      <div className={classNames('component-title-content-wrapper', className)}>
        <Title type="small" className="title">{title}</Title>
        {children}
      </div>
    );
  }
}
