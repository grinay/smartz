import React, { Component } from 'react';
import loadingImg from '../../../assets/img/common/loading.svg';
import './Loader.less';

class Loader extends Component {
  render() {
    const { text, alt = 'Loader', width = '100px' } = this.props;

    return (
      <div className="spinner flex">
        <img src={loadingImg} alt={alt} style={{ maxWidth: width, maxHeight: width }} />
        <p className="support-block__paragraph">{text}</p>
      </div>
    );
  }
}

export default Loader;
