import React, { Component } from 'react';

import Spinner from '../../common/Spinner';
import { processResult, makeEtherscanLink } from '../../helpers/eth';

class Transaction extends Component {
  render() {
    const { time, func, formData, txHash, result, timeMined } = this.props.transaction;
    const { netId } = this.props;

    return (
      <div>
        <ul>
          <li className="func-name">{func.title} ({func.name})</li>

          <li>
            Executed at {time.format('HH:mm:ss')} on {time.format('ll')}
            {txHash && result &&
              `, mined at ${timeMined.format('HH:mm:ss')}`
            }
          </li>

          {txHash &&
            <li className="tx-link">
              {makeEtherscanLink(txHash, netId)}
            </li>
          }

          {formData.length > 0 &&
            <li className="tx-params">
              Parameters: {formData.map((field, i) => (
                <span key={i}>
                  <br />{func.inputs.items[i].title} = {makeEtherscanLink(field, netId)}
                </span>
              ))}
            </li>
          }

          {result &&
            <li className="tx-result">
              Result:
              {txHash && // write function
                (result.status === '0x1' ? ' done' : ' error')
              }

              {!txHash && // ask function
                ` ${processResult(result)}`
              }
            </li>
          }

          {txHash && !result &&
            <li>
              <Spinner text="Waiting for miners..." width={'30px'} />
            </li>
          }
        </ul>
      </div>
    );
  }
}

export default Transaction;
