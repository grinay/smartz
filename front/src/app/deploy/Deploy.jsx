import React, { PureComponent } from 'react';

import * as api from '../../api/apiRequests';
import { transformObj2Flat } from '../../helpers/normalize';
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import DeployStep1 from './deploy-step-1/DeployStep1';
import DeployStep2 from './deploy-step-2/DeployStep2';
import DeployStep3 from './deploy-step-3/DeployStep3';
import Auth from '../auth/Auth';

import './Deploy.less';

// TODO: refactor this file totally

class Deploy extends PureComponent {
  constructor(props) {
    super(props);

    const { ctorId, deployId } = props.match.params;
    this.state = {
      ctorId,
      deployId
    };
  }

  componentDidMount() {
    window.Intercom('update');
  }

  componentWillMount() {
    const { status, initDeploy } = this.props;
    const { ctorId, deployId } = this.state;

    if (Auth.isAuthenticated()) {
      if (!status) {
        initDeploy(deployId);
      }

      api.getConstructorParams(ctorId, deployId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { netId, contractAddress, dapp, publicAccess } = nextProps;
    if (netId && contractAddress) {
      const data = {
        address: contractAddress,
        network_id: netId,
        public_access: publicAccess
      };

      api.updateDapp(dapp.dapp_id, data);
    }
  }

  render() {
    const { deployId } = this.state;
    const {
      ctor,
      status,
      errors,
      dapp,
      netId,
      txHash,
      contractAddress,
      metamaskStatus,
      setPublicAccess,
      deployTxSent,
      deployTxError,
      deployTxMined,
      formData,
      blockchain,
      publicAccess
    } = this.props;

    const step1Props = { deployId, ctor, formData, errors };

    const step2Props = {
      deployId,
      ctor,
      dapp,
      status,
      metamaskStatus,
      setPublicAccess,
      deployTxSent,
      deployTxError,
      deployTxMined,
      publicAccess
    };

    const step3Props = {
      status,
      txHash,
      netId,
      dapp,
      contractAddress,
      blockchain
    };

    if (metamaskStatus === 'noMetamask')
      return (
        <p
          style={{
            textAlign: 'center',
            margin: '100px',
            fontSize: '20px'
          }}>
          Fellow, you need a Metamask plugin!
        </p>
      );

    let errorList = null;
    if (errors !== null && errors !== undefined) {
      if (typeof errors === 'string') {
        errorList = <p>{errors}</p>;
      }

      if (typeof errors === 'object') {
        const errArr = transformObj2Flat(errors);

        errorList = Object.keys(errArr).map((err) => {
          const value = errArr[err];

          const listErr = Array.isArray(value) ? (
            value.map((item) => <li key={item}>{item}</li>)
          ) : (
            <li key={errArr[err]}>{errArr[err]}</li>
          );

          return (
            <span key={err}>
              <p>{err}:</p>
              <ul>{listErr}</ul>
            </span>
          );
        });
      }
    }

    return (
      <main className="page-main page-main--contracts">
        {/* <aside className="block-half"> */}
        <section className="form-title flex">
          {ctor.image && (
            <div className="form-title__logo">
              <img
                className="form-title__img"
                src={require(`../common/ctor-card/img/${ctor.image}`)}
                alt={`${ctor.ctor_name} contract`}
              />
            </div>
          )}
          {ctor.ctor_name && (
            <div className={'form-title__title'}>
              <h2>{ctor.ctor_name}</h2>
              <p>
                <span>Contract: </span>
                <a href={`${window.location.origin}/deploy/${ctor.ctor_id}`}>
                  {`${window.location.origin}/deploy/${ctor.ctor_id}`}
                </a>
              </p>
            </div>
          )}
        </section>
        {/* </aside> */}
        <section className="block">
          {ctor &&
            ctor.fetchStatus === 'request' && (
              <div className="block__wrapper  block__wrapper--top">
                <Spinner text="Fetching contract details..." />
              </div>
            )}

          {errors && <Alert>{errorList}</Alert>}

          {((status === 'configure' && ctor && ctor.fetchStatus === 'success') ||
            (status === 'construct_error' && ctor.fetchStatus === 'success')) && (
            <DeployStep1 {...step1Props} />
          )}

          {(status === 'construct_request' || status === 'construct_success') && (
            <DeployStep2 {...step2Props} />
          )}

          {(status === 'transaction_sent' ||
            status === 'transaction_mined' ||
            status === 'transaction_error') && <DeployStep3 {...step3Props} />}
        </section>
      </main>
    );
  }
}

export default Deploy;
