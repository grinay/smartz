import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import CtorCard from '../common/ctor-card/CtorCard';
import DevBlock from '../common/dev-block/DevBlock';
import SortBlockchain from './sort-blockchain/SortBlockchain';
import CustomContract from './custom-contract/CustomContract';
import * as api from '../../api/apiRequests';

import './Store.less';
import Banner from './banner/Banner';

class Store extends Component {
  componentDidMount() {
    api.getConstructors();
  }

  render() {
    const { ctors } = this.props;

    return (
      <main className="page-main  page-main--store">

        {/* Banner section */}
        <section className="banner-section">
          <Banner />
        </section>

        {/* Sorting section */}
        <section className="sort-section">
          <SortBlockchain />
        </section>

        {/* Contracts section */}
        <section className="ctor-section">
          {ctors &&
            <ul className="ctor-list">
              {ctors.filter(el => el.is_public).map((el, i) =>
                <li key={i} className="ctor-item">
                  <CtorCard ctor={el} />
                </li>
              )}
              {/* Add custom contract */}
              <li key={'custom-contract'} className="ctor-item">
                <CustomContract />
              </li>
            </ul>
          }

          {!ctors &&
            <Spinner text="Loading contracts" width="100" />
          }
        </section>

        {/* Banner for developers section */}
        <section className="dev-section">
          <DevBlock />
        </section>

      </main>
    );
  }
}

export default Store;
