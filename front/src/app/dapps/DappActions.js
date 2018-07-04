// Fetching Dapps list
export const fetchDappsRequest = () => ({
  type: 'FETCH_DAPPS_REQUEST'
});

export const fetchDappsFailure = (error) => ({
  type: 'FETCH_DAPPS_FAILURE',
  error
});

export const fetchDappsSuccess = (dapps) => ({
  type: 'FETCH_DAPPS_SUCCESS',
  dapps
});
//

export const viewFuncResult = (dappId, funcName, result) => ({
  type: 'VIEW_FUNC_RESULT',
  dappId,
  funcName,
  result
});

export const transactionNew = (dappId, func, formData, result) => ({
  type: 'TRANSACTION_NEW',
  dappId,
  func,
  formData,
  result
});

export const transactionReceipt = (dappId, txHash, receipt) => ({
  type: 'TRANSACTION_RECEIPT',
  dappId,
  txHash,
  receipt
});
