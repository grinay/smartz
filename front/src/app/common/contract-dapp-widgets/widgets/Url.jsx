import BaseWidget from "./BaseWidget";
import React  from 'react';
import { Link } from 'react-router-dom';

export default class Url extends BaseWidget {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      contractDapp: props.contractDapp
    }
  }

  render() {
    return (
        <Link to={this.getResult('/')} target="_blank">
          {this.getResult('/')}
        </Link>
    )
  }
};
