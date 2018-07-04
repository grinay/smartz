import BaseWidget from './BaseWidget';

export default class Enum extends BaseWidget {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      dapp: props.dapp
    };
  }

  render() {
    const variants = this.getOption('enum', []);
    const res = this.getResult(0);

    return typeof variants === 'object' && res in variants ? variants[res] : '';
  }
}
