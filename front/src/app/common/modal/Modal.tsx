import * as React from 'react';

import './Modal.less';


interface IModalProps {
  children: any;
  isOpen: boolean;
  isCloser?: boolean;
  overlayClassName?: string;
  windowClassName?: string;
  closerClassName?: string;
  onClose: () => void;
}

export default class Modal extends React.PureComponent<IModalProps, {}> {
  private elem: HTMLElement;

  public componentWillMount() {
    this.elem = document.getElementsByTagName('body')[0];
  }

  public render() {
    const {
      children,
      isOpen,
      onClose,
      isCloser = true,
      overlayClassName,
      windowClassName,
      closerClassName,
    } = this.props;

    const isDisableScroll: boolean = this.elem.classList.contains('modal-disable-scroll');

    if (!isOpen) {
      if (isDisableScroll) {
        this.elem.classList.remove('modal-disable-scroll');
      }

      return null;
    }

    if (!isDisableScroll) {
      this.elem.classList.add('modal-disable-scroll');
    }

    return (
      <div className={`modal flex ${overlayClassName}`}>
        <div className={`window ${windowClassName}`}>
          {isCloser &&
            <span className={`closer ${closerClassName}`} onClick={onClose}>
              &times;
          </span>}
          {children}
        </div>
      </div>
    );
  }
}

