import React, { Component } from 'react';
import logo from '../images/assets_logo-sf-small.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="Header__logo" alt="logo" />
        <span className="Header__title">MESSAGE VIEWER</span>
      </div>
    );
  }
}

export default Header;
