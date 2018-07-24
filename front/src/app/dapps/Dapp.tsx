import * as React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../../api/apiRequests';
import { blockchains } from '../../constants/constants';
import { getFuncType } from '../../helpers/common';
import { processControlForm, processResult } from '../../helpers/eth';
import store from '../../store/store';
import { setHeaderTitle } from '../AppActions';
import Alert from '../common/Alert';
import ColumnFunc from './column-func/ColumnFunc';
import MinimalFooter from './minimal-footer/MinimalFooter';
import ModalFunc from './modal-func/ModalFunc';
import PopupTransaction from './popup-transaction/PopupTransaction';
import Transactions from './transactions/Transactions';
import ViewFunc from './view-func/ViewFunc';

import './Dapp.less';


declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    Intercom: any;
  }
}

interface IDappProps {
  match: any;
  dapp: any;
  metamaskStatus: any;
  viewFuncResult: any;
}

interface IDappState {
  updateCycleActive: any;
  funcActive: any;
  selectedRequest: any;
  selectedTransaction: any;
  selectedFunc: any;
}

class Dapp extends React.Component<IDappProps, IDappState> {
  constructor(props) {
    super(props);

    this.state = {
      updateCycleActive: false,
      funcActive: null,
      selectedRequest: null,
      selectedTransaction: null,
      selectedFunc: null,
    };

    this.getConstants = this.getConstants.bind(this);
    this.onSelectRequest = this.onSelectRequest.bind(this);
    this.onSelectTransaction = this.onSelectTransaction.bind(this);
    this.selectFunc = this.selectFunc.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  private onSelectRequest(request: any) {
    return () => this.setState({ selectedRequest: request });
  }

  private onSelectTransaction(transaction: any) {
    return () => this.setState({ selectedTransaction: transaction });
  }

  private selectFunc(func: any) {
    return () => {
      // const funcType = getFuncType(func);

      // if (funcType === 'ask') {
      //   this.setState({ selectedRequest: func });
      // } else if (funcType === 'write') {
      //   this.setState({ selectedTransaction: func });
      // }
      this.setState({ selectedFunc: func });
    };
  }

  private onClose(type: 'popup' | 'modal') {
    return () => {
      if (type === 'popup') {
        this.setState({ selectedRequest: null });
      } else {
        this.setState({ selectedFunc: null });
      }
    };
  }

  public componentWillMount() {
    api.getDapp(this.props.match.params.id);
  }

  public componentDidMount() {
    window.Intercom('update');
  }

  public componentWillReceiveProps(nextProps: any) {
    const { dapp } = nextProps;

    if (!dapp) {
      return;
    }

    //show last executed
    if (dapp.requests.length !== this.props.dapp.requests.length) {
      const lastFuncExec = dapp.requests[dapp.requests.length - 1];
      const funcType = getFuncType(lastFuncExec.func);

      if (funcType === 'ask') {
        this.setState({ selectedRequest: lastFuncExec });
      } else if (funcType === 'write') {
        this.setState({ selectedTransaction: lastFuncExec });
      }
    }

    // if (dapp.title !== this.props.dapp.title) {
    store.dispatch(setHeaderTitle({
      title: dapp.title,
      id: dapp.id,
      type: 'dapp',
    }));
    // }
  }

  public componentDidUpdate() {
    // TODO: refactor this shit
    const { dapp, metamaskStatus } = this.props;

    if (dapp && dapp.blockchain === blockchains.ethereum && !this.state.updateCycleActive) {
      if (metamaskStatus === 'noMetamask' || metamaskStatus === 'unlockMetamask') {
        return null;
      }
      this.getConstants();
    }
  }

  public getConstants() {
    const { dapp, viewFuncResult } = this.props;
    if (!dapp) {
      return;
    }

    dapp.functions.forEach((func) => {
      if (func.constant && func.inputs.minItems === 0) {
        processControlForm(dapp.abi, func, [], dapp.address, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            viewFuncResult(dapp.id, func.name, processResult(result));
          }
        });
      }
    });
  }


  public render() {
    const { metamaskStatus, dapp } = this.props;
    const { selectedRequest, selectedTransaction, selectedFunc } = this.state;

    if (!dapp) {
      return null;
    }

    if (dapp.blockchain === blockchains.ethereum && metamaskStatus !== 'okMetamask') {
      return (
        <div className="container">
          <Alert standardAlert={metamaskStatus} />
        </div>
      );
    }

    return (
      <main className="dapp">
        <ColumnFunc
          onSelectFunc={this.selectFunc}
          dapp={dapp}
        />

        <section className="dapp-body">
          <div className="wrapper">
            <div className="content">
              <ViewFunc dapp={dapp} />
              <Transactions
                dapp={dapp}
                onSelectRequest={this.onSelectRequest}
                onSelectTransaction={this.onSelectTransaction}
              />
            </div>
            <MinimalFooter ctorId={dapp.constructor_id} />
          </div>
        </section>

        <ModalFunc
          func={selectedFunc}
          dapp={dapp}
          isOpen={selectedFunc != null ? true : false}
          onClose={this.onClose('modal')}
        />

        <PopupTransaction
          isOpen={selectedFunc === null && selectedRequest != null ? true : false}
          onClose={this.onClose('popup')}
          request={selectedRequest}
          transaction={selectedTransaction}
        />
      </main>
    );
  }
}

export default Dapp;
