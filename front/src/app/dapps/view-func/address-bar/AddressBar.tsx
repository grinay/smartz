import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import * as api from '../../../../api/apiRequests';
import { blockchains } from '../../../../constants/constants';
import { IDapp } from '../../../../helpers/entities/dapp';
import { getNetworkEtherscanAddress } from '../../../../helpers/eth';
import { copyTextToClipboard } from '../../../../helpers/utils';
import AddressString from '../../../common/address-string/AddressString';
import Modal from '../../../common/modal/Modal';
import PopupVerify from '../../popup-verify/PopupVerify';

import './AddressBar.less';


interface IAddressBarProps {
  dapp: IDapp;
  profile: any;
}

interface IAddressBarState {
  isOpenModal: boolean;
}


export default class AddressBar extends React.PureComponent<IAddressBarProps, IAddressBarState> {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false,
    };

    this.onClickCopyBtn = this.onClickCopyBtn.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onClickAddToDashBtn = this.onClickAddToDashBtn.bind(this);
  }

  private toggleModal() {
    const { isOpenModal } = this.state;

    this.setState({ isOpenModal: !isOpenModal });
  }

  private onClickCopyBtn() {
    copyTextToClipboard(this.props.dapp.address);
  }

  private onClickAddToDashBtn() {
    const { dapp } = this.props;

    api.addDappToDash(dapp.id);
  }

  public render() {
    const { dapp, profile } = this.props;
    const { isOpenModal } = this.state;

    // check who owner this dapp
    let btn: JSX.Element;
    if (profile) {
      if (profile.user_id === dapp.user_id) {
        if (dapp.blockchain === blockchains.ethereum) {
          btn = (
            <button
              className="round-btn flex verify-btn"
              onClick={this.toggleModal}
              type="button"
            >
              Verify this DApp
              </button>
          );
        } else {
          btn = null;
        }
      } else {
        btn = (
          <button
            className="round-btn flex add-to-btn"
            onClick={this.onClickAddToDashBtn}
            type="button"
          >
            Add to Dashboard
            </button>
        );
      }
    }

    return (
      <div className="address-bar">
        <div className="wallet">
          <div className="wallet-address">
            <span className="wallet-title">Address</span>
            <div className="wallet-number">
              <AddressString str={dapp.address} />
            </div>
          </div>
          <div className="wallet-buttons">
            {dapp.blockchain === blockchains.ethereum &&
              <a
                className="round-btn flex link"
                href={`${getNetworkEtherscanAddress(dapp.network_id)}/address/${dapp.address}`}
                target="_blank"
              >
                <InlineSVG
                  className="etherscan-icon"
                  src={require('../../../../assets/img/common/etherscan.svg')}
                />
              </a>
            }
            <button
              className="round-btn flex copy-btn"
              onClick={this.onClickCopyBtn}
              type="button"
            >
              <InlineSVG
                className="copy-icon"
                src={require('../../../../assets/img/common/components/copy.svg')}
              />
              Copy
              </button>
            {btn}
          </div>
        </div>
        <Modal isOpen={isOpenModal} onClose={this.toggleModal}>
          <PopupVerify dapp={dapp} />
        </Modal>
      </div>
    );
  }
}
