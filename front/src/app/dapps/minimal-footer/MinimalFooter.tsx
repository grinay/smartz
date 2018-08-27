import * as React from 'react';
import { Link } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';

import { IDapp } from '../../../helpers/entities/dapp';

import './MinimalFooter.less';


interface IMinimalFooterProps {
  dapp: IDapp;
}


export default class MinimalFooter extends React.PureComponent<IMinimalFooterProps, {}> {
  public render() {
    const { dapp } = this.props;

    return (
      <footer className="minimal-footer">
        <section className="contract-data">
          <p className="contract-data-top">
            {dapp.constructor != null &&
              <div>
                <span className="contract-name">{`${dapp.constructor.name} contract`}</span>
                <Link to={`/deploy/${dapp.constructor_id}`} className="contract-link">
                  <button
                    className="contract-add"
                    type="button"
                  >
                    <InlineSVG
                      className="plus-icon"
                      src={require('../../../assets/img/common/footer/plus.svg')}
                    />
                    Deploy another
                </button>
                </Link>
              </div>
            }
          </p>
          {/* <p className="contract-data-version">
            Version: <span className="contract-version">1.02 beta</span>
          </p> */}
        </section>
        <section className="info">
          <p className="copyright">&#169; 2018 Smartz</p>
          <a className="mail" href="mailto:hello@smartz.io">hello&#64;smartz.io</a>
          <p className="design">
            Designed&#160;by&#160;<a href="http://artdictators.com/" target="_blank">Artdictators</a>
          </p>
        </section>
      </footer>
    );
  }
}
