import * as React from 'react';

import * as api from '../../../../api/apiRequests';
import { Blockchain } from '../../../../helpers/entities/types';
import Message from '../../../common/message/Message';
import TitleContentWrapper from '../../../common/title-content-wrapper/TitleContentWrapper';
import DappCard from '../../dapp-card/DappCard';
import BtnPanel from '../common/btn-panel/BtnPanel';
import DoneAdd from '../common/done-add/DoneAdd';
import OverlayLoader from '../common/overlay-loader/OverlayLoader';
import PreviewContainer from '../common/preview-container/PreviewContainer';
import SelectType from '../common/select-type/SelectType';

import './ContentContract.less';


interface IContentContractProps {
  data: {
    type: string;
    uis: any[];
  };
  address: string;
  networkId: string;
  blockchain: Blockchain;
}

interface IContentContractState {
  selectedValue: any;
  options: any[];
  isLoading: boolean;
  isDone: boolean;
  uis: any[];
}

export default class ContentContract extends React.PureComponent
  <IContentContractProps, IContentContractState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      options: null,
      isLoading: null,
      isDone: null,
      uis: null,
    };

    this.changeSelect = this.changeSelect.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  private changeSelect(selectedValue: any) {
    this.setState({ selectedValue });
  }

  private submitData() {
    const { address, networkId } = this.props;
    const { selectedValue } = this.state;

    this.setState({ isLoading: true });

    api.addContractUiToDash(selectedValue.value, {
      network_id: networkId,
      address,
    })
      .then((response) => {
        const { data, status } = response;

        if (status === 200 && 'ok' in data && data.ok) {
          this.setState({ isDone: true });
        }
      });
  }

  public componentWillMount() {
    const { data, address } = this.props;

    const uis = data.uis.map((ui) => ({
      ...ui,
      address,
    }));

    // set options(select items) and default value before render
    const options = data.uis.map((ui) => {
      return {
        value: ui.id,
        label: ui.name,
        image: ui.image,
      };
    });

    this.setState({
      options,
      selectedValue: options[0],
      uis,
    });
  }

  public render() {
    const { selectedValue, options, isDone, isLoading, uis } = this.state;

    if (isDone) {
      return <DoneAdd />;
    }

    return (
      <div className="content-contract-abi">

        {isLoading && <OverlayLoader />}

        <div className="dapp-custom-warning">
          <div className="divider" />
          <TitleContentWrapper title="Warning">
            <Message >
              This third-party contract isn’t from Smartz, but we seem to have guessed his type. You can try to use it, but without any guarantee.
                </Message>
          </TitleContentWrapper>
        </div>

        <TitleContentWrapper className="dapp-custom-type" title="Type">
          <SelectType
            value={selectedValue}
            onChange={this.changeSelect}
            options={options}
          />
        </TitleContentWrapper>

        <PreviewContainer>
          <DappCard contractUi={uis.find((ui) => ui.id === selectedValue.value)} />
        </PreviewContainer>
        <BtnPanel onClickBtn={this.submitData} />
      </div>
    );
  }
}
