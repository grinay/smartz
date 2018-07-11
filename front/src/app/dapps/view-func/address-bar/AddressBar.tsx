import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { copyTextToClipboard } from '../../../../helpers/utils';
import Modal from '../../../common/modal/Modal';
import PopupVerify from '../../popup-verify/PopupVerify';

import './AddressBar.less';


interface IAddressBarProps {
  dapp: any;
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
  }

  private toggleModal() {
    const { isOpenModal } = this.state;

    this.setState({ isOpenModal: !isOpenModal });
  }

  private onClickCopyBtn() {
    copyTextToClipboard(this.props.dapp.address);
  }

  public render() {
    const { dapp } = this.props;
    const { isOpenModal } = this.state;

    return (
      <div className="address-bar">
        <div className="wallet">
          <div className="wallet-address">
            <span className="wallet-title">Address</span>
            <span className="wallet-number">{dapp.address}</span>
          </div>
          <div className="wallet-buttons">
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
            <a
              className="round-btn flex link"
              onClick={this.toggleModal}
            >
              <InlineSVG
                className="etherscan-icon"
                src={require('../../../../assets/img/common/etherscan.svg')}
              />
            </a>
          </div>
        </div>
        <Modal isOpen={isOpenModal} onClose={this.toggleModal}>
          <PopupVerify dapp={dapp} />
        </Modal>
      </div>
    );
  }
}
