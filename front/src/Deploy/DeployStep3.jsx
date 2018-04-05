import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {getNetworkName, getNetworkEtherscanAddress} from '../helpers/eth';
import Spinner from '../common/Spinner';

class DeployStep3 extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {status, txHash, netId, instance, contractAddress} = this.props;

    return (
      <div className="block__wrapper  block__wrapper--top">
        {(status === 'transaction_sent' || status === 'transaction_mined') &&
          <p className="support-block__paragraph">
            Deploy transaction has been sent to network:<br />
            <a href={getNetworkEtherscanAddress(netId) + '/tx/' + txHash}>{txHash}</a>
          </p>
        }

        {status === 'transaction_sent' &&
          <Spinner text="Awaiting for contract to be placed in block by miners to get it address..." />
        }

        {status === 'transaction_mined' &&
          <div>
            <p className="support-block__paragraph">
              Congratulations! Your contract is deployed to {getNetworkName(netId)} blockchain!<br />
              Contract address is <a href={getNetworkEtherscanAddress(netId) + '/address/' + contractAddress}>{contractAddress}</a>.
            </p>
            <p>
              Now you can <Link to={`/instance/${instance.instance_id}`}>manage your contract</Link> with Smartz Platform!
            </p>
          </div>
        }
      </div>
    );
  }
}

export default DeployStep3;
