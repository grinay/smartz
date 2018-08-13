import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './ShowMoreBtn.less';


interface IShowMoreBtnProps {
  onClick: () => void;
}

export default class ShowMoreBtn extends React.PureComponent<IShowMoreBtnProps, {}> {
  public render() {
    return (
      <button
        className="show-more-btn flex"
        onClick={this.props.onClick}
        type="button"
      >
        <p className="text">Show more</p>
        <InlineSVG
          className="arrow-down-icon"
          src={require('../../../../assets/img/common/components/arrow-down.svg')}
        />
      </button>
    );
  }
}
