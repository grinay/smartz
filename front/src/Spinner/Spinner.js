import React, {Component} from 'react';
import spinner from 'Callback/loading.svg';

class Spinner extends Component {
  render() {
    const {text, alt, width} = this.props;

    return (
      <div className="spinner">
        <p>{text}</p>
        <img src={spinner} alt={alt} width={width} />
      </div>
    );
  }
}

export default Spinner;
