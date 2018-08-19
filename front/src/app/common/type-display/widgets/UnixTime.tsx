import dateFormat from 'dateformat';
import * as React from 'react';

import { getOption, getResult } from '../../../../helpers/common';


interface IUnixTimeProps {
  fnDescription: any;
  fnResult: any;
}

export default class UnixTime extends React.PureComponent<IUnixTimeProps, {}> {
  public render() {
    const { fnDescription, fnResult } = this.props;

    const now = new Date(getResult(fnResult, 0) * 1000);

    return dateFormat(now, getOption(fnDescription, 'format', 'dd.mm.yyyy HH:MM:ss o'));
  }
}
