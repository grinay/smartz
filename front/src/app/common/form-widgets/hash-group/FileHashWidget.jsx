import React, { PureComponent } from "react";

import { web3Local } from "../../../../helpers/eth";

export default class FileHashWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
    }
  }

  hashFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();

      reader.onload = event => resolve(event.target.result);
      reader.onerror = event => reject(event.target.error);
      reader.onloadstart = event => this.setState({ msg: 'Hashing...' });

      reader.readAsArrayBuffer(file);
    });
  };

  buf2hex = (buffer) => {
    return Array.prototype.map.call(
      new Uint8Array(buffer), x =>
        ('00' + x.toString(16)).slice(-2)
    ).join('');
  };

  onChange = event => {
    const { onChange } = this.props;
    const file = event.target.files[0];

    if (!file) {
      this.setState({ msg: null }, onChange(null));
    } else {
      this.hashFile(file)
        .then(fileAsBinaryString => {
          const hash = web3Local.sha3(this.buf2hex(fileAsBinaryString), { encoding: 'hex' });

          this.setState({ msg: hash }, onChange(hash));
        })
        .catch(error => {
          switch (error.code) {
            case error.NOT_FOUND_ERR:
              this.setState({ msg: 'File Not Found' });
              break;
            case error.NOT_READABLE_ERR:
              this.setState({ msg: 'File is not readable' });
              break;
            default:
              this.setState({ msg: 'An error occurred reading this file' });
          }
        });
    }
  };

  render() {
    const { id, readonly, disabled, autofocus = false } = this.props;

    return (
      <div>
        <p>
          <input
            ref={ref => (this.inputRef = ref)}
            id={id}
            type="file"
            disabled={readonly || disabled}
            onChange={this.onChange}
            defaultValue=""
            autoFocus={autofocus}
            multiple={false}
          />
        </p>
        <p>{this.state.msg}</p>
      </div>
    );
  }
};
