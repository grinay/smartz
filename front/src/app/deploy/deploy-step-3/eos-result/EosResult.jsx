import React, { PureComponent } from 'react';

import './EosResult.less';

export default class EosResult extends PureComponent {
    render() {
        return (
            <div className="eos-result">
                <div className="block__wrapper  block__wrapper--top">
                    {(status === 'transaction_sent' || status === 'transaction_mined') &&
                        <p className="support-block__paragraph">
                            Deploy transaction has been sent to EOS network.
                        </p>
                    }

                    {status === 'transaction_sent' &&
                        <Spinner text="Awaiting for contract to be placed in block by miners to get it address..." />
                    }

                    {status === 'transaction_mined' &&
                        <div>
                            <p className="support-block__paragraph">
                                Congratulations! Your contract is deployed to EOS blockchain!<br />
                                Contract address is <a href={getNetworkEtherscanAddress(netId) + '/address/' + contractAddress} target="_blank" rel="noopener noreferrer">{contractAddress}</a>.
            </p>
                            <p className="support-block__paragraph">
                                Now you can <Link to={`/instance/${instance.instance_id}`}>manage your contract</Link> with Smartz Platform!
            </p>
                        </div>
                    }
                </div>
            </div>
        );
    }
};