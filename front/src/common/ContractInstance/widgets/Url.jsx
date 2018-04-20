import BaseWidget from "./BaseWidget";
import dateFormat from "dateformat"

export default class Url extends BaseWidget {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      contractInstance: props.contractInstance
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
