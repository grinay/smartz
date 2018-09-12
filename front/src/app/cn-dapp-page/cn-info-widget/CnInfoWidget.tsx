import * as classNames from 'classnames';
import * as React from 'react';

import Text from '../../ui-kit/text/Text';

import './CnInfoWidget.less';


interface ICnInfoWidgetProps {
  typeWidget?: 'content' | 'aside';
  size?: number;
  title: string;
  className?: string;
}

export default class CnInfoWidget extends React.PureComponent<ICnInfoWidgetProps, any> {
  public render() {
    const { typeWidget = 'content', title, className = null, children } = this.props;

    return (
      <div className={classNames('cn-info-widget', className)}>
        <Text style={{ fontSize: 12 }}>{title}</Text>
        {children}
      </div >
    );
  }
}
