import React, {Component} from 'react';

class Alert extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="alert alert-danger">
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}

export default Alert;
