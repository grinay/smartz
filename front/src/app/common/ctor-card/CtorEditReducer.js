const initState = {
  fetchStatus: 'init',
  ctor: null,
  error: null
};

const edit = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'FETCH_CTOR_VALUES_REQUEST':
      nextState.fetchStatus = 'request';
      return nextState;

    case 'FETCH_CTOR_VALUES_FAILURE':
      nextState.fetchStatus = 'error';
      nextState.error = action.error;
      return nextState;

    case 'FETCH_CTOR_VALUES_SUCCESS':
      nextState.fetchStatus = 'success';
      nextState.ctor = action.ctorParamValues;
      return nextState;

    default:
      return state;
  }
};

export default edit;
