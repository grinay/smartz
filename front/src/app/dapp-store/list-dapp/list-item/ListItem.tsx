import * as React from 'react';

import './ListItem.less';


interface IListItemProps {
  dapp: any;
  // dappName: string;
  // transCount: number | string;
  // ethVolume: number | string;
  // userNumber: number | string;
  // hour24Number: number | string;
  // weekNumber: number | string;
}

export default class ListItem extends React.PureComponent<IListItemProps, any> {
  public render() {
    const { dapp: {
      id,
      dappName,
      description,
      transCount,
      ethVolume,
      userNumber,
      hour24Number,
      weekNumber,
    } } = this.props;

    return (
      <div className="list-item flex">
        <section className="id">{id}</section>
        <section className="info">
          <section className="dapp-name">{dappName}</section>
          <section className="description">{description}</section>
        </section>
        <section className="transaction-count">{transCount}</section>
        <section className="eth-volume">{ethVolume}</section>
        <section className="user-number">{userNumber}</section>
        <section className="hour24">{hour24Number}</section>
        <section className="week">{weekNumber}</section>
      </div>
    );
  }
}
