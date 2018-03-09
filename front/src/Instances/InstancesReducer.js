import {find, findIndex} from 'lodash';

const initState = {
  fetchStatus: 'init',
  instances: [],
  error: null
};

const instances = (state = initState, action) => {
  const nextState = {...state};

  switch (action.type) {
    case 'FETCH_INSTANCES_REQUEST':
      nextState.fetchStatus = 'request';
      return nextState;

    case 'FETCH_INSTANCES_FAILURE':
      nextState.fetchStatus = 'error';
      nextState.error = action.error;
      return nextState;

    case 'FETCH_INSTANCES_SUCCESS':
      nextState.fetchStatus = 'success';
      action.instances.forEach(instance => {
        const i = findIndex(nextState.instances, {instance_id: instance.instance_id});
        if (i >= 0) {
          nextState.instances[i] = Object.assign(nextState.instances[i], instance);
        } else {
          nextState.instances.push(instance);
        }
      });
      return nextState;

    case 'INSTANCE_FUNC_RESULT':
      const instance = find(nextState.instances, {instance_id: action.instanceId});
      if (instance) {
        if (!instance.funcResults) instance.funcResults = {};
        instance.funcResults[action.funcName] = action.result;
      }
      return nextState;

    default:
      return state;
  }
}

export default instances;
