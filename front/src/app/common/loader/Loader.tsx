import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './Loader.less';


interface ILoaderProps {
  text?: string;
  width?: string;
  className?: string;
}

class Loader extends React.Component<ILoaderProps, {}> {
  public render() {
    const { text = null, width = '100px', className = '' } = this.props;

    return (
      <div className={`spinner flex ${className}`}>
        <InlineSVG
          style={{ width, height: width }}
          src={require('../../../assets/img/common/loading.svg')}
        />
        {text !== null && <p className="support-block__paragraph">{text}</p>}
      </div>
    );
  }
}

export default Loader;
