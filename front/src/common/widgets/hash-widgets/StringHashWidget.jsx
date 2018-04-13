import React, { PureComponent } from "react";

import { web3 } from "../../../helpers/eth";

export default class StringHashWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.msg = ''
  }

  hashFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();

      reader.onload = event => resolve(event.target.result);
      reader.onerror = event => reject(event.target.error);
      reader.onloadstart = event => this.setState({ msg: 'Hashing...' });

      reader.readAsArrayBuffer(file);
    });
  }

  buf2hex = (buffer) => {
    return Array.prototype.map.call(
      new Uint8Array(buffer), x =>
        ('00' + x.toString(16)).slice(-2)
    ).join('');
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
