import * as React from 'react';

import { blockchains } from '../../../constants/constants';
import { makeEtherscanLink } from '../../../helpers/eth';
import Modal from '../../common/modal/Modal';
import PopupVerify from '../popup-verify/PopupVerify';

import './DappHeader.less';


interface IDappHeaderProps {
  dapp: any;
}

interface IDappHeaderState {
  isOpenModal: boolean;
}

export default class DappHeader extends React.PureComponent<IDappHeaderProps, IDappHeaderState> {
  constructor(props) {
    super(props);

    this.state = { isOpenModal: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  private toggleModal() {
    const { isOpenModal } = this.state;

    this.setState({ isOpenModal: !isOpenModal });
  }

  public render() {
    const { dapp } = this.props;

    const { isOpenModal } = this.state;
    return (
      <section className="dapp-header flex">
        <img
          className="img"
          src={
            dapp.constructor.image
              ? require(`../../common/ctor-card/img/${dapp.constructor.image}`)
              : `https://lorempixel.com/640/400/?${Math.random()}`
          }
          alt={`${dapp.constructor.name} contract`}
        />
        <div className="title">
          <h2 className="dapp-title">{dapp.title}</h2>
          <p className="contract flex-v">
            <span>Contract: </span>
            {dapp.address && (
              <span className="contract-controls__section-header  contract-controls__wallet-key">
                {makeEtherscanLink(dapp.address, dapp.network_id, true)}
              </span>
            )}
          </p>

          {dapp.blockchain === blockchains.ethereum && (
            <span>
              <p className="code-verify" onClick={this.toggleModal}>
                Etherscan verification info
              </p>
              <Modal isOpen={isOpenModal} onClose={this.toggleModal}>
                <PopupVerify dapp={dapp} />
              </Modal>
            </span>
          )}
        </div>
      </section>
    );
  }
}
