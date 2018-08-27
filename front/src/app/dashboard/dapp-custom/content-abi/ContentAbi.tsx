import * as React from 'react';

import * as api from '../../../../api/apiRequests';
import { getFunctionsByType } from '../../../../helpers/common';
import { Blockchain } from '../../../../helpers/entities/types';
import store from '../../../../store/store';
import { fetchSearchFailure } from '../../../AppActions';
import Message from '../../../common/message/Message';
import TitleContentWrapper from '../../../common/title-content-wrapper/TitleContentWrapper';
import DappCard from '../../dapp-card/DappCard';
import BtnPanel from '../common/btn-panel/BtnPanel';
import DoneAdd from '../common/done-add/DoneAdd';
import OverlayLoader from '../common/overlay-loader/OverlayLoader';
import PreviewContainer from '../common/preview-container/PreviewContainer';
import SelectType from '../common/select-type/SelectType';

import './ContentAbi.less';


interface IContentAbiProps {
  data: {
    type: string;
    abi: any;
    uis: any[];
    raw_abi_function_specs: any;
  };
  address: string;
  networkId: string;
  blockchain: Blockchain;
}

interface IContentAbiState {
  selectedValue: any;
  options: any[];
  isEmptyType: boolean;
  uis: any[];
  isLoading: boolean;
  isDone: boolean;
}

export default class ContentAbi extends React.PureComponent
  <IContentAbiProps, IContentAbiState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      options: null,
      isEmptyType: null,
      uis: null,
      isLoading: null,
      isDone: null,
    };

    this.changeSelect = this.changeSelect.bind(this);
    this.submitData = this.submitData.bind(this);
    this.genContractUi = this.genContractUi.bind(this);
  }

  private changeSelect(selectedValue: any) {
    this.setState({ selectedValue });
  }

  private submitData() {
    const { data, address, blockchain, networkId } = this.props;
    const { selectedValue } = this.state;

    this.setState({ isLoading: true });

    let result;
    if (selectedValue.value === 'rawId') {
      result = api.createDappFromAbi({
        network_id: networkId,
        address,
        abi: data.abi,
        blockchain,
      });
    } else {
      result = api.addContractUiToDash(selectedValue.value, {
        network_id: networkId,
        address,
        abi: data.abi,
      });
    }

    result
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

  private genContractUi(
    id: any,
    rawAbiFuncs: any,
    abi: any,
    address: any,
    blockchain: Blockchain,
  ): any {
    // generate dashboard_functions from rawAbiFuncs
    let dashboardFunctions = [];
    const viewFuncs = getFunctionsByType(rawAbiFuncs, 'view');

    for (let i = 0; i < viewFuncs.length; i++) {
      if (i >= 4) {
        continue;
      }

      dashboardFunctions.push(viewFuncs[i].name);
    }

    return {
      id,
      abi,
      address,
      blockchain,
      function_specs: rawAbiFuncs,
      dashboard_functions: dashboardFunctions,
      description: 'Some description',
      name: 'Some name',
      image: '',
    };
  }

  public componentWillMount() {
    const { data, address, blockchain } = this.props;

    const isEmptyType = data.uis.length === 0;
    const uis = [...data.uis];

    // add item 'Use raw ABI'
    uis.push(
      this.genContractUi(
        'rawId',
        data.raw_abi_function_specs,
        data.abi,
        address,
        blockchain,
      ));

    const options = uis.map((ui) => ({
      value: ui.id,
      label: ui.name,
      image: ui.image,
    }));

    // set default before render
    const selectedValue = options[0];

    this.setState({
      selectedValue,
      isEmptyType,
      options,
      uis,
    });
  }

  public render() {
    const { selectedValue, isEmptyType, options, uis, isDone, isLoading } = this.state;

    if (isDone) {
      return <DoneAdd />;
    }

    return (
      <div className="content-contract-abi">

        {isLoading && <OverlayLoader />}

        <div className="dapp-custom-warning">
          <div className="divider" />
          <TitleContentWrapper title="Warning">
            <Message type={isEmptyType ? 'gray' : 'green'}>
              {!isEmptyType
                ? 'This third-party contract isn’t from Smartz, but we seem to have guessed his type. You can try to use it, but without any guarantee.'
                : 'Unknown type of contract. You can manage it, but the names will be ”programmer-like”'}
            </Message>
          </TitleContentWrapper>
        </div>

        {!isEmptyType &&
          <TitleContentWrapper className="dapp-custom-type" title="Type">
            <SelectType
              value={selectedValue}
              onChange={this.changeSelect}
              options={options}
            />
          </TitleContentWrapper>
        }

        <PreviewContainer>
          <DappCard contractUi={uis.find((ui) => ui.id === selectedValue.value)} />
        </PreviewContainer>

        <BtnPanel onClickBtn={this.submitData} />
      </div>
    );
  }
}
