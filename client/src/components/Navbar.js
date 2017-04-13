import React, { Component } from 'react';

import SearchMovies from './SearchMovies';
import '../../assets/style/Navbar.css';

import logoImage from '../../assets/images/moviez-logo.png';


class Navbar extends Component {

  render() {
    return (
      <div className="NavbarContainer">
        <img src={logoImage} alt="logo" className="Logo"/>
        <h1 className="NavbarItem">moviez</h1>
        <SearchMovies searchForChange={this.props.searchForChange} />
      </div>
    )
  }
};

Navbar.propTypes = {
	searchForChange: React.PropTypes.func.isRequired,
};

export default Navbar
