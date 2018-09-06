import * as React from 'react';

import ListItem from './list-item/ListItem';
import SortBar from './sort-bar/SortBar';

import './ListDapp.less';


const list = [{
  id: 1,
  dappName: 'Decentralized News Network',
  description: 'A fact-checking news platform run by the community',
  transCount: 15,
  ethVolume: 889,
  hour24Number: 34,
  weekNumber: 567,
},
{
  id: 2,
  dappName: 'ForkDelta',
  description: 'Brings Ethereum to your browser.',
  transCount: 15,
  ethVolume: 889,
  hour24Number: 34,
  weekNumber: 567,
},
{
  id: 3,
  dappName: 'CryptoKitties',
  description: 'Collect and breed digital cats',
  transCount: 15,
  ethVolume: 889,
  hour24Number: 34,
  weekNumber: 567,
}];


export default class ListDapp extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="list-dapp">
        <SortBar />
        {list.map((dapp, i) => <ListItem key={i} dapp={dapp} />)}
      </div>
    );
  }
}
