import React, { PureComponent } from "react";

import { web3 } from "../../../../helpers/eth";

export default class StringHashWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.msg = ''
  }

  onChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;

    const hash = web3.sha3(value);

    this.msg = value !== '' ? hash : '';
    onChange(hash);
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
        <p>{this.msg}</p>
      </div>
    );
  }
};
