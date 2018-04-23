import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import Alert from '../common/Alert';
import api from '../helpers/api';

class CtorAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit({ formData }) {
    formData['constructor_id'] = this.getId();

    api(this.props.auth).post(`/constructors/upload`, formData)
      .then(response => {
        if (response.data.error) {
          this.setState({ error: response.data.error });

        } else {
          this.setState({ message: `Contract "${formData.ctor_name}" uploaded.` });
        }
      })

      .catch(error => {
        this.setState({ error });
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.files ? e.target.files[0] : e.target.value });
  }

  getId() {
    return this.props.match && this.props.match.params ? this.props.match.params.id : null
  }

  render() {
    let constructorId = this.getId();

    const formSchema = {
      "type": "object",
      "required": ["ctor_name", "ctor_descr", "price_eth"],
      "oneOf": [{
        "required": ["ctor_file_name"]
      }, {
        "required": ["ctor_file"]
      }],
      "additionalProperties": false,
      "properties": {
        "ctor_name": {
          "title": "Public name of the smart contract (3..100 chars)",
          "type": "string",
          "minLength": 3,
          "maxLength": 100,
          "pattern": "^[a-zA-Z0-9_ -]+$"
        },
        "ctor_file": {
          "title": "Smart contract .py file",
          "type": "string",
          "format": "data-url"
        },
        "ctor_file_name": {
          "title": "Name of smart contract .py file (legacy)",
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
        "payment_address": {
          "title": "Address",
          "description": "Payment for contract deploy will be sent to this address",
          "type": "string",
          "pattern": "^0x[0-9a-fA-F]{40}$"
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

    const { message, error } = this.state;

    return (
      <main className="page-main page-main--contracts">
        <section className="block">
          <h2 className="block__header">
            {constructorId ? 'Update the' : 'Add a'} smart contract
          </h2>

          <Form schema={formSchema}
            uiSchema={uiSchema}
            onSubmit={this.submit.bind(this)}
            showErrorList={false}>
            <div className="block__wrapper" style={{ marginBottom: '40px' }}>
              <Button bsStyle="primary"
                className="button block__button"
                type="submit">
                {constructorId ? 'Update' : 'Submit'} the contract
              </Button>
            </div>
          </Form>

          <br />

          {message &&
            <Alert color="green">
              <p>{message}</p>
            </Alert>
          }

          {error &&
            <Alert>
              <p>{error}</p>
            </Alert>
          }
        </section>
      </main>
    );
  }
}

export default CtorAdd;
