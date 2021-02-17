import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-tictacto">
        <Link exact="true" to="/" >
          Home
        </Link>
        {" "}
        {/* <a href="https://github.com/completejavascript/tic-tac-toe" target="_blank" rel="noreferrer noopener">
          Github
        </a> */}
      </footer>
    );
  }
}

export default Footer;
