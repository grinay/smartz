export const loginErrorAction = (error) => ({
  type: 'LOGIN_ERROR',
  error
});

export const startLoginAction = (blockchain, identity) => ({
  type: 'START_LOGIN',
  blockchain,
  identity
});

export const startLoginSuccessAction = (startLoginData) => ({
  type: 'START_LOGIN_SUCCESS',
  startLoginData
});


export const finishLoginAction = (blockchain, identity, signedData) => ({
  type: 'FINISH_LOGIN',
  blockchain,
  identity,
  signedData
});

export const finishLoginSuccessAction = (token) => ({
  type: 'FINISH_LOGIN_SUCCESS',
  token
});
