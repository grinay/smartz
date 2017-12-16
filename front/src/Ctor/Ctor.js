import React, {Component} from 'react';
import {Panel, ControlLabel, Glyphicon, Button} from 'react-bootstrap';

import {API_URL} from 'constants';
import CtorParam from './CtorParam';

class Ctor extends Component {
  componentWillMount() {
    this.props.auth.isAuthenticated() && this.getCtorParams();
  }
  getCtorParams() {
    /*
    axios.post(`${API_URL}/get_ctor_params`, {
      'ctor_id': this.props.match.params.id
    })
      .then(response => this.setState({ctors: response.data.message}))
      .catch(error => this.setState({message: error.message}));
    */
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
  }
  submit() {

  }
  render() {
    const {ctor} = this.state;
    return (
      <div className="container">
        <h1>{ctor.ctor_name}</h1>
        <Panel header="Profile">
          <form>
            {ctor.ctor_params.map((el, i) => (
              <CtorParam params={el} key={i} />
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
    );
  }
}

export default Ctor;
