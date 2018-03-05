export const fetchCtorsRequest = () => ({
  type: 'FETCH_CTORS_REQUEST'
});

export const fetchCtorsFailure = (error) => ({
  type: 'FETCH_CTORS_FAILURE',
  error
});

export const fetchCtorsSuccess = (ctors) => ({
  type: 'FETCH_CTORS_SUCCESS',
  ctors
});
