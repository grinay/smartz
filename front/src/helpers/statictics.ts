import { blockchains, clickTypes, contractProcessStatus } from '../constants/constants';


// this funcs for push events to google tag manager

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    ga: any;
  }
}

// login event
export const sendLoginEvent = (blockchain: any) => {
  let extension: string;

  switch (blockchain) {
    case blockchains.eos:
      extension = 'scatter';
      break;

    case blockchains.ethereum:
      extension = 'metamask';
      break;

    default:
      extension = 'Not found!';
      break;
  }

  window.ga('send', 'event', 'user', 'login', extension);
};

// open contract event
export const sendOpenContractEvent = (ctorId: string) => {
  const ctorUrl = `${window.location.origin}/deploy/${ctorId}`;

  window.ga('send', 'event', 'constructor', 'view', ctorUrl);
};

// receive ctor code event
export const sendSuccessReceiveCtorCodeEvent = (ctorId: string) => {
  const ctorUrl = `${window.location.origin}/deploy/${ctorId}`;

  window.ga('send', 'event', 'constructor', 'compilationSuccess', ctorUrl);
};

export const sendErrorReceiveCtorCodeEvent = (ctorId: string) => {
  const ctorUrl = `${window.location.origin}/deploy/${ctorId}`;

  window.ga('send', 'event', 'constructor', 'compilationError', ctorUrl);
};

// deploy/mined contract event
export const sendStatusContractEvent = (dappId: string, data) => {
  const dappUrl = `${window.location.origin}/dapp/${dappId}`;
  let category: string;

  if (data.status === contractProcessStatus.DEPLOY) {
    category = 'deployTxSent';
  } else if (data.status === contractProcessStatus.MINED) {
    category = 'deployTxMined';
  }

  delete data.status;

  window.ga('send', 'event', 'dapp', category, dappUrl, data);
};

// click event
export const sendClickEvent = (target) => {
  switch (target) {
    case clickTypes.CUSTOM_CONTRACT:
      window.ga('send', 'event', 'constructor', 'custom');
      break;
    case clickTypes.UPLOAD_CONTRACT:
      window.ga('send', 'event', 'developer', 'uploadForm');
      break;
    case clickTypes.UPLOAD_ATTEMPT:
      window.ga('send', 'event', 'developer', 'uploadAttempt');
      break;
    case clickTypes.UPLOAD_SUCCESS:
      window.ga('send', 'event', 'developer', 'uploadSuccess');
      break;
    case clickTypes.LEARN_MORE:
      window.ga('send', 'event', 'developer', 'learnMore');
      break;
    case clickTypes.JOIN_CHAT:
      window.ga('send', 'event', 'user', 'chat');
      break;

    default:
      break;
  }
};
