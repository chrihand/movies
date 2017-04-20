import React, { Component } from 'react';

import noImage from '../../assets/images/no-image.png';

class AddMovieInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputId: "",
      inputName: "",
      inputGenre: "",
      inputType: "",

    };
  };

  handleIdChange = (event) => {
    this.setState ({
      inputId: event.target.value
    });
  };

  handleTypeChange = (event) => {
    this.setState ({
      inputType: event.target.value
    });
  };

  handleSubmit = (event) => {
    let newMovie = {
      movieID: this.state.inputId,
      type: this.state.inputType,
      movieInfo: this.props.movie
    };
    this.props.addNewMovie(newMovie);
    this.props.showModal();
  };

  render() {
    const movie = this.props.movie;

    let poster = "";
    if (movie.poster_path == null){
      poster = noImage;
    } else {
      poster = "http://image.tmdb.org/t/p/w154/" + movie.poster_path;
    };

    return (
        <div className="MovieContainer">
          <img src={poster} alt={movie.original_title} className="PosterItem"/>
          <div className="InformationItem">
          <h2>{movie.original_title}</h2>
          <div className="InputContainter">
            <label className="LabelItem">Hylle id:</label>
            <input className="IdInputItem" type="text" name="id" value={this.state.inputId} onChange={this.handleIdChange}/>
          </div>
          <div className="InputContainter">
            <label className="LabelItem">Hvilket medium:</label>
            <div className="SelectWrapper">
              <select className="AddMovieSelectItem" id="type" value={this.state.inputType} onChange={this.handleTypeChange}>
                <option value="--"></option>
                <option value="DVD">DVD</option>
                <option value="Blu-Ray">Blu-Ray</option>
                <option value="Norsk iTunes">Norsk iTunes</option>
                <option value="Amerikansk iTunes">Amerikansk iTunes</option>
              </select>
            </div>
          </div>
          </div>
          <div className="ButtonContainer">
            <input className="ButtonItem" type="submit" value="Legg til" onClick={this.handleSubmit}/>
          </div>
      </div>
    )
  }

};

AddMovieInfo.propTypes = {
  addNewMovie: React.PropTypes.func.isRequired,
};

export default AddMovieInfo;
