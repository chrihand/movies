import React, { Component } from 'react';

import AddMovieInfo from './AddMovieInfo';
import noImage from '../../assets/images/no-image.png';
import { APIKey } from '../local.js'

class AddMovieName extends Component {

  constructor(props) {
    super(props)
    this._inputBounce = null
    this.state = {
      inputName: "",
      searchList: [],
      genreList: [],
      genres: '',
      movieInfo: null,
    };
    this.mapGenreToMovie();
  };

  handleNameChange = (event) => {
    this.setState ({
      inputName: event.target.value,
    });
    const self = this
    if (this._inputBounce) {
      clearTimeout(this._inputBounce)
    };

    this._inputBounce = setTimeout(function() {
      const query = self.state.inputName;
      fetch('https://api.themoviedb.org/3/search/movie?api_key=' + APIKey + '&query=' + query)
      .then(response => response.json())
      .then(data => {
        self.setState ( {
          searchList: data.results
        })
      })
    }, 500)
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


  handleNext = (movie) => {
    this.setState({
      movieInfo: movie
    });
  };

  render() {
    const optionValues = this.state.searchList.map(movie => {
      const genres = this.state.genreList.filter(genre => movie.genre_ids.includes(genre.id)).map(g => g.name);

      let poster = "";
      if (movie.poster_path == null){
        poster = noImage;
      } else {
        poster = "http://image.tmdb.org/t/p/w92/" + movie.poster_path;
      }

      return <li key={movie.id} className="MovieItem">
          <img src={poster} alt={movie.original_title} className="MovieItemPoster"/>
          <div className="MovieItemContainer">
            <h2 className="MovieName">{movie.original_title}</h2>
            <p>{genres.join(", ")}</p>
          </div>
          <div className="MovieButtonContainer">
            <input className="AddMovieButton" type="submit" value="Velg" onClick={() => this.handleNext(movie)}/>
          </div>
        </li>;
    });

    let modalContent = '';
    if (this.state.movieInfo == null) {
      modalContent =
      <div className="ModalAddMovieContent">
        <label className="SearchLabel">Søk:</label>
          <input className="InputMovieName" name="name" value={this.state.inputName} onChange={this.handleNameChange}/>
          <ul className="MovieList">
            {optionValues}
          </ul>
      </div>
    } else {
      modalContent = <AddMovieInfo addNewMovie={this.props.addNewMovie} movie={this.state.movieInfo} showModal={() => this.props.showModal()}/>
    }

    return (
      <div>
      {modalContent}
      </div>
    )
  }

};

AddMovieName.propTypes = {
  addNewMovie: React.PropTypes.func.isRequired,

}

export default AddMovieName;
