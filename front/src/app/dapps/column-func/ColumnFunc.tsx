import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { getFunctionsByType } from '../../../helpers/common';

import './ColumnFunc.less';


interface IColumnFuncProps {
  dapp: any;
}

interface IColumnFuncState { }

export default class ColumnFunc extends React.PureComponent<IColumnFuncProps, IColumnFuncState> {
  constructor(props) {
    super(props);

    this.changeHeight = this.changeHeight.bind(this);
  }

  private changeHeight() {
    // dynamic change height aside after scroll (depend. of header height)
    const doc = document.documentElement;
    const col = document.getElementById('js-column-func');

    const headerHeight = document.getElementById('js-header').offsetHeight;
    if (doc.scrollTop < headerHeight) {
      col.style.top = `${headerHeight - doc.scrollTop + 10}px`;
    } else {
      col.style.top = `10px`;
    }
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.changeHeight);

    // set initial height, do it async (after DOM rendered)
    setTimeout(() => this.changeHeight(), 0);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.changeHeight);
  }


  public render() {
    const { dapp } = this.props;

    if (!dapp) {
      return null;
    }

    let askFuncElement: JSX.Element;
    const askFunctions: any[] = getFunctionsByType(dapp.functions, 'ask');

    if (askFunctions.length > 0) {
      askFuncElement = (
        <section>
          <h2 className="dapp-header">Ask</h2>
          <ul className="dapp-list">
            {askFunctions.map((func, i) => {
              return (
                <button
                  key={i}
                  className="dapp-btn"
                  type="button"
                >
                  {func.title}
                </button>
              );
            })}
          </ul>
        </section>
      );
    }

    let writeFuncElement: JSX.Element;
    const writeFunctions: any[] = getFunctionsByType(dapp.functions, 'write');

    if (writeFunctions.length > 0) {
      writeFuncElement = (
        <section>
          <h2 className="dapp-header">Write</h2>
          <ul className="dapp-list">
            {writeFunctions.map((func, i) => {
              return (
                <button
                  key={i}
                  className="dapp-btn"
                  type="button"
                >
                  {func.title}
                </button>
              );
            })}
          </ul>
        </section>
      );
    }

    return (
      <aside id="js-column-func" className="column-func">
        {askFuncElement}
        {writeFuncElement}
        {/* <button className="dapp-btn dapp-btn--more" type="button">
          <InlineSVG
            className="three-dot"
            src={require('../../../assets/img/common/three-dot.svg')}
          />
          More
      </button> */}
      </aside>
    );
  }
}
