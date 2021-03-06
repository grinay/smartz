import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import * as api from '../../../../api/apiRequests';
import { blockchains } from '../../../../constants/constants';
import { IDapp } from '../../../../helpers/entities/dapp';
import { getNetworkEtherscanAddress } from '../../../../helpers/eth';
import { copyTextToClipboard } from '../../../../helpers/utils';
import AddressString from '../../../common/address-string/AddressString';
import ModalContainer from '../../../common/modal/ModalContainer';
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
      if (dapp.owned_by_current_user) {
        if (dapp.blockchain === blockchains.ethereum && dapp.source) {
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
            <a
              className="wallet-number flex"
              href={`${getNetworkEtherscanAddress(dapp.network_id)}/address/${dapp.address}`}
              target="_blank"
            >
              <AddressString str={dapp.address} />
              <InlineSVG
                className="etherscan-icon link"
                src={require('../../../../assets/img/common/etherscan.svg')}
              />
            </a>
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
            {btn}
          </div>
        </div>
        <ModalContainer
          isOpen={isOpenModal}
          classNameWindow="verify-modal"
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
          onClose={this.toggleModal}
        >
          <PopupVerify dapp={dapp} />
        </ModalContainer>
      </div>
    );
  }
}
