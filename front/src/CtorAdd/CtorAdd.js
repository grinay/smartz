import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

import {API_URL} from 'constants';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class CtorAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  submit() {

  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div className="container">
        <h1>Create contract</h1>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Enter contract name"
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <FieldGroup
            id="formControlsFile"
            type="file"
            label="File"
            help="Example block-level help text here."
            onChange={this.handleChange.bind(this)}
          />
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.submit.bind(this)}
          >
            Submit contract
          </Button>
        </form>
      </div>
    );
  }
}

export default CtorAdd;
