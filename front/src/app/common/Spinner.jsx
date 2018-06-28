import React, { Component } from 'react';
import './Spinner.less';

class Spinner extends Component {
  render() {
    const { text, alt = 'Spinner', width = '100px' } = this.props;

    return (
      <div className="spinner flex">
        <img
          src={require('./img/loading.svg')}
          alt={alt}
          style={{ maxWidth: width, maxHeight: width }}
        />
        <p className="support-block__paragraph">{text}</p>
      </div>
    );
  }
}

export default Spinner;
