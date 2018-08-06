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
  ctorId,
  error
});

export const fetchCtorParamsSuccess = (ctorId, ctorParams) => ({
  type: 'FETCH_CTOR_PARAMS_SUCCESS',
  ctorId,
  ctorParams
});

// Fetching constructor's saved parameter values
export const fetchCtorSavedParamValues = (ctorId) => ({
  type: 'FETCH_CTOR_VALUES_REQUEST',
  ctorId
});

export const fetchCtorSavedParamValuesFailure = (ctorId, error) => ({
  type: 'FETCH_CTOR_VALUES_FAILURE',
  ctorId,
  error
});

export const fetchCtorSavedParamValuesSuccess = (ctorId, ctorParamValues) => ({
  type: 'FETCH_CTOR_VALUES_SUCCESS',
  ctorId,
  ctorParamValues
});
//
