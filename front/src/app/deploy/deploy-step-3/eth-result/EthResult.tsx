import * as React from 'react';
import { Link } from 'react-router-dom';

import { getNetworkEtherscanAddress, getNetworkName } from '../../../../helpers/eth';
import Loader from '../../../common/loader/Loader';

import './EthResult.less';


interface IEthResultProps {
  status: any;
  txHash: any;
  netId: any;
  dapp: any;
  contractAddress: any;
}

interface IEthResultState { }

export default class EthResult extends React.PureComponent<IEthResultProps, IEthResultState> {
  public render() {
    const { status, txHash, netId, dapp, contractAddress } = this.props;

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
                  href={getNetworkEtherscanAddress(netId) + '/address/' + contractAddress}
                  target="_blank"
                  rel="noopener noreferrer">
                  {contractAddress}
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
