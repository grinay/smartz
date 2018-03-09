import React, {Component} from 'react';

class Spinner extends Component {
  render() {
    const {text, alt = 'Spinner', width} = this.props;

    return (
      <div className="spinner">
        <p>{text}</p>
        <img
          src={require('./i/loading.svg')}
          alt={alt}
          width={width}
        />
      </div>
    );
  }
}

export default Spinner;
