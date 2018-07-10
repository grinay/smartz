import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import './Loader.less';

class Loader extends Component {
  render() {
    const { text, alt = 'Loader', width = '100px' } = this.props;

    return (
      <div className="spinner flex">
        <InlineSVG
          style={{ width, height: width }}
          src={require('../../../assets/img/common/loading.svg')}
        />
        <p className="support-block__paragraph">{text}</p>
      </div>
    );
  }
}

export default Loader;
