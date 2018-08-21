import * as React from 'react';

import Button from '../../../../ui-kit/button/Button';

import './BtnPanel.less';


interface IBtnPanelProps {
  onClickBtn: () => void;
  isDisabled: boolean;
}

interface IBtnPanelState { }

export default class BtnPanel extends React.PureComponent<IBtnPanelProps, {}> {
  public render() {
    const { onClickBtn, isDisabled } = this.props;

    return (
      <div className="btn-panel">
        <Button type="large" onClick={onClickBtn} content="Add to dashboard" />
      </div>
    );
  }
}
