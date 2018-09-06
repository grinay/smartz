import * as classNames from 'classnames';
import * as React from 'react';

import Text from '../../ui-kit/text/Text';

import './CnInfoWidget.less';


interface ICnInfoWidgetProps {
  typeWidget?: 'content' | 'aside';
  title: string;
  className?: string;
}

export default class CnInfoWidget extends React.PureComponent<ICnInfoWidgetProps, any> {
  public render() {
    const { typeWidget = 'content', title, className = null, children } = this.props;

    return (
      <div className={classNames('cn-info-widget flex', className)}>
        <Text>{title}</Text>
        {children}
      </div >
    );
  }
}
