import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Alert from '../common/Alert';
import Spinner from '../common/Spinner';
import CtorCard from '../common/ctor-card/CtorCard';
import DevBlock from '../common/dev-block/DevBlock';
import SortBlockchain from './sort-blockchain/SortBlockchain';
import * as api from '../../api/apiRequests';

import './Store.less';

class Store extends Component {
  componentDidMount() {
    api.getConstructors();
  }

  render() {
    const { ctors, metamaskStatus } = this.props;

    return (
      <main className="page-main  page-main--store">
        <SortBlockchain />
        <div className="ctor-block">
          {ctors &&
            <ul className="ctor-list">
              {ctors.filter(el => el.is_public).map((el, i) =>
                <li key={i} className="ctor-item">
                  <CtorCard ctor={el} />
                </li>
              )}
            </ul>
          }

          {!ctors &&
            <Spinner text="Loading contracts" width="100" />
          }
        </div>
        <DevBlock />
      </main>
    );
  }
}

export default Store;
