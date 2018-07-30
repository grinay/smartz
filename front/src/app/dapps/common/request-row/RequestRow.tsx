import * as dateFormat from 'dateformat';
import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './RequestRow.less';


interface IRequestRowProps {
  request: any;
  onClick: (request: any) => any;
}

export default class RequestRow extends React.PureComponent<IRequestRowProps, {}> {
  public render() {
    const { request, onClick } = this.props;

    const dataFromIso = new Date(request.execution_datetime);
    const diffTime = (new Date().getTime()) - dataFromIso.getTime();
    const dayTimeInMs = 24 * 60 * 60 * 1000;

    const timeFormated = diffTime < dayTimeInMs
      ? dateFormat(dataFromIso, 'HH:mm:ss')
      : dateFormat(dataFromIso, 'mmm dd');

    return (
      <div className="request-row" onClick={onClick(request)}>
        <p className="request-time">{timeFormated}</p>
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
