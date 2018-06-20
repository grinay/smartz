// fixme fixme find and remove all occurrences of "func.constant && func.inputs.minItems === 0"
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
