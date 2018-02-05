import React, {Component} from 'react';
import {Panel, ControlLabel, Button, FormGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';
import Form from 'react-jsonschema-form';
import Datetime from 'react-datetime';
import moment from 'moment';

import {API_URL} from '../constants';
import Spinner from './Spinner';

import 'react-datetime/css/react-datetime.css';
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
    axios.post(`${API_URL}/get_ctor_params`, {
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
        axios.post(`${API_URL}/set_instance_address`, {
          'instance_id': this.state.instance.instance_id,
          'address': receipt.contractAddress
        })
        .catch(error => console.log(error));
      }
    });
  }

  submit({formData}) {
    // if Validation ok
    this.setState({
      spinner: true
    });
    axios.post(`${API_URL}/construct`, {
      'ctor_id': this.state.ctorId,
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
      // console.log('tx_hash:', tx_hash);
      this.setState({
        mode: 'deploying',
        tx: tx_hash
      })
      this.getContractAddress(tx_hash);
    });
  }

  getWidgets() {
    return {
      unixTime: (props) => {
        return (
          <Datetime value={moment.unix(props.value)}
            required={props.required}
            onChange={(valueMoment) => props.onChange(valueMoment.format('X'))}
            closeOnSelect={true} />
        );
      }
    }
  }

  render() {
    const {ctor, mode, errors, spinner, instance} = this.state;
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
                    widgets={this.getWidgets()}
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
                    <FormControl
                      componentClass="textarea"
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
                    <a href={'https://rinkeby.etherscan.io/address/' + this.state.contractAddress}>
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
