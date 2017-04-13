import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddMovie from '../components/AddMovie';
import AllMovies from '../components/AllMovies';
import Navbar from '../components/Navbar';

import { fetchAllMovies, addChangeSearch, addOneMovie } from '../actions/index'

class MoviesContainer extends Component {


  render() {
    return (
      <div>
        <Navbar searchForChange={this.props.changeSearch} />
        <div className="Content">
          <AllMovies movies={this.props.movies} />
        </div>
        <AddMovie addNewMovie={this.props.addNewMovie} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  let { movie: { moviesList, activeSearchForFilters }} = state;

  const hasSearchFilter = activeSearchForFilters.length > 0;
  const searchFilter = activeSearchForFilters.toUpperCase();

  moviesList = hasSearchFilter
    ? moviesList.filter(movie => (movie.movieInfo.original_title.toUpperCase().includes(searchFilter) || movie.movieID.toString().includes(searchFilter)))
    : moviesList;

  return {
      movies: moviesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchAllMovies()),
    changeSearch: (searchFilter) => dispatch(addChangeSearch(searchFilter)),
    addNewMovie: (newMovie) => dispatch(addOneMovie(newMovie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
