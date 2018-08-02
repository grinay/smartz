import React, { PureComponent } from "react";
import axios from 'axios';
import MerkleTree from "./helpers/MerkleTree";
import {getAccountAddress} from "../../../helpers/eth"
import Eos from "../../../helpers/eos"
import { blockchains } from '../../../constants/constants';


export default class MerkleProofWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
    };

    this.hideInputs = {};
  }

  fetchFile(url) {
    return axios.get(url, {
      responseType: "text"
    });
  }

  changeInputValue(id, value) {
    let input = document.getElementById(id);
    if (input) {
      input.value = value;
      let ev = new Event('input', {bubbles: true});
      input.dispatchEvent(ev);
      let instanceKey = Object.keys(input).find(key => key.indexOf("reactInternalInstance") !== -1);
      if (instanceKey)
        input[instanceKey].pendingProps.onChange(ev);
    }
  }

  hideInput(id) {
    let currentForm = this.inputRef.form;
    let inputs = currentForm.getElementsByClassName('form-control');
    let input = inputs.namedItem(id);
    if (input) {
      input.parentElement.parentElement.parentElement.setAttribute("hidden", "true");
      this.hideInputs[input.id] = input.parentElement.parentElement.parentElement;
    }
  }

  hideAllInputs() {
    const { options } = this.props;

    if (options.addressInputPosition !== null && options.addressInputPosition !== undefined)
      this.hideInput('root_' + options.addressInputPosition);

    if (options.tokensInputPosition !== null && options.tokensInputPosition !== undefined)
      this.hideInput('root_' + options.tokensInputPosition);
  }

  showAllInputs() {
    if (this.hideInputs)
      Object.keys(this.hideInputs).forEach((key) => {
        this.hideInputs[key].removeAttribute("hidden");
        delete this.hideInputs[key];
      })
  }

  merkleProof(file, account) {
    const { options } = this.props;

    let leafs = MerkleTree.leafsFromFile(file, options.blockchain);

    let idx = leafs.findIndex(line => line.split(' ')[0] === account);
    if (idx === -1)
      throw 'Account with address ' + account + ' does not participate in the airdrop';

    if (options.tokensInputPosition !== null && options.tokensInputPosition !== undefined)
      this.changeInputValue('root_' + options.tokensInputPosition, leafs[idx].split(' ')[1]);

    return new MerkleTree(leafs, options.hasher, options.blockchain).getHexProof(leafs[idx]);
  }

  getAccount() {
    const { options } = this.props;

    if (options.blockchain === blockchains.ethereum)
      return Promise.resolve(getAccountAddress());
    else if (options.blockchain === blockchains.eos)
      return Eos.chooseIdentity()
        .then(identity => Eos.getAccountName(identity));
  }

  onChange = async () => {
    const { onChange, options } = this.props;
    const url = this.inputRef.value;
    const account = await this.getAccount();

    if (!url.length || !account.length)
      return this.setState({msg: 'Fill in all the input fields'});

    this.setState({msg: 'Loading file from IPFS (about 30 seconds per 1m addresses)'});
    this.fetchFile(url)
      .then(reps => {
        if (reps.status === 200) {
          this.setState({msg: 'Building Merkle Proof...'});
          try {
            let proof = this.merkleProof(reps.data, account);

            if (options.addressInputPosition !== null && options.addressInputPosition !== undefined)
              this.changeInputValue('root_' + options.addressInputPosition, account);

            this.setState({msg: 'Proof successfully builded for ' + account}, onChange(proof.join(' ')));
          }
          catch (error) {
            if (typeof error === "string")
              this.setState({msg: 'Error: ' + error});
            else {
              this.setState({msg: 'Error: building merkle tree failed'});
            }
          }
        }
      })
      .catch(error => {
        if (error.response) {
          if (error.response.code >= 400 && error.response.code < 500) {
            this.setState({msg: 'Error: file not found'}, onChange(null));
          } else {
            this.setState({msg: 'Error: file fetching failed'}, onChange(null));
          }
        }
      });
  };

  componentDidUpdate() {
    this.hideAllInputs();
  }

  componentDidMount() {
    this.hideAllInputs();
  }

  componentWillUnmount() {
    this.showAllInputs();
  }

  render() {
    const { id, readonly, disabled, autofocus = false } = this.props;

    return (
      <div>
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
