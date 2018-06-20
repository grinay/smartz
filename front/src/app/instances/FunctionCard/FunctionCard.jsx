import React, { PureComponent } from 'react';
import Form from 'react-jsonschema-form';
import { find } from 'lodash';

import { web3 as w3, processControlForm } from '../../../helpers/eth';
import Eos from '../../../helpers/eos';

import FormWidgets from '../../common/form-widgets/FormWidgets';

import './FunctionCard.less';
import { blockchains } from '../../../constants/constants';
import { getFuncType } from '../../../helpers/common';

class FunctionCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit({ formData }) {
    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (typeof formData === 'object' && !Object.keys(formData).length) {
      formData = [];
    }

    const { func, instance, transactionNew } = this.props;
    const { abi, address } = this.props.instance;

    switch (instance.blockchain) {
      case blockchains.ethereum:
        processControlForm(abi, func, formData, address, (error, result) => {
          if (!error) {
            transactionNew(instance.instance_id, func, formData, result);
            if (/^0x([A-Fa-f0-9]{64})$/.test(result))
              // Check if result is tx hash
              this.getReceipt(result);
          } else {
            console.error(error);
            transactionNew(instance.instance_id, func, formData, error);
          }
        });
        break;
      case blockchains.eos:
        Eos.executeFunc(func, address, formData)
          .then((data) => {
            let result = '';

            switch (getFuncType(data.func)) {
              case 'ask':
                if (data.func.title === 'Get balance') {
                  result =
                    data.formData[0] === data.result.rows[0].owner
                      ? data.result.rows[0].balance
                      : 'Not found';
                } else {
                  result = JSON.stringify(data.result.rows[0]);
                }
                break;
              case 'write':
                result = data.result.transaction_id;
                break;
              case 'view':
                break;

              default:
                break;
            }

            transactionNew(instance.instance_id, func, formData, result);
            window.scrollTo(0, 0);
          })
          .catch((err) => {
            console.error(err);
            let error = 'error';

            try {
              error = JSON.parse(err).message;
            } catch (error) {}

            transactionNew(instance.instance_id, func, formData, error);
          });
        break;

      default:
        break;
    }
  }

  getReceipt(tx) {
    const { transactionReceipt, instance, refresh } = this.props;

    w3.eth.getTransactionReceipt(tx, (err, receipt) => {
      if (null == receipt)
        window.setTimeout(() => {
          this.getReceipt(tx);
        }, 500);
      else {
        transactionReceipt(instance.instance_id, tx, receipt);
        refresh();
      }
    });
  }

  render() {
    const { func, instance } = this.props;
    if (!func) return null;

    // add field for ethCount in schema
    if (func.payable) {
      // if function is 'default function'
      if (func.name === '') {
        func.type = 'fallback';
        func.title = func.title ? func.title : 'Send ether';
        func.description = func.description ? func.description : 'Send ether to contract';
      }

      if (func.inputs.items === undefined) func.inputs.items = [];

      const payableTitle =
        func.payable_details && func.payable_details.title
          ? func.payable_details.title
          : 'Ether amount';

      const payableDescription =
        func.payable_details && func.payable_details.description
          ? func.payable_details.description
          : func.name === '' // if 'default function'
            ? 'This ether amount will be sent to the contract'
            : 'This ether amount will be sent with the function call';

      const existValue = find(func.inputs.items, { title: payableTitle });

      if (!existValue) {
        func.inputs.minItems += 1;
        func.inputs.maxItems += 1;

        func.inputs.items.push({
          type: 'number',
          minLength: 1,
          maxLength: 78,
          pattern: '^[0-9]+$',
          title: payableTitle,
          description: payableDescription,
          'ui:widget': 'ethCount'
        });
      }
    }

    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (!func.constant && func.inputs.minItems === 0) {
      func.inputs = {
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        properties: {}
      };
    }

    // build uiSchema from func
    let uiSchema = { items: [] };
    if (func.inputs && func.inputs.items) {
      for (let input of func.inputs.items) {
        let item = {};
        if (typeof input === 'object' && 'ui:widget' in input) {
          item = {
            'ui:widget': input['ui:widget']
          };
          if ('ui:options' in input) {
            item['ui:options'] = input['ui:options'];
          }
        }
        uiSchema.items.push(item);
      }
    }

    return (
      <Form
        className="contract-controls__form"
        schema={func.inputs}
        uiSchema={uiSchema}
        widgets={FormWidgets}
        onSubmit={this.submit.bind(this)}
        onError={(e) => console.warn('I have', e, 'errors to fix')}
        showErrorList={false}>
        <h3 className="form-block__header">
          {func.title || func.name}
          {func.title && func.name && func.title !== func.name && <span> ({func.name})</span>}
        </h3>
        {func.description && <span className="form-block__description">{func.description}</span>}

        <div className="contract-controls__inner">
          <button
            className="button contract-controls__form-button"
            type="submit"
            name="mint-form-submit">
            Execute
          </button>
        </div>
      </Form>
    );
  }
}

export default FunctionCard;
