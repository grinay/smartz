import * as classNames from 'classnames';
import * as dateFormat from 'dateformat';
import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import Loader from '../../common/loader/Loader';

import './PopupTransaction.less';


interface IPopupTransactionProps {
  isOpen: boolean;
  onClose: () => void;
  record: any;
}

export default class PopupTransaction extends React.PureComponent<IPopupTransactionProps, {}> {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  public onKeyDown(event) {
    const { isOpen, onClose } = this.props;

    if (event.keyCode === 27 && isOpen) {
      onClose();
      return;
    }
  }

  public componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }


  public render() {
    const { onClose, isOpen, record } = this.props;

    if (!isOpen) {
      return null;
    }

    let isTransaction: boolean = 'tx_id' in record ? true : false;

    let result: any;

    if ('is_success' in record) {
      if (record.is_success) {
        result = isTransaction
          ? <p className="result-status">Success</p>
          : (
            <div>
              {record.result.map((result, i) =>
                <p
                  key={i}
                  className="result-status"
                >
                  <span>{result.title}</span>
                  <span>{result.value}</span>
                </p>,
              )}
            </div>
          );
      } else {
        result = <p className="result-status error">{record.error}</p>;
      }
    } else {
      result = (
        <div className="flex-v">
          <Loader className="loader-result" width={'17px'} />
          <p className="result-status" > Waiting for miners...</p >
        </div>
      );
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
          <p className={classNames('event-name', {
            error: 'is_success' in record && !record.is_success,
          })}>
            {record.function_title}
            <sup className="event-extra">{record.function_name}</sup>
          </p>
          <p className="event-description">{record.function_description}</p>
        </div>
        <ul className="event-list">
          {record.function_arguments.map((item, i) => {
            return (
              <li key={i} className="event-item">
                <p className="event-id">{item.title}</p>
                <p className="event-value">{item.value}</p>
              </li>
            );
          })}
        </ul>
        <div className="event-result">
          <p className="result-id">Result</p>
          {result}
        </div>
        <div className="event-info">
          <div className="event-time">
            <div className="event-data">
              <InlineSVG
                className="x-icon"
                src={require('../../../assets/img/common/v-long.svg')}
              />
              <p className="executed-time">
                Executed {dateFormat(new Date(record.execution_datetime), 'dddd d, yyyy "at" hh:MM:ss')}
              </p>
            </div>
            {isTransaction && record.status === 'done' &&
              <div className="event-data">
                <InlineSVG
                  className="x-icon"
                  src={require('../../../assets/img/common/v-double.svg')}
                />
                <p className="executed-time">
                  Mined {dateFormat(new Date(record.mining_datetime), 'h:MM:ss')}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
