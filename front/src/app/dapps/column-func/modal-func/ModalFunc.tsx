import * as React from 'react';

import './ModalFunc.less';


interface IModalFuncProps {
  func: any;
}

interface IModalFuncState { }


export default class ModalFunc extends React.PureComponent<IModalFuncProps, IModalFuncState> {
  public render() {
    const { func } = this.props;

    if (!func) {
      return null;
    }

    return (
      <div className="modal-func">
        <p>{func.title}</p>
      </div>
    );
  }
}
