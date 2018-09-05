import * as React from 'react';
import { Link } from 'react-router-dom';

import { getResult } from '../../../../helpers/common';


interface IUrlProps {
  fnResult: any;
}

export default class Url extends React.PureComponent<IUrlProps, {}> {
  public render() {
    const { fnResult } = this.props;

    return (
      <Link to={getResult(fnResult, '/')} target="_blank">
        {getResult(fnResult, '/')}
      </Link>
    );
  }
}
