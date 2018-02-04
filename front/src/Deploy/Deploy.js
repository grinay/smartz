import React, {Component} from 'react';
import {Panel, ControlLabel, Glyphicon, Button, FormGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';
import Form from 'react-jsonschema-form';
import Datetime from 'react-datetime';
import moment from 'moment';

import {API_URL} from '../constants';
import ContractParameter from './ContractParameter';
import Spinner from './Spinner';

import './Deploy.css';

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
        window.setTimeout(() => { this.getContractAddress(tx_hash) }, 500);
      else
        this.setState({
          mode: 'done',
          contractAddress: receipt.contractAddress
        })
    });
  }

  deployContract(bin, price_eth) {
    w3.eth.sendTransaction({data: bin, value: w3.toWei(price_eth, 'ether')}, (err, tx_hash) => {
      // console.log('tx_hash:', tx_hash);
      this.setState({
        mode: 'deploying',
        tx: tx_hash
      })
      this.getContractAddress(tx_hash);
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
        if (response.data.result == 'error') {
          this.setState({
            spinner: false,
            errors: response.data.errors
          });
        } else {
          this.setState({
            mode: 'source',
            data: response.data,
            spinner: false,
            errors: null
          });
        }
      })
      .catch(error => console.log(error));
  }

  deploy() {
    const bin = this.state.data.bin;
    this.deployContract(bin, this.state.data.price_eth);
  }

  getWidgets() {
    return {
      unixDateTime: (props) => {
        return (
          <Datetime value={moment.unix(props.value)}
            required={props.required}
            onChange={(valMoment) => props.onChange(valMoment.format('X'))} />
        );
      }
    }
  }

  render() {
    const {ctor, mode, ui_schema, errors, spinner} = this.state;
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
                  </div>
                </Form>
                {errors &&
                  // TODO: нормальная обработка ошибок с бека
                  <div className="alert alert-danger" role="alert">
                    {Object.keys(errors).forEach((errName) => (
                      <p key={errName}>{errors[errName]}</p>
                    ))}
                  </div>
                }
                {spinner &&
                  <Spinner
                    text="Preparing your contract, this can take up to 30-40 seconds..."
                    alt="Preparing contract..."
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
                      defaultValue={this.state.data.source}
                    />
                  </FormGroup>
                  <Button
                    bsStyle="success"
                    className="btn-margin"
                    onClick={this.deploy.bind(this)}
                  >
                    Deploy it!
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
