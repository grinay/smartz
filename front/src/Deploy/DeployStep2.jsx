import React, {Component} from 'react';
import {Panel, Button, FormGroup, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';

import {web3 as w3, getNetworkId, getTxReceipt} from 'helpers/eth';
import Spinner from 'common/Spinner';

class DeployStep2 extends Component {
  deploy() {
    const {bin} = this.props.instance;
    const {price_eth} = this.props.ctor;
    const {deployTxSent, deployTxError, deployTxMined} = this.props;

    w3.eth.sendTransaction({
      data: bin,
      value: w3.toWei(price_eth, 'ether'),
      gas: 3e6,
      gasPrice: 10e9
    },
    (err, txHash) => {
      if (err) {
        deployTxError(err);

      } else {
        getNetworkId(netId => deployTxSent(netId, txHash));

        getTxReceipt(txHash, receipt => {
          if (!receipt.status || receipt.status === '0x0' || receipt.status === '0') {
            deployTxError("Something went wrong and your contract deploy has failed. Try to add more gas or report problem to contract developers.");
          } else {
            deployTxMined(receipt.contractAddress);
          }
        });
      }
    });
  }

  render() {
    const {
      ctor, instance, status,
      setPublicAccess
    } = this.props;

    return (
      <Panel header="Deploy step 2 of 3: check the code">
        {status === 'construct_request' &&
          <Spinner
            text="Preparing code, this can take up to 30-40 seconds..."
            alt="Spinner"
          />
        }

        {status === 'construct_success' &&
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
                setPublicAccess(e.target.checked)
              }}>Public access to contract</Checkbox>
            </FormGroup>

            <Button
              bsStyle="success"
              className="btn-margin"
              onClick={this.deploy.bind(this)}>
              {ctor.price_eth
                ? <span>Deploy now for {ctor.price_eth} ETH</span>
                : <span>Deploy now for free</span>
              }
            </Button>
          </form>
        }
      </Panel>
    );
  }
}

export default DeployStep2;
