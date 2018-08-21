import * as React from 'react';
import Select from 'react-select';

import { getFunctionsByType } from '../../../../helpers/common';
import ImageDefault from '../../../common/image-default/ImageDefault';
import Message from '../../../common/message/Message';
import TitleContentWrapper from '../../../common/title-content-wrapper/TitleContentWrapper';
import DappCard from '../../dapp-card/DappCard';
import PreviewContainer from '../common/preview-container/PreviewContainer';

import './ContentContractAbi.less';


interface IContentContractAbiProps {
  data: any;
  address: string;
}

interface IContentContractAbiState {
  selectedValue: any;
}

export default class ContentContractAbi extends React.PureComponent
  <IContentContractAbiProps, IContentContractAbiState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
    };

    this.changeSelect = this.changeSelect.bind(this);
  }

  private changeSelect(selectedValue: any) {
    this.setState({ selectedValue });
  }

  public render() {
    const { data, address } = this.props;
    const { selectedValue } = this.state;

    let message = (
      <Message >
        This third-party contract isn’t from Smartz, but we seem to have guessed his type. You can try to use it, but without any guarantee.
                </Message>
    );
    let options;
    let card;

    if (data.type === 'contract_ui') {
      options = data.uis.map((ui) => ({ value: ui.id, label: ui.name, image: ui.image }));
    }

    //TODO: refactor this
    if (selectedValue != null) {
      card = selectedValue.value === 'raw'
        ? <p>Raw ABI</p>
        : <DappCard contractUi={data.uis.find((ui) => ui.id === selectedValue.value)} />;
    } else {
      card = <p>Select anything!</p>;
    }

    if (data.type === 'abi') {
      if (data.uis.length > 0) {
        options = [
          { value: 'raw', label: 'Use raw ABI', image: '' },
          ...data.uis.map((ui) => ({ value: ui.id, label: ui.name, image: ui.image })),
        ];
      } else {
        options = null;

        //TODO: if eos?
        // generate dashboard_functions from raw_abi_function_specs
        let dashboardFunctions = [];
        const viewFuncs = getFunctionsByType(data.raw_abi_function_specs, 'view');

        for (let i = 0; i < viewFuncs.length; i++) {
          if (i >= 4) {
            continue;
          }

          dashboardFunctions.push(viewFuncs[i].name);
        }

        card = (
          <DappCard contractUi={{
            abi: data.abi,
            address,
            function_specs: data.raw_abi_function_specs,
            dashboard_functions: dashboardFunctions,
            blockchain: 'ethereum',
            description: 'Some description',
            name: 'Some name',
            image: '',
          }} />
        );
        message = (
          <Message type="gray">
            Unknown type of contract. You can manage it, but the names will be "programmer-like”.
              </Message>
        );
      }
    }
    //TODO: select item (style as item menu)

    return (
      <div className="content-contract-abi">
        <div className="dapp-custom-warning">
          <div className="divider" />
          <TitleContentWrapper title="Warning">
            {message}
          </TitleContentWrapper>
        </div>
        {options != null &&
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
              defaultOptions={true}
              options={data.uis.map((ui) => {
                return {
                  value: ui.id,
                  label: ui.name,
                  image: ui.image,
                };
              })}
            />
          </TitleContentWrapper>
        }
        <PreviewContainer>
          {card}
        </PreviewContainer>
      </div>
    );
  }
}
