import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './Docs.css';

class Docs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docUri: this.props.match.params.docUri,
      docs: [{
          fileName: 'first-steps-en',
          menuTitle: 'Fist steps'
        }, {
          fileName: 'contract-uploading-en',
          menuTitle: 'Contract uploading'
        }, {
          menuTitle: 'Smartz contracts',
          subsections: [{
              fileName: 'simple-ico-contract-en',
              menuTitle: 'Simple ICO'
            }, {
              fileName: 'erc-20-token-en',
              menuTitle: 'ERC20 token'
            }, {
              fileName: 'equity-contract-en',
              menuTitle: 'Simple equity'
            }, {
              fileName: 'multisig-wallet-en',
              menuTitle: 'Multisignature wallet'
            }, {
              fileName: 'simple-voting-en',
              menuTitle: 'Simple voting'
            }
          ]
        }, {
          fileName: 'contract-deploy-ru',
          menuTitle: 'Запуск контракта'
        }, {
          fileName: 'contract-upload-ru',
          menuTitle: 'Загрузка контракта'
        }, {
          menuTitle: 'Контракты Smartz',
          subsections: [{
              fileName: 'equity-contract-ru',
              menuTitle: 'Долевой контракт'
            }, {
              fileName: 'erc-20-token-ru',
              menuTitle: 'Токен ERC20'
            }, {
              fileName: 'multisignature-wallet-ru',
              menuTitle: 'Кошелек с мультиподписью'
            }, {
              fileName: 'simple-voting-ru',
              menuTitle: 'Простое голосование'
            }
          ]
        }
      ],
      docsLoaded: {}
    };
  }

  componentWillMount() {
    const {docs, docUri} = this.state;
    this.setActiveDoc(docUri || docs[0].fileName);
  }

  setActiveDoc(fileName) {
    const {docsLoaded, activeDocName} = this.state;

    if (activeDocName !== fileName) {
      if (fileName in docsLoaded) {
        this.setState({
          activeDocName: fileName,
          activeDoc: docsLoaded[fileName]
        });

      } else {
        axios.get(require(`./md/${fileName}.md`))
        .then((res) => {
          docsLoaded[fileName] = res.data;

          this.setState({
            activeDocName: fileName,
            activeDoc: docsLoaded[fileName],
            docsLoaded
          });
        })
        .catch((err) => console.log(err));
      }
    }
  }

  renderNav(nav) {
    const {activeDocName} = this.state;

    return nav.map((item, i) => {
      const {fileName, menuTitle, subsections} = item;

      if (fileName)
        return (
          <li key={i} className="support-navigation__item">
            <Link to={`/docs/${fileName}`}
              className={classNames(
                'support-navigation__link',
                {active: fileName === activeDocName}
              )}
              onClick={() => {
                this.setActiveDoc(fileName);
              }}
            >
              {menuTitle}
            </Link>
          </li>
        );

      if (subsections)
        return (
          <li key={i} className="support-navigation__item">
            <Link to="#" className="support-navigation__link  support-navigation__link--toggle">
              {menuTitle}
            </Link>
            <ul className="support-navigation__list support-navigation__list--sublist">
              {this.renderNav(subsections)}
            </ul>
          </li>
        );

      return null;
    });
  }

  render() {
    const {docUri, docs, activeDoc, activeDocName} = this.state;

    if (!docUri && !activeDocName)
      return null;

    return (
      <main className="page-main  page-main--support">
        <aside className="support-sidebar">
          <h2 className="support-sidebar__header">
            Documentation
          </h2>
          <nav className="support-navigation">
            {docs &&
              <ul className="support-navigation__list">
                {this.renderNav(docs)}
              </ul>
            }
          </nav>
        </aside>
        <article className="support-block">
          {activeDoc &&
            <ReactMarkdown source={activeDoc} className="markdown" />
          }
        </article>
      </main>
    );
  }
}

export default Docs;
