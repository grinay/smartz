import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-jsonschema-form';

import {
  web3 as w3,
  processControlForm,
  processResult,
  getNetworkEtherscanAddress
} from 'helpers/eth';
import FormWidgets from 'common/FormWidgets';
import Spinner from 'common/Spinner';

class FunctionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit({formData}) {
    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (typeof formData === "object" && !Object.keys(formData).length) {
        formData = []
    }
    const {func, instance, instanceFuncResult} = this.props;
    const {abi, address} = this.props.instance;
    // TODO: special processing of ask functions results
    processControlForm(abi, func, formData, address,
                      (error, result) => {
      if (!error) {
        // console.log(result);
        if (/^0x([A-Fa-f0-9]{64})$/.test(result)) { // Check if result is tx hash
          this.setState({
            tx: result,
            spinner: true
          });
          this.getReceipt(result);

        } else { // Not string means array -> means some data
          instanceFuncResult(instance.instance_id, func.name, processResult(result));
        }

      } else {
        console.error(error);
      }
    });
  }

  getReceipt(tx) {
    w3.eth.getTransactionReceipt(tx, (err, receipt) => {
      if (null == receipt)
        window.setTimeout(() => {this.getReceipt(tx)}, 500);
      else {
        // console.log(receipt);
        this.setState({
          receipt: receipt,
          spinner: false
        });
        this.props.refresh();
      }
    });
  }

  render() {
    const {func, instance} = this.props;
    const {tx, spinner} = this.state;
    const value = instance.funcResults ? instance.funcResults[func.name] : '';

    if (!func.constant && func.inputs.minItems === 0) {
      func.inputs.items = [];
    }

    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (!func.constant && func.inputs.minItems === 0) {
      func.inputs = {
        "$schema": "http://json-schema.org/draft-06/schema#",
        type: "object",
        properties: {}
      };
    }

    return (
      <Form className="contract-controls__form"
        schema={func.inputs}
        widgets={FormWidgets}
        onSubmit={this.submit.bind(this)}
        onError={(e) => console.log("I have", e.length, "errors to fix")}
        showErrorList={false}>

        <h3 className="form-block__header">
          {func.title || func.name}
          {(func.title && (func.title !== func.name)) &&
            <span> ({func.name})</span>
          }
        </h3>
        {func.description &&
          <span className="form-block__description">{func.description}</span>
        }

        <div className="contract-controls__inner">
          <button className="button  contract-controls__form-button" type="submit" name="mint-form-submit">
            Execute
          </button>
        </div>
      </Form>
    );
  }
}

export default FunctionCard;

/*


      <form id="mint-form" className="contract-controls__form" action="#" method="post">
        <fieldset className="form-block  form-block--owner  form-block--contract-controls">
          <div className="form-field  form-field--owner">
            <label for="mint-id" className="form-field__label">
              Mint id
            </label>
            <span className="form-block__description">
              32 bytes
            </span>
            <div className="form-field__input-wrapper">
              <input type="text" className="form-field__input" id="mint-id" />
            </div>
          </div>
          <div className="form-field  form-field--owner">
            <label for="mint-address" className="form-field__label">
              To
            </label>
            <span className="form-block__description">
              Address
            </span>
            <div className="form-field__input-wrapper">
              <input type="text" className="form-field__input" id="mint-address" />
            </div>
          </div>
          <div className="form-field  form-field--owner">
            <label for="mint-amount" className="form-field__label">
              Amount
            </label>
            <span className="form-block__description">
              256 bit unsigned integer
            </span>
            <div className="form-field__input-wrapper">
              <input type="email" className="form-field__input" id="mint-amount" />
            </div>
          </div>
        </fieldset>

        {/*
            {typeof value !== 'undefined' &&
              <div className="func-value">{value.toString()}</div>
            }

            {tx &&
              <div className="tx">
                {spinner
                  ? <span>Wait for transaction to be mined:&ensp;</span>
                  : <span>Transaction mined:&ensp;</span>
                }
                <a href={`${getNetworkEtherscanAddress(instance.network_id)}/tx/${tx}`}>
                  {tx}
                </a>
                {spinner &&
                  <Spinner text="This can take up to minute..." />
                }
              </div>
            }

          </div>
        </div>
        }

      </form>
*/
