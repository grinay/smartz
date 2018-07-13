import React, { PureComponent } from "react";
import axios from 'axios';
import { isAddress } from "../../../helpers/eth";
import {sha256, keccak256 } from 'ethereumjs-util';
import MerkleTree from "./helpers/MerkleTree";
import { ipfsConstants } from '../../../constants/constants';


export default class MerkleRootWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
      url: null
    }
  }

  validateLine(line) {
    const { options } = this.props;
    if (options.blockchain === 'eth') {
      let els = line.split(' ');
      if (els.length !== 2)
        return 'Incorrect line format';

      if (!isAddress(els[0]))
        return 'Incorrect line format (address)';

      if (!/[0-9]+/.test(els[1]))
        return 'Incorrect line format (token amount)';

      return null;
    } else if (options.blockchain === 'eos') {
      let els = line.split(' ');
      if (els.length !== 2)
        return 'Incorrect line format';

      if (!/[a-z1-5.]/.test(els[0]))
        return 'Incorrect line format (account name)';

      if (!/[0-9]+/.test(els[1]))
        return 'Incorrect line format (token amount)';

      return null;
    } else
      return 'Incorrect blockchain';
  }

  merkleRoot(file) {
    const { options } = this.props;

    let data =file.split('\n').filter(line => line !== '');
    let leafs = data.map(line => {
      let err = this.validateLine(line);
      if (err)
        throw err;
      return line.split(' ').join('');
    });

    let hasher = options.blockchain === 'eth' ? keccak256 : sha256;
    if (options.hasher === 'keccak')
      hasher = keccak256;
    else if (options.hasher === 'sha256')
      hasher = sha256;

    return new MerkleTree(leafs, hasher).getHexRoot();
  }

  readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();

      reader.onload = event => resolve(event.target.result);
      reader.onerror = event => reject(event.target.error);
      reader.onloadstart = event => this.setState({ msg: 'Reading...' });

      reader.readAsText(file);
    });
  }

  uploadIpfs(data) {
    return axios.put(ipfsConstants.uploadUrl + '/' + ipfsConstants.emptyDir + '/airdrop_list.txt', data);
  }

  onChange = event => {
    const { onChange, options } = this.props;
    const file = event.target.files[0];

    if (!file) {
      this.setState({ msg: null }, onChange(null));
    } else {
      this.readFile(file)
        .then(data => {
          this.setState({ msg: 'Uploading to IPFS...' });
          this.uploadIpfs(data)
            .then((resp) => {
              let url = ipfsConstants.downloadUrl + resp.headers.location;
              this.setState({ msg: 'Building Merkle Tree...', url: url });
              let root = this.merkleRoot(data);
              this.setState({ msg: root }, onChange(options.blockchain === "eos" ? root.substr(2): root));
            });
        })
        .catch(error => {
          if (typeof error === "string")
            this.setState({msg: error});
          else {
            this.setState({msg: 'Something went wrong'});
            console.log(error);
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
            defaultValue=""
            autoFocus={autofocus}
            multiple={false}
            className={"form-control"}
            placeholder={"url to file consist airdrop list"}
            onChange={this.onChange}
          />
        </p>
        {this.state.url ? (<p>{this.state.url}</p>) : null}
        <p>{this.state.msg}</p>
      </div>
    );
  }
};
