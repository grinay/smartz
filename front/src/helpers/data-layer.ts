import { clickTypes, contractProcessStatus } from '../constants/constants';


// this funcs for push events to google tag manager

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    dataLayer: any;
  }
}

const pushToDataLayer = (data) => {
  if (!('dataLayer' in window)) {
    window['dataLayer'] = [];
  }

  window.dataLayer.push(data);
};

// login event
export const sendLoginEvent = (blockchain, user) => {
  pushToDataLayer({
    event: 'loginEvent',
    user,
    blockchain,
  });
};

// open contract event
export const sendOpenContractEvent = (ctorId, user) => {
  pushToDataLayer({
    event: 'openContractEvent',
    ctorId,
    user,
  });
};

// receive ctor code event
export const sendReceiveCtorCodeEvent = (ctorId, user, error = null) => {
  const data = {
    ctorId,
    user,
  };

  if (error === null) {
    data['event'] = 'successCtorCodeReceiveEvent';
  } else {
    data['event'] = 'failCtorCodeReceiveEvent';
    data['error'] = error;
  }

  pushToDataLayer(data);
};

// deploy/mined contract event
export const sendStatusContractEvent = (data) => {
  if (data.status === contractProcessStatus.DEPLOY) {
    data['event'] = 'deployContractEvent';
  } else if (data.status === contractProcessStatus.MINED) {
    data['event'] = 'minedContractEvent';
  }

  delete data.status;

  pushToDataLayer(data);
};

// click event
export const sendClickEvent = (target) => {
  const data = {};

  switch (target) {
    case clickTypes.CUSTOM_CONTRACT:
      data['event'] = 'customContractClickEvent';
      break;
    case clickTypes.UPLOAD_CONTRACT:
      data['event'] = 'uploadContractClickEvent';
      break;
    case clickTypes.LEARN_MORE:
      data['event'] = 'learnMoreClickEvent';
      break;
    case clickTypes.JOIN_CHAT:
      data['event'] = 'joinChatClickEvent';
      break;

    default:
      break;
  }

  pushToDataLayer(data);
};
