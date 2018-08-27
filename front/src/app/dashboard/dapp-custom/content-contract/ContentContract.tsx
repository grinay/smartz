import * as React from 'react';
import Select from 'react-select';

import * as api from '../../../../api/apiRequests';
import { getFunctionsByType } from '../../../../helpers/common';
import { Blockchain } from '../../../../helpers/entities/types';
import ImageDefault from '../../../common/image-default/ImageDefault';
import Message from '../../../common/message/Message';
import TitleContentWrapper from '../../../common/title-content-wrapper/TitleContentWrapper';
import DappCard from '../../dapp-card/DappCard';
import BtnPanel from '../common/BtnPanel/BtnPanel';
import DoneAdd from '../common/done-add/DoneAdd';
import OverlayLoader from '../common/overlay-loader/OverlayLoader';
import PreviewContainer from '../common/preview-container/PreviewContainer';

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
        if (response.status === 200 &&
          'ok' in response.data &&
          response.data.ok) {
          this.setState({ isDone: true });
        }
      });
  }

  public componentWillMount() {
    const { data } = this.props;

    // set options(select items) and default value before render
    const options = data.uis.map((ui) => {
      return {
        value: ui.id,
        label: ui.name,
        image: ui.image,
      };
    });

    this.setState({ options, selectedValue: options[0] });
  }

  public render() {
    const { data } = this.props;
    const { selectedValue, options, isDone, isLoading } = this.state;

    if (isDone) {
      return <DoneAdd />;
    }

    //TODO: select item (style as item menu)

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
          <Select
            components={{
              Option: ({ innerProps, innerRef, data }) =>
                <div ref={innerRef} {...innerProps} className="item-select flex-v">
                  <div className="item-select-img">
                    <ImageDefault src={data.image} name={data.label} fontSize={15} />
                  </div>
                  <p className="item-select-text">{data.label}</p>
                </div>,
            }}
            value={selectedValue}
            onChange={this.changeSelect}
            options={options}
          />
        </TitleContentWrapper>

        <PreviewContainer>
          <DappCard contractUi={data.uis.find((ui) => ui.id === selectedValue.value)} />
        </PreviewContainer>
        <BtnPanel onClickBtn={this.submitData} />
      </div>
    );
  }
}
