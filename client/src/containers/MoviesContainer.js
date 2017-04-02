import React, { Component } from 'react';
import { connect } from "react-redux";

import AllMovies from '../components/AllMovies';
import AddMovie from '../components/AddMovie';
import { fetchAllMovies } from '../actions/index'


class MoviesContainer extends Component {


  render() {
    return (
      <div className="Content">
        <AddMovie />
        <AllMovies movies={this.props.movies}/>
      </div>
    );
  };
};

const mapStateToProps = state => {
  let { movie: { moviesList }} = state;
  console.log(moviesList);

  return {
      movies: moviesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchAllMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
