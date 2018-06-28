import * as React from 'react';
import { Link } from 'react-router-dom';

import Loader from '../../../common/loader/Loader';

import './EosResult.less';


interface IEosResultProps {
  status: any;
  dapp: any;
  contractAddress: any;
}

export default class EosResult extends React.PureComponent<IEosResultProps, {}> {
  public render() {
    const { status, dapp, contractAddress } = this.props;

    return (
      <div className="eos-result">
        {status === 'transaction_sent' && (
          <Loader text="Awaiting for contract to be placed in block by miners to get it address..." />
        )}

        {status === 'transaction_mined' && (
          <div>
            <p className="support-block__paragraph">
              Congratulations! Your contract is deployed to EOS blockchain!<br />
            </p>
            <p className="support-block__paragraph">
              Now you can
              <Link to={`/dapp/${dapp.instance_id}`}> manage your contract </Link>with Smartz
              Platform!
            </p>
          </div>
        )}
      </div>
    );
  }
}
