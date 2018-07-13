import React, { PureComponent } from "react";
import axios from 'axios';
import { isAddress } from "../../../helpers/eth";
import {sha256, keccak256 } from 'ethereumjs-util';
import MerkleTree from "./helpers/MerkleTree";


export default class MerkleProofWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
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

  fetchFile(url) {
    return axios.get(url, {
      responseType: "text"
    });
  }

  merkleProof(file, account) {
    const { options } = this.props;

    let data =file.split('\n').filter(line => line !== '');

    let idx = data.findIndex(line => line.split(' ')[0] === account);
    if (idx === -1)
      throw 'Account not found in file';

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

    return new MerkleTree(leafs, hasher).getHexProof(leafs[idx]);
  }

  onChange = () => {
    const { onChange } = this.props;
    const url = this.inputRef.value;
    const account = this.inputAccountRef.value;

    if (!url.length || !account.length)
      return this.setState({msg: 'Fill in all the input fields'});

    this.fetchFile(url)
      .then(reps => {
        if (reps.status === 200) {
          this.setState({msg: 'Building Merkle Proof...'});
          try {
            let proof = this.merkleProof(reps.data, account);

            this.setState({msg: 'Proof successfully builded'}, onChange(proof.join(' ')));
          }
          catch (error) {
            if (typeof error === "string")
              this.setState({msg: error});
            else {
              this.setState({msg: 'Error an building merkle tree'});
            }
          }
        }
      })
      .catch(error => {
        if (error.response) {
          if (error.response.code >= 400 && error.response.code < 500) {
            this.setState({msg: 'File not found'}, onChange(null));
          } else {
            this.setState({msg: 'Error an fetching file'}, onChange(null));
          }
        }
      });
  };

  render() {
    const { id, readonly, disabled, autofocus = false } = this.props;

    return (
      <div>
        <p>
          <input
            ref={ref => (this.inputRef = ref)}
            id={id}
            type="text"
            disabled={readonly || disabled}
            defaultValue=""
            autoFocus={autofocus}
            multiple={false}
            placeholder={"url to file consist airdrop list"}
            className={"form-control"}
          />
          <input
            ref={ref => (this.inputAccountRef = ref)}
            id={id + '-account'}
            type="text"
            disabled={readonly || disabled}
            defaultValue=""
            autoFocus={autofocus}
            multiple={false}
            placeholder={"account name for airdrop"}
            className={"form-control"}
          />
          <input
            id={id + '-button'}
            type="button"
            disabled={readonly || disabled}
            value="Build Proof"
            onClick={this.onChange}
            className="button contract-controls__form-button"
            style={{float: "right", marginTop: 10}}
          />
        </p>
        <p>{this.state.msg}</p>
      </div>
    );
  }
};
