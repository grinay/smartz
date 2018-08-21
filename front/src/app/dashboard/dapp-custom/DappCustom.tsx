import * as React from 'react';

import * as api from '../../../api/apiRequests';
import { EosClass } from '../../../helpers/eos';
import { isAddress } from '../../../helpers/eth';
import Loader from '../../common/loader/Loader';
import Input from '../../ui-kit/input/Input';
import Text from '../../ui-kit/text/Text';
import Title from '../../ui-kit/title/Title';
import BtnPanel from './common/BtnPanel/BtnPanel';
import ContentContractAbi from './content-contract-abi/ContentContractAbi';
import ContentDapp from './content-dapp/ContentDapp';

import './DappCustom.less';


interface IDappCustomProps {
  search: any;
  dapps: any;
}

interface IDappCustomState {
  selectedValue: any;
  address: string;
}

export default class DappCustom extends React.PureComponent<IDappCustomProps, IDappCustomState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      address: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validateString = this.validateString.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  private onSubmit(value: string): void {

    this.setState({ address: value });

    api.getSearchData({
      query: value,
      ethereum_network_id: '1', //TODO: get id
    })
      .then(() => {
        this.forceUpdate();
      });
  }

  private validateString(value: string): boolean {
    return isAddress(value) || EosClass.isAddress(value);
  }

  private selectChange(selected) {
    this.setState({ selectedValue: selected });
  }

  public render() {
    console.log('render');
    const { search, dapps } = this.props;
    const { address } = this.state;

    if (!search || !dapps) {
      return null;
    }

    let content;
    if ('status' in search && search.status === 'loading') {
      content = <Loader />;
    } else if ('error' in search && search.error != null) {
      content = <p>Error: {search.error}</p>;
    } else if ('data' in search && search.data != null) {
      // console.log(search.data);
      switch (search.data.type) {
        case 'dapp':
          content = <ContentDapp dapps={dapps} data={search.data} />;
          break;

        case 'contract_ui':
          content = <ContentContractAbi data={search.data} address={address} />;
          break;
        case 'abi':
          content = <ContentContractAbi data={search.data} address={address} />;
          break;

        // case 'abi':
        //   if (search.data.uis.length > 0) {

        //   } else {

        //   }
        //   break;

        case 'no_abi':
          break;
        default:
          content = <Loader />;
          break;
      }
    }

    return (
      <div className="dapp-custom">
        <div className="dapp-custom-container">
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
        </div>
        {content}
        <BtnPanel onClickBtn={() => console.log('msg')} isDisabled={false} />
      </div >
    );
  }
}
