import * as React from 'react';

import * as api from '../../../api/apiRequests';
import { getBlockchainByAddress, isBlockchainAddress } from '../../../helpers/blockchain';
import { Blockchain } from '../../../helpers/entities/types';
import { EosClass } from '../../../helpers/eos';
import { getNetworkIdSync, isAddress } from '../../../helpers/eth';
import store from '../../../store/store';
import { clearSearchData } from '../../AppActions';
import Loader from '../../common/loader/Loader';
import Input from '../../ui-kit/input/Input';
import Text from '../../ui-kit/text/Text';
import Title from '../../ui-kit/title/Title';
import ErrorAdd from './common/error-add/ErrorAdd';
import ContentAbi from './content-abi/ContentAbi';
import ContentContract from './content-contract/ContentContract';
import ContentDapp from './content-dapp/ContentDapp';
import ContentNoAbi from './content-no-abi/ContentNoAbi';

import './DappCustom.less';


interface IDappCustomProps {
  search: any;
  dapps: any;
}

interface IDappCustomState {
  address: string;
  networkId: string;
  blockchain: Blockchain;
}

export default class DappCustom extends React.PureComponent<IDappCustomProps, IDappCustomState> {
  constructor(props) {
    super(props);

    this.state = {
      address: null,
      networkId: getNetworkIdSync(),
      blockchain: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(value: string): void {
    const { networkId } = this.state;

    const val = value.trim();

    if (isBlockchainAddress(val.trim())) {
      const blockchain = getBlockchainByAddress(val);

      const request = {
        query: val,
      };

      if (blockchain === 'ethereum') {
        request['ethereum_network_id'] = networkId;
      }

      this.setState({
        address: val,
        blockchain,
      });

      api.getSearchData(request);
    }
  }

  public componentWillUnmount() {
    // clear search data after close window
    store.dispatch(clearSearchData());
  }


  public render() {
    const { search, dapps } = this.props;
    const { address, networkId, blockchain } = this.state;

    let content;
    if (search.isLoading) {
      content = <Loader className="dapp-custom-loader" />;
    } else if (search.error != null) {
      content = <ErrorAdd errorMsg={search.error} />;
    } else if (search.data != null) {
      switch (search.data.type) {
        case 'dapp':
          content = <ContentDapp dapps={dapps} data={search.data} />;
          break;

        case 'contract_ui':
          content = (
            <ContentContract
              data={search.data}
              address={address}
              networkId={networkId}
              blockchain={blockchain}
            />
          );
          break;

        case 'abi':
          content = (
            <ContentAbi
              data={search.data}
              address={address}
              networkId={networkId}
              blockchain={blockchain}
            />
          );
          break;

        case 'no_abi':
          content = (
            <ContentNoAbi
              data={search.data}
              networkId={networkId}
              blockchain={blockchain}
              address={address}
            />
          );
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
            className="dapp-custom-input"
            autofocus={true}
            onChange={this.onSubmit}
          />
        </div>
        {content}
      </div >
    );
  }
}
