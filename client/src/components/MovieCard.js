import React, { Component } from 'react';

class MovieCard extends Component {

  render() {
    const movie = this.props.movie;

    return (
      <div className="MovieCardContainer">
      <div key={movie._id}>
        <h2>{movie.movieID} {movie.name}</h2>
        <p>{movie.type} {movie.genre}</p>
        <p></p>
      </div>
      </div>
    )
  }

}



export default MovieCard;
