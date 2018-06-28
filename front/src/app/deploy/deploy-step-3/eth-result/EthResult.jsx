import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { getNetworkName, getNetworkEtherscanAddress } from '../../../../helpers/eth';
import Spinner from '../../../common/Spinner';

import './EthResult.less';

export default class EthResult extends PureComponent {
  render() {
    const { status, txHash, netId, dapp, contractAddress, blockchain } = this.props;

    return (
      <div className="eth-result">
        <div className="block__wrapper  block__wrapper--top">
          {(status === 'transaction_sent' || status === 'transaction_mined') && (
            <p className="support-block__paragraph">
              Deploy transaction has been sent to network:<br />
              <a
                href={getNetworkEtherscanAddress(netId) + '/tx/' + txHash}
                target="_blank"
                rel="noopener noreferrer">
                {txHash}
              </a>
            </p>
          )}

          {status === 'transaction_sent' && (
            <Spinner text="Awaiting for contract to be placed in block by miners to get it address..." />
          )}

          {status === 'transaction_mined' && (
            <div>
              <p className="support-block__paragraph">
                Congratulations! Your contract is deployed to {getNetworkName(netId)} blockchain!<br />
                Contract address is{' '}
                <a
                  href={getNetworkEtherscanAddress(netId) + '/address/' + contractAddress}
                  target="_blank"
                  rel="noopener noreferrer">
                  {contractAddress}
                </a>.
              </p>
              <p className="support-block__paragraph">
                Now you can //TODO: change dapp
                <Link to={`/dapp/${dapp.instance_id}`}>manage your contract</Link> with Smartz
                Platform!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
