import { cloneDeep, find, findIndex } from 'lodash';

import { dappList } from '../../api/mock/dapps';
import { generateId } from '../../helpers/utils';


const initState = {
  fetchStatus: 'init',
  dappList: null,
  currentDapp: {
    id: null,
    selectedTransaction: null,
  },
  error: null,
};

const dapps = (state = initState, action) => {
  const nextState = cloneDeep(state);

  switch (action.type) {
    case 'FETCH_DAPPS_REQUEST':
      nextState.fetchStatus = 'request';
      nextState.error = '';

      return nextState;


    case 'FETCH_DAPPS_FAILURE':
      nextState.fetchStatus = 'error';
      nextState.error = action.error;

      return nextState;


    case 'FETCH_DAPPS_SUCCESS':
      nextState.fetchStatus = 'success';
      nextState.error = '';

      if (nextState.dappList === null) {
        nextState.dappList = new Map();
      }

      if (!Array.isArray(action.dapps)) {
        action.dapps = [action.dapps];
      }

      action.dapps.forEach((dapp) => {
        if (nextState.dappList.has(dapp.id)) {
          nextState.dappList.set(dapp.id, {
            ...nextState.dappList.get(dapp.id),
            ...dapp,
          });
        } else {
          dapp.requests = null;
          dapp.transactions = null;

          nextState.dappList.set(dapp.id, dapp);
        }
      });

      return nextState;


    case 'VIEW_FUNC_RESULT':
      const { dappId, funcName, result } = action;

      if (nextState.dappList.has(dappId)) {
        let dapp = nextState.dappList.get(dappId);

        if (dapp.funcResults && dapp.funcResults[funcName] === result) {
          return state;
        } else {
          if (!dapp.funcResults) {
            dapp.funcResults = {};
          }

          dapp.funcResults[funcName] = result;
        }
      }

      return nextState;


    case 'ADD_REQUESTS':
      if (nextState.dappList.has(action.dappId)) {
        let dapp = nextState.dappList.get(action.dappId);

        let arr = action.requests;

        for (let i = 0; i < arr.length; i++) {
          arr[i].status = 'done';
        }

        dapp.requests = arr.reverse();
      }

      return nextState;


    case 'ADD_TRANSACTIONS':
      if (nextState.dappList.has(action.dappId)) {
        let dapp = nextState.dappList.get(action.dappId);

        if (dapp.transactions === null) {
          dapp.transactions = new Map();
        }

        for (let i = 0; i < action.transactions.length; i++) {
          const trans = action.transactions[i];

          if (dapp.transactions.has(trans.tx_id)) {
            const transaction = dapp.transactions.get(trans.tx_id);

            if (transaction.status === 'process') {
              dapp.transactions.set(trans.tx_id, { ...trans, status: 'done' });
            } else {
              continue;
            }

          } else {
            dapp.transactions.set(trans.tx_id, { ...trans, status: 'done' });
          }
        }
      }

      return nextState;


    case 'TRANSACTION_NEW':
      if (nextState.dappList.has(action.dappId)) {
        let dapp = nextState.dappList.get(action.dappId);

        if (dapp.transactions === null) {
          dapp.transactions = new Map();
        }

        let status;
        let key;


        if ('is_success' in action.result) {
          key = generateId(20);
          status = action.result.is_success ? 'process' : 'error';
        } else {
          key = action.result.tx_id;
          status = 'process';
        }

        dapp.transactions.set(key, { ...action.result, status });
      }

      return nextState;

    default:
      return state;
  }
};

export default dapps;
