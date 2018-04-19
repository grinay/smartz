import React, { Component } from 'react';

import api from '../helpers/api';
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import DeployStep1 from './DeployStep1';
import DeployStep2 from './DeployStep2';
import DeployStep3 from './DeployStep3';

import './Deploy.css';

// TODO: refactor this file totally

class Deploy extends Component {
  constructor(props) {
    super(props);

    const { ctorId, deployId } = props.match.params;
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
      constructError
    } = this.props;
    const { ctorId, deployId, auth } = this.state;

    if (auth) {
      if (!status) {
        initDeploy(deployId);
      }

      fetchCtorParamsRequest(ctorId);

      api(this.props.auth).get(`/constructors/${ctorId}/params`)
        .then(response => {
          const { data } = response;
          if (data.error) {
            constructError(deployId, data.error);
            fetchCtorParamsFailure(ctorId, data.error);
          } else {
            fetchCtorParamsSuccess(ctorId, data);
          }
        })
        .catch(error => {
          constructError(deployId, error.message);
          fetchCtorParamsFailure(ctorId, error.message)
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { auth, netId, contractAddress, instance, publicAccess } = nextProps;
    if (netId && contractAddress) {
      api(auth).post(`/instances/${instance.instance_id}/update`, {
        address: contractAddress,
        network_id: Number.parseInt(netId, 10),
        public_access: publicAccess
      })
        .catch(error => console.log(error));
    }
  }

  render() {
    const { metamaskStatus } = this.props;
    if (metamaskStatus) return (
      <div className="container">
        <Alert standardAlert={metamaskStatus} />
      </div>
    );

    const { deployId } = this.state;
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
            {ctor.image &&
              <div className="contract-info__logo">
                <img
                  className="contract-info__img"
                  src={require(`../Ctors/i/${ctor.image}`)}
                  width="644" height="404"
                  alt={`${ctor.ctor_name} contract`}
                />
              </div>
            }
            <div className="contract-info__wrapper">
              {ctor.ctor_name &&
                <p className="contract-info__info  contract-info__info--column">
                  <span className="contract-info__name">
                    {ctor.ctor_name}
                  </span>
                </p>
              }
              {ctor.ctor_descr &&
                <p className="contract-info__description">
                  {ctor.ctor_descr}
                </p>
              }
              {'price_eth' in ctor &&
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
              }
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
                ? Object.keys(errors).map((err, i) => (
                  <p key={i}>{errors[err]}</p>)
                )
                : <p>{errors}</p>
              }
            </Alert>
          }

          {((status === 'configure' && ctor && ctor.fetchStatus === 'success')
            || (status === 'construct_error' && ctor.fetchStatus === 'success')
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
