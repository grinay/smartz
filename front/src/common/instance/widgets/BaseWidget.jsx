import { PureComponent } from "react";

import {makeEtherscanLink} from "../../../helpers/eth";

export default class BaseWidget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fnDescription: props.fnDescription,
      instance: props.instance
    };
  }

  getResult(defaultValue) {
    const { fnDescription, instance } = this.props;
    if (!instance.funcResults || instance.funcResults[fnDescription.name] === undefined) {
      return defaultValue ? defaultValue : '';
    }

    return instance.funcResults[fnDescription.name];
  }

  getOption(optionName, defaultValue) {
    const { fnDescription } = this.props;
    if (
        typeof(fnDescription)==='object' && 'ui:widget_options' in fnDescription
        && typeof(fnDescription['ui:widget_options'])==='object' && optionName in fnDescription['ui:widget_options']
    ) {
        return fnDescription['ui:widget_options'][optionName]
    }

    return defaultValue ? defaultValue : undefined;
  }

  render() {
    const { fnDescription, instance } = this.props;

    const result = this.getResult();

    if (
        typeof(fnDescription)==='object' && 'outputs' in fnDescription
        && typeof(fnDescription.outputs)==='object' && 'items' in fnDescription.outputs
        && Array.isArray(fnDescription.outputs.items) && fnDescription.outputs.items.length===1
        && typeof(fnDescription.outputs.items[0])==='object' && '$ref' in fnDescription.outputs.items[0]
        && fnDescription.outputs.items[0]['$ref'] === "#/definitions/address"
    ) {
      return makeEtherscanLink(result, instance.network_id)
    }

    return result;
  }
};
