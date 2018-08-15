import * as React from 'react';

import * as api from '../../../api/apiRequests';
import { EosClass } from '../../../helpers/eos';
import { isAddress } from '../../../helpers/eth';
import Loader from '../../common/loader/Loader';
import Input from '../../ui-kit/input/Input';
import Text from '../../ui-kit/text/Text';
import Title from '../../ui-kit/title/Title';

import './DappCustom.less';


interface IDappCustomState {
  response: any;
  loading: boolean;
}


export default class DappCustom extends React.PureComponent<{}, IDappCustomState> {
  constructor(props) {
    super(props);

    this.state = {
      response: null,
      loading: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validateString = this.validateString.bind(this);
  }

  private onSubmit(value: string): void {
    api.getSearchData({
      query: value,
      ethereum_network_id: '4', //TODO: get id
    })
      .then((response) => {
        const { data, status } = response;

        if (status === 200) {
          console.log(data);
          //   dispatch(startLoginSuccessAction(data));
        } else {

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private validateString(value: string): boolean {
    return isAddress(value) || EosClass.isAddress(value);
  }

  public render() {
    const { loading, response } = this.state;

    let content;
    if (loading) {
      content = <Loader />;
    } else if (response != null) {
      switch (response.type) {
        case 'dapp':
          break;
        case 'contract_ui':
          break;
        case 'abi':
          break;
        case 'no_abi':
          break;
        default:
          break;
      }
    }

    return (
      <div className="dapp-custom">
        <Title type="medium">Add an existing contract</Title>
        <Text type="caption" className="dapp-custom-description">
          Add an existing contract by its address in the blockchain. You can add both Smartz and third-party contracts, Etehreum or EOS.
        </Text>
        <Title type="small">Contract address</Title>
        <Text type="caption">For example:</Text>
        <Text type="caption">- Ethereum: 0x40ae4acd08e65714b093bf2495fd7941aedfa231</Text>
        <Text type="caption">- EOS: EOS82LzjXdnBPTwgJCxiUiRcVsxdiawn8MiAgVTfFZV41a4X7aMuI</Text>
        <Input
          onValidate={this.validateString}
          className="dapp-custom-input"
          onSubmit={this.onSubmit}
          autofocus={true}
        />
        <Loader />
      </div >
    );
  }
}
