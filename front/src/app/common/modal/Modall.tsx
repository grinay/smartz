import * as React from 'react';

import { Key } from '../../../types/enums';

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

  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  public onKeyDown(event) {
    const { isOpen, onClose } = this.props;

    if (event.keyCode === Key.ESC && isOpen) {
      onClose();
      return;
    }
  }

  public componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);

    this.elem = document.getElementsByTagName('body')[0];
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
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
      <div className="modal flex" >
        <div className={`overlay ${overlayClassName}`} onClick={onClose} />
        <div className={`window ${windowClassName}`}>
          {isCloser &&
            <span className={`closer ${closerClassName}`} onClick={onClose}>
              &times;
          </span>}
          {children}
        </div>
      </ div >
    );
  }
}

