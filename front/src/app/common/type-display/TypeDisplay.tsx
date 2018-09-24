import * as React from 'react';

import Base from './widgets/Base';
import Enum from './widgets/Enum';
import EthCount from './widgets/EthCount';
import UnixTime from './widgets/UnixTime';
import Url from './widgets/Url';

import './TypeDisplay.less';


interface ITypeDisplayProps {
  fnDescription: any;
  fnResult: any;
}

export default class TypeDisplay extends React.PureComponent<ITypeDisplayProps, {}> {
  public render() {
    const { fnDescription } = this.props;

    let widget;
    if ('ui:widget' in fnDescription) {
      switch (fnDescription['ui:widget']) {
        case 'unixTime':
          widget = <UnixTime {...this.props} />;
          break;
        case 'ethCount':
          widget = <EthCount {...this.props} />;
          break;
        case 'enum':
          widget = <Enum {...this.props} />;
          break;
        case 'url':
          widget = <Url {...this.props} />;
          break;
        default:
          widget = <Base {...this.props} />;
          break;
      }
    } else {
      widget = <Base {...this.props} />;
    }

    return widget;
  }
}
