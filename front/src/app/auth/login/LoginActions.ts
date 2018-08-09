export const loginErrorAction = (error) => ({
  type: 'LOGIN_ERROR',
  error,
});

export const startLoginSuccessAction = ({ blockchain, description, identity, rand_data }) => ({
  type: 'START_LOGIN_SUCCESS',
  blockchain,
  description,
  identity,
  rand_data,
});

export const finishLoginSuccessAction = (token) => ({
  type: 'FINISH_LOGIN_SUCCESS',
  token,
});
