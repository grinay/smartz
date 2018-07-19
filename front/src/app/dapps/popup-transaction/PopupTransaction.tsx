import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './PopupTransaction.less';


interface IPopupTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  request: any;
}

interface IPopupTransactionState { }

export default class PopupTransaction extends React.PureComponent<IPopupTransactionProps, {}> {
  public render() {
    const { onClose, isOpen, request } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="popup-transaction">

        {/* closer */}
        <button
          className="close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          <InlineSVG
            className="x-icon"
            src={require('../../../assets/img/common/x-icon.svg')}
          />
        </button>

        {/* content */}
        <div className="event">
          <p className="event-name">
            {request.func.title}
            <sup className="event-extra">{request.func.name}</sup>
          </p>
          <p className="event-description">{request.func.description}</p>
        </div>
        <ul className="event-list">
          {request.func.inputs.items.map((item, i) => {
            return (
              <li key={i} className="event-item">
                <p className="event-id">{item.title}</p>
                <p className="event-value">{request.formData[i]}</p>
              </li>
            );
          })}
        </ul>
        <div className="event-result">
          <p className="result-id">Result</p>
          <p className="result-status">{request.result.toString()}</p>
        </div>
        <div className="event-info">
          <div className="event-time">
            <div className="event-data">
              <InlineSVG
                className="x-icon"
                src={require('../../../assets/img/common/v-long.svg')}
              />
              <p className="executed-time">
                Executed at {request.time.format('HH:mm:ss')} on {request.time.format('ll')}
              </p>
            </div>
            <div className="event-data">
              <InlineSVG
                className="x-icon"
                src={require('../../../assets/img/common/v-double.svg')}
              />
              <span>Mined</span>
              <time datetime="2018-09-29 22:12:11">22:12:11</time>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
