export const initDeploy = (deployId) => ({
  type: 'INIT_DEPLOY',
  deployId
});

// Step 1 - constructing
export const setFormData = (deployId, formData) => ({
  type: 'SET_FORM_DATA',
  formData,
  deployId
});

export const constructRequest = (deployId) => ({
  type: 'CONSTRUCT_REQUEST',
  deployId
});

export const constructError = (deployId, errors) => ({
  type: 'CONSTRUCT_ERROR',
  errors,
  deployId
});

export const constructSuccess = (deployId, dapp) => ({
  type: 'CONSTRUCT_SUCCESS',
  dapp,
  deployId
});

// Step 2 - deploy transaction
export const setPublicAccess = (deployId, publicAccess) => ({
  type: 'SET_PUBLIC_ACCESS',
  publicAccess,
  deployId
});

export const deployTxSent = (deployId, netId, txHash, blockchain) => ({
  type: 'DEPLOY_TX_SENT',
  netId,
  txHash,
  deployId,
  blockchain
});

export const deployTxError = (deployId, errors) => ({
  type: 'DEPLOY_TX_ERROR',
  errors,
  deployId
});

export const deployTxMined = (deployId, dappAddress) => ({
  type: 'DEPLOY_TX_MINED',
  dappAddress,
  deployId
});
