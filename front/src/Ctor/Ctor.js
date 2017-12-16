import React, {Component} from 'react';
import {Panel, ControlLabel, Glyphicon, Button, FormGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';

import {API_URL} from '../constants';
import CtorParam from './CtorParam';

// ==== Deploy code BEGIN =======================
const w3 = new window.Web3(window.web3.currentProvider);

function getContractAddress(tx_hash) {
  w3.eth.getTransactionReceipt(tx_hash, function(err, receipt) {
    if (null == receipt)
      window.setTimeout(function(){ getContractAddress(tx_hash) }, 500);
    else
      alert('contractAddress:', receipt.contractAddress);
  });
}

function deployContract(bin) {
  w3.eth.sendTransaction({data: bin}, function(err, tx_hash) {
    // console.log('tx_hash:', tx_hash);
    getContractAddress(tx_hash);
  });
}
// ==== Deploy code END =======================

class Ctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.auth.isAuthenticated() && this.getCtorParams();
  }
  getCtorParams() {
    axios.post(`${API_URL}/get_ctor_params`, {
      'ctor_id': this.props.match.params.id
    })
      .then(response => {
        this.setState({ctor: response.data});
        // console.log(response.data);
      })
      .catch(error => this.setState({message: error.message}));
    /*
    this.setState({ctor: {
      ctor_name: 'Token smart contract constructor',
      ctor_params: [
        {
            name: 'contract_name',
            human_name: 'Contract name',
            type: 'string',
            desc: 'this is hard cap, blablabla, long description'
        },
        {
            name: 'hard_cap',
            human_name: 'Hard cap',
            type: 'int',
            desc: 'this is hard cap, blablabla, long description'
        },
        {
            name: 'owner_address',
            human_name: 'Owner address',
            type: 'address',
            desc: 'this is hard cap, blablabla, long description'
        },
        {
            name: 'start_time',
            human_name: 'Start time',
            type: 'datetime',
            desc: 'this is hard cap, blablabla, long description'
        }
      ]
    }});
    */
  }
  submit() {
    const {ctor} = this.state;
    const fields = {};
    ctor.ctor_params.forEach((obj, i) => {
      fields[obj.name] = this.state[obj.name];
    });
    axios.post(`${API_URL}/construct`, {
      'ctor_id': this.props.match.params.id,
      fields
    })
      .then(response => {
        // console.log(response.data);
        this.setState({
          mode: 'source',
          data: response.data
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
    deployContract(bin);
  }
  render() {
    const {ctor, mode} = this.state;
    return (
      <div>
        {mode != "source" && this.state.ctor &&
          <div className="container">
            <h1>{ctor.ctor_name}</h1>
            <Panel header="Construct your contract">
              <form>
                {ctor.ctor_params.map((el, i) => (
                  <CtorParam params={el} key={i} callback={this.setValue.bind(this)} />
                ))}
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.submit.bind(this)}
                >
                  Submit parameters
                </Button>
              </form>
            </Panel>
          </div>
        }
        {mode === "source" &&
          <div className="container">
            <h1>{ctor.ctor_name}</h1>
            <Panel header="Final check before deploy">
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
                  bsStyle="warning"
                  className="btn-margin"
                  onClick={this.deploy.bind(this)}
                >
                  Deploy
                </Button>
              </form>
            </Panel>
          </div>
        }
      </div>
    );
  }
}

export default Ctor;
