import React, { Component } from 'react';

import logoImage from '../moviez-logo.png';


export default class Navbar extends Component {

  render() {
    return (
      <div className="NavbarContainer">
        <img src={logoImage} alt="logo" className="Logo"/>
        <h1 className="NavbarItem">moviez</h1>
      </div>
    )
  }

};
