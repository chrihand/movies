import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.APIurl = 'http://localhost:8080/api';

    this.state = {
      inputId: "",
      inputName: "",
      inputGenre: "",
      inputType: ""
    };

    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleIdChange(event) {
    this.setState ({
      inputId: event.target.value
    });
  };

  handleNameChange(event) {
    this.setState ({
      inputName: event.target.value
    });
  };

  handleGenreChange(event) {
    this.setState ({
      inputGenre: event.target.value
    });
  };

  handleTypeChange(event) {
    this.setState ({
      inputType: event.target.value
    });
  };

  handleSubmit(event) {
    console.log("Button ")
    let newMovie = {
      movieID: this.state.inputId,
      name: this.state.inputName,
      genre: this.state.inputGenre,
      type: this.state.inputType
    }
    console.log(newMovie)
    fetch(this.APIurl + '/movie/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    }).then((response) => {
        //console.log(newMovie)
        return response.status
      })
      .then((data) => {
        if (data === 200) {
          //this.getAllMovies(); // Update display of all posts, with the new
          this.setState(Object.assign({}, this.state, {inputId: "", inputName: "", inputGenre: "", inputType: ""})) // Sets the state of input fields to be empty, so you can write a new post.
        }
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
