import * as React from 'react';

import { getResult } from '../../../../helpers/common';
import { getNetworkEtherscanAddress, getNetworkName, isAddress } from '../../../../helpers/eth';
import AddressString from '../../address-string/AddressString';


export const makeEtherscanLink = (hash, netId, showNetworkName = false) => {
  if (!hash || !netId) return hash;

  const explorerAddress = getNetworkEtherscanAddress(netId);
  const networkName = getNetworkName(netId);
  if (isAddress(hash)) {
    return (
      <span>
        <a href={`${explorerAddress}/address/${hash}`} target="_blank" >
          {hash}
        </a>
        {showNetworkName && ` (${networkName})`}
      </span>
    );
  } else {
    return hash;
  }
};

interface IBaseProps {
  fnDescription: any;
  fnResult: any;
}

export default class Base extends React.PureComponent<IBaseProps, {}> {
  public render() {
    const { fnDescription, fnResult } = this.props;

    const result = getResult(fnResult, '-');

    if (
      typeof fnDescription === 'object' &&
      'outputs' in fnDescription &&
      typeof fnDescription.outputs === 'object' &&
      'items' in fnDescription.outputs &&
      Array.isArray(fnDescription.outputs.items) &&
      fnDescription.outputs.items.length === 1 &&
      typeof fnDescription.outputs.items[0] === 'object' &&
      '$ref' in fnDescription.outputs.items[0] &&
      fnDescription.outputs.items[0]['$ref'] === '#/definitions/address'
    ) {
      return <AddressString str={result} endCharNumber={4} />;
    }

    if (typeof result === 'object' && result.type === 'error') {
      return <p>{result.msg}</p>;
    }

    return <p>{result.toString()}</p>;
  }
}
