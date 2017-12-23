import React, {Component} from 'react';
import {Panel, ControlLabel, Glyphicon, Button, FormGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';

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
      spinner: false
    };
  }

  componentWillMount() {
    this.state.auth && this.getCtorParams();
  }

  getCtorParams() {
    axios.post(`${API_URL}/get_ctor_params`, {
      'ctor_id': this.props.match.params.id
    })
      .then(response => {
        this.setState({ctor: response.data});
        console.log(response.data);
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

  deployContract(bin) {
    w3.eth.sendTransaction({data: bin}, (err, tx_hash) => {
      console.log('tx_hash:', tx_hash);
      this.setState({
        mode: 'deploying',
        tx: tx_hash
      })
      this.getContractAddress(tx_hash);
    });
  }

  submit() {
    const {ctor} = this.state;
    const fields = {};
    ctor.ctor_params.forEach((obj, i) => {
      fields[obj.name] = this.state[obj.name];
    });
    this.setState({
      spinner: true
    });
    axios.post(`${API_URL}/construct`, {
      'ctor_id': this.props.match.params.id,
      fields
    })
      .then(response => {
        // console.log(response.data);
        this.setState({
          mode: 'source',
          data: response.data,
          spinner: false
        });
      })
      .catch(error => console.log(error));
  }

  setValue(name, value) {
    this.setState({
      [name]: value
    });
  }

  deploy() {
    const bin = this.state.data.bin;
    this.deployContract(bin);
  }

  render() {
    const {ctor, mode} = this.state;
    return (
      <div>
          <div className="container">
            {this.state.ctor &&
              <div>
                <h1>{ctor.ctor_name}</h1>
                <p className="desc">Contract description. Lorem ipsum vestibulum sed turpis curabitur magna, consequat aliquet bibendum in amet aliquet, leo nam iaculis posuere vitae.</p>
              </div>
            }
            {!mode && this.state.ctor &&
              <Panel header="Deploy step 1 of 2: customize your contract">
                <form>
                  {ctor.ctor_params.map((el, i) => (
                    <ContractParameter params={el} key={i} callback={this.setValue.bind(this)} />
                  ))}
                  <Button
                    bsStyle="success"
                    className="btn-margin"
                    onClick={this.submit.bind(this)}
                    disabled={this.state.spinner}
                  >
                    Proceed to step 2
                  </Button>
                  {this.state.spinner &&
                    <Spinner
                      text="Preparing your contract, this can take up to 30-40 seconds..."
                      alt="Preparing contract..."
                    />
                  }
                </form>
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
