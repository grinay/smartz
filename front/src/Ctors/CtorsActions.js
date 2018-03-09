// Fetching constructors list
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
//

// Fetching constructor's parameters
export const fetchCtorParamsRequest = (ctorId) => ({
  type: 'FETCH_CTOR_PARAMS_REQUEST',
  ctorId
});

export const fetchCtorParamsFailure = (ctorId, error) => ({
  type: 'FETCH_CTOR_PARAMS_FAILURE',
  error
});

export const fetchCtorParamsSuccess = (ctorId, ctorParams) => ({
  type: 'FETCH_CTOR_PARAMS_SUCCESS',
  ctorId,
  ctorParams
});
//
