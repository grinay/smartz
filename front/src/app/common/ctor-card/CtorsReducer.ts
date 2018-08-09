import { find, findIndex } from 'lodash';


const initState = {
  fetchStatus: 'init',
  ctors: [],
  error: null,
};

const ctors = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'FETCH_CTORS_REQUEST':
      nextState.fetchStatus = 'request';
      return nextState;

    case 'FETCH_CTORS_FAILURE':
      nextState.fetchStatus = 'error';
      nextState.error = action.error;
      return nextState;

    case 'FETCH_CTORS_SUCCESS':
      nextState.fetchStatus = 'success';
      action.ctors.forEach((ctor) => {
        const i = findIndex(nextState.ctors, { id: ctor.id });
        if (i >= 0) {
          nextState.ctors[i] = Object.assign(nextState.ctors[i], ctor);
        } else {
          nextState.ctors.push(ctor);
        }
      });
      return nextState;

    case 'FETCH_CTOR_PARAMS_REQUEST':
      let ctor = find(nextState.ctors, { id: action.ctorId });
      if (ctor) {
        ctor.fetchStatus = 'request';
      } else {
        nextState.ctors.push({
          id: action.ctorId,
          fetchStatus: 'request',
        });
      }
      return nextState;

    case 'FETCH_CTOR_PARAMS_FAILURE':
      ctor = find(nextState.ctors, { id: action.ctorId });
      ctor.fetchStatus = 'error';
      ctor.error = action.error;
      return nextState;

    case 'FETCH_CTOR_PARAMS_SUCCESS':
      let i = findIndex(nextState.ctors, { id: action.ctorId });
      if (i >= 0) {
        nextState.ctors[i] = Object.assign(nextState.ctors[i], action.ctorParams, {
          id: action.ctorId,
          fetchStatus: 'success',
          image: action.ctorParams.image,
        });
      }
      return nextState;

    default:
      return state;
  }
};

export default ctors;
