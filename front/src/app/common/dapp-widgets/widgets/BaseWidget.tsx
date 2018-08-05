import { PureComponent } from 'react';

import { makeEtherscanLink } from '../../../../helpers/eth';


interface IBaseWidgetProps {
  dapp: any;
  fnDescription: any;
}

interface IBaseWidgetState {
  fnDescription: any;
  dapp: any;
}

export default class BaseWidget extends PureComponent<IBaseWidgetProps, IBaseWidgetState> {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      dapp: props.dapp,
    };
  }

  public getResult(defaultValue) {
    const { fnDescription, dapp } = this.props;
    if (!dapp.funcResults || dapp.funcResults[fnDescription.name] === undefined) {
      return defaultValue ? defaultValue : '';
    }

    return dapp.funcResults[fnDescription.name];
  }

  public getOption(fnDescription, optionName?, defaultValue?) {
    if (
      typeof fnDescription === 'object' &&
      'ui:widget_options' in fnDescription &&
      typeof fnDescription['ui:widget_options'] === 'object' &&
      optionName in fnDescription['ui:widget_options']
    ) {
      return fnDescription['ui:widget_options'][optionName];
    }

    return defaultValue ? defaultValue : undefined;
  }

  public render() {
    const { fnDescription, dapp } = this.props;

    const result = this.getResult(fnDescription);

    if (
      typeof fnDescription === 'object' &&
      'outputs' in fnDescription &&
      typeof fnDescription.outputs === 'object' &&
      'items' in fnDescription.outputs &&
      Array.isArray(fnDescription.outputs.items) &&
      fnDescription.outputs.items.length === 1 &&
      typeof fnDescription.outputs.items[0] === 'object' &&
      '$ref' in fnDescription.outputs.items[0] &&
      fnDescription.outputs.items[0]['$ref'] === '#/definitions/address'
    ) {
      return makeEtherscanLink(result, dapp.network_id);
    }

    return result;
  }
}
