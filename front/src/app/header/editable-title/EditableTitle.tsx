import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import * as api from '../../../api/apiRequests';

import './EditableTitle.less';


interface IEditableTitleProps {
  header: any;
}

interface IEditableTitleState {
  focus: boolean;
}

export default class EditableTitle extends React.PureComponent
  <IEditableTitleProps, IEditableTitleState> {
  private ref: HTMLElement;

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };

    this.onUnfocused = this.onUnfocused.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  private onFocus(): void {
    this.setState({ focus: true });
  }

  private onUnfocused(): void {
    const { header: { title, id } } = this.props;

    this.setState({ focus: false });

    const newTitle: string = this.ref.innerText;

    if (newTitle.length > 0 && newTitle !== title) {
      api.updateTitleDapp(id, newTitle);
    }
  }

  public render() {
    const { header } = this.props;
    const { focus } = this.state;

    let content: any;
    if (header.type === 'dapp') {
      content = (
        <div className="editable-title flex-s">
          <div
            className="editable-title-field flex-v"
            onBlur={this.onUnfocused}
            onFocus={this.onFocus}
            ref={(ref) => this.ref = ref}
            contentEditable={true}
          >
            {header.title}
          </div>
          <InlineSVG
            className={`edit-pensil flex-v ${focus ? 'is-hidden' : ''}`}
            src={require('../../../assets/img/common/edit-pensil.svg')}
          />
        </div>
      );
    } else {
      content = (
        <div className="editable-title flex-s">
          <div className="editable-title-field flex-v">
            {header.title}
          </div>
        </div>
      );
    }

    return (content);
  }
}
