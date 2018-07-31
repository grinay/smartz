import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { getFunctionsByType } from '../../../helpers/common';
import { IDapp, IFunction } from '../../../helpers/entities/dapp';

import './ColumnFunc.less';


interface IColumnFuncProps {
  dapp: IDapp;
  onSelectFunc: (func: IFunction) => any;
}

interface IColumnFuncState {
  isHidden: boolean;
}

export default class ColumnFunc extends React.PureComponent<IColumnFuncProps, IColumnFuncState> {
  private ref: HTMLElement;
  private mode: 'minimal' | 'full';

  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.mode = document.body.clientWidth > 920 ? 'full' : 'minimal';

    this.changeHeight = this.changeHeight.bind(this);
    this.getSection = this.getSection.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  private togglePanel() {
    const { isHidden } = this.state;

    if (isHidden) {
      this.ref.style.right = '10px';
    } else {
      this.ref.style.right = '-220px';
    }

    this.setState({ isHidden: !isHidden });
  }

  // dynamic change height aside after scroll (depend. of header height)
  private changeHeight(): void {
    const doc = document.documentElement;
    const col = this.ref;

    const headerHeight = document.getElementById('js-header').offsetHeight;

    if (doc.scrollTop < headerHeight) {
      col.style.top = `${headerHeight - doc.scrollTop + 10}px`;
    } else {
      col.style.top = `10px`;
    }
  }

  private getSection(funcType: string, title: string): JSX.Element {
    const { dapp, onSelectFunc } = this.props;

    let funcSectionElement: JSX.Element = null;
    const functions: IFunction[] = getFunctionsByType(dapp.functions, funcType);

    if (functions.length > 0) {
      funcSectionElement = (
        <section>
          <h2 className="dapp-header">{title}</h2>
          <ul className="dapp-list">
            {functions.map((func, i) => {

              // mock TODO: remove after backend icon-task done!
              if (!('icon' in func)) {
                func['icon'] = {
                  name: null,
                };
              }

              return (
                <div
                  key={i}
                  className="dapp-func flex-v"
                  onClick={onSelectFunc(func)}
                >
                  <i className={`mdi ${func.icon.name !== null ? `mdi-${func.icon.name}` : ''} mdi-icon`} />
                  <button
                    className="dapp-btn"
                    type="button"
                  >
                    {func.title}
                  </button>
                </div>
              );
            })}
          </ul>
        </section>
      );
    }

    return funcSectionElement;
  }

  public componentDidMount() {
    if (this.mode === 'full') {
      window.addEventListener('scroll', this.changeHeight);

      // set initial height, do it async (after DOM rendered)
      setTimeout(() => this.changeHeight(), 0);
    }
  }

  public componentWillUnmount() {
    if (this.mode === 'full') {
      window.removeEventListener('scroll', this.changeHeight);
    }
  }


  public render() {
    const { dapp } = this.props;
    const { isHidden } = this.state;

    if (!dapp) {
      return null;
    }

    const askFuncElement = this.getSection('ask', 'Ask');
    const writeFuncElement = this.getSection('write', 'Write');

    return (
      <aside
        className="column-func"
        ref={(ref) => this.ref = ref}
      >
        <div className="wrapper">
          {askFuncElement}
          {writeFuncElement}
          {/* <button className="dapp-btn dapp-btn--more" type="button">
          <InlineSVG
            className="three-dot"
            src={require('../../../assets/img/common/three-dot.svg')}
          />
          More
      </button> */}
        </div>
        {isHidden &&
          <div
            onClick={this.togglePanel}
            className="toggle-btn"
          />
        }
        {!isHidden && <div onClick={this.togglePanel} className="column-func-overlay" />}
      </aside>
    );
  }
}
