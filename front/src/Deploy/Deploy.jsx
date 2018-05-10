import React, { Component } from 'react';

import * as api from '../api/apiRequests';
import { transformObj2Flat } from '../helpers/normalize';
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import DeployStep1 from './DeployStep1';
import DeployStep2 from './DeployStep2';
import DeployStep3 from './DeployStep3';
import Auth from '../app/auth/Auth';

import './Deploy.css';

// TODO: refactor this file totally

class Deploy extends Component {
  constructor(props) {
    super(props);

    const { ctorId, deployId } = props.match.params;
    this.state = {
      ctorId,
      deployId
    };
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
    const { netId, contractAddress, instance, publicAccess } = nextProps;
    if (netId && contractAddress) {

      const data = {
        address: contractAddress,
        network_id: Number.parseInt(netId, 10),
        public_access: publicAccess,
      }

      api.updateInstance(instance.instance_id, data)
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
      ctor, status, errors, instance, netId, txHash, contractAddress,
      setPublicAccess, deployTxSent, deployTxError, deployTxMined, formData
    } = this.props;

    const step1Props = { deployId, ctor, formData };

    const step2Props = {
      deployId, ctor, instance, status,
      setPublicAccess, deployTxSent, deployTxError, deployTxMined
    };

    const step3Props = {
      status, txHash, netId, instance, contractAddress
    };

    let errorList = null;
    if (errors !== null && errors !== undefined) {
      if (typeof errors === 'string') {
        errorList = <p>{errors}</p>;
      }

      if (typeof errors === 'object') {
        const errArr = transformObj2Flat(errors);

        errorList = Object.keys(errArr).map(err => {
          const value = errArr[err];

          const listErr = Array.isArray(value) ?
            value.map(item => <li key={item}>{item}</li>) :
            <li key={errArr[err]}>{errArr[err]}</li>

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
              {errorList}
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
