import * as React from 'react';

import Input from '../../ui-kit/input/Input';
import Text from '../../ui-kit/text/Text';
import Title from '../../ui-kit/title/Title';

import './DappCustom.less';


export default class DappCustom extends React.PureComponent<{}, {}> {
  public render() {
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
        {/* <Form
          className="function-form"
          schema={func.inputs}
          uiSchema={uiSchema}
          widgets={FormWidgets}
          onSubmit={this.submit}
          onError={(e) => console.warn('I have', e, 'errors to fix')}
          showErrorList={false}
        /> */}
        <Input />
      </div >
    );
  }
}
