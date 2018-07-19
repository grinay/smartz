import React, { PureComponent } from 'react';

import NetworkItem from './network-item/NetworkItem';
import InlineSVG from 'svg-inline-react';

import './SortBlockchain.less';
import { blockchains } from './../../../constants/constants';

export default class SortBlockchain extends PureComponent {
  render() {
    const { blockchain, onClick } = this.props;

    const chains = [
      {
        name: 'Ethereum',
        select: blockchain === blockchains.ethereum,
        img: {
          on: <InlineSVG 
          className="blch-img"
           src={require('../../../assets/img/common/blockchain/ethereum-on.svg')} />,
          off: <InlineSVG 
          className="blch-img"
           src={require('../../../assets/img/common/blockchain/ethereum-off.svg')} />
        },
        onClick: onClick(blockchains.ethereum)
      },
      {
        name: 'EOS',
        select: blockchain === blockchains.eos,
        img: {
          on: <InlineSVG 
          className="blch-img"
           src={require('../../../assets/img/common/blockchain/EOS-on.svg')} />,
          off: <InlineSVG 
          className="blch-img"
           src={require('../../../assets/img/common/blockchain/EOS-off.svg')} />
        },
        onClick: onClick(blockchains.eos)
      }
    ];
    return (
      <div className="sort-blockchain">
        <ul className="sort-blockchain-list flex">
          {chains.map((item, i) => (
            <li className="sort-blockchain-item" key={i}>
              <NetworkItem
                name={item.name}
                img={item.img}
                select={item.select}
                onClick={item.onClick}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
