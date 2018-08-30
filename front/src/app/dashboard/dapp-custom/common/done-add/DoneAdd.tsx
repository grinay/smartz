import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import store from '../../../../../store/store';
import { setStateModalAddContract } from '../../../DashboardActions';

import './DoneAdd.less';


export default class DoneAdd extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  private click() {
    store.dispatch(setStateModalAddContract(false));
  }


  public componentDidMount() {
    setTimeout(() => store.dispatch(setStateModalAddContract(false)), 3000);
  }

  public render() {
    return (
      <div className="component-done-add flex" onClick={this.click}>
        <InlineSVG
          className="component-done-add-icon"
          src={require('../../../../../assets/img/common/v-long.svg')}
        />
      </div>
    );
  }
}
