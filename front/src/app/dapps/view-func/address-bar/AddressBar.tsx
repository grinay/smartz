import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import * as api from '../../../../api/apiRequests';
import { getNetworkEtherscanAddress } from '../../../../helpers/eth';
import { copyTextToClipboard } from '../../../../helpers/utils';
import Modal from '../../../common/modal/Modal';
import PopupVerify from '../../popup-verify/PopupVerify';

import './AddressBar.less';


interface IAddressBarProps {
  dapp: any;
  user: any;
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
    const { dapp, user } = this.props;

    api.addDappToDash(dapp.id, user);
  }

  public render() {
    const { dapp, user } = this.props;
    const { isOpenModal } = this.state;

    let btn: JSX.Element;
    if (user.toString() === dapp.user_id) {
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

    return (
      <div className="address-bar">
        <div className="wallet">
          <div className="wallet-address">
            <span className="wallet-title">Address</span>
            <span className="wallet-number">{dapp.address}</span>
          </div>
          <div className="wallet-buttons">
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
