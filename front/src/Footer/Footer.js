import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">
            Contact us:<br />
            <a href="https://t.me/LoungerX">@LoungerX</a><br />
            <a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a><br /><br />
            &copy; 2017 Smartz, <a href="https://mixbytes.io">MixBytes()</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
