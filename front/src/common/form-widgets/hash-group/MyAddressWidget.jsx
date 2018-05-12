import React, { PureComponent } from "react";

import { web3 } from "../../../helpers/eth";

export default class MyAddressWidget extends PureComponent {
  constructor(props) {
    super(props);

    try {
      this.account = web3.eth.accounts[0]
    } catch (err) {
      this.account = ''
    }
  }

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
          defaultValue={this.account}
          autoFocus={autofocus}
          className={"form-control"}
        />
      </div>
    );
  }
};
