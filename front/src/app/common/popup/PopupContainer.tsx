import * as React from 'react';
import Transition from 'react-transition-group/Transition';

import Popup from './Popup';


interface IPopupContainerProps {
  isOpen: boolean;
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

export default class PopupContainer extends React.PureComponent<IPopupContainerProps, {}> {

  public render() {
    const { isOpen, animationWindow = { duration: 0 } } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={{
          enter: 0,
          exit: animationWindow.duration,
        }}
        unmountOnExit={true}
      >
        {(state) => <Popup state={state} {...this.props} />}
      </Transition>
    );
  }
}
