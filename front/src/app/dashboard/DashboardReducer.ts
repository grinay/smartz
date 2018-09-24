const initState = {
  isOpenModalAddContract: false,
};

const dashboard = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'STATE_MODAL_ADD_CONTRACT':
      nextState.isOpenModalAddContract = action.isOpen;
      return nextState;

    default:
      return state;
  }
};

export default dashboard;
