import * as React from 'react';

import { getOption, getResult } from '../../../../helpers/common';


interface IEnumProps {
  fnDescription: any;
  fnResult: any;
}

export default class Enum extends React.PureComponent<IEnumProps, {}> {
  public render() {
    const { fnDescription, fnResult } = this.props;

    const variants = getOption(fnDescription, 'enum', []);
    const res = getResult(fnResult, 0);

    return typeof variants === 'object' && res in variants ? variants[res] : '';
  }
}
