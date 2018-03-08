export const constructRequest = () => ({
  type: 'CONSTRUCT_REQUEST'
});

export const constructError = (errors) => ({
  type: 'CONSTRUCT_ERROR',
  errors
});

export const constructSuccess = (instance) => ({
  type: 'CONSTRUCT_SUCCESS',
  instance
});
