// Fetching Instances list
export const fetchInstancesRequest = () => ({
  type: 'FETCH_INSTANCES_REQUEST'
});

export const fetchInstancesFailure = (error) => ({
  type: 'FETCH_INSTANCES_FAILURE',
  error
});

export const fetchInstancesSuccess = (instances) => ({
  type: 'FETCH_INSTANCES_SUCCESS',
  instances
});
//

export const viewFuncResult = (instanceId, funcName, result) => ({
  type: 'VIEW_FUNC_RESULT',
  instanceId,
  funcName,
  result
});

export const transactionNew = (instanceId, func, formData, result) => ({
  type: 'TRANSACTION_NEW',
  instanceId,
  func,
  formData,
  result
});

export const transactionReceipt = (instanceId, txHash, receipt) => ({
  type: 'TRANSACTION_RECEIPT',
  instanceId,
  txHash,
  receipt
});
