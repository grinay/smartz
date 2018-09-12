import * as React from 'react';

import { copyTextToClipboard } from '../../../helpers/utils';
import AddressString from '../../common/address-string/AddressString';
import CopyButton from '../../common/copy-button/CopyButton';
import Title from '../../ui-kit/title/Title';

import './CnContractList.less';


interface ICnContractListProps {
  contractList: string[];
}

export default class CnContractList extends React.PureComponent<ICnContractListProps, any> {
  public render() {
    const { contractList } = this.props;

    return (
      <div className="cn-contract-list">
        <Title type="small" className="title">Contracts</Title>
        <div className="list-wrapper">
          {contractList.map((contract, i) => {
            return (
              <div key={contract + i} className="item flex">
                <AddressString str={contract} />
                <CopyButton
                  isShowText={false}
                  onClick={() => copyTextToClipboard(contract)}
                  className="item-copy"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
