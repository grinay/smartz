const initState = {
  fetchStatus: 'init',
  ctor: null,
  error: null
};

const edit = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'CTOR_PARAM_RESET':
      return {...initState};

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
      };
      const pa = action.ctorParams.payment_address;
      if (pa) nextState.ctor.payment_address = pa;
      return nextState;

    default:
      return state;
  }
};

export default edit;
