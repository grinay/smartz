import * as React from 'react';

import Text from '../../../../ui-kit/text/Text';
import Title from '../../../../ui-kit/title/Title';

import './ErrorAdd.less';


interface IErrorAddProps {
  errorMsg: string;
}

interface IErrorAddState { }

export default class ErrorAdd extends React.PureComponent<IErrorAddProps, IErrorAddState> {
  public render() {
    const { errorMsg } = this.props;

    return (
      <div className="error-add">
        <Title type="medium" className="error-add-title">Error</Title>
        <Text type="normal" className="error-add-text">
          {errorMsg}
        </Text>
      </div>
    );
  }
}
