export const setUserProfile = (profile) => ({
  type: 'SET_USER_PROFILE',
  profile,
});

export const setHeaderTitle = (header) => ({
  type: 'SET_HEADER_TITLE',
  header,
});

export const setTrustBanner = () => ({
  type: 'SET_TRUST_BANNER',
});

export const fetchSearchRequest = () => ({
  type: 'FETCH_SEARCH_REQUEST',
});

export const fetchSearchFailure = (error) => ({
  type: 'FETCH_SEARCH_FAILURE',
  error,
});

export const fetchSearchSuccess = (data) => ({
  type: 'FETCH_SEARCH_SUCCESS',
  data,
});
