import React, { PureComponent } from "react";

import { web3 } from "../../helpers/eth";

export default class EthCount extends PureComponent {

  onChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;

    onChange(web3.toWei(value, 'ether').toString());
  };

  render() {
    const { id, readonly, disabled, autofocus = false } = this.props;

    return (
      <div>
        <input
          ref={ref => (this.inputRef = ref)}
          id={id}
          type="number"
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
