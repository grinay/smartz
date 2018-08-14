import * as React from 'react';

import { Key } from '../../../types/enums';

import './Input.less';


interface IInputProps {
  className?: string;
  onSubmit: (value: string) => void;
  onValidate?: (value: string) => boolean;
}

interface IInputState {
  value: string;
  stateInput: 'error' | 'ok' | 'normal';
}


export default class Input extends React.PureComponent<IInputProps, IInputState> {
  private ref: HTMLElement;

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      stateInput: 'normal',
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  private onKeyPress(event) {
    const { onValidate = null, onSubmit } = this.props;
    const { value } = this.state;

    if (event.charCode === Key.ENTER) {
      if (onValidate != null) {
        if (onValidate(value)) {
          onSubmit(value);
        } else {
          this.setState({ stateInput: 'error' });
        }
      } else {
        onSubmit(value);
      }
    }
  }

  private onChange(event) {
    const { stateInput } = this.state;

    const newState = {
      value: event.target.value,
    };

    if (stateInput === 'error' || stateInput === 'ok') {
      newState['stateInput'] = 'normal';
    }

    this.setState(newState);
  }

  public render() {
    const { value } = this.state;

    return (
      <input
        onKeyPress={this.onKeyPress}
        onChange={this.onChange}
        value={value}
        className="component-input"
      />
    );
  }
}
