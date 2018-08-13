import * as React from 'react';

import './Tooltip.less';


interface ITooltipProps {
  text: string;
  children: any;
  className?: string;
}

interface ITooltipState {
  isVisible: boolean;
}


export default class Tooltip extends React.PureComponent<ITooltipProps, ITooltipState> {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  private handleMouseEnter() {
    this.setState({ isVisible: true });
  }

  private handleMouseLeave() {
    this.setState({ isVisible: false });
  }

  public render() {
    const { children, text } = this.props;
    const { isVisible } = this.state;

    const isVisibleTooltip = true ? 'is-visible' : 'is-hidden';

    return (
      <section className="tooltip">
        <div
          className="tooltip-container"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
        </div>
        <div className={`${isVisibleTooltip}`}>
          <p className="tooltip-text">{text}</p>
        </div>
      </section>
    );
  }
}
