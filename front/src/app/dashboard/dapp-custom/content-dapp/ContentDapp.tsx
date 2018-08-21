import * as React from 'react';

import DappCard from '../../dapp-card/DappCard';
import PreviewContainer from '../common/preview-container/PreviewContainer';
import PrivateDapp from './private-dapp/PrivateDapp';

import './ContentDapp.less';


interface IContentDappProps {
  dapps: any;
  data: any;
}

export default class ContentDapp extends React.PureComponent<IContentDappProps, {}> {
  public render() {
    const { dapps, data } = this.props;

    return (
      <div className="content-dapp">
        <PreviewContainer>
          {data.dapp === null
            ? <PrivateDapp />
            : <DappCard dapp={dapps.get(data.dapp.id)} className="dapp-card-custom" />}
        </PreviewContainer>
      </div>
    );
  }
}
