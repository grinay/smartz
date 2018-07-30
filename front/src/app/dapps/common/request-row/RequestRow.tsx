import * as dateFormat from 'dateformat';
import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { formatTime } from '../../../../helpers/normalize';

import './RequestRow.less';


interface IRequestRowProps {
  request: any;
  onClick: (request: any) => any;
}

export default class RequestRow extends React.PureComponent<IRequestRowProps, {}> {
  public render() {
    const { request, onClick } = this.props;

    return (
      <div className="request-row" onClick={onClick(request)}>
        <p className="request-time">{formatTime(request.execution_datetime)}</p>
        <p className="request-description">{request.function_title}</p>
        {/* <p className="request-buttons">
          <button className="round-btn copy-btn flex" type="button" aria-label="Copy">
            <InlineSVG
              className="copy-icon"
              src={require('../../../../assets/img/common/components/copy.svg')}
            />
          </button>
        </p> */}
      </div>
    );
  }
}
