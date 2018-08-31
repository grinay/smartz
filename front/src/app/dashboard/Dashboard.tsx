import * as React from 'react';

import * as api from '../../api/apiRequests';
import { blockchains } from '../../constants/constants';
import { getNetworkIdSync } from '../../helpers/eth';
import store from '../../store/store';
import Alert from '../common/Alert';
import Loader from '../common/loader/Loader';
import ModalContainer from '../common/modal/ModalContainer';
import Button from '../ui-kit/button/Button';
import DappCard from './dapp-card/DappCard';
import DappCustomContainer from './dapp-custom/DappCustomContainer';
import { setStateModalAddContract } from './DashboardActions';

import './Dashboard.less';


interface IDashboardProps {
  metamaskStatus: any;
  dapps: any;
  ctors: any;
  ctorsError: any;
  dappsError: any;
  viewFuncResult: any;
  isOpenModalAddContact: boolean;
}

export default class Dashboard extends React.Component<IDashboardProps, any> {
  constructor(props) {
    super(props);

    this.onToggleModal = this.onToggleModal.bind(this);
  }

  private onToggleModal(action: boolean) {
    return () => store.dispatch(setStateModalAddContract(action));
  }

  public componentDidMount() {
    window.Intercom('update');

    api.getDapps();
  }

  public render() {
    const {
      metamaskStatus,
      dapps,
      dappsError,
      isOpenModalAddContact,
    } = this.props;

    let content: any;

    if (metamaskStatus === 'noMetamask') {
      content = (
        <p style={{ textAlign: 'center', margin: '100px', fontSize: '20px' }}>
          Fellow, you need a Metamask plugin!
          </p>
      );
    }

    if (!dapps) {
      content = <Loader />;
    } else if (dappsError) {
      content = (
        <Alert>
          {dappsError && <p>{dappsError}</p>}
        </Alert>
      );
    } else {
      let filteredDapps = [];

      dapps.forEach((dapp) => {
        switch (dapp.blockchain) {
          case blockchains.ethereum:
            if (dapp.network_id.toString() === getNetworkIdSync()) {
              filteredDapps.push(dapp);
            }
            break;
          case blockchains.eos:
            filteredDapps.push(dapp);
            break;
          default:
            break;
        }
      });

      content = (
        <section className="dashboard__container">
          <ul className="dashboard__list">
            {filteredDapps.map((dapp, i) =>
              (
                <li key={i}>
                  <DappCard dataCard={dapp} type="dapp" />
                </li>
              ))}
          </ul>
        </section>
      );
    }

    return (
      <main className="page-main dashboard">
        <Button
          className="dashboard-add-btn"
          kind="white"
          content="Add an exiting contract"
          onClick={this.onToggleModal(true)}
        />
        {content}
        <ModalContainer
          isOpen={isOpenModalAddContact}
          classNameWindow="dashboard-modal"
          onClose={this.onToggleModal(false)}
        //TODO: correct animation
        // animationWindow={{
        //   duration: 300,
        //   styleStart: {
        //     opacity: 0,
        //     transform: 'scale(.9,.9)',
        //   },
        //   styleEnd: {
        //     opacity: 1,
        //     transform: 'scale(1,1)',
        //   },
        // }}
        // animationBackdrop={{
        //   duration: 300,
        //   styleStart: { opacity: 0 },
        //   styleEnd: { opacity: 1 },
        // }}
        >
          <DappCustomContainer />
        </ModalContainer>
      </main>
    );
  }
}
