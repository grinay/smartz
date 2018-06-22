import React, { PureComponent } from 'react';
import classNames from 'classnames';

import ethereumImg from '../../../../assets/img/common/ethereum.svg';

import './NetworkItem.less';

export default class NetworkItem extends PureComponent {
  render() {
    const { name, select, img, onClick } = this.props;
    return (
      <button className={classNames('network-item flex', { select })} onClick={onClick}>
        {img !== null ? (
          <img
            alt="blockchain"
            src={
              select
                ? require(`../../../../assets/img/common/blockchain/${img.on}`)
                : require(`../../../../assets/img/common/blockchain/${img.off}`)
            }
          />
        ) : null}
        <p>{name}</p>
      </button>
    );
  }
}
