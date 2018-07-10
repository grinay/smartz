import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './NetworkItem.less';

export default class NetworkItem extends PureComponent {
  render() {
    const { name, select, img, onClick } = this.props;
    return (
      <button className={classNames('network-item flex', { select })} onClick={onClick}>
        {img !== null ? (select ? img.on : img.off) : null}
        <p>{name}</p>
      </button>
    );
  }
}
