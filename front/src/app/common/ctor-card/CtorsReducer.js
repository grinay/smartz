import { find, findIndex } from 'lodash';

const initState = {
  fetchStatus: 'init',
  ctors: [],
  error: null
};

const setPic = (ctorName) => { // Temporary until image management implemented
  if (!ctorName) return null;
  switch (ctorName.toLowerCase()) {
    case 'simple ico':
      return 'contract-ico.png';

    case 'erc20 token':
      return 'contract-erc20.png';

    case 'equity token':
      return 'contract-equity.png';

    case 'smartz token':
      return 'contract-smartz-erc20.png';

    case 'multisignature wallet':
      return 'contract-multisig.png';

    case 'simple voting':
      return 'contract-voting.png';

    case 'atomic swap for erc20':
      return 'contract-swap.png';

    case 'multitoken':
      return 'contract-multitoken.png';

    case 'booking':
      return 'contract-booking.png';

    case 'ledger':
      return 'contract-ledger.png';

    default:
  }
};

const ctors = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'FETCH_CTORS_REQUEST':
      nextState.fetchStatus = 'request';
      return nextState;

    case 'FETCH_CTORS_FAILURE':
      nextState.fetchStatus = 'error';
      nextState.error = action.error;
      return nextState;

    case 'FETCH_CTORS_SUCCESS':
      nextState.fetchStatus = 'success';
      action.ctors.forEach(ctor => {
        ctor.image = setPic(ctor.ctor_name);
        const i = findIndex(nextState.ctors, { ctor_id: ctor.ctor_id });
        if (i >= 0) {
          nextState.ctors[i] = Object.assign(nextState.ctors[i], ctor);
        } else {
          nextState.ctors.push(ctor);
        }
      });
      return nextState;

    case 'FETCH_CTOR_PARAMS_REQUEST':
      let ctor = find(nextState.ctors, { ctor_id: action.ctorId });
      if (ctor) {
        ctor.fetchStatus = 'request';
      } else {
        nextState.ctors.push({
          ctor_id: action.ctorId,
          fetchStatus: 'request'
        });
      }
      return nextState;

    case 'FETCH_CTOR_PARAMS_FAILURE':
      ctor = find(nextState.ctors, { ctor_id: action.ctorId });
      ctor.fetchStatus = 'error';
      ctor.error = action.error;
      return nextState;

    case 'FETCH_CTOR_PARAMS_SUCCESS':
      let i = findIndex(nextState.ctors, { ctor_id: action.ctorId });
      if (i >= 0) {
        nextState.ctors[i] = Object.assign(
          nextState.ctors[i],
          action.ctorParams,
          {
            ctor_id: action.ctorId,
            fetchStatus: 'success',
            image: setPic(action.ctorParams.ctor_name)
          }
        );
      }
      return nextState;

    default:
      return state;
  }
};

export default ctors;
