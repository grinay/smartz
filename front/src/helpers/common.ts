import { IDapp, IFunction } from './entities/dapp';
import { processControlForm } from './eth';


export const getFuncType = (func: IFunction): 'view' | 'ask' | 'write' | null => {
  if (func.constant && func.inputs.minItems === 0) {
    return 'view';
  }

  if (func.constant && func.inputs.minItems !== 0) {
    return 'ask';
  }

  if (!func.constant) {
    return 'write';
  }

  return null;
};

export const getFunctionsByType = (functions: IFunction[], type: any): any[] => {
  const result = [];

  if (Array.isArray(functions) && functions.length > 0) {
    functions.forEach((func) => {
      if (type === getFuncType(func)) {
        result.push(func);
      }
    });
  }

  return result;
};

export const getViewFunctionConstants = (
  abi: any,
  address: any,
  dashboardFunctions: any,
  functions: any,
) => {
  const promises = [];

  dashboardFunctions.forEach((dFunc) => {
    const fSpec = functions.find((func) => func.name === dFunc);

    if (fSpec) {
      promises.push(processControlForm(abi, fSpec, [], address));
    }
  });

  return new Promise((resolve, reject) => {

    // wait all request to blockchain
    Promise.all(promises)
      .then((results) => {
        const commonResult = {};

        dashboardFunctions.forEach((dFunc, i) => commonResult[dFunc] = results[i]);

        resolve(commonResult);
      })
      .catch((error) => reject(error));
  });
};
