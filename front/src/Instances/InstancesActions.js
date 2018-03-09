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

export const instanceFuncResult = (instanceId, funcName, result) => ({
  type: 'INSTANCE_FUNC_RESULT',
  instanceId,
  funcName,
  result
});
