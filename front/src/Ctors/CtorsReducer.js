const initState = {
  fetchStatus: 'init',
  ctors: [],
  error: null
};

const home = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_CTORS_REQUEST':
      return {...state,
        fetchStatus: 'request'
      };

    case 'FETCH_CTORS_FAILURE':
      return {...state,
        fetchStatus: 'error',
        error: action.error
      };

      case 'FETCH_CTORS_SUCCESS':
        return {...state,
          fetchStatus: 'success',
          ctors: action.ctors
        };

    default:
      return state;
  }
}

export default home;
