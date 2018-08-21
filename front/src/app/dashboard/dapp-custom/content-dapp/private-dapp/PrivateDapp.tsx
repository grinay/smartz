import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import Text from '../../../../ui-kit/text/Text';
import Title from '../../../../ui-kit/title/Title';

import './PrivateDapp.less';


export default class PrivateDapp extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="private-dapp flex-h">
        <div className="private-dapp-title flex-v">
          <InlineSVG
            className="private-dapp-icon"
            src={require('../../../../../assets/img/common/header/lock.svg')}
          />
          <Title type="small">Private dapp</Title>
        </div>
        <Text type="caption">Only author can see this contract.</Text>
      </div>
    );
  }
}
