import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import './DoneAdd.less';


export default class DoneAdd extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="component-done-add flex">
        <InlineSVG
          className="component-done-add-icon"
          src={require('../../../../../assets/img/common/v-long.svg')}
        />
      </div>
    );
  }
}
