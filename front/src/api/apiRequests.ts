import Auth from '../app/auth/Auth';
import {
    finishLoginSuccessAction, loginErrorAction, startLoginSuccessAction,
} from '../app/auth/login/LoginActions';
import {
    fetchCtorParamsFailure, fetchCtorParamsRequest, fetchCtorParamsSuccess, fetchCtorsFailure,
    fetchCtorsRequest, fetchCtorsSuccess,
    fetchCtorSavedParamValues, fetchCtorSavedParamValuesFailure, fetchCtorSavedParamValuesSuccess,
} from '../app/common/ctor-card/CtorsActions';
import { fetchDappsFailure, fetchDappsRequest, fetchDappsSuccess } from '../app/dapps/DappActions';
import {
    constructError, constructRequest, constructSuccess, setFormData,
} from '../app/deploy/DeployActions';
import {
    sendErrorReceiveCtorCodeEvent, sendSuccessReceiveCtorCodeEvent,
} from '../helpers/statictics';
import store from '../store/store';
import { fetch } from './api';


const { dispatch } = store;

// =============================================================================
// Constructors
// =============================================================================

export function getConstructors() {
  const result = fetch('/constructors', undefined, 'get');

  dispatch(fetchCtorsRequest());

  result
    .then((response) => {
      if (response.status === 200) {
        dispatch(fetchCtorsSuccess(response.data));
      }
    })
    .catch((error) => {
      dispatch(fetchCtorsFailure(error.message));
    });

  return result;
}

export function getConstructorParams(ctorId, deployId) {
  const result = fetch(`/constructors/${ctorId}/params`, undefined, 'get');

  dispatch(fetchCtorParamsRequest(ctorId));

  result
    .then((response) => {
      const { data, status } = response;

      if (status === 200) {
        if (data.error) {
          dispatch(constructError(deployId, data.error));
          dispatch(fetchCtorParamsFailure(ctorId, data.error));
        } else {
          dispatch(fetchCtorParamsSuccess(ctorId, data));
        }
      }
    })
    .catch((error) => {
      dispatch(constructError(deployId, error.message));
      dispatch(fetchCtorParamsFailure(ctorId, error.message));
    });

  return result;
}

export function getConstructorSavedParamValues(ctorId) {
  const result = fetch(`/constructors/${ctorId}/formdefaults`, undefined, 'get');

  dispatch(fetchCtorSavedParamValues(ctorId));

  result
    .then((response) => {
      const { data, status } = response;

      if (status === 200) {
        if (data.error) {
          dispatch(fetchCtorSavedParamValuesFailure(ctorId, data.error));
        } else {
          dispatch(fetchCtorSavedParamValuesSuccess(ctorId, data.formData));
        }
      } else {
        dispatch(fetchCtorSavedParamValuesFailure(ctorId, "status " + status));
      }
    })
    .catch((error) => {
      // FIXME: Restore error handling after API implemented in backend
      //dispatch(fetchCtorSavedParamValuesFailure(ctorId, error.message));
      //
      // Temporary mock starts
      dispatch(fetchCtorSavedParamValuesSuccess(ctorId, {}));
      // Temporary mock ends
    });

  return result;
}

export function addCtor(formData) {
  const result = fetch('/constructors/upload', formData, 'post');

  result.then().catch((error) => console.error('Error request: ', error));

  return result;
}

// =============================================================================
// Dapps
// =============================================================================

export function getDapps() {
  const result = fetch('/dapps', undefined, 'get');

  dispatch(fetchDappsRequest());

  result
    .then((response) => {
      if (response.status === 200) {
        dispatch(fetchDappsSuccess(response.data));
      }
    })
    .catch((error) => {
      dispatch(fetchDappsFailure(error.message));
    });

  return result;
}

export function getDapp(id) {
  const result = fetch(`/dapps/${id}`, undefined, 'get');

  dispatch(fetchDappsRequest());

  result
    .then((response) => {
      if (response.status === 200 && !response.data.error) {
        dispatch(fetchDappsSuccess(response.data));
      } else {
        dispatch(fetchDappsFailure(response.data.error ? response.data.error : 'error'));
      }
    })
    .catch((error) => {
      dispatch(fetchDappsFailure(error.message));
    });

  return result;
}

export function updateDapp(dappId, data) {
  const result = fetch(`/dapps/${dappId}/update`, data, 'post');

  result.then().catch((error) => console.error(error));

  return result;
}

// =============================================================================
// Deploy
// =============================================================================

export function sendFormDataDeployStep1(ctorId, deployId, data, formData) {
  const result = fetch(`/constructors/${ctorId}/construct`, data, 'post');

  dispatch(constructRequest(deployId));
  dispatch(setFormData(deployId, formData));

  result
    .then((response) => {
      const { data, status } = response;

      if (status === 200) {
        if (data.errors || data.result === 'error') {
          dispatch(constructError(deployId, data.errors || data.error_descr));

          sendErrorReceiveCtorCodeEvent(ctorId);
        } else {
          dispatch(constructSuccess(deployId, data));

          sendSuccessReceiveCtorCodeEvent(ctorId);
        }
      }

      if (status >= 500) {
        sendErrorReceiveCtorCodeEvent(ctorId);
      }
    })
    .catch((error) => {
      dispatch(constructError(deployId, error));
    });

  return result;
}

// =============================================================================
// Auth
// =============================================================================

export function startLogin(blockchain, identity) {
  const result = fetch(`/users/login/start`, { blockchain, identity }, 'post');

  result
    .then((response) => {
      const { data, status } = response;

      if (status === 200 && !data.error) {
        dispatch(startLoginSuccessAction(data));
      } else {
        let errorMsg = data.error ? data.error : 'Login error';
        dispatch(loginErrorAction(errorMsg));
      }
    })
    .catch((error) => {
      dispatch(loginErrorAction('Login error'));
    });

  return result;
}

export function finishLogin(blockchain, identity, randData, signedData) {
  const result = fetch(
    `/users/login/finish`,
    {
      blockchain,
      identity,
      rand_data: randData,
      signed_data: signedData,
    },
    'post',
  );

  result
    .then((response) => {
      const { data, status } = response;

      if (status === 200 && !data.error && data.token) {
        dispatch(finishLoginSuccessAction(data.token));
      } else {
        let errorMsg = data.error ? data.error : 'Login error';
        dispatch(loginErrorAction(errorMsg));
      }
    })
    .catch((error) => {
      dispatch(loginErrorAction('Login error'));
    });

  return result;
}
