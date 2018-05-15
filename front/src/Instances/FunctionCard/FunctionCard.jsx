import React, { PureComponent } from 'react';
import Form from 'react-jsonschema-form';
import { find } from 'lodash';

import {
  web3 as w3,
  processControlForm
} from '../../helpers/eth';
import FormWidgets from '../../common/form-widgets/FormWidgets';

import './FunctionCard.css';

class FunctionCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

  }

  submit({ formData }) {
    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (typeof formData === "object" && !Object.keys(formData).length) {
      formData = []
    }
    const { func, instance, transactionNew } = this.props;
    const { abi, address } = this.props.instance;

    processControlForm(abi, func, formData, address,
      (error, result) => {
        if (!error) {
          // console.log(result);
          transactionNew(instance.instance_id, func, formData, result);
          if (/^0x([A-Fa-f0-9]{64})$/.test(result)) // Check if result is tx hash
            this.getReceipt(result);

        } else {
          console.log(error);
          transactionNew(instance.instance_id, func, formData, 'error');
        }
      });
  }

  getReceipt(tx) {
    const { transactionReceipt, instance, refresh } = this.props;

    w3.eth.getTransactionReceipt(tx, (err, receipt) => {
      if (null == receipt)
        window.setTimeout(() => { this.getReceipt(tx) }, 500);

      else {
        // console.log(receipt);
        transactionReceipt(instance.instance_id, tx, receipt);
        refresh();
      }
    });
  }

  render() {
    const { func } = this.props;
    if (!func) return null;

    // prevent mutate data
    const fnc = Object.assign({}, { ...func });

    // add field for ethCount in schema
    if (fnc.payable) {

      // if function is 'default function'
      if (fnc.name === '') {
        fnc.type = 'fallback';
        fnc.title = fnc.title ? fnc.title : 'Send ether';
        fnc.description = fnc.description
          ? fnc.description
          : 'Send ether to contract';
      }

      if (fnc.inputs.items === undefined)
        fnc.inputs.items = [];

      // const existValue = find(func.inputs.items, { title: "Ether amount (custom)" });

      // if (!existValue) {
      fnc.inputs.minItems += 1;
      fnc.inputs.maxItems += 1;

      fnc.inputs.items.push({
        "type": "number",
        "minLength": 1,
        "maxLength": 78,
        "pattern": "^[0-9]+$",
        "title": (fnc.payable_details && fnc.payable_details.title)
          ? fnc.payable_details.title
          : 'Ether amount',
        "description": (fnc.payable_details && fnc.payable_details.description)
          ? fnc.payable_details.description
          : fnc.name === '' // if 'default function'
            ? 'This ether amount will be sent to the contract'
            : 'This ether amount will be sent with the function call',
        "ui:widget": "ethCount"
      });
      // }
    }

    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (!fnc.constant && fnc.inputs.minItems === 0) {
      fnc.inputs = {
        "$schema": "http://json-schema.org/draft-06/schema#",
        type: "object",
        properties: {}
      };
    }

    // build uiSchema from func
    let uiSchema = { items: [] };
    if (fnc.inputs && fnc.inputs.items) {
      for (let input of fnc.inputs.items) {
        let item = {};
        if (typeof input === 'object' && 'ui:widget' in input) {
          item = {
            'ui:widget': input['ui:widget']
          };
          if ('ui:options' in input) {
            item['ui:options'] = input['ui:options'];
          }
        }
        uiSchema.items.push(item)
      }
    }

    return (
      <Form className="contract-controls__form"
        schema={fnc.inputs}
        uiSchema={uiSchema}
        widgets={FormWidgets}
        onSubmit={this.submit.bind(this)}
        onError={(e) => console.log("I have", e, "errors to fix")}
        showErrorList={false}>

        <h3 className="form-block__header">
          {fnc.title || fnc.name}
          {(fnc.title && fnc.name && (fnc.title !== fnc.name)) &&
            <span> ({fnc.name})</span>
          }
        </h3>
        {fnc.description &&
          <span className="form-block__description">{fnc.description}</span>
        }

        <div className="contract-controls__inner">
          <button
            className="button contract-controls__form-button"
            type="submit"
            name="mint-form-submit"
          >
            Execute
          </button>
        </div>
      </Form>
    );
  }
}

export default FunctionCard;
