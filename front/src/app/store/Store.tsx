import { filter } from 'lodash';
import * as React from 'react';

import * as api from '../../api/apiRequests';
import { blockchains } from '../../constants/constants';
import CtorCard from '../common/ctor-card/CtorCard';
import DevBlock from '../common/dev-block/DevBlock';
import Loader from '../common/loader/Loader';
import Banner from './banner/Banner';
import CustomContract from './custom-contract/CustomContract';
import SortBlockchain from './sort-blockchain/SortBlockchain';

import './Store.less';


interface IStoreProps {
  ctors: any;
}

interface IStoreState {
  blockchain: any;
}

export default class Store extends React.Component<IStoreProps, IStoreState> {
  constructor(props) {
    super(props);

    this.state = {
      blockchain: blockchains.ethereum,
    };

    this.setBlockchain = this.setBlockchain.bind(this);
  }

  public setBlockchain(blockchain) {
    return () => {
      this.setState({ blockchain });
    };
  }

  public componentDidMount() {
    api.getConstructors();
  }

  public render() {
    const { ctors } = this.props;
    const { blockchain } = this.state;

    const filteredCtors = filter(ctors, { blockchain });

    return (
      <main className="page-main  page-main--store">
        {/* Banner section */}
        <section className="banner-section">
          <Banner />
        </section>

        {/* Sorting section */}
        <section className="sort-section">
          <SortBlockchain onClick={this.setBlockchain} blockchain={this.state.blockchain} />
        </section>

        {/* Constructors section */}
        <section className="ctor-section">
          {filteredCtors.length > 0 && (
            <ul className="ctor-list">
              {filteredCtors.filter((el) => el.is_public).map((el, i) => (
                <li key={i} className="ctor-item">
                  <CtorCard ctor={el} />
                </li>
              ))}
              {/* Add custom contract */}
              <li key={'custom-contract'} className="ctor-item">
                <CustomContract />
              </li>
            </ul>
          )}

          {filteredCtors.length === 0 && <Loader text="Loading constructors" />}
        </section>

        {/* Banner for developers section */}
        <section className="dev-section">
          <DevBlock />
        </section>
      </main>
    );
  }
}
