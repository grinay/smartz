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
          dapp.transactions = []
        }

        dapp.transactions = [
          ...dapp.transactions,
          ...action.transactions
        ];
      }

      return nextState;


    case 'TRANSACTION_NEW':
      dapp = find(nextState.dappList, { id: action.dappId });
      // if (dapp) {
      //   dapp.transactions.push({
      //     func: action.func,
      //     time: moment(),
      //     formData: action.formData,
      //     txHash: action.result,
      //     status: 'process'
      //   });
      // }
      if (dapp) {
        if (dapp.transactions === null) {
          dapp.transactions = []
        }

        dapp.transactions.push({
          status: 'process',
          ...action.result
        });
      }

      return nextState;

    // case 'TRANSACTION_RECEIPT':
    //   dapp = find(nextState.dappList, { id: action.dappId });
    //   if (dapp) {
    //     const transaction = find(dapp.transactions, { txHash: action.txHash });
    //     if (transaction) {
    //       transaction.status = 'mined';
    //       transaction.result = action.receipt;
    //       transaction.timeMined = moment();
    //     }
    //   }
    //   return nextState;

    default:
      return state;
  }
};

export default dapps;
