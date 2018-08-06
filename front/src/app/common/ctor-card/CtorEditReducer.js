const initState = {
  fetchStatus: 'init',
  ctor: null,
  error: null
};

const edit = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'FETCH_CTOR_PARAMS_REQUEST':
      nextState.fetchStatus = 'request';
      return nextState;

    case 'FETCH_CTOR_PARAMS_FAILURE':
      nextState.fetchStatus = 'error';
      nextState.error = action.error;
      return nextState;

    case 'FETCH_CTOR_PARAMS_SUCCESS':
      nextState.fetchStatus = 'success';
      nextState.ctor = {
        name: action.ctorParams.name, 
        description: action.ctorParams.description, 
        price: action.ctorParams.price, 
        payment_address: action.ctorParams.payment_address,
      };
      return nextState;

    default:
      return state;
  }
};

export default edit;
