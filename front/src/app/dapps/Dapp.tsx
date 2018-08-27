import * as React from 'react';

import * as api from '../../api/apiRequests';
import { blockchains } from '../../constants/constants';
import { IDapp, IFunction, Tab } from '../../helpers/entities/dapp';
import store from '../../store/store';
import { setHeaderTitle } from '../AppActions';
import Alert from '../common/Alert';
import ModalContainer from '../common/modal/ModalContainer';
import ColumnFunc from './column-func/ColumnFunc';
import MinimalFooter from './minimal-footer/MinimalFooter';
import ModalFunc from './modal-func/ModalFunc';
import PopupTransaction from './popup-transaction/PopupTransaction';
import Records from './records/Records';
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
  dapp: IDapp;
  dappStatus: any;
  dappError: any;
  profile: any;
  metamaskStatus: any;
  viewFuncResult: any;
}

interface IDappState {
  isUpdateCycle: boolean;
  funcActive: IFunction;
  selectedRecord: any;
  selectedFunc: any;
  selectedTab: Tab;
}

class Dapp extends React.Component<IDappProps, IDappState> {
  constructor(props) {
    super(props);

    this.state = {
      isUpdateCycle: true,
      funcActive: null,
      selectedRecord: null,
      selectedFunc: null,
      selectedTab: Tab.Request,
    };

    this.onSelectRecord = this.onSelectRecord.bind(this);
    this.selectFunc = this.selectFunc.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  private onChangeTab(tab: Tab) {
    this.setState({ selectedTab: tab });
  }

  private onSelectRecord(selectedRecord: any) {
    return () => this.setState({ selectedRecord });
  }

  private selectFunc(func: any): any {
    return () => this.setState({ selectedFunc: func });
  }

  private onClose(type: 'popup' | 'modal') {
    return () => {
      if (type === 'popup') {
        this.setState({ selectedRecord: null });
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
    const dappNext = nextProps.dapp;
    const dappLast = this.props.dapp;

    if (!dappNext || !dappLast) {
      return;
    }

    //show last 'ask' function executed
    if (dappNext.requests !== null && dappLast.requests !== null
      && dappNext.requests.length !== dappLast.requests.length) {

      // set last executed func
      this.setState({
        selectedRecord: dappNext.requests[0],
        selectedTab: Tab.Request,
      });
    }

    // if change transactions count
    if (dappNext.transactions !== null && dappLast.transactions !== null
      && dappNext.transactions.size !== dappLast.transactions.size) {

      // set transaction tab
      this.setState({
        selectedTab: Tab.Transactions,
      });
    }

    // update name of dapp after change
    // if (dappNext.title !== dappLast.title) {
    // store.dispatch(setHeaderTitle({
    //   title: dappNext.title,
    //   id: dappNext.id,
    //   type: 'dapp',
    // }));
    // }
  }

  public render() {
    const { metamaskStatus, dapp, profile, dappStatus, dappError } = this.props;
    const { selectedRecord, selectedFunc, selectedTab } = this.state;

    if (dappStatus === 'error' && dappError !== null) {
      return (
        <div className="dapp-error flex">
          <p className="dapp-error-text">{dappError}</p>
        </div>
      );
    }

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

        <section className="dapp-body">
          <div className="wrapper">
            <div className="content">
              <ViewFunc dapp={dapp} profile={profile} />
              <Records
                dapp={dapp}
                tab={selectedTab}
                onChangeTab={this.onChangeTab}
                onSelectRecord={this.onSelectRecord}
              />
            </div>
            <MinimalFooter dapp={dapp} />
            <PopupTransaction
              isOpen={selectedFunc === null && selectedRecord != null ? true : false}
              onClose={this.onClose('popup')}
              record={selectedRecord}
            />
          </div>
        </section>

        <ColumnFunc
          onSelectFunc={this.selectFunc}
          dapp={dapp}
        />


        {/* <ModalContainer
          isOpen={selectedFunc != null ? true : false}
          // isCloser={false}
          className="func-modal"
          onClose={this.onClose('modal')}
        >
          <ModalFunc
            func={selectedFunc}
            dapp={dapp}
            profile={profile}
            onClose={this.onClose('modal')}
          />
          <p>d</p>
        </ModalContainer> */}

        <ModalContainer
          isOpen={selectedFunc != null}
          classNameWindow="func-modal"
          onClose={this.onClose('modal')}
          animationWindow={{
            duration: 300,
            styleStart: {
              opacity: 0,
              transform: 'scale(.9,.9)',
            },
            styleEnd: {
              opacity: 1,
              transform: 'scale(1,1)',
            },
          }}
          animationBackdrop={{
            duration: 300,
            styleStart: { opacity: 0 },
            styleEnd: { opacity: 1 },
          }}
        >
          <ModalFunc
            func={selectedFunc}
            dapp={dapp}
            profile={profile}
            onClose={this.onClose('modal')}
          />
        </ModalContainer>

      </main>
    );
  }
}

export default Dapp;
