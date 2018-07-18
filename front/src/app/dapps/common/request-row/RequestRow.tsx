import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './RequestRow.less';


interface IRequestRowProps {
  request: any;
}

export default class RequestRow extends React.PureComponent<IRequestRowProps, {}> {
  public render() {
    const { request } = this.props;

    const diffTime = (new Date().getTime()) - request.time.format('x');
    const dayTimeInMs = 24 * 60 * 60 * 1000;

    const timeFormated = diffTime < dayTimeInMs
      ? request.time.format('HH:mm:ss')
      : request.time.format('MMM DD');

    return (
      <div className="transaction-row">
        <p className="transaction-time">{timeFormated}</p>
        <p className="transaction-description">{request.func.title}</p>
        <p className="transaction-buttons">
          <button className="round-btn copy-btn flex" type="button" aria-label="Copy">
            <InlineSVG
              className="copy-icon"
              src={require('../../../../assets/img/common/components/copy.svg')}
            />
          </button>
        </p>
      </div>
    );
  }
}
