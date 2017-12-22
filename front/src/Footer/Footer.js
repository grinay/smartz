import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

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
