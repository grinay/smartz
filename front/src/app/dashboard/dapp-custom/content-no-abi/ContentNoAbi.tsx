import * as React from 'react';

import * as api from '../../../../api/apiRequests';
import { Blockchain } from '../../../../helpers/entities/types';
import Message from '../../../common/message/Message';
import TitleContentWrapper from '../../../common/title-content-wrapper/TitleContentWrapper';
import BtnPanel from '../common/btn-panel/BtnPanel';
import OverlayLoader from '../common/overlay-loader/OverlayLoader';
import SelectType from '../common/select-type/SelectType';

import './ContentNoAbi.less';


interface IContentNoAbiProps {
  data: any;
  blockchain: Blockchain;
  networkId: string;
  address: string;
}

interface IContentNoAbiState {
  selectedValue: any;
  options: any[];
  abi: string;
  isLoading: boolean;
}

export default class ContentNoAbi extends React.PureComponent
  <IContentNoAbiProps, IContentNoAbiState> {
  private contentEditable: HTMLElement;

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      options: null,
      abi: null,
      isLoading: null,
    };

    this.changeSelect = this.changeSelect.bind(this);
    this.submitData = this.submitData.bind(this);
    this.inputAbi = this.inputAbi.bind(this);
  }

  private changeSelect(selectedValue: any) {
    this.setState({ selectedValue });
  }

  private inputAbi() {
    const { selectedValue, options } = this.state;
    const text = this.contentEditable.innerText;

    if (text.length > 25) {
      this.setState({
        abi: text,
        selectedValue: null,
      });
    } else if (selectedValue === null) {
      this.setState({ selectedValue: options[0] });
    }
  }

  private submitData() {
    const { data, blockchain, networkId, address } = this.props;
    const { selectedValue, abi } = this.state;

    this.setState({ isLoading: true });

    const dataSearch = {
      query: address,
    };

    if (abi != null) {
      try {
        dataSearch['abi'] = JSON.parse(abi);
      } catch (error) {
        console.error('Parse error!');
      }
    } else {
      dataSearch['abi'] = data.uis.find((ui) => ui.id === selectedValue.value).abi;
    }

    if (blockchain === 'ethereum') {
      dataSearch['ethereum_network_id'] = networkId;
    }

    api.getSearchData(dataSearch);
  }

  public componentDidMount() {
    const { data } = this.props;

    // set options(select items) and default value before render
    const options = data.uis.map((ui) => ({
      value: ui.id,
      label: ui.name,
      image: ui.image,
    }));

    this.setState({
      options,
      selectedValue: options[0],
    });
  }

  public render() {
    const { data } = this.props;
    const { selectedValue, isLoading } = this.state;

    const options = data.uis.map((ui) => ({ value: ui.id, label: ui.name, image: ui.image }));

    return (
      <div className="content-no-abi">

        {isLoading && <OverlayLoader />}

        <div className="dapp-custom-warning">
          <div className="divider" />
          <TitleContentWrapper title="Warning">
            <Message type="red">
              The contract does not provide an interface. You can upload your ABI and guess his type, but without any guarantee.
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
        <TitleContentWrapper className="dapp-custom-type" title="Upload your ABI">
          <div
            className="abi-str-field"
            ref={(ref) => this.contentEditable = ref}
            onInput={this.inputAbi}
            contentEditable={true}
            suppressContentEditableWarning={true}
          />
        </TitleContentWrapper>
        <BtnPanel onClickBtn={this.submitData} content="Add ABI" />
      </div>
    );
  }
}
