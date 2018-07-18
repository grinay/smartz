import { find } from 'lodash';
import * as React from 'react';
import Form from 'react-jsonschema-form';
import InlineSVG from 'svg-inline-react';

import { blockchains } from '../../../../constants/constants';
import { getFuncType } from '../../../../helpers/common';
import Eos from '../../../../helpers/eos';
import { processControlForm, web3 as w3 } from '../../../../helpers/eth';
import store from '../../../../store/store';
import FormWidgets from '../../../common/form-widgets/FormWidgets';
import Modal from '../../../common/modal/Modal';
import { requestNew, transactionNew, transactionReceipt } from '../../DappActions';

import './ModalFunc.less';


interface IModalFuncProps {
  func: any;
  dapp: any;
  isOpen: boolean;
  onClose: () => void;
}

interface IModalFuncState { }


export default class ModalFunc extends React.PureComponent<IModalFuncProps, IModalFuncState> {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.getReceipt = this.getReceipt.bind(this);
  }

  private submit({ formData }) {
    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (typeof formData === 'object' && !Object.keys(formData).length) {
      formData = [];
    }

    const { func, dapp, onClose } = this.props;

    switch (dapp.blockchain) {
      case blockchains.ethereum:
        processControlForm(dapp.abi, func, formData, dapp.address,
          (error, response) => {
            const funcType = getFuncType(func);

            if (funcType === 'ask') {
              const result: any = error === null ? response : error;

              store.dispatch(requestNew(dapp.id, func, formData, result));
            } else if (funcType === 'write') {
              const result: any = error === null ? response : error;

              store.dispatch(transactionNew(dapp.id, func, formData, result));
              this.getReceipt(response);
            }

            // close modal window after execute function
            onClose();
          });
        break;
      case blockchains.eos:
        Eos.executeFunc(dapp.abi, func, dapp.address, formData)
          .then((result) => {
            store.dispatch(transactionNew(dapp.id, func, formData, result));
          })
          .catch((err) => {
            console.error(err);
            let error = JSON.parse(err);

            error = error.error.what || error.message || 'error';

            store.dispatch(transactionNew(dapp.id, func, formData, error));
          });

        // close modal window after execute function
        onClose();
        break;

      default:
        break;
    }
  }

  private getReceipt(tx) {
    const { dapp } = this.props;

    w3.eth.getTransactionReceipt(tx, (err, receipt) => {
      if (null == receipt) {
        window.setTimeout(() => this.getReceipt(tx), 500);
      } else {
        store.dispatch(transactionReceipt(dapp.id, tx, receipt));

        // refresh 'view' functions
        // processControlForm(dapp.abi, func, [], dapp.address, (error, result) => {
        //   if (error) {
        //     console.error(error);
        //   } else {
        //     viewFuncResult(dapp.id, func.name, processResult(result));
        //   }
        // });
      }
    });
  }

  public render() {
    const { func, isOpen, onClose } = this.props;

    if (!func) {
      return null;
    }

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
          'ui:widget': 'ethCount',
        });
      }
    }

    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (!func.constant && func.inputs.minItems === 0) {
      func.inputs = {
        $schema: 'http://json-schema.org/draft-06/schema#',
        type: 'object',
        properties: {},
      };
    }

    // build uiSchema from func
    let uiSchema = { items: [] };
    if (func.inputs && func.inputs.items) {
      for (let input of func.inputs.items) {
        let item = {};
        if (typeof input === 'object' && 'ui:widget' in input) {
          item = {
            'ui:widget': input['ui:widget'],
          };
          if ('ui:options' in input) {
            item['ui:options'] = input['ui:options'];
          }
        }
        uiSchema.items.push(item);
      }
    }

    return (
      <div className="modal-func">
        <Modal
          isOpen={isOpen}
          isCloser={false}
          onClose={onClose}
          windowClassName="modal-window"
          closerClassName="modal-closer flex"
        >
          <button
            className="close"
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            <InlineSVG
              className="x-icon"
              src={require('../../../../assets/img/common/x-icon.svg')}
            />
          </button>
          <h1 className="title">{func.title}</h1>
          <p className="description">{func.description}</p>

          <Form
            className="function-form"
            schema={func.inputs}
            uiSchema={uiSchema}
            widgets={FormWidgets}
            onSubmit={this.submit}
            onError={(e) => console.warn('I have', e, 'errors to fix')}
            showErrorList={false}
          >
            {/* <h3 className="form-block__header">
              {func.title || func.name}
              {func.title && func.name && func.title !== func.name && <span> ({func.name})</span>}
            </h3>
            {func.description && <span className="form-block__description">{func.description}</span>} */}

            <div className="function-form__button">
              <button
                className="button-base"
                type="submit"
                name="mint-form-submit"
              >
                Execute
          </button>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
