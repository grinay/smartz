import { find, findIndex, cloneDeep } from 'lodash';
import moment from 'moment';

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
        dapp.requests = action.requests;
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

          // if (find(dapp.transactions, { tx_id: trans.tx_id })) {
          //   continue;
          // } else {
          //   let trIndex = dapp.transactions.findIndex((tr) => {
          //     tr.execution_datetime === trans.execution_datetime
          //   });

          //   if (trIndex != -1) {
          //     dapp.transactions.splice(trIndex, 1, trans)
          //   } else {
          //     dapp.transactions.push(trans)
          //   }
          // }
        }
      }

      return nextState;


    case 'TRANSACTION_NEW':
      dapp = find(nextState.dappList, { id: action.dappId });

      if (dapp) {
        if (dapp.transactions === null) {
          dapp.transactions = new Map();
        }

        dapp.transactions.set(action.result.tx_id, {
          ...action.result,
          status: 'process',
        });
      }

      return nextState;

    default:
      return state;
  }
};

export default dapps;
