import React, { Component } from 'react';
import AllMovies from '.././Movie/AllMovies/AllMovies';
import AddMovie from '.././Movie/AddMovie/AddMovie';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="Content">
        <AddMovie />
        <AllMovies />
      </div>
    );
  }
}
