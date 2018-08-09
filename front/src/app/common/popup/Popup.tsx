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
  };
  animationWindow?: {
    duration: number;
    classStart: string;
    classEnd: string;
  };
}

export default class Popup extends React.PureComponent<IPopupProps, {}> {
  private node: HTMLDivElement;

  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  public onKeyDown(event) {
    const { onClose, isCloseEsc = true } = this.props;

    if (event.keyCode === Key.ESC && isCloseEsc) {
      onClose();
      return;
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
      animationWindow = null,
      blur = null,
    } = this.props;

    console.log(state);

    if (blur != null) {
      const elem = document.getElementById(blur.block);

      if (elem !== undefined) {
        switch (state) {
          case 'entered':
            elem.style.filter = `blur(5px)`;
            break;

          case 'entering':
            elem.style.transition = `filter .5s ease-out 0s`;
            break;

          case 'exited':
            elem.style.filter = `blur(0px)`;
            // elem.style.transition = ``;
            break;

          default:
            break;
        }
      }
    }

    let defaultStyle;
    let className;
    if (animationWindow != null) {
      defaultStyle = {
        transition: `all ${animationWindow.duration}ms ease-out`,
        // bottom: `-360px`,
      };

      className = classNames('component-popup', {
        [animationWindow.classStart]: true,
        // [animationWindow.classStart]: state === 'entering',
        [animationWindow.classEnd]: state === 'entered',
      });
    }

    const content = (
      <div
        className={className}
        style={{ ...defaultStyle }}>

        {/* backDrop */}
        {isBackdrop && <div className="component-popup-backdrop" />}

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
