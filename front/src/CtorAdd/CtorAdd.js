import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Form from 'react-jsonschema-form';

import {API_URL} from '../constants';

// TODO: success/error message after submit

class CtorAdd extends Component {
  submit({formData}) {
    axios.post(`${API_URL}/upload_ctor`, formData)
      .then(response => console.log(response.data.message))
      .catch(error => console.log(error));
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.files ? e.target.files[0] : e.target.value});
  }
  render() {
    const formSchema = {
      "type": "object",
      "required": ["ctor_name", "ctor_file_name", "ctor_descr", "price_eth"],
      "additionalProperties": false,
      "properties": {
        "ctor_name": {
          "title": "Public name of the smart contract (3..100 chars)",
          "type": "string",
          "minLength": 3,
          "maxLength": 100,
          "pattern": "^[a-zA-Z0-9_ -]+$"
        },
        "ctor_file_name": {
          "title": "Name of smart contract .py file (3..100 chars)",
          "type": "string",
          "minLength": 3,
          "maxLength": 100,
          "pattern": "^[a-zA-Z0-9_-]+$"
        },
        "ctor_descr": {
          "title": "Description of the smart contract (3..300 chars)",
          "type": "string",
          "minLength": 3,
          "maxLength": 300
        },
        "price_eth": {
          "title": "Price of deploy in ETH",
          "description": "0 = free contract",
          "type": "number",
          "minimum": 0,
          "maximum": 1000000,
          "default": 0.1
        }
      }
    };
    const uiSchema = {
      "ctor_name": {
        "ui:placeholder": "My ever best contract"
      },
      "ctor_file_name": {
        "ui:placeholder": "without_extension"
      },
      "ctor_descr": {
        "ui:widget": "textarea",
        "ui:placeholder": "Some sentences about contract purposes and functions"
      }
    };
    return (
      <div className="container">
        <h1>Add a smart contract</h1>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Welcome!</h4>
          <p>
            <b>Unfortunately, independent smart contracts upload function is not ready yet!</b><br />
            But if you are interested in contributing our project, feel free to <a href="https://t.me/LoungerX">get in touch with us</a>.
          </p>
        </div>
        <Form schema={formSchema}
          uiSchema={uiSchema}
          onSubmit={this.submit.bind(this)}
          showErrorList={false}>
          <Button bsStyle="primary"
            className="btn-margin"
            type="submit">
            Submit a contract
          </Button>
        </Form>
      </div>
    );
  }
}

export default CtorAdd;
