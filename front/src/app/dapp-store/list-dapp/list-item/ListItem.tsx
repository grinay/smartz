import * as React from 'react';
import { Link } from 'react-router-dom';

import Text from '../../../ui-kit/text/Text';
import Title from '../../../ui-kit/title/Title';

import './ListItem.less';


interface IListItemProps {
  dapp: any;
}

export default class ListItem extends React.PureComponent<IListItemProps, any> {
  public render() {
    const { dapp: {
      id,
      dappName,
      description,
      transCount,
      ethVolume,
      hour24Number,
      weekNumber,
    } } = this.props;

    return (
      <Link to={`/dapp-store/${id}`} className="list-item">
        <Title type="small" className="id list-dapp-id">{id}</Title>
        <section className="image list-dapp-image">{}</section>
        <section className="list-dapp-info">
          <Title type="small" className="dapp-name">{dappName}</Title>
          <Text className="description">{description}</Text>
        </section>
        <Title type="small" className="list-dapp-transaction-count">{transCount}</Title>
        <Title type="small" className="list-dapp-eth-volume">{ethVolume} ETH</Title>
        <Title type="small" className="list-dapp-hour24">{hour24Number}</Title>
        <Title type="small" className="list-dapp-week">{weekNumber}</Title>
      </Link>
    );
  }
}
