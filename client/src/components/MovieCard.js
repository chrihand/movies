import React, { Component } from 'react';

import { APIKey } from '../local.js'

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      genreList: []
    };
    this.mapGenreToMovie();
  };

  handelModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  mapGenreToMovie = () => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + APIKey)
    .then(response => response.json())
    .then(data => {
      this.setState ({
        genreList: data.genres
      });
    });
  };

  render() {
    const movie = this.props.movie.movieInfo;
    const genres = this.state.genreList.filter(genre => movie.genre_ids.includes(genre.id)).map(g => g.name);
    let image = "";

    let modal = '';
    let backdrop_image = {
      backgroundImage: 'url(' + 'http://image.tmdb.org/t/p/original//1ytaxWeVHDYtb7KPkrn3GNtDJdF.jpg' + ')',
      filter: 'grayscale(50%)',
    };
    if (this.state.showModal === true) {
      if (movie.backdrop_path == null){
        backdrop_image = {
          backgroundImage:'url(' + 'http://image.tmdb.org/t/p/original//1ytaxWeVHDYtb7KPkrn3GNtDJdF.jpg' + ')',
          filter: 'grayscale(50%)',
        };
      } else {
        image =  'http://image.tmdb.org/t/p/original/' + movie.backdrop_path;
        backdrop_image = {
          backgroundColor: 'white',
          backgroundImage: 'url(' + image + ')',
          filter: 'opacity(30%)',
          height: '70%',
          width: '60%',
          zIndex: '1',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'block',
          position: 'fixed',
          backgroundSize: 'cover',
          boxShadow: '1px 1px 10px 1px rgba(173,168,164,0.44)',
        };
      };

      console.log(backdrop_image)
      modal =
        <div className="ModalMovieCard">
        <div style={backdrop_image}>
        </div>
          <div className="ModalCardContent">
            <div className="ModalCardHeader">
              <div className="ModalCardHeaderContainer">
                <h1>{movie.original_title}({movie.release_date.substring(0,4)})</h1>
                <h3 className="MovieRating"><i className="fa fa-star"></i> {movie.vote_average}/10</h3>
              </div>
              <span className="ModalCardClose" onClick={this.handelModal}>x</span>
            </div>
            <div className="ModalCardInformation">
              <div className="ModalCardItem">
              <div className="ModalCardGenresContainter">
                {genres.map(g => <div key={g} className="ModalCardGenresItem">{g}</div>)}
              </div>
              <div className="ModalCardInformationContainer">
                <div className="ModalCardItemFirst">
                  <h3>Hylle id: {this.props.movie.movieID}</h3>
                  <h3>Medium: {this.props.movie.type}</h3>
                </div>
                <p className="ModalCardItemSecond">{movie.overview}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    } else {
      modal= ''
    };

    let poster = "";
    if (movie.poster_path == null){
      poster =
        <div>
          <h2 className="MovieCardTitle">{movie.original_title}</h2>
          <div className="MovieCardPosterInformation">
            <div className="PosterInformationItem">
              <p>Hylle id: {this.props.movie.movieID}</p>
              <p>Medium: {this.props.movie.type}</p>
            </div>
            <p>{movie.vote_average}/10</p>
          </div>
        </div>
    } else {
      const poster_path = "http://image.tmdb.org/t/p/w342/" + movie.poster_path;
      poster =
        <div>
          <img src={poster_path} alt={movie.original_title} className="MovieCardPoster"/>
          <div className="MovieCardPosterInformation">
            <div className="PosterInformationItem">
              <p>Hylle id: {this.props.movie.movieID}</p>
              <p>Medium: {this.props.movie.type}</p>
            </div>
            <p>{movie.vote_average}/10</p>
          </div>
        </div>
    };

    return (
      <div className="MovieCardContainer" onClick={this.handelModal}>
        {poster}
        {modal}
      </div>
    )
  };
};

export default MovieCard;
