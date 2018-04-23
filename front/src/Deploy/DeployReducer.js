import { cloneDeep } from 'lodash';

const initState = [];

const deploy = (state = initState, action) => {
  const nextState = cloneDeep(state);
  const { deployId } = action;

  switch (action.type) {
    case 'INIT_DEPLOY':
      nextState[deployId] = {
        status: 'configure',
        errors: null
      };
      return nextState;

    case 'SET_FORM_DATA':
      nextState[deployId].formData = action.formData;
      return nextState;

    case 'CONSTRUCT_REQUEST':
      nextState[deployId].status = 'construct_request';
      return nextState;

    case 'CONSTRUCT_ERROR':
      nextState[deployId].status = 'construct_error';
      nextState[deployId].errors = action.errors;
      return nextState;

    case 'CONSTRUCT_SUCCESS':
      nextState[deployId].status = 'construct_success';
      nextState[deployId].instance = action.instance;
      return nextState;

    case 'SET_PUBLIC_ACCESS':
      nextState[deployId].publicAccess = Boolean(action.publicAccess);
      return nextState;

    case 'DEPLOY_TX_SENT':
      nextState[deployId].status = 'transaction_sent';
      nextState[deployId].txHash = action.txHash;
      nextState[deployId].netId = action.netId;
      return nextState;

    case 'DEPLOY_TX_ERROR':
      nextState[deployId].status = 'transaction_error';
      nextState[deployId].errors = action.errors;
      return nextState;

    case 'DEPLOY_TX_MINED':
      nextState[deployId].status = 'transaction_mined';
      nextState[deployId].contractAddress = action.contractAddress;
      return nextState;

    default:
      return state;
  }
}

export default deploy;
