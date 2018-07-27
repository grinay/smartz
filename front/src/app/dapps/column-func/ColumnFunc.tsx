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
  isOpenModal: boolean;
  selectedFunc: IFunction;
}

export default class ColumnFunc extends React.PureComponent<IColumnFuncProps, IColumnFuncState> {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false,
      selectedFunc: null,
    };

    this.changeHeight = this.changeHeight.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getSection = this.getSection.bind(this);
  }

  private toggleModal() {
    const { isOpenModal } = this.state;

    this.setState({ isOpenModal: !isOpenModal });
  }

  // dynamic change height aside after scroll (depend. of header height)
  private changeHeight(): void {
    const doc = document.documentElement;
    const col = document.getElementById('js-column-func');

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
    window.addEventListener('scroll', this.changeHeight);

    // set initial height, do it async (after DOM rendered)
    setTimeout(() => this.changeHeight(), 0);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.changeHeight);
  }


  public render() {
    const { dapp } = this.props;
    const { isOpenModal, selectedFunc } = this.state;

    if (!dapp) {
      return null;
    }

    const askFuncElement = this.getSection('ask', 'Ask');
    const writeFuncElement = this.getSection('write', 'Write');

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
