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

export const getFunctionsByType = (functions: IFunction[], type: 'view' | 'ask' | 'write'): any[] => {
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
  functions: any,
  dashboardFunctions?: any,
) => {
  const promises = [];

  if (dashboardFunctions) {
    dashboardFunctions.forEach((dFunc) => {
      const fSpec = functions.find((func) => func.name === dFunc);

      if (fSpec) {
        promises.push(processControlForm(abi, fSpec, [], address));
      }
    });
  } else {
    getFunctionsByType(functions, 'view').forEach((func) =>
      promises.push(processControlForm(abi, func, [], address)),
    );
  }


  return new Promise((resolve, reject) => {

    // wait all request to blockchain
    Promise.all(promises)
      .then((results) => {
        const commonResult = {};

        if (dashboardFunctions) {
          dashboardFunctions.forEach((dFunc, i) => commonResult[dFunc] = results[i]);
        } else {
          getFunctionsByType(functions, 'view').forEach((func, i) =>
            commonResult[func.name] = results[i],
          );
        }

        resolve(commonResult);
      })
      .catch((error) => reject(error));
  });
};

export const getOption = (optionName, fnDescription, defaultValue) => {
  if (
    typeof fnDescription === 'object' &&
    'ui:widget_options' in fnDescription &&
    typeof fnDescription['ui:widget_options'] === 'object' &&
    'optionName' in fnDescription['ui:widget_options']
  ) {
    return fnDescription['ui:widget_options'][optionName];
  }

  return defaultValue ? defaultValue : undefined;
};

export const getResult = (funcResult, defaultValue) => {
  if (typeof funcResult === 'undefined') {
    return defaultValue ? defaultValue : '';
  }

  return funcResult.toString();
};
