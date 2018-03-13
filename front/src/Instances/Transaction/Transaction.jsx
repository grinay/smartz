import React, {Component} from 'react';

import Spinner from 'common/Spinner';
import {processResult} from 'helpers/eth';

class Transaction extends Component {
  render() {
    const {time, func, formData, txHash, result, timeMined} = this.props.transaction;
    console.log(this.props.transaction);
    return (
      <div>
        <ul>
          <li>Executed at: {time.format('llll')}</li>
          <li>Function: {func.title} ({func.name})</li>
          <li>
            Parameters:
            {formData.map((field, i) => (
              <span key={i}>
                <br />{func.inputs.items[i].title}: {field}
              </span>
            ))}
          </li>
          {txHash &&
            <li>
              Hash: {txHash}
            </li>
          }
          {txHash && result &&
            <li>Mined at: {timeMined.format('llll')}</li>
          }
          {result &&
            <li>
              Result:
              {txHash &&
                (result.status === '0x1' ? ' done' : ' error')
              }
              {!txHash &&
                ` ${processResult(result)}`
              }
            </li>
          }
        </ul>
        {txHash && !result &&
          <Spinner text="Waiting for miners..." />
        }
      </div>
    );
  }
}

export default Transaction;
