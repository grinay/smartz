import { fetchSearchFailure, fetchSearchRequest, fetchSearchSuccess } from '../app/AppActions';
import Auth from '../app/auth/Auth';
import {
    finishLoginSuccessAction, loginErrorAction, startLoginSuccessAction,
} from '../app/auth/login/LoginActions';
import {
    fetchCtorParamsFailure, fetchCtorParamsRequest, fetchCtorParamsSuccess, fetchCtorsFailure,
    fetchCtorsRequest, fetchCtorsSuccess,
} from '../app/common/ctor-card/CtorsActions';
import {
    fetchDappsFailure, fetchDappsRequest, fetchDappsSuccess, requestAdd, transactionAdd,
} from '../app/dapps/DappActions';
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
          if (deployId !== null) dispatch(constructError(deployId, data.error));
          dispatch(fetchCtorParamsFailure(ctorId, data.error));
        } else {
          dispatch(fetchCtorParamsSuccess(ctorId, data));
        }
      }
    })
    .catch((error) => {
      if (deployId !== null) dispatch(constructError(deployId, error.message));
      dispatch(fetchCtorParamsFailure(ctorId, error.message));
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

export function getDapp(dappId) {
  const result = fetch(`/dapps/${dappId}`, undefined, 'get');

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

  result
    .then()
    .catch((error) => console.error(error));

  return result;
}

export function sendDappTransaction(dappId, data: object) {
  const result = fetch(`/dapps/${dappId}/transactions`, data, 'post');

  result
    .then((response) => {
      if (response.status === 201) {
        getDappTransactions(dappId);
      }
    })
    .catch((error) => console.error(error));

  return result;
}

export function getDappTransactions(dappId: any) {
  const result = fetch(`/dapps/${dappId}/transactions`, undefined, 'get');

  result
    .then((response) => {
      if (response.status === 200) {
        dispatch(transactionAdd(dappId, response.data));
      }
    })
    .catch((error) => console.error(error));

  return result;
}

export function sendDappRequest(dappId, data: object) {
  const result = fetch(`/dapps/${dappId}/requests`, data, 'post');

  result
    .then((response) => {
      if (response.status === 201) {
        getDappRequests(dappId);
      }
    })
    .catch((error) => console.error(error));

  return result;
}

export function getDappRequests(dappId: any) {
  const result = fetch(`/dapps/${dappId}/requests`, undefined, 'get');

  result
    .then((response) => {
      if (response.status === 200) {
        dispatch(requestAdd(dappId, response.data));
      }
    })
    .catch((error) => console.error(error));

  return result;
}

export function addDappToDash(dappId) {
  const result = fetch(`/dapps/${dappId}/add-to-dashboard`, undefined, 'post');

  result
    .then(() => getDapp(dappId))
    .catch((error) => console.error(error));

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

// =============================================================================
// Search
// =============================================================================

export function getSearchData(data: object) {
  const result = fetch(`/search`, data, 'post');

  dispatch(fetchSearchRequest());

  result
    .then((response) => {
      const { data: { address }, status } = response;

      if (status === 200) {

        switch (address.type) {
          case 'dapp':
            if (address.dapp != null) {
              dispatch(fetchDappsSuccess(address.dapp));
              dispatch(fetchSearchSuccess({
                type: address.type,
                dapp: address.dapp.id,
              }));
            } else {
              dispatch(fetchSearchSuccess(address));
            }
            break;

          default:
            dispatch(fetchSearchSuccess(address));
            break;
        }
      } else {
        dispatch(fetchSearchFailure('Something wrong!'));
      }
    })
    .catch((error) => {
      dispatch(fetchSearchFailure('Something wrong!'));
    });

  return result;
}

export function addContractUiToDash(contractUiId: any, data: any) {
  const result = fetch(`/contracts_uis/${contractUiId}/add-to-dashboard`, data, 'post');

  result
    .then()
    .catch((error) => console.error(error));

  return result;
}

export function createDappFromAbi(data: any) {
  const result = fetch(`/dapps/create-from-abi`, data, 'post');

  result
    .then()
    .catch((error) => console.error(error));

  return result;
}
