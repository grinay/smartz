import * as React from 'react';

import Loader from '../../../../common/loader/Loader';

import './OverlayLoader.less';


export default class OverlayLoader extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="overlay-loader flex">
        <Loader size={100} />
      </div>
    );
  }
}
