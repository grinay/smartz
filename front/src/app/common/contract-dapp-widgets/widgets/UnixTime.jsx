import BaseWidget from "./BaseWidget";
import dateFormat from "dateformat"

export default class UnixTime extends BaseWidget {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      contractDapp: props.contractDapp
    }
  }

  render() {
    const now = new Date(this.getResult(0) * 1000);

    return dateFormat(now, this.getOption('format', 'dd.mm.yyyy HH:MM:ss o'));
  }
};
