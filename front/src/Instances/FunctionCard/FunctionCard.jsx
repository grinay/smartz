import React, {Component} from 'react';
import Form from 'react-jsonschema-form';

import {
  web3 as w3,
  processControlForm
} from 'helpers/eth';
import FormWidgets from 'common/FormWidgets';

import './FunctionCard.css';

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
    const {func, instance, transactionNew} = this.props;
    const {abi, address} = this.props.instance;

    processControlForm(abi, func, formData, address,
                      (error, result) => {
      if (!error) {
        // console.log(result);
        transactionNew(instance.instance_id, func, formData, result);
        if (/^0x([A-Fa-f0-9]{64})$/.test(result)) // Check if result is tx hash
          this.getReceipt(result);

      } else {
        console.error(error);
      }
    });
  }

  getReceipt(tx) {
    const {transactionReceipt, instance, refresh} = this.props;

    w3.eth.getTransactionReceipt(tx, (err, receipt) => {
      if (null == receipt)
        window.setTimeout(() => {this.getReceipt(tx)}, 500);

      else {
        // console.log(receipt);
        transactionReceipt(instance.instance_id, tx, receipt);
        refresh();
      }
    });
  }

  render() {
    const {func} = this.props;
    if (!func) return null;

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
*/
