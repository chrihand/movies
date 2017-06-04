import React, { Component } from 'react';

import SearchMovies from './SearchMovies';
import '../../assets/style/Navbar.css';

import logoImage from '../../assets/images/moviez-logo.png';
import { APIKey } from '../local.js'

class Navbar extends Component {

  render() {

    //const movieBanner = 'http://image.tmdb.org/t/p/original//1ytaxWeVHDYtb7KPkrn3GNtDJdF.jpg'
    //<img src={movieBanner} alt="banner" className="Banner"/>
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
