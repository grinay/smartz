import * as React from 'react';

import * as api from '../../../../api/apiRequests';
import store from '../../../../store/store';
import { fetchSearchFailure } from '../../../AppActions';
import DappCard from '../../dapp-card/DappCard';
import BtnPanel from '../common/btn-panel/BtnPanel';
import DoneAdd from '../common/done-add/DoneAdd';
import OverlayLoader from '../common/overlay-loader/OverlayLoader';
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

interface IContentDappState {
  isLoading: boolean;
  isDone: boolean;
}

export default class ContentDapp extends React.PureComponent
  <IContentDappProps, IContentDappState> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      isDone: null,
    };

    this.submitData = this.submitData.bind(this);
  }

  private submitData() {
    const { data } = this.props;

    this.setState({ isLoading: true });

    api.addDappToDash(data.dapp)
      .then((response) => {
        if (response.status === 200) {

          if ('ok' in response.data &&
            response.data.ok) {
            this.setState({ isDone: true });
          }

          if ('error' in response.data) {
            store.dispatch(fetchSearchFailure(response.data.error));
          }
        }
      });
  }

  public render() {
    const { dapps, data } = this.props;
    const { isLoading, isDone } = this.state;

    const isPrivate = data.dapp === null;

    if (isDone) {
      return <DoneAdd />;
    }

    return (
      <div className="content-dapp">
        {isLoading && <OverlayLoader />}
        <PreviewContainer>
          {isPrivate
            ? <PrivateDapp />
            : <DappCard dataCard={dapps.get(data.dapp)} className="dapp-card-custom" type="dapp" />}
        </PreviewContainer>
        {!isPrivate &&
          <BtnPanel onClickBtn={this.submitData} />}
      </div>
    );
  }
}
