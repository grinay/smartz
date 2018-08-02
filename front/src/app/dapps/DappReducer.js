import { find, findIndex, cloneDeep } from 'lodash';
import { generateId } from '../../helpers/utils';

const initState = {
  fetchStatus: 'init',
  dappList: [],
  currentDapp: {
    id: null,
    selectedTransaction: null
  },
  error: null
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
      if (!Array.isArray(action.dapps)) {
        action.dapps = [action.dapps];
      }

      action.dapps.forEach((dapp) => {
        const i = findIndex(nextState.dappList, { id: dapp.id });

        if (i >= 0) {
          nextState.dappList[i] = Object.assign(nextState.dappList[i], dapp);
        } else {
          dapp.requests = null;
          dapp.transactions = null;

          nextState.dappList.push(dapp);
        }
      });

      return nextState;


    case 'VIEW_FUNC_RESULT':
      const { dappId, funcName, result } = action;

      let dapp = find(nextState.dappList, { id: dappId });
      if (dapp) {
        if (dapp.funcResults && dapp.funcResults[funcName] === result) {
          return state;
        } else {
          if (!dapp.funcResults) dapp.funcResults = {};
          dapp.funcResults[funcName] = result;
        }
      }

      return nextState;


    case 'ADD_REQUESTS':
      dapp = find(nextState.dappList, { id: action.dappId });

      if (dapp) {
        dapp.requests = action.requests.reverse();
      }

      return nextState;


    case 'ADD_TRANSACTIONS':
      dapp = find(nextState.dappList, { id: action.dappId });

      if (dapp) {
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
            dapp.transactions.set(trans.tx_id, { ...trans, status: 'done' })
          }
        }
      }

      return nextState;


    case 'TRANSACTION_NEW':
      dapp = find(nextState.dappList, { id: action.dappId });

      if (dapp) {
        if (dapp.transactions === null) {
          dapp.transactions = new Map();
        }

        let status;
        let key;

        if (action.result.is_success) {
          key = action.result.tx_id;
          status = 'process';
        } else {
          key = generateId(20);
          status = 'error';
        }

        dapp.transactions.set(key, { ...action.result, status })
      }

      return nextState;

    default:
      return state;
  }
};

export default dapps;
