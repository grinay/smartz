import { Blockchain } from './entities/types';
import { EosClass } from './eos';
import { isAddress } from './eth';


export const getBlockchainByAddress = (address: string): Blockchain => {
  if (isAddress(address)) {
    return 'ethereum';
  }

  if (EosClass.isAddress(address)) {
    return 'eos';
  }

  throw new Error('Exception in method "getBlockchainByAddress"');
};

export const isBlockchainAddress = (str: string): boolean => {
  return isAddress(str) || EosClass.isAddress(str);
};
