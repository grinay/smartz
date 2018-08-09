import * as React from 'react';

import FullFooter from './full-footer/FullFooter';

import './Footer.less';


interface IFooterProps {
  location?: any;
}

export default class Footer extends React.Component<IFooterProps, {}> {
  public render() {
    const { location } = this.props;

    if (/\/dapp\//.test(location.pathname)) {
      return null;
    } else {
      return <FullFooter />;
    }
  }
}
