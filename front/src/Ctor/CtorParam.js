import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class CtorParam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  getValidationState(type) {
    const value = this.state.value;
    if (value) {
      switch (type) {
        case "string":
          if (value.length > 3) return 'success';
          else return 'warning';
        case "int":
          if (/\d+/.test(value)) return 'success';
          else return 'error';
        case "address":
          if (/^0x[0-9a-fA-F]{40}$/.test(value)) return 'success';
          else return 'error';
        case "datetime":
          if (typeof value === "object") return 'success';
          else return 'error';
      }
    }
    return null;
  }
  handleChange(e) {
    this.setState({value: e.target ? e.target.value : e});
  }
  render() {
    const {name, human_name, type, desc} = this.props.params;
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={this.getValidationState(type)}
      >
        <ControlLabel>{human_name}</ControlLabel>
        {type === 'string' &&
          <FormControl
            name={name}
            type="text"
            value={this.state.value}
            placeholder="Enter string value"
            onChange={this.handleChange.bind(this)}
          />
        }
        {type === 'int' &&
          <FormControl
            name={name}
            type="text"
            value={this.state.value}
            placeholder="Enter integer value"
            onChange={this.handleChange.bind(this)}
          />
        }
        {type === 'address' &&
          <FormControl
            name={name}
            type="text"
            value={this.state.value}
            placeholder="Enter valid Ethereum address"
            onChange={this.handleChange.bind(this)}
          />
        }
        {type === 'datetime' &&
          <Datetime
            inputProps={{name}}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        }
        <FormControl.Feedback />
        <HelpBlock>{desc}</HelpBlock>
      </FormGroup>
    );
  }
}

export default CtorParam;
