import { IFunction } from './entities/dapp';


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
