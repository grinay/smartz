import { blockchains, clickTypes, contractProcessStatus } from '../constants/constants';


// this funcs for push events to google tag manager

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    ga: any;
  }
}

export function getCtorUrl(ctorId: string) {
  return `${window.location.origin}/constructor/${ctorId}`;
}

export function getDappUrl(dappId: string) {
  return `${window.location.origin}/dapp/${dappId}`;
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

// open dapp event
export const sendOpenDappEvent = (ctorId: string) => {
  window.ga('send', 'event', 'constructor', 'view', getCtorUrl(ctorId));
};

// receive ctor code event
export const sendSuccessReceiveCtorCodeEvent = (ctorId: string) => {
  window.ga('send', 'event', 'constructor', 'compilationSuccess', getCtorUrl(ctorId));
};

export const sendErrorReceiveCtorCodeEvent = (ctorId: string) => {
  window.ga('send', 'event', 'constructor', 'compilationError', getCtorUrl(ctorId));
};

// deploy/mined dapp event
export const sendStatusDappEvent = (dappId: string, ctorId: string, data) => {
  let category: string;
  const dataGa = {
    dimension2: data.constructorId,
    dimension4: data.blockchain,
    dimension5: data.networkId,
    metric1: data.price ? data.price : null,
    metric2: data.gasLimit ? data.gasLimit : null,
    metric3: data.gasPrice ? data.gasPrice : null,
  };

  if (data.status === contractProcessStatus.DEPLOY) {
    category = 'deployTxSent';
  } else if (data.status === contractProcessStatus.MINED) {
    category = 'deployTxMined';

    window.ga('send', 'event', 'constructor', 'deploySuccess', getCtorUrl(ctorId));
  }

  window.ga('send', 'event', 'dapp', category, getDappUrl(dappId), dataGa);
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
