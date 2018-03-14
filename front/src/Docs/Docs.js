import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import classNames from 'classnames';
import {Link, Redirect} from 'react-router-dom';


import './Docs.css';

class Docs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docUri: this.props.match.params.docUri,
      docs: [{
          fileName: 'contract-deploy',
          menuTitle: 'Contract deploy (ru)'
        }, {
          fileName: 'contract-upload',
          menuTitle: 'Contract upload (ru)'
        }, {
          menuTitle: 'Smart contracts manuals',
          subsections: [{
              fileName: 'equity-contract',
              menuTitle: 'Simple equity (ru)'
            }, {
              fileName: 'erc-20-token',
              menuTitle: 'ERC20 token (ru)'
            }, {
              fileName: 'multisignature-wallet',
              menuTitle: 'Multisignature wallet (ru)'
            }, {
              fileName: 'simple-voting',
              menuTitle: 'Simple voting (ru)'
            }
          ]
        }
      ]
    };
  }

  componentWillMount() {
    const {docs, docUri} = this.state;
    this.setActiveDoc(docUri || docs[0].fileName);
  }

  setActiveDoc(fileName) {
    this.setState({activeDocName: fileName});

    axios.get(require(`./md/${fileName}.md`))
    .then((res) => {
      this.setState({
        activeDoc: res.data,
      });
    });
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
      return (<Redirect to={`/docs/${docs[0].fileName}`} />);

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
