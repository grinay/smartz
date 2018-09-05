const initState = {
  header: {
    title: 'DApps',
    type: 'simple',
    id: null,
  },
  trustBanner: false,
  search: {
    isLoading: null,
    data: null,
    error: null,
  },
};

const app = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'SET_USER_PROFILE':
      nextState['profile'] = action.profile;
      return nextState;

    case 'SET_HEADER_TITLE':
      nextState.header = action.header;
      return nextState;

    case 'SET_TRUST_BANNER':
      nextState.trustBanner = true;
      return nextState;

    case 'FETCH_SEARCH_REQUEST':
      nextState.search = {
        isLoading: true,
        error: null,
        data: null,
      };
      return nextState;

    case 'FETCH_SEARCH_FAILURE':
      nextState.search = {
        isLoading: false,
        error: action.error,
        data: null,
      };
      return nextState;

    case 'FETCH_SEARCH_SUCCESS':
      nextState.search = {
        isLoading: false,
        error: null,
        data: action.data,
      };
      return nextState;

    case 'CLEAR_SEARCH_DATA':
      nextState.search = {
        isLoading: null,
        error: null,
        data: null,
      };
      return nextState;

    default:
      return state;
  }
};

export default app;
