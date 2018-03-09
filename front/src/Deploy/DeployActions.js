// Step 1 - constructing
export const constructRequest = () => ({
  type: 'CONSTRUCT_REQUEST'
});

export const constructError = (errors) => ({
  type: 'CONSTRUCT_ERROR',
  errors
});

export const constructSuccess = (instance) => ({
  type: 'CONSTRUCT_SUCCESS',
  instance
});

// Step 2 - deploy transaction
export const setPublicAccess = (publicAccess) => ({
  type: 'SET_PUBLIC_ACCESS',
  publicAccess
});

export const deployTxSent = (netId, txHash) => ({
  type: 'DEPLOY_TX_SENT',
  netId,
  txHash
});

export const deployTxError = (errors) => ({
  type: 'DEPLOY_TX_ERROR',
  errors
});

export const deployTxMined = (contractAddress) => ({
  type: 'DEPLOY_TX_MINED',
  contractAddress
});
