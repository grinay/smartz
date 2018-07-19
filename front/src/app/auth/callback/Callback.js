import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import './Callback.less';

class Callback extends Component {
  render() {
    return (
      <div className="loader">
        <InlineSVG className="loader__mask" src={require('./mask.svg')} />
        <img className="loader__carpet" src={require('./carpet.png')} />
      </div>
    );
  }
}

export default Callback;