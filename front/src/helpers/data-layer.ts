import { blockchains, clickTypes, contractProcessStatus } from '../constants/constants';


// this funcs for push events to google tag manager

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    dataLayer: any;
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

  // ga('send', 'event', 'user', 'login', extension);
  console.log(extension);
};

// open contract event
export const sendOpenContractEvent = (ctorUrl: string) => {
  console.log(ctorUrl);
  // ga('send', 'event', 'constructor', 'view', ctorUrl);
};

// receive ctor code event
export const sendSuccessReceiveCtorCodeEvent = (ctorUrl: string) => {
  console.log(ctorUrl);
  // ga('send', 'event', 'constructor', 'compilationSuccess', ctorUrl);
};

export const sendErrorReceiveCtorCodeEvent = (ctorUrl: string) => {
  console.log(ctorUrl);
  // ga('send', 'event', 'constructor', 'compilationError', ctorUrl);
};

// deploy/mined contract event
export const sendStatusContractEvent = (data) => {
  let category: string;

  if (data.status === contractProcessStatus.DEPLOY) {
    category = 'deployTxSent';
  } else if (data.status === contractProcessStatus.MINED) {
    category = 'deployTxMined';
  }

  delete data.status;

  // ga('send', 'event', 'dapp', category, dappUrl, data);
  console.log(category, data);
};

// click event
export const sendClickEvent = (target) => {
  switch (target) {
    case clickTypes.CUSTOM_CONTRACT:
      // ga('send', 'event', 'constructor', 'custom');
      break;
    case clickTypes.UPLOAD_CONTRACT:
      // ga('send', 'event', 'developer', 'uploadForm');
      // ga('send', 'event', 'developer', 'upload');
      break;
    case clickTypes.LEARN_MORE:
      // labelArg = 'learnMore';
      break;
    case clickTypes.JOIN_CHAT:
      // ga('send', 'event', 'user', 'chat');
      break;

    default:
      break;
  }
};
