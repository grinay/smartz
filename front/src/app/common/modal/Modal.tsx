import * as React from 'react';

import './Modal.less';


interface IModalProps {
  children: any;
  isOpen: boolean;
  onClose: () => void;
}

export default class Modal extends React.PureComponent<IModalProps, {}> {
  private elem: HTMLElement;

  public componentWillMount() {
    this.elem = document.getElementsByTagName('body')[0];
  }

  public render() {
    const { children, isOpen, onClose } = this.props;
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
      <div className="modal flex">
        <div className="window">
          <span className="closer" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    );
  }
}
