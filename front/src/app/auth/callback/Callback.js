import React, { Component } from 'react';

import maskSvg from './mask.svg';
import carpetPng from './carpet.png';

import './Callback.less';

class Callback extends Component {
  render() {
    return (
      <div className="loader">
        <img className="loader__mask" src={maskSvg} />
        <img className="loader__carpet" src={carpetPng} />
      </div>
    );
  }
}

export default Callback;