import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.APIurl = 'http://localhost:8080/api';

    this.state = {
      inputId: "",
      inputName: "",
      inputGenre: "",
      inputType: ""
    };
  };

  handleIdChange = (event) => {
    this.setState ({
      inputId: event.target.value
    });
  };

  handleNameChange = (event) => {
    this.setState ({
      inputName: event.target.value
    });
  };

  handleGenreChange = (event) => {
    this.setState ({
      inputGenre: event.target.value
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
      name: this.state.inputName,
      genre: this.state.inputGenre,
      type: this.state.inputType
    }
    this.props.addNewMovie(newMovie);
    this.setState ({
      inputId: "",
      inputName: "",
      inputGenre: "",
      inputType: ""
    })
  }

  render() {
    return(
        <div>
          <label> Id: <input type="text" name="id" value={this.state.inputId} onChange={this.handleIdChange}/> </label>
          <label> Navn: <input type="text" name="name" value={this.state.inputName} onChange={this.handleNameChange}/> </label>
          <label> Genre: <input type="text" name="genre" value={this.state.inputGenre} onChange={this.handleGenreChange}/> </label>
          <label> Type:
            <select value={this.state.inputType} onChange={this.handleTypeChange}>
              <option value="--">--</option>
              <option value="DVD">DVD</option>
              <option value="Blue-ray">Blue-ray</option>
              <option value="Norsk Itunes">Norsk Itunes</option>
              <option value="Amerikansk Itunes">Amerikansk Itunes</option>
            </select>
          </label>
          <input type="submit" value="Legg til" onClick={this.handleSubmit}/>

        </div>
    )
  }
}

AddMovie.propTypes = {
  addNewMovie: React.PropTypes.func.isRequired,
}

export default AddMovie;
