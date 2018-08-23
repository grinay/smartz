import { find } from 'lodash';
import * as React from 'react';
import Form from 'react-jsonschema-form';
import InlineSVG from 'svg-inline-react';

import * as api from '../../../api/apiRequests';
import { blockchains, ethConstants } from '../../../constants/constants';
import { getFuncType } from '../../../helpers/common';
import { IDapp, IFunction } from '../../../helpers/entities/dapp';
import Eos from '../../../helpers/eos';
import { decodeEventOfContract, getAccountAddress, processControlForm, web3 as w3, web3 } from '../../../helpers/eth';
import { getUiSchemaFromFunc } from '../../../helpers/schema';
import { tryParce } from '../../../helpers/utils';
import store from '../../../store/store';
import FormWidgets from '../../common/form-widgets/FormWidgets';
import Modal from '../../common/modal/Modal';
import { transactionNew } from '../DappActions';

import './ModalFunc.less';


interface IModalFuncProps {
  func: IFunction;
  dapp: IDapp;
  profile: any;
  onClose: () => void;
}

export default class ModalFunc extends React.PureComponent<IModalFuncProps, {}> {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.getReceipt = this.getReceipt.bind(this);
    this.formatArguments = this.formatArguments.bind(this);
    this.formatResultEth = this.formatResultEth.bind(this);
    this.formatResultEos = this.formatResultEos.bind(this);
  }

  private formatArguments(func: IFunction, formData: any[]) {
    const arrOfArgs: any[] = [];

    for (let i = 0; i < formData.length; i++) {
      const arg = formData[i];
      const data = func.inputs.items[i];

      arrOfArgs.push({
        title: data.title,
        description: 'description' in data ? data.description : '',
        value: arg.toString(),
      });
    }

    return arrOfArgs;
  }

  private formatResultEth(func: IFunction, result: any) {
    const arrOfArgs: any[] = [];

    if (Array.isArray(result)) {
      for (let i = 0; i < result.length; i++) {
        const arg = result[i];
        const data = func.outputs.items[i];

        arrOfArgs.push({
          title: data.title,
          description: 'description' in data ? data.description : '',
          value: arg.toString(),
        });
      }
    } else {
      const data = func.outputs.items[0];

      arrOfArgs.push({
        title: data.title,
        description: 'description' in data ? data.description : '',
        value: result.toString(),
      });
    }

    return arrOfArgs;
  }

  private formatResultEos(func: IFunction, response: object) {
    const arrOfArgs: any[] = [];

    if (typeof response === 'object') {
      const items: any[] = func.outputs.items;

      for (let i = 0; i < items.length; i++) {
        const titleItem = items[i].title;

        const arg = response[titleItem];
        const data = items[i];

        arrOfArgs.push({
          title: titleItem,
          description: 'description' in data ? data.description : '',
          value: arg.toString(),
        });
      }
    }

    return arrOfArgs;
  }

  private submit({ formData }) {
    const { func, dapp, onClose } = this.props;

    //todo workaround, compatible with draft 6 since https://github.com/mozilla-services/react-jsonschema-form/issues/783
    if (typeof formData === 'object' && !Object.keys(formData).length) {
      formData = [];
    }

    if (func.inputs && func.inputs.items) {
      func.inputs.items.forEach((inp, idx) => {
        if (inp.realtype === 'array') {
          formData[idx] = formData[idx].split(' ');
        }
      });
    }

    const dataFetch = {
      blockchain: dapp.blockchain,
      execution_datetime: (new Date()).toISOString(),
      function_name: func.name,
      function_title: func.title,
      function_description: 'description' in func ? func.description : '',
      function_arguments: this.formatArguments(func, formData),
    };

    switch (dapp.blockchain) {
      case blockchains.ethereum:
        dataFetch['initiator_address'] = getAccountAddress();

        processControlForm(dapp.abi, func, formData, dapp.address,
          (error, response) => {
            const funcType = getFuncType(func);

            if (error !== null) {
              dataFetch['is_success'] = false;
              dataFetch['error'] = error.toString();

              console.error('Error: ', error);

              store.dispatch(transactionNew(dapp.id, dataFetch));
            } else {
              if (funcType === 'ask') {
                dataFetch['is_success'] = true;
                dataFetch['result'] = this.formatResultEth(func, response);

                api.sendDappRequest(dapp.id, dataFetch);

              } else if (funcType === 'write') {
                dataFetch['tx_id'] = response;

                store.dispatch(transactionNew(dapp.id, dataFetch));
                this.getReceipt(response, dataFetch);
              }
            }

            // close modal window after execute function
            onClose();
          });
        break;
      case blockchains.eos:

        Eos.executeFunc(dapp.abi, func, dapp.address, formData)
          .then((response: any) => {
            dataFetch['initiator_address'] = Eos.accountName;
            const funcType = getFuncType(func);

            dataFetch['is_success'] = true;

            if (funcType === 'ask') {
              dataFetch['result'] = this.formatResultEos(func, response);

              api.sendDappRequest(dapp.id, dataFetch);

            } else if (funcType === 'write') {
              dataFetch['tx_id'] = response.transaction_id;
              dataFetch['mining_datetime'] = (new Date()).toISOString();
              dataFetch['logs'] = [];
              dataFetch['info'] = {};

              store.dispatch(transactionNew(dapp.id, dataFetch));

              api.sendDappTransaction(dapp.id, dataFetch);
            }
          })
          .catch((err) => {
            console.warn(err);
            dataFetch['is_success'] = false;
            dataFetch['initiator_address'] = Eos.accountName;
            dataFetch['result'] = [];

            if (typeof err === 'string') {
              const errObj = tryParce(err);
              dataFetch['mining_datetime'] = (new Date()).toISOString();
              dataFetch['error'] = errObj.error.what;

              store.dispatch(transactionNew(dapp.id, dataFetch));

            } else if (typeof err === 'object') {
              dataFetch['error'] = err.error.what;

              api.sendDappRequest(dapp.id, dataFetch);
            }
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
      if (err) {
        console.error('err :', err);
      }

      if (null == receipt) {
        window.setTimeout(() => this.getReceipt(tx, dataFetch), 5000);
      } else {
        dataFetch['is_success'] = true;
        dataFetch['mining_datetime'] = (new Date()).toISOString();
        dataFetch['logs'] = this.processLogs(dapp.abi, receipt.logs);
        dataFetch['info'] = {
          ethereum: {
            gas_price: ethConstants.gasPrice,
            gas_limit: ethConstants.gas,
            block: receipt.blockNumber,
            block_hash: receipt.blockHash,
            gas_used: receipt.gasUsed,
          },
        };

        if (receipt.status === '0x0') {
          dataFetch['is_success'] = false;
          dataFetch['error'] = 'Fail';
        }

        api.sendDappTransaction(dapp.id, dataFetch);

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

  private processLogs(abi: any, logs: any[]) {
    let processedLogs: any[] = [];

    logs.forEach(
      (log: any) => {

        const decodedEvent = decodeEventOfContract(abi, log);

        processedLogs.push({
          name: decodedEvent ? decodedEvent.name : '',
          created_at: (new Date()).toISOString(),
          data: log,
        });
      },
    );

    return processedLogs;
  }

  public render() {
    const { func, onClose } = this.props;

    let content: any;
    if (func) {
      // add field for ethCount in schema
      if (func.payable) {

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

      const uiSchema = getUiSchemaFromFunc(func);

      content = (
        <div>
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
        </div>
      );
    }

    return (
      <div className="modal-func">
        <Modal
          isOpen={func != null ? true : false}
          isCloser={false}
          onClose={onClose}
          windowClassName="modal-window"
          closerClassName="modal-closer flex"
        >
          {content}
        </Modal>
      </div>
    );
  }
}
