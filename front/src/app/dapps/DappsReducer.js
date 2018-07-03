import { find, findIndex, cloneDeep } from 'lodash';
import moment from 'moment';

const initState = {
  fetchStatus: 'init',
  dapps: [],
  error: null
};

const dapps = (state = initState, action) => {
  const nextState = cloneDeep(state);

  switch (action.type) {
    case 'FETCH_INSTANCES_REQUEST':
      nextState.fetchStatus = 'request';
      nextState.error = '';
      return nextState;

    case 'FETCH_INSTANCES_FAILURE':
      nextState.fetchStatus = 'error';
      nextState.error = action.error;
      return nextState;

    case 'FETCH_INSTANCES_SUCCESS':
      nextState.fetchStatus = 'success';
      nextState.error = '';
      if (!Array.isArray(action.dapps)) {
        action.dapps = [action.dapps];
      }

      action.dapps.forEach((dapp) => {
        const i = findIndex(nextState.dapps, { id: dapp.id });
        if (i >= 0) {
          nextState.dapps[i] = Object.assign(nextState.dapps[i], dapp);
        } else {
          nextState.dapps.push(dapp);
        }
      });
      return nextState;

    case 'VIEW_FUNC_RESULT':
      const { dappId, funcName, result } = action;

      let dapp = find(nextState.dapps, { id: dappId });
      if (dapp) {
        if (dapp.funcResults && dapp.funcResults[funcName] === result) {
          return state;
        } else {
          if (!dapp.funcResults) dapp.funcResults = {};
          dapp.funcResults[funcName] = result;
        }
      }

      return nextState;

    case 'TRANSACTION_NEW':
      dapp = find(nextState.dapps, { id: action.dappId });
      if (dapp) {
        if (!dapp.transactions) dapp.transactions = [];
        dapp.transactions.push({
          func: action.func,
          time: moment(),
          formData: action.formData,
          [/^0x([A-Fa-f0-9]{64})$/.test(action.result) ? 'txHash' : 'result']: action.result
        });
      }
      return nextState;

    case 'TRANSACTION_RECEIPT':
      dapp = find(nextState.dapps, { id: action.dappId });
      if (dapp) {
        const transaction = find(dapp.transactions, { txHash: action.txHash });
        if (transaction) {
          transaction.result = action.receipt;
          transaction.timeMined = moment();
        }
      }
      return nextState;

    default:
      return state;
  }
};

export default dapps;
