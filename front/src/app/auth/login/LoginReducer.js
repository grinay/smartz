import { cloneDeep } from 'lodash';

const initState = {
  blockchain: null,
  description: null,
  identity: null,
  rand_data: null,
  error: null,
  token: null,
};

const login = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'LOGIN_ERROR':
      nextState.error = action.error;
      nextState.blockchain = null;
      nextState.description = null;
      nextState.identity = null;
      nextState.rand_data = null;
      nextState.token = null;
      return nextState;

    case 'START_LOGIN_SUCCESS':
      nextState.blockchain = action.blockchain;
      nextState.description = action.description;
      nextState.identity = action.identity;
      nextState.rand_data = action.rand_data;
      nextState.error = null;
      return nextState;

    case 'FINISH_LOGIN_SUCCESS':
      nextState.token = action.token;
      nextState.blockchain = null;
      nextState.description = null;
      nextState.identity = null;
      nextState.rand_data = null;
      nextState.error = null;
      return nextState;

    default:
      return state;
  }
};

export default login;
