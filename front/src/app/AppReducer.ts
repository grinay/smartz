const initState = {
  header: {
    title: 'DApps',
    type: 'simple',
    id: null,
  },
  trustBanner: false,
  search: {
    status: null,
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
      nextState.search.status = 'loading';
      nextState.search.error = null;
      return nextState;

    case 'FETCH_SEARCH_FAILURE':
      nextState.search.status = 'error';
      nextState.search.error = action.error;
      return nextState;

    case 'FETCH_SEARCH_SUCCESS':
      nextState.search.error = null;
      nextState.search.status = null;
      nextState.search.data = action.data;
      return nextState;

    default:
      return state;
  }
};

export default app;
