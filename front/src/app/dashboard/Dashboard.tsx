import { find } from 'lodash';
import * as React from 'react';

import * as api from '../../api/apiRequests';
import { blockchains } from '../../constants/constants';
import { getNetworkId, processControlForm, processResult } from '../../helpers/eth';
import Alert from '../common/Alert';
import Loader from '../common/loader/Loader';
import Modal from '../common/modal/Modal';
import Button from '../ui-kit/button/Button';
import DappCard from './dapp-card/DappCard';
import DappCustom from './dapp-custom/DappCustom';

import './Dashboard.less';


interface IDashboardProps {
  metamaskStatus: any;
  dapps: any;
  ctors: any;
  ctorsError: any;
  dappsError: any;
  viewFuncResult: any;
}

interface IDashboardState {
  updateCycleActive: boolean;
  networkId: any;
  filteredDapps: any;
  isOpenModal: boolean;
}

export default class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props) {
    super(props);

    this.state = {
      updateCycleActive: false,
      networkId: null,
      filteredDapps: null,
      isOpenModal: false,
    };

    this.onToggleModal = this.onToggleModal.bind(this);
  }

  private onToggleModal(action: boolean) {
    return () => this.setState({ isOpenModal: action });
  }


  public componentDidMount() {
    window.Intercom('update');

    const { metamaskStatus } = this.props;

    if (metamaskStatus !== 'noMetamask') {
      getNetworkId((networkId) => {
        this.setState({ networkId });
      });
    }

    api.getConstructors();
    api.getDapps();
  }

  public componentWillReceiveProps(nextProps) {
    const { metamaskStatus, dapps } = nextProps;

    if (dapps) {
      let filteredDapps = [];

      dapps.forEach((dapp) => {
        switch (dapp.blockchain) {
          case blockchains.ethereum:
            if (metamaskStatus !== 'noMetamask') {
              if (dapp.network_id.toString() === this.state.networkId) {
                filteredDapps.push(dapp);
              }
            }
            break;
          case blockchains.eos:
            filteredDapps.push(dapp);
            break;
          default:
            break;
        }
      });

      this.setState({ filteredDapps });
    }
  }

  public componentDidUpdate() {
    const { ctors, metamaskStatus } = this.props;
    const { filteredDapps, updateCycleActive } = this.state;

    if (filteredDapps !== null &&
      filteredDapps.length &&
      ctors.length &&
      !updateCycleActive &&
      metamaskStatus !== 'noMetamask') {
      this.updateCycle();
    }
  }

  public updateCycle() {
    const { filteredDapps } = this.state;
    const { viewFuncResult } = this.props;

    filteredDapps.forEach((dapp, j) => {
      const { id, abi, address, dashboard_functions, functions, blockchain } = dapp;

      if (blockchain === blockchains.ethereum && dashboard_functions) {
        dashboard_functions.forEach((dFunc) => {
          const fSpec = find(functions, { name: dFunc });
          if (!fSpec) {
            return;
          }
          processControlForm(abi, fSpec, [], address, (error, result) => {
            if (error) {
              console.error(error);
            } else {
              viewFuncResult(id, dFunc, processResult(result));
            }
          });
        });
      }
    });
  }

  public render() {
    const { metamaskStatus, dapps, ctors, ctorsError, dappsError } = this.props;
    const { filteredDapps, isOpenModal } = this.state;

    let content: any;

    if (!dapps || !filteredDapps) {
      content = <Loader />;
    } else if (ctorsError || dappsError) {
      content = (
        <Alert>
          {ctorsError && <p>{ctorsError}</p>}
          {dappsError && <p>{dappsError}</p>}
        </Alert>
      );
    } else if (find(filteredDapps, { blockchain: blockchains.ethereum }) &&
      metamaskStatus === 'noMetamask') {
      content = (
        <p style={{ textAlign: 'center', margin: '100px', fontSize: '20px' }}>
          Fellow, you need a Metamask plugin!
          </p>
      );
    } else {
      const elems = filteredDapps.map((dapp, i) => {
        dapp.ctor = find(ctors, { id: dapp.constructor_id }) || {};

        return (
          <li key={i}>
            <DappCard dapp={dapp} />
          </li>
        );
      });

      content = (
        <section className="dashboard__container">
          <ul className="dashboard__list">
            {elems}
          </ul>
        </section>
      );
    }

    return (
      <main className="page-main dashboard">
        <Button
          className="dashboard-add-btn"
          type="gray"
          content="Add custom dapp"
          onClick={this.onToggleModal(true)}
        />
        {content}
        <Modal
          isOpen={isOpenModal}
          onClose={this.onToggleModal(false)}
        >
          <DappCustom />
        </Modal>
      </main>
    );
  }
}
