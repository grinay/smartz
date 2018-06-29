import * as React from 'react';

import './Modal.less';


interface IModalProps {
  children: any;
  isOpen: boolean;
  onClose: () => void;
}

export default class Modal extends React.PureComponent<IModalProps, {}> {
  public render() {
    const { children, isOpen, onClose } = this.props;

    if (!isOpen) {
      return null;
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
