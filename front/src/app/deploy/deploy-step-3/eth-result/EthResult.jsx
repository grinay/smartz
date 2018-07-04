import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { getNetworkName, getNetworkEtherscanAddress } from '../../../../helpers/eth';
import Loader from '../../../common/loader/Loader';

import './EthResult.less';

export default class EthResult extends PureComponent {
  render() {
    const { status, txHash, netId, dapp, dappAddress } = this.props;

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
            <Loader text="Awaiting for contract to be placed in block by miners to get it address..." />
          )}

          {status === 'transaction_mined' && (
            <div>
              <p className="support-block__paragraph">
                Congratulations! Your contract is deployed to {getNetworkName(netId)} blockchain!<br />
                Contract address is{' '}
                <a
                  href={getNetworkEtherscanAddress(netId) + '/address/' + dappAddress}
                  target="_blank"
                  rel="noopener noreferrer">
                  {dappAddress}
                </a>.
              </p>
              <p className="support-block__paragraph">
                Now you can <Link to={`/dapp/${dapp.id}`}>manage your contract</Link> with Smartz
                Platform!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
