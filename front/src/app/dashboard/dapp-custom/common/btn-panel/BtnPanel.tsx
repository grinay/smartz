import * as React from 'react';

import Button from '../../../../ui-kit/button/Button';

import './BtnPanel.less';


interface IBtnPanelProps {
  onClickBtn: () => void;
  isDisabled?: boolean;
  content?: string;
}

interface IBtnPanelState { }

export default class BtnPanel extends React.PureComponent<IBtnPanelProps, {}> {
  public render() {
    const { onClickBtn, isDisabled, content = 'Add to dashboard' } = this.props;

    return (
      <div className="btn-panel">
        <Button
          kind="large"
          onClick={onClickBtn}
          content={content}
          isDisabled={isDisabled}
        />
      </div>
    );
  }
}
