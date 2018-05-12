import React, { PureComponent } from "react";

const sha256 = x => "0x" + require('js-sha256')(x);

export default class StringSha256Widget extends PureComponent {
  constructor(props) {
    super(props);

    this.msg = ''
  }

  onChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;

    const hash = sha256(value);

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
