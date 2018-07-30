import { find } from 'lodash';
import * as moment from 'moment';
import * as React from 'react';
import Form from 'react-jsonschema-form';
import InlineSVG from 'svg-inline-react';

import * as api from '../../../api/apiRequests';
import { blockchains, ethConstants } from '../../../constants/constants';
import { getFuncType } from '../../../helpers/common';
import { IDapp, IFunction } from '../../../helpers/entities/dapp';
import Eos from '../../../helpers/eos';
import { processControlForm, web3 as w3, web3 } from '../../../helpers/eth';
import { valToString } from '../../../helpers/normalize';
import store from '../../../store/store';
import FormWidgets from '../../common/form-widgets/FormWidgets';
import Modal from '../../common/modal/Modal';
import { requestNew, transactionNew, transactionReceipt } from '../DappActions';

import './ModalFunc.less';


interface IModalFuncProps {
  func: IFunction;
  dapp: IDapp;
  profile: any;
  isOpen: boolean;
  onClose: () => void;
}

interface IModalFuncState { }


export default class ModalFunc extends React.PureComponent<IModalFuncProps, IModalFuncState> {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.getReceipt = this.getReceipt.bind(this);
    this.formatArguments = this.formatArguments.bind(this);
    this.formatResult = this.formatResult.bind(this);
  }

  private formatArguments(func: IFunction, formData: any[]) {
    const arrOfArgs: any[] = [];

    for (let i = 0; i < formData.length; i++) {
      const arg = formData[i];
      const data = func.inputs.items[i];

      arrOfArgs.push({
        title: data.title,
        description: 'description' in data ? data.description : '',
        value: arg,
      });
    }

    return arrOfArgs;
  }

  private formatResult(func: IFunction, result: any) {
    const arrOfArgs: any[] = [];

    if (Array.isArray(result)) {
      for (let i = 0; i < result.length; i++) {
        const arg = result[i];
        const data = func.outputs.items[i];

        arrOfArgs.push({
          title: data.title,
          description: 'description' in data ? data.description : '',
          value: valToString(arg, data.type),
        });
      }
    } else {
      const data = func.outputs.items[0];

      arrOfArgs.push({
        title: data.title,
        description: 'description' in data ? data.description : '',
        value: valToString(result, data.type),
      });
    }

    return arrOfArgs;
  }

  private submit({ formData }) {
    const { func, dapp, onClose, profile } = this.props;

    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (typeof formData === 'object' && !Object.keys(formData).length) {
      formData = [];
    }

    const dataFetch = {
      blockchain: dapp.blockchain,
      initiator_address: profile.last_name,
      execution_datetime: (new Date()).toISOString(),
      function_name: func.name,
      function_title: func.title,
      function_description: func.description,
      function_arguments: this.formatArguments(func, formData),
    };

    switch (dapp.blockchain) {
      case blockchains.ethereum:
        processControlForm(dapp.abi, func, formData, dapp.address,
          (error, response) => {
            const funcType = getFuncType(func);

            let result: any;

            if (error !== null) {
              dataFetch['is_success'] = false;
              dataFetch['error'] = error.toString();

              result = error;
            } else {
              dataFetch['is_success'] = true;

              result = response;
            }

            if (funcType === 'ask') {
              dataFetch['result'] = this.formatResult(func, response);
              // store.dispatch(requestNew(dapp.id, func, formData, result));

              api.sendDappRequest(dapp.id, dataFetch);

            } else if (funcType === 'write') {
              dataFetch['tx_id'] = response;

              store.dispatch(transactionNew(dapp.id, dataFetch));
              this.getReceipt(response, dataFetch);
            }

            // close modal window after execute function
            onClose();
          });
        break;
      case blockchains.eos:
        Eos.executeFunc(dapp.abi, func, dapp.address, formData)
          .then((result) => {
            store.dispatch(transactionNew(dapp.id, dataFetch));
          })
          .catch((err) => {
            console.error(err);
            let error = JSON.parse(err);

            error = error.error.what || error.message || 'error';

            store.dispatch(transactionNew(dapp.id, dataFetch));
          });

        // close modal window after execute function
        onClose();
        break;

      default:
        break;
    }
  }

  private getReceipt(tx: string, dataFetch: any) {
    const { dapp } = this.props;

    w3.eth.getTransactionReceipt(tx, (err, receipt) => {
      if (null == receipt) {
        window.setTimeout(() => this.getReceipt(tx, dataFetch), 500);
      } else {
        dataFetch['mining_datetime'] = (new Date()).toISOString();
        dataFetch['logs'] = receipt.logs;
        dataFetch['info'] = {
          ethereum: {
            gas_price: ethConstants.gasPrice,
            gas_limit: ethConstants.gas,
            block: receipt.blockNumber,
            // block_hash: receipt.blockHash,
            // gas_used: receipt.gasUsed,
          },
        };

        api.sendDappTransaction(dapp.id, dataFetch);
        // store.dispatch(transactionReceipt(dapp.id, tx, receipt));

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
              src={require('../../../assets/img/common/x-icon.svg')}
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
