import { clickTypes, contractProcessStatus } from '../constants/constants';
import Eos from './eos';


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
  console.log({
    event: 'loginEvent',
    blockchain,
    user,
  });
  // pushToDataLayer({
  //   event: 'loginEvent',
  //   user: userName,
  //   blockchain,
  // });
};

// open contract event
export const sendOpenContractEvent = (ctorId, user) => {
  console.log({
    event: 'openContractEvent',
    ctorId,
    user,
  });
  // pushToDataLayer({
  //   event: 'openContractEvent',
  //   ctorId,
  //   user,
  // });
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

  console.log(data);
  // pushToDataLayer(data);
};

// deploy/mined contract event
export const sendStatusContractEvent = (data) => {
  if (data.status === contractProcessStatus.DEPLOY) {
    data['event'] = 'deployContractEvent';
  } else if (data.status === contractProcessStatus.MINED) {
    data['event'] = 'minedContractEvent';
  }

  delete data.status;
  console.log('data :', data);
  // pushToDataLayer(data);
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

  console.log(data);
  // pushToDataLayer(data);
};
