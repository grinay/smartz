export const getFuncType = (func) => {
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
