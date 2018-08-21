import * as React from 'react';
import Select from 'react-select';

import ImageDefault from '../../../common/image-default/ImageDefault';
import Message from '../../../common/message/Message';
import TitleContentWrapper from '../../../common/title-content-wrapper/TitleContentWrapper';

import './ContentNoAbi.less';


interface IContentNoAbiProps {
  data: any;
}

interface IContentNoAbiState {
  selectedValue: any;
}

export default class ContentNoAbi extends React.PureComponent
  <IContentNoAbiProps, IContentNoAbiState> {
  private contentEditable: HTMLElement;

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
    const { data } = this.props;
    const { selectedValue } = this.state;

    const options = data.uis.map((ui) => ({ value: ui.id, label: ui.name, image: ui.image }));

    return (
      <div className="content-no-abi">
        <div className="dapp-custom-warning">
          <div className="divider" />
          <TitleContentWrapper title="Warning">
            <Message type="red">
              The contract does not provide an interface. You can upload your ABI and guess his type, but without any guarantee.
              </Message>
          </TitleContentWrapper>
        </div>
        {options.length > 0 &&
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
              defaultValue={options[1]}
              options={options}
            />
          </TitleContentWrapper>
        }
        <TitleContentWrapper className="dapp-custom-type" title="Upload your ABI">
          <div
            className="abi-str-field"
            // onBlur={this.onUnfocused}
            // onFocus={this.onFocus}
            ref={(ref) => this.contentEditable = ref}
            onInput={(e) => { console.log(this.contentEditable.innerText); }}
            contentEditable={true}
            suppressContentEditableWarning={true}
          />
        </TitleContentWrapper>
      </div>
    );
  }
}
