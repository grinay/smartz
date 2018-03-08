import React, {Component} from 'react';
import {Panel, ControlLabel, Button, FormGroup, FormControl, Checkbox} from 'react-bootstrap';

import api from 'helpers/api';
import Spinner from 'common/Spinner';
import {getNetworkEtherscanAddress, getNetworkName} from 'helpers/eth';
import Alert from 'common/Alert';
import DeployStep1 from './DeployStep1';

import './Deploy.css';

// TODO: refactor this file totally

if (window.Web3) {
  var w3 = new window.Web3(window.web3.currentProvider);
}

class Deploy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.auth.isAuthenticated(),
      spinner: false,
      ctorId: this.props.match.params.id
    };
  }

  componentWillMount() {
    const {fetchCtorParamsRequest,
           fetchCtorParamsFailure,
           fetchCtorParamsSuccess} = this.props;
    const {ctorId} = this.state;

    if (this.state.auth) {
      fetchCtorParamsRequest(ctorId);

      api(this.props.auth).post(`/get_ctor_params`, {
        'ctor_id': ctorId
      })
      .then(response => fetchCtorParamsSuccess(ctorId, response.data))
      .catch(error => fetchCtorParamsFailure(ctorId, error.message));
    }
  }

  getContractAddress(tx_hash) {
    w3.eth.getTransactionReceipt(tx_hash, (err, receipt) => {
      if (null == receipt)
        window.setTimeout(() => {this.getContractAddress(tx_hash)}, 500);

      else {
        // console.log(receipt);
        if (!receipt.status || receipt.status === '0x0' || receipt.status === '0') {
          this.setState({
            mode: 'failed'
          });

        } else {
          this.setState({
            mode: 'done',
            contractAddress: receipt.contractAddress
          });
        }
      }
    });
  }

  getNetId() {
    w3.version.getNetwork((err, netId) => {
      netId && this.setState({netId});
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const {contractAddress, netId, instance, publicAccess} = nextState;

    if (contractAddress && netId) {
      api(this.props.auth).post(`/set_instance_address`, {
        instance_id: instance.instance_id,
        address: contractAddress,
        network_id: Number.parseInt(netId, 10),
        public_access: publicAccess ? true : false
      })
      // TODO .then данные записаны
      .catch(error => console.log(error));
    }
  }

  deploy() {
    const {bin} = this.state.instance;
    const {price_eth} = this.state.ctor;

    w3.eth.sendTransaction({data: bin, value: w3.toWei(price_eth, 'ether'), gas: 3e6, gasPrice: 10e9}, (err, tx_hash) => {
      this.setState({
        mode: 'deploying',
        tx: tx_hash
      })

      this.getNetId();
      this.getContractAddress(tx_hash);
    });
  }

  render() {
    const {mode} = this.state;

    const {metamaskStatus} = this.props;
    if (metamaskStatus) return (
      <div className="container">
        <Alert standardAlert={metamaskStatus} />
      </div>
    );

    const {auth, ctor, status, errors, instance} = this.props;
    const {constructRequest, constructError, constructSuccess} = this.props;

    const step1Props = {
      auth,
      ctor,
      errors,
      constructRequest,
      constructError,
      constructSuccess
    };

    return (
      <div>
        <div className="container">
          {ctor &&
            <div>
              <h1>{ctor.ctor_name}</h1>
              <p className="desc">{ctor.ctor_descr}</p>
            </div>
          }

          {status === 'configure' && ctor && ctor.fetchStatus === 'success' &&
            <DeployStep1 {...step1Props} />
          }

          {status === "construct_request" &&
            <Spinner
              text="Preparing code, this can take up to 30-40 seconds..."
              alt="Spinner"
            />
          }

          {status === "construct_success" &&
            <Panel header="Deploy step 2 of 2: check the code">
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Contract source</ControlLabel>
                  <FormControl componentClass="textarea"
                    rows="20"
                    placeholder="If you don't see source code here, perhaps something gone wrong"
                    defaultValue={instance.source} />
                </FormGroup>

                <FormGroup controlId="formControlsPublicAccess">
                  <Checkbox onChange={(e) => {
                    this.setState({publicAccess: e.target.checked})
                  }}>Public access to contract</Checkbox>
                </FormGroup>

                <Button
                  bsStyle="success"
                  className="btn-margin"
                  onClick={this.deploy.bind(this)}>
                  {ctor.price_eth ? <span>Deploy now for {ctor.price_eth} ETH</span> : <span>Deploy now for free</span>}
                </Button>
              </form>
            </Panel>
          }

          {(mode === "deploying" || mode === "done" || mode === "failed") &&
            <Panel header={mode === "deploying" ? "Deploy in progress" : "Finished!"}>
              <p>
                Deploy transaction:<br />
                <a href={'https://rinkeby.etherscan.io/tx/' + this.state.tx}>
                  {this.state.tx}
                </a>
              </p>

              {mode === "deploying" &&
                <Spinner
                  text="Awaiting for contract to be placed in block by miners to get it address..."
                  alt="Waiting for miners..."
                />
              }

              {mode === "done" &&
                <div className="alert alert-success">
                  Congratulations! Your contract is deployed to {getNetworkName(this.state.netId)}!<br />
                  Contract address is {this.state.contractAddress}.<br />
                  Check it <a href={getNetworkEtherscanAddress(this.state.netId) + '/address/' + this.state.contractAddress}>on Etherscan</a> (it can take some time for Etherscan to see contract just deployed)<br />
                  and <a href={`/instance/${instance.instance_id}`}>manage it on Smartz</a>.
                </div>
              }

              {mode === "failed" &&
                <div className="alert alert-danger">
                  Ooops! Something went wrong and your contract deploy has failed. Try to add more gas or report problem to contract developers.
                </div>
              }
            </Panel>
          }
        </div>
      </div>
    );
  }
}

export default Deploy;
