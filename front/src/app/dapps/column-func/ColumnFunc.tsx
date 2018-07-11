import * as React from 'react';
import InlineSVG from 'svg-inline-react';

import { getFunctionsByType } from '../../../helpers/common';
import Modal from '../../common/modal/Modal';
import ModalFunc from './modal-func/ModalFunc';

import './ColumnFunc.less';


interface IColumnFuncProps {
  dapp: any;
}

interface IColumnFuncState {
  isOpenModal: boolean;
  selectedFunc: any;
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
    this.selectFunc = this.selectFunc.bind(this);
  }

  private toggleModal() {
    const { isOpenModal } = this.state;

    this.setState({ isOpenModal: !isOpenModal });
  }

  private selectFunc(func: any) {
    return () => this.setState({
      isOpenModal: true,
      selectedFunc: func,
    });
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
    const { dapp } = this.props;

    let funcSectionElement: JSX.Element = null;
    const functions: any[] = getFunctionsByType(dapp.functions, funcType);

    if (functions.length > 0) {
      funcSectionElement = (
        <section>
          <h2 className="dapp-header">{title}</h2>
          <ul className="dapp-list">
            {functions.map((func, i) => {
              return (
                <button
                  key={i}
                  className="dapp-btn"
                  type="button"
                  onClick={this.selectFunc(func)}
                >
                  {func.title}
                </button>
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
        <Modal isOpen={isOpenModal} onClose={this.toggleModal}>
          <ModalFunc func={selectedFunc} />
        </Modal>
      </aside>
    );
  }
}
