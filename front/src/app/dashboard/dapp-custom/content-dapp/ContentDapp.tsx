import * as React from 'react';

import * as api from '../../../../api/apiRequests';
import DappCard from '../../dapp-card/DappCard';
import BtnPanel from '../common/BtnPanel/BtnPanel';
import PreviewContainer from '../common/preview-container/PreviewContainer';
import PrivateDapp from './private-dapp/PrivateDapp';

import './ContentDapp.less';


interface IContentDappProps {
  dapps: any;
  data: {
    type: string;
    dapp: null | string;
  };
}

export default class ContentDapp extends React.PureComponent<IContentDappProps, {}> {
  private isPrivate: boolean;

  constructor(props) {
    super(props);

    this.isPrivate = this.props.data.dapp === null;

    this.submitData = this.submitData.bind(this);
  }

  private submitData() {
    const { data } = this.props;

    api.addDappToDash(data.dapp);
  }

  public render() {
    const { dapps, data } = this.props;

    return (
      <div className="content-dapp">
        <PreviewContainer>
          {this.isPrivate
            ? <PrivateDapp />
            : <DappCard dapp={dapps.get(data.dapp)} className="dapp-card-custom" />}
        </PreviewContainer>
        {!this.isPrivate &&
          <BtnPanel onClickBtn={this.submitData} />}
      </div>
    );
  }
}
