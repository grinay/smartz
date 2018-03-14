import React, {Component} from 'react';

import api from 'helpers/api';
import Alert from 'common/Alert';
import DeployStep1 from './DeployStep1';
import DeployStep2 from './DeployStep2';
import DeployStep3 from './DeployStep3';
import Spinner from 'common/Spinner';

import './Deploy.css';

// TODO: refactor this file totally

class Deploy extends Component {
  constructor(props) {
    super(props);

    const {ctorId, deployId} = this.props.match.params;
    this.state = {
      auth: props.auth.isAuthenticated(),
      ctorId,
      deployId
    };
  }

  componentWillMount() {
    const {
      status, initDeploy,
      fetchCtorParamsRequest, fetchCtorParamsFailure, fetchCtorParamsSuccess,
    } = this.props;
    const {ctorId, auth} = this.state;

    if (auth) {
      if (!status) {
        initDeploy(this.state.deployId);
      }

      fetchCtorParamsRequest(ctorId);

      api(this.props.auth).post(`/get_ctor_params`, {
        'ctor_id': ctorId
      })
      .then(response => fetchCtorParamsSuccess(ctorId, response.data))
      .catch(error => fetchCtorParamsFailure(ctorId, error.message));
    }
  }

  componentWillReceiveProps(nextProps) {
    const {auth, netId, contractAddress, instance, publicAccess} = nextProps;
    if (netId && contractAddress) {
      api(auth).post(`/set_instance_address`, {
        instance_id: instance.instance_id,
        address: contractAddress,
        network_id: Number.parseInt(netId, 10),
        public_access: publicAccess
      })
      .catch(error => console.log(error));
    }
  }

  render() {
    const {metamaskStatus} = this.props;
    if (metamaskStatus) return (
      <div className="container">
        <Alert standardAlert={metamaskStatus} />
      </div>
    );

    const {deployId} = this.state;
    const {
      auth, ctor, status, errors, instance, netId, txHash, contractAddress,
      constructRequest, constructError, constructSuccess,
      setPublicAccess, deployTxSent, deployTxError, deployTxMined
    } = this.props;

    const step1Props = {
      deployId, auth, ctor,
      constructRequest, constructError, constructSuccess
    };

    const step2Props = {
      deployId, auth, ctor, instance, status,
      setPublicAccess, deployTxSent, deployTxError, deployTxMined
    };

    const step3Props = {
      status, txHash, netId, instance, contractAddress
    };

    return (
      <main className="page-main page-main--contracts">
        <aside className="block-half">
          <section className="contract-info">
            <div className="contract-info__logo">
              <img
                className="contract-info__img"
                src={ctor.image
                  ? require(`../Ctors/i/${ctor.image}`)
                  : `https://lorempixel.com/640/400/?${Math.random()}`
                }
                width="644" height="404"
                alt={`${ctor.ctor_name} contract`}
              />
            </div>
            <div className="contract-info__wrapper">
              <p className="contract-info__info  contract-info__info--column">
                <span className="contract-info__name">
                  {ctor.ctor_name}
                </span>
              </p>
              <p className="contract-info__description">
                {ctor.ctor_descr}
              </p>
              <table className="table">
                <tbody className="table__tbody">
                  <tr className="table__tr">
                    <td className="table__label">Running price</td>
                    <td className="table_data">
                      <div className="table__inner">
                        <span id="raiting-price">
                          {ctor.price_eth
                            ? `${ctor.price_eth} ETH`
                            : 'Free'
                          }
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </aside>
        <section className="block">
          <h2 className="block__header">
            {ctor.ctor_name}
          </h2>

          {ctor && ctor.fetchStatus === 'request' &&
            <div className="block__wrapper  block__wrapper--top">
              <Spinner text="Fetching contract details..." />
            </div>
          }

          {errors &&
            <Alert>
              {typeof errors === 'object'
                ? Object.keys(errors).forEach((err) => (
                    <p key={err}>{errors[err]}</p>)
                  )
                : <p>{errors}</p>
              }
            </Alert>
          }

          {((status === 'configure' && ctor && ctor.fetchStatus === 'success')
            || status === 'construct_error'
          ) &&
            <DeployStep1 {...step1Props} />
          }

          {(status === 'construct_request'
            || status === 'construct_success'
          ) &&
            <DeployStep2 {...step2Props} />
          }

          {(status === 'transaction_sent'
            || status === 'transaction_mined'
            || status === 'transaction_error'
          ) &&
            <DeployStep3 {...step3Props} />
          }
        </section>
      </main>
    );
  }
}

export default Deploy;
