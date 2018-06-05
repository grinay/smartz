import * as React from 'react';

import Spinner from '../../../common/Spinner';
import './EosResult.less';
import { Link } from 'react-router-dom';

interface IEosResultProps {
  status: any;
  instance: any;
  contractAddress: any;
}

export default class EosResult extends React.PureComponent<IEosResultProps, {}> {
  public render() {
    const { status, instance, contractAddress } = this.props;

    return (
      <div className="eos-result">
        {status === 'transaction_sent' && (
          <Spinner text="Awaiting for contract to be placed in block by miners to get it address..." />
        )}

        {status === 'transaction_mined' && (
          <div>
            <p className="support-block__paragraph">
              Congratulations! Your contract is deployed to EOS blockchain!<br />
              Your transaction id: <span>{contractAddress}</span>
            </p>
            <p className="support-block__paragraph">
              Now you can
              <Link to={`/instance/${instance.instance_id}`}> manage your contract </Link>with
              Smartz Platform!
            </p>
          </div>
        )}
      </div>
    );
  }
}
