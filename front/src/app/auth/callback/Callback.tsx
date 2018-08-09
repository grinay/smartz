import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './Callback.less';


export default class Callback extends React.Component {
  public render() {
    return (
      <div className="loader">
        <InlineSVG className="loader__mask" src={require('./mask.svg')} />
        <img className="loader__carpet" src={require('./carpet.png')} />
      </div>
    );
  }
}
