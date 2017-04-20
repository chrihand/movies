import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddMovie from '../components/AddMovie';
import AllMovies from '../components/AllMovies';
import Navbar from '../components/Navbar';
import FilterMovies from '../components/FilterMovies';

import { fetchAllMovies, addChangeSearch, addOneMovie, fetchGenres, activeGenre, activeType } from '../actions/index'

class MoviesContainer extends Component {


  render() {
    return (
      <div>
        <Navbar searchForChange={this.props.changeSearch} />
        <FilterMovies genres={this.props.genres} activeGenreFilter={this.props.changeGenreFilters} activeTypeFilter={this.props.changeTypeFilters}/>
        <div className="Content">
          <AllMovies movies={this.props.movies} />
        </div>
        <AddMovie addNewMovie={this.props.addNewMovie} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  let { movie: { moviesList, activeSearchForFilters, genres, activeGenreFilter, activeTypeFilter }} = state;



  const hasSearchFilter = activeSearchForFilters.length > 0;
  const searchFilter = activeSearchForFilters.toUpperCase();

  moviesList = hasSearchFilter
    ? moviesList.filter(movie => (movie.movieInfo.original_title.toUpperCase().includes(searchFilter) || movie.movieID.toString().includes(searchFilter)))
    : moviesList;

  const hasGenreFilter = activeGenreFilter.length > 0;

  moviesList = hasGenreFilter
    ? moviesList.filter(movie => movie.movieInfo.genre_ids.toString().includes(activeGenreFilter))
    : moviesList;

  const hasTypeFilter = activeTypeFilter.length > 0;

  moviesList = hasTypeFilter
    ? moviesList.filter(movie => activeTypeFilter.includes(movie.type.toString()))
    : moviesList;

  return {
      movies: moviesList,
      genres,
      activeGenreFilter,
      activeTypeFilter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchAllMovies()),
    changeSearch: (searchFilter) => dispatch(addChangeSearch(searchFilter)),
    addNewMovie: (newMovie) => dispatch(addOneMovie(newMovie)),
    fetchGenres: () => dispatch(fetchGenres()),
    changeGenreFilters: (activeGenreFilters) => dispatch(activeGenre(activeGenreFilters)),
    changeTypeFilters: (activeTypeFilters) => dispatch(activeType(activeTypeFilters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
