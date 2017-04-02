import React, { Component } from 'react';
import { connect } from "react-redux";

import AddMovie from '../components/AddMovie';
import SearchMovies from '../components/SearchMovies';
import AllMovies from '../components/AllMovies';

import { fetchAllMovies, addChangeSearch } from '../actions/index'


class MoviesContainer extends Component {


  render() {
    return (
      <div className="Content">
        <AddMovie />
        <SearchMovies searchForChange={this.props.changeSearch}/>
        <AllMovies movies={this.props.movies}/>
      </div>
    );
  };
};

const mapStateToProps = state => {
  let { movie: { moviesList, activeSearchForFilters }} = state;

  const hasSearchFilter = activeSearchForFilters.length > 0;
  const searchFilter = activeSearchForFilters.toUpperCase();

  moviesList = hasSearchFilter
    ? moviesList.filter(movie => (movie.name.toUpperCase().includes(searchFilter) || movie.movieID.toString().includes(searchFilter)))
    : moviesList;

  return {
      movies: moviesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchAllMovies()),
    changeSearch: (searchFilter) => dispatch(addChangeSearch(searchFilter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
