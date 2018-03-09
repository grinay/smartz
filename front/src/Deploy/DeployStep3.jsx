import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

import {getNetworkName, getNetworkEtherscanAddress} from 'helpers/eth';
import Spinner from 'common/Spinner';

class DeployStep3 extends Component {
  render() {
    const {status, txHash, netId, instance, contractAddress} = this.props;

    return (
      <Panel header={status === 'transaction_sent'
        ? "Deploy step 3 of 3: contract is being mined"
        : "Deploy step 3 of 3: finished!"
      }>
        <p>
          Deploy transaction:<br />
          <a href={'https://rinkeby.etherscan.io/tx/' + txHash}>{txHash}</a>
        </p>

        {status === 'transaction_sent' &&
          <Spinner text="Awaiting for contract to be placed in block by miners to get it address..." />
        }

        {status === 'transaction_mined' &&
          <div className="alert alert-success">
            Congratulations! Your contract is deployed to {getNetworkName(netId)}!<br />
            Contract address is {contractAddress}.<br />
            Check it <a href={getNetworkEtherscanAddress(netId) + '/address/' + contractAddress}>on Etherscan</a> (it can take some time for Etherscan to see contract just deployed)<br />
            and <a href={`/instance/${instance.instance_id}`}>manage it on Smartz</a>.
          </div>
        }
      </Panel>
    );
  }
}

export default DeployStep3;
