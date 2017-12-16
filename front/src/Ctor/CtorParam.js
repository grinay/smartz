import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import Datetime from 'react-datetime';

class CtorParam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    const {name, human_name, type, desc} = this.props.params;
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={this.getValidationState()}
      >
        <ControlLabel>{human_name}</ControlLabel>
        {
        }
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange.bind(this)}
        />
        <FormControl.Feedback />
        <HelpBlock>{desc}</HelpBlock>
      </FormGroup>
    );
  }
}

export default CtorParam;
