import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import {processControlForm, processResult} from 'Eth/Eth';
import FormWidgets from 'FormWidgets/FormWidgets';

if (window.Web3) {
  var w3 = new window.Web3(window.web3.currentProvider);
}

class FunctionCard extends Component {
  submit() {

  }

  render() {
    const {func} = this.props;
    // instance && console.log(instance.functions);

    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{func.name}</h4>

          <p className="card-text">
            {func.description &&
              <span className="desc">{func.description}</span>
            }
            {!func.description &&
              <span className="no-desc">No description provided by contract developer :(</span>
            }
          </p>

          {typeof func.value !== 'undefined' &&
            <div className="func-value">{func.value.toString()}</div>
          }

          {(!func.constant || func.inputs.minItems !== 0) &&
            <Form schema={func.inputs}
              widgets={FormWidgets}
              onSubmit={this.submit.bind(this)}
              onError={(e) => console.log("I have", e.length, "errors to fix")}
              showErrorList={false}>

              <div className="submit-button">
                <Button bsStyle="success" bsSize="xsmall"
                  className="btn-margin"
                  type="submit">
                  Send transaction
                </Button>
              </div>
            </Form>
          }
        </div>
      </div>
    );
  }
}

export default FunctionCard;
