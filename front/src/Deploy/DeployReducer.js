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

    default:
      return state;
  }
}

export default deploy;
