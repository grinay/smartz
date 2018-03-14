import React, {Component} from 'react';

class Spinner extends Component {
  render() {
    const {text, alt = 'Spinner', width = '100px'} = this.props;

    return (
      <div className="spinner">
        <p className="support-block__paragraph">{text}</p>
        <img
          src={require('./i/loading.svg')}
          alt={alt}
          style={{maxWidth: width}}
        />
      </div>
    );
  }
}

export default Spinner;
