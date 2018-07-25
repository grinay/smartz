import React, { PureComponent } from "react";
import axios from 'axios';
import MerkleTree from "./helpers/MerkleTree";


export default class MerkleProofWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
    }
  }

  fetchFile(url) {
    return axios.get(url, {
      responseType: "text"
    });
  }

  merkleProof(file, account) {
    const { options } = this.props;

    let leafs = MerkleTree.leafsFromFile(file, options.blockchain);

    let idx = leafs.findIndex(line => line.split(' ')[0] === account);
    if (idx === -1)
      throw 'Account not found in file';

    return new MerkleTree(leafs, options.hasher, options.blockchain).getHexProof(leafs[idx]);
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
        </p>
        <p>{this.state.msg}</p>
        <input
          id={id + '-button'}
          type="button"
          disabled={readonly || disabled}
          value="Build Proof"
          onClick={this.onChange}
          className="button contract-controls__form-button"
          style={{float: "right", marginTop: 10, marginLeft: '100%'}}
        />
      </div>
    );
  }
};
