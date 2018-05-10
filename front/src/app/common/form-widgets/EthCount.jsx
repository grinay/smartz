import React, { PureComponent } from "react";

import { web3 } from "../../../helpers/eth";

export default class EthCount extends PureComponent {

  onChange = event => {
    const { onChange } = this.props;
    const stringValue = event.target.value;

    if (!isNaN(stringValue)) {
      // "+" is operator for strict type conversion to type "number"
      onChange(+web3.toWei(stringValue, 'ether'));
    } else {
      onChange('');
    }
  };

  render() {
    const { id, readonly, disabled, autofocus = false } = this.props;

    return (
      <div>
        <input
          ref={ref => (this.inputRef = ref)}
          id={id}
          type="string"
          disabled={readonly || disabled}
          onChange={this.onChange}
          defaultValue=""
          autoFocus={autofocus}
          className={"form-control"}
        />
      </div>
    );
  }
};
