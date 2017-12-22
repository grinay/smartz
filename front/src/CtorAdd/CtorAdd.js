import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import axios from 'axios';

import {API_URL} from '../constants';

class CtorAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      file: ''
    };
  }
  submit() {
    axios.post(`${API_URL}/upload_ctor`, {
      'ctor_name': this.state.name,
      'ctor_file_name': this.state.file
    })
      .then(response => console.log(response.data.message))
      .catch(error => console.log(error));

  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.files ? e.target.files[0] : e.target.value});
  }
  render() {
    return (
      <div className="container">
        <h1>Add a smart contract</h1>
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Welcome!</h4>
          <p>
            <b>Unfortunately, independent smart contracts upload function is not ready yet!</b><br />
            But if you are interested in contributing our project, feel free to <a href="https://t.me/LoungerX">get in touch with us</a>.
          </p>
        </div>
        <form encType="multipart/form-data">
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
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              name="file"
              type="text"
              value={this.state.file}
              placeholder="Enter file name (or what?)"
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.submit.bind(this)}
          >
            Submit a contract
          </Button>
        </form>
      </div>
    );
  }
}

export default CtorAdd;
