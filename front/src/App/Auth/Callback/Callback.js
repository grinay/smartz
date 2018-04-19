import React, { Component } from 'react';
import loading from './loading.svg';

class Callback extends Component {
  render() {
    const styleContainer = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }

    const styleLoading = {
      height: '40vh',
      width: '40vw',
    }

    return (
      <div style={styleContainer}>
        <img src={loading} alt="loading" style={styleLoading} />
      </div>
    );
  }
}

export default Callback;