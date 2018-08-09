const initState = {
  header: {
    title: 'DApps',
    type: 'simple',
    id: null,
  },
  trustBanner: false,
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

    default:
      return state;
  }
};

export default app;
