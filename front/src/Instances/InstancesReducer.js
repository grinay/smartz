import { find, findIndex, cloneDeep } from 'lodash';
import moment from 'moment';

const initState = {
  fetchStatus: 'init',
  instances: [],
  error: null
};

const instances = (state = initState, action) => {
  const nextState = cloneDeep(state);

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
        const i = findIndex(nextState.instances, { instance_id: instance.instance_id });
        if (i >= 0) {
          nextState.instances[i] = Object.assign(nextState.instances[i], instance);
        } else {
          nextState.instances.push(instance);
        }
      });
      return nextState;

    case 'VIEW_FUNC_RESULT':
      const { instanceId, funcName, result } = action;

      let instance = find(nextState.instances, { instance_id: instanceId });
      if (instance) {
        if (instance.funcResults && (instance.funcResults[funcName] === result)) {
          return state;

        } else {
          if (!instance.funcResults) instance.funcResults = {};
          instance.funcResults[funcName] = result;
        }
      }

      return nextState;

    case 'TRANSACTION_NEW':
      instance = find(nextState.instances, { instance_id: action.instanceId });
      if (instance) {
        if (!instance.transactions) instance.transactions = [];
        instance.transactions.push({
          func: action.func,
          time: moment(),
          formData: action.formData,
          [/^0x([A-Fa-f0-9]{64})$/.test(action.result) ? 'txHash' : 'result']: action.result
        });
      }
      return nextState;

    case 'TRANSACTION_RECEIPT':
      instance = find(nextState.instances, { instance_id: action.instanceId });
      if (instance) {
        const transaction = find(instance.transactions, { txHash: action.txHash });
        if (transaction) {
          transaction.result = action.receipt;
          transaction.timeMined = moment();
        }
      }
      return nextState;

    default:
      return state;
  }
}

export default instances;
