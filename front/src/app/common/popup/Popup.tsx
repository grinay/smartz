import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InlineSVG from 'svg-inline-react';

import { Key } from '../../../types/enums';

import './Popup.less';


interface IPopupProps {
  state: any;
  onClose: () => void;
  isCloseEsc?: boolean;
  isBackdrop?: boolean;
  isCloser?: boolean;
  blur?: {
    size: number;
    block: string;
    duration: number;
  };
  animationWindow?: {
    duration: number;
    styleStart: object;
    styleEnd: object;
  };
  animationBackdrop?: {
    duration: number;
    styleStart: object;
    styleEnd: object;
  };
}

export default class Popup extends React.PureComponent<IPopupProps, {}> {
  private node: HTMLDivElement;

  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  private onKeyDown(event) {
    const { onClose, isCloseEsc = true } = this.props;

    if (event.keyCode === Key.ESC && isCloseEsc) {
      onClose();
      return;
    }
  }

  private getStyle(settings: object, state: string): object {
    if (settings != null) {
      const transitionStyles = {
        entering: settings['styleStart'],
        entered: settings['styleEnd'],
        exiting: settings['styleStart'],
      };

      return {
        transition: `all ${settings['duration']}ms ease-out`,
        ...transitionStyles[state],
      };
    } else {
      return null;
    }
  }

  public componentWillMount() {
    // create dom-element and inject to dom
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'component-popup');
    document.body.appendChild(this.node);

  }

  public componentDidMount() {
    const { isCloseEsc = true } = this.props;

    if (isCloseEsc) {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }

  public componentWillUnmount() {
    const { isCloseEsc = true } = this.props;

    if (isCloseEsc) {
      document.removeEventListener('keydown', this.onKeyDown);
    }

    document.body.removeChild(this.node);
  }


  public render() {
    const {
      onClose,
      children,
      isCloser = true,
      isBackdrop = true,
      state,
      blur = null,
      animationWindow = null,
      animationBackdrop = null,
    } = this.props;

    // set blur effect on div block
    if (blur != null) {
      const elem = document.getElementById(blur.block);

      if (elem !== undefined) {
        elem.style.transition = `filter ${blur.duration}ms ease-out`;

        switch (state) {
          case 'entered':
          case 'entering':
            elem.style.filter = `blur(${blur.size}px)`;
            break;

          case 'exiting':
          case 'exited':
            elem.style.filter = `blur(0px)`;
            break;

          default:
            break;
        }
      }
    }

    const content = (
      <div
        className="component-popup"
        style={this.getStyle(animationWindow, state)}>

        {/* backDrop */}
        {isBackdrop &&
          <div
            className="component-popup-backdrop"
            style={this.getStyle(animationBackdrop, state)}
          />
        }

        {/* closer */}
        {isCloser &&
          <button
            className="component-popup-close"
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            <InlineSVG
              className="x-icon"
              src={require('../../../assets/img/common/x-icon.svg')}
            />
          </button>
        }

        {/* content */}
        {children}
      </div>
    );

    return ReactDOM.createPortal(content, this.node);
  }
}

