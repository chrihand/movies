import React, { Component } from 'react';

import '../../assets/style/AllMovies.css';
import MovieCard from './MovieCard';

class AllMovies extends Component {

  render() {
    if (this.props.movies.length < 1) {
      return <h1>Ingen filmer funnet</h1>;
    };

    const allMovies = this.props.movies.map(movie =>
      <MovieCard key={movie._id} movie={movie} id={movie.movieID}/>
    );

    return (
      <div className="AllMoviesContainer">
        {allMovies}
      </div>
    )
  };
};


export default AllMovies;
