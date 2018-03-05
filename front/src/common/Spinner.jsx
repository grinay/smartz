import React, {Component} from 'react';

class Spinner extends Component {
  render() {
    const {text, alt, width} = this.props;

    return (
      <div className="spinner">
        <p>{text}</p>
        <img
          src={require('./i/loading.svg')}
          alt={alt || 'Spinner'}
          width={width}
        />
      </div>
    );
  }
}

export default Spinner;
