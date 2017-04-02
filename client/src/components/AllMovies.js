import React, { Component } from 'react';

class AllMovies extends Component {
  
  render() {
    if (this.props.movies.length < 1) {
      return <h1>Ingen filmer funnet</h1>;
    };
    const allMovies = this.props.movies.map(movie =>
      <div key={movie._id}>
        <h2>{movie.movieID} {movie.name}</h2>
        <p>{movie.type} {movie.genre}</p>
        <p></p>
      </div>
    );

    return (
      <div className="movie">
        {allMovies}
      </div>
    )
  };
};


export default AllMovies;
