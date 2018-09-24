import * as classNames from 'classnames';
import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { formatTime } from '../../../../helpers/normalize';
import { copyTextToClipboard } from '../../../../helpers/utils';
import AddressString from '../../../common/address-string/AddressString';

import './RequestRow.less';


interface IRequestRowProps {
  request: any;
  onClick: (request: any) => any;
}

export default class RequestRow extends React.PureComponent<IRequestRowProps, {}> {
  constructor(props) {
    super(props);

    this.prepareResult = this.prepareResult.bind(this);
  }

  private prepareResult(resultArr: any[]): string {
    let str;

    resultArr.forEach((elem, i) => {
      if (i >= 1) {
        str = elem.title !== ''
          ? str + ', ' + elem.title + ': ' + elem.value
          : str + ', ' + elem.value;
      } else {
        str = elem.title !== ''
          ? elem.title + ': ' + elem.value
          : elem.value;
      }
    });

    return str;
  }

  public render() {
    const { request, onClick } = this.props;

    const resultStr = this.prepareResult(request.result);

    return (
      <div className="request-row" onClick={onClick(request)}>
        <p className="request-time">{formatTime(request.execution_datetime)}</p>
        {!request.is_success &&
          < div className="request-icon">
            <InlineSVG
              className="error-icon"
              src={require('../../../../assets/img/common/dapp/status-error.svg')}
            />
          </div>
        }
        <p className={classNames('request-description', { error: !request.is_success })}>
          {request.function_title}
        </p>
        <AddressString str={resultStr} endCharNumber={0} className="request-info" />
        <p className="request-buttons">
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyTextToClipboard(resultStr);
            }}
            className="round-btn copy-btn flex"
            type="button"
            aria-label="Copy"
          >
            <InlineSVG
              className="copy-icon"
              src={require('../../../../assets/img/common/components/copy.svg')}
            />
          </button>
        </p>
      </div >
    );
  }
}
