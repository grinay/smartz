import * as classNames from 'classnames';
import * as React from 'react';

import './NetworkItem.less';


interface INetworkItemProps {
  name: any;
  select: boolean;
  img: any;
  onClick: () => void;
}

interface INetworkItemState { }

export default class NetworkItem extends React.PureComponent<INetworkItemProps, INetworkItemState> {
  public render() {
    const { name, select, img, onClick } = this.props;

    return (
      <button
        className={classNames('network-item flex', { select })}
        onClick={onClick}
      >
        {img !== null ? (select ? img.on : img.off) : null}
        <p>{name}</p>
      </button>
    );
  }
}
