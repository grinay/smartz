import React, { PureComponent } from "react";
import axios from 'axios';
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

  merkleRoot(file) {
    const { options } = this.props;

    let leafs = MerkleTree.leafsFromFile(file, options.blockchain);

    return new MerkleTree(leafs, options.hasher, options.blockchain).getHexRoot();
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
    const { onChange } = this.props;
    const file = event.target.files[0];

    this.setState({ url: null });

    if (!file) {
      this.setState({ msg: null }, onChange(null));
    } else {
      this.readFile(file)
        .then(data => {
          this.data = data;
          this.setState({ msg: 'Uploading to IPFS (about 1 minute per 1m addresses)' });
          return this.uploadIpfs(data)
        })
        .then(resp => {
          let url = ipfsConstants.downloadUrl + resp.headers.location;
          this.setState({ msg: 'Building Merkle Tree...', url: url });
          let root = this.merkleRoot(this.data);
          this.setState({ msg: 'MerkleRoot: ' + root }, onChange(root));
        })
        .catch(error => {
          if (typeof error === "string")
            this.setState({msg: 'Error: ' + error});
          else {
            this.setState({msg: 'Error: building merkle tree failed'});
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
        {this.state.url ? (<p>File uploaded: <a href={this.state.url}>{this.state.url}</a></p>) : null}
        <p>{this.state.msg}</p>
      </div>
    );
  }
};
