import store from '../store';
import { fetch } from './api';
import {
    fetchCtorsRequest,
    fetchCtorsFailure,
    fetchCtorsSuccess,
    fetchCtorParamsRequest,
    fetchCtorParamsFailure,
    fetchCtorParamsSuccess,
} from '../Ctors/CtorsActions';
import {
    fetchInstancesRequest,
    fetchInstancesFailure,
    fetchInstancesSuccess,
} from '../Instances/InstancesActions';
import {
    // initDeploy,
    setFormData,
    constructRequest,
    constructError,
    constructSuccess,
    // setPublicAccess,
    // deployTxSent,
    // deployTxError,
    // deployTxMined
} from '../Deploy//DeployActions';

const { dispatch } = store;

// =============================================================================
// Constructors
// =============================================================================

export function getConstructors() {
    const result = fetch('/constructors', undefined, 'get');

    dispatch(fetchCtorsRequest());

    result
        .then(response => {
            if (response.status === 200) {
                dispatch(fetchCtorsSuccess(response.data))
            }
        })
        .catch(error => {
            dispatch(fetchCtorsFailure(error.message))
        });

    return result;
}

export function getConstructorParams(ctorId, deployId) {
    const result = fetch(`/constructors/${ctorId}/params`, undefined, 'get');

    dispatch(fetchCtorParamsRequest(ctorId));

    result
        .then(response => {
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
        .catch(error => {
            dispatch(constructError(deployId, error.message));
            dispatch(fetchCtorParamsFailure(ctorId, error.message))
        });

    return result;
}

export function addCtor(formData) {
    const result = fetch('/constructors/upload', formData, 'post');

    result
        .then(response => { })
        .catch(error => console.log('Error request: ', error));

    return result;
}

// =============================================================================
// Instances
// =============================================================================

export function getInstances() {
    const result = fetch('/instances', undefined, 'get');

    dispatch(fetchInstancesRequest());

    result
        .then(response => {
            if (response.status === 200) {
                dispatch(fetchInstancesSuccess(response.data))
            }
        })
        .catch(error => {
            dispatch(fetchInstancesFailure(error.message))
        });

    return result;
}

export function updateInstance(instanceId, data) {
    const result = fetch(`/instances/${instanceId}/update`, data, 'post');

    result
        .then(response => { })
        .catch(error => { console.warn(error) });

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
        .then(response => {
            const { data, status } = response;

            if (status === 200) {
                if (data.errors || data.result === 'error') {
                    dispatch(constructError(deployId, data.errors || data.error_descr));
                } else {
                    dispatch(constructSuccess(deployId, data));
                }
            }
        })
        .catch(error => {
            dispatch(constructError(deployId, error))
        });

    return result;
}