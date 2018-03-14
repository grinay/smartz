import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import './Docs.css';

class Docs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docs: [{
          fileName: 'contract-deploy',
          menuTitle: 'Contract deploy (ru)'
        }, {
          fileName: 'contract-upload',
          menuTitle: 'Contract upload (ru)'
        }, {
          menuTitle: 'Smart contracts manuals (ru)',
          subsections: [{
              fileName: 'equity-contract',
              menuTitle: 'Simple equity'
            }, {
              fileName: 'erc-20-contract',
              menuTitle: 'ERC20 token'
            }, {
              fileName: 'multisignature-wallet',
              menuTitle: 'Multisignature wallet'
            }, {
              fileName: 'simple-voting',
              menuTitle: 'Simple voting'
            }
          ]
        }
      ]
    };
  }

  setActiveDoc(e, fileName) {
    e.preventDefault();

    axios.get(require(`./md/${fileName}.md`))
    .then((res) => {
      this.setState({activeDoc: res.data});
    });
  }

  renderNav(nav) {
    return nav.map((item, i) => (
      <li key={i} className="support-navigation__item">
        {item.fileName &&
          <a href="#" className="support-navigation__link"
            onClick={(e) => {
              console.log(0);
              this.setActiveDoc(e, item.fileName);
            }}
          >
            {item.menuTitle}
          </a>
        }
        {item.subsections &&
          <ul className="support-navigation__list  support-navigation__list--sublist">
            <a href="#" className="support-navigation__link  support-navigation__link--toggle">
              {item.menuTitle}
            </a>
            {this.renderNav(item.subsections)}
          </ul>
        }
      </li>
    ));
  }

  render() {
    const {docs, activeDoc} = this.state;

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
