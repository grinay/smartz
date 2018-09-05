import * as React from 'react';
import Select from 'react-select';

import ImageDefault from '../../../../common/image-default/ImageDefault';

import './SelectType.less';


export default class SelectType extends React.PureComponent<any, {}> {
  public render() {
    const { ...rest } = this.props;

    return (
      <Select
        className="select-type"
        components={{
          Option: ({ innerProps, innerRef, data }) =>
            <div ref={innerRef} {...innerProps} className="item-select flex-v">
              <div className="item-select-img">
                <ImageDefault src={data.image} name={data.label} fontSize={15} />
              </div>
              <p className="item-select-text">{
                data.value !== 'rawId' ? data.label : 'Use raw ABI'
              }</p>
            </div>,
          SingleValue: (props) => {
            return (
              <div className="item-select flex-v">
                <div className="item-select-img">
                  <ImageDefault src={props.data.image} name={props.data.label} fontSize={15} />
                </div>
                <p className="item-select-text">{
                  props.data.value !== 'rawId' ? props.data.label : 'Use raw ABI'
                }</p>
              </div>
            );
          },
          ValueContainer: ({ children }) => (
            <div className="selected-value flex-h">
              {children}
            </div>
          ),
        }}
        {...rest}
      />
    );
  }
}
