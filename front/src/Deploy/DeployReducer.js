const initState = {
  status: 'configure',
  errors: null
};

const deploy = (state = initState, action) => {
  const nextState = {...state};

  switch (action.type) {
    case 'CONSTRUCT_REQUEST':
      nextState.status = 'construct_request';
      return nextState;

    case 'CONSTRUCT_ERROR':
      nextState.status = 'construct_error';
      nextState.errors = action.errors;
      return nextState;

    case 'CONSTRUCT_SUCCESS':
      nextState.status = 'construct_success';
      nextState.instance = action.instance;
      return nextState;

    case 'SET_PUBLIC_ACCESS':
      nextState.publicAccess = Boolean(action.publicAccess);
      return nextState;

    case 'DEPLOY_TX_SENT':
      nextState.status = 'transaction_sent';
      nextState.txHash = action.txHash;
      nextState.netId = action.netId;
      return nextState;

    case 'DEPLOY_TX_ERROR':
      nextState.status = 'transaction_error';
      nextState.errors = action.errors;
      return nextState;

    case 'DEPLOY_TX_MINED':
      nextState.status = 'transaction_mined';
      nextState.contractAddress = action.contractAddress;
      return nextState;

    default:
      return state;
  }
}

export default deploy;
