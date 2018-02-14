import React, {Component} from 'react';
import {Panel, ControlLabel, Button, FormGroup, FormControl} from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import api from 'Api/Api';
import Spinner from 'Spinner/Spinner';
import FormWidgets from 'FormWidgets/FormWidgets';
import {getNetworkEtherscanAddress} from 'Eth/Eth';

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
    this.state.auth && this.getCtorParams();
  }

  getCtorParams() {
    api(this.props.auth).post(`/get_ctor_params`, {
      'ctor_id': this.state.ctorId
    })
      .then(response => {
        this.setState({
          ctor: response.data
        });
        // console.log(response.data);
      })
      .catch(error => this.setState({message: error.message}));
  }

  getContractAddress(tx_hash) {
    w3.eth.getTransactionReceipt(tx_hash, (err, receipt) => {
      if (null == receipt)
        window.setTimeout(() => {this.getContractAddress(tx_hash)}, 500);
      else {
        this.setState({
          mode: 'done',
          contractAddress: receipt.contractAddress
        });
      }
    });
  }

  getNetId() {
    w3.version.getNetwork((err, netId) => {
      netId && this.setState({netId});
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const {contractAddress, netId, instance} = nextState;

    if (contractAddress && netId) {
      api(this.props.auth).post(`/set_instance_address`, {
        instance_id: instance.instance_id,
        address: contractAddress,
        network_id: Number.parseInt(netId, 10)
      })

      .catch(error => console.log(error));
    }
  }

  submit({formData}) {
    // if Validation ok
    this.setState({spinner: true});

    const instTitle = formData.instance_title;
    delete formData.instance_title;
    api(this.props.auth).post(`/construct`, {
      ctor_id: this.state.ctorId,
      instance_title: instTitle,
      fields: formData
    })
      .then(response => {
        if (response.data.result === 'error') {
          this.setState({
            spinner: false,
            errors: response.data.errors
          });

        } else {
          this.setState({
            mode: 'source',
            instance: response.data,
            spinner: false,
            errors: null
          });
        }
      })
      .catch(error => console.log(error));
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
    const {ctor, mode, errors, spinner, instance} = this.state;

    // Add instance name field in the form beginning
    if (ctor) {
      ctor.schema.properties.instance_title = {
        title: "Instance name",
        type: "string",
        description: "Name of smart contract instance you are now configuring and deploying (any string of 3..100 chars)",
        minLength: 3,
        maxLength: 100
      };
      ctor.schema.required.push("instance_title");

      if (ctor.ui_schema && ("ui:order" in ctor.ui_schema)) {
        ctor.ui_schema["ui:order"].unshift("instance_title");

      } else {
        if (!ctor.ui_schema)
          ctor.ui_schema = {};

        ctor.ui_schema["ui:order"] = Object.keys(ctor.schema.properties);
        ctor.ui_schema["ui:order"].unshift(ctor.ui_schema["ui:order"].pop())
      }
    }

    return (
      <div>
        <div className="container">
          {ctor &&
            <div>
              <h1>{ctor.ctor_name}</h1>
              <p className="desc">{ctor.ctor_descr}</p>
            </div>
          }

          {!mode && ctor &&
            <Panel header="Deploy step 1 of 2: customize your contract">
              {!spinner &&
                <Form schema={ctor.schema}
                  uiSchema={ctor.ui_schema}
                  widgets={FormWidgets}
                  onSubmit={this.submit.bind(this)}
                  onError={(e) => console.log("I have", e.length, "errors to fix")}
                  showErrorList={false}>
                  <div>
                    <Button bsStyle="success"
                      className="btn-margin"
                      type="submit"
                      disabled={this.state.spinner}>
                      Proceed to step 2
                    </Button>
                    {errors &&
                      // TODO: нормальная обработка ошибок с бека
                      <div className="alert alert-danger" role="alert">
                        {Object.keys(errors).forEach((errName) => (
                          <p key={errName}>{errors[errName]}</p>
                        ))}
                      </div>
                    }
                  </div>
                </Form>
              }

              {spinner &&
                <Spinner
                  text="Preparing code, this can take up to 30-40 seconds..."
                  alt="Spinner"
                />
              }
            </Panel>
          }

          {mode === "source" &&
            <Panel header="Deploy step 2 of 2: check the code">
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Contract source</ControlLabel>
                  <FormControl componentClass="textarea"
                    rows="20"
                    placeholder="If you don't see source code here, perhaps something gone wrong"
                    defaultValue={instance.source} />
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

          {(mode === "deploying" || mode === "done") &&
            <Panel header={mode === "deploying" ? "Deploy in progress" : "Contract deployed!"}>
              <p>
                Deploy transaction hash:<br />
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
                <p>
                  Your contract address:<br />
                  <a href={getNetworkEtherscanAddress(this.state.netId) + '/address/' + this.state.contractAddress}>
                    {this.state.contractAddress}
                  </a>
                </p>
              }
            </Panel>
          }
        </div>
      </div>
    );
  }
}

export default Deploy;
