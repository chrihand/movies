import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.APIurl = 'http://localhost:8080/api';

    this.state = {
      inputId: "",
      inputName: "",
      inputGenre: "",
      inputType: "",
      showModal: false
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

handelModal = () => {
  this.setState ({
    showModal: !this.state.showModal
  });
};

  render() {
    let modal = '';
    if (this.state.showModal === true) {
      modal = <div className="ModalAddMovie">
        <div className="ModalContent">
          <div className="ModalHeader">
            <h2>Legg til en ny film</h2>
            <span className="ModalClose" onClick={this.handelModal}>x</span>
          </div>
          <div className="AddMovieContainer">
            <label className="AddMovieLabelItem">Id:
              <input className="AddMovieInputItem" type="text" name="id" value={this.state.inputId} onChange={this.handleIdChange}/>
            </label>
            <label className="AddMovieLabelItem">Navn:
              <input className="AddMovieInputItem" type="text" name="name" value={this.state.inputName} onChange={this.handleNameChange}/>
            </label>
            <label className="AddMovieLabelItem">Genre:
              <input className="AddMovieInputItem" type="text" name="genre" value={this.state.inputGenre} onChange={this.handleGenreChange}/>
            </label>
            <label className="AddMovieLabelItem">Type:
            <div className="SelectWrapper">
              <select className="AddMovieSelectItem" id="type" value={this.state.inputType} onChange={this.handleTypeChange}>
                <option value="--"></option>
                <option value="DVD">DVD</option>
                <option value="Blue-ray">Blue-ray</option>
                <option value="Norsk Itunes">Norsk Itunes</option>
                <option value="Amerikansk Itunes">Amerikansk Itunes</option>
              </select>
              </div>
            </label>
          </div>
          <input className="AddMovieButton" type="submit" value="Legg til" onClick={this.handleSubmit}/>
        </div>
        </div>
    } else {
      modal = ''
    }

    return(
      <div>
        {modal}
      <div className="ButtonContainer">
      <button className="ModalOpen" onClick={this.handelModal}><p className="ButtonText">+</p></button>
      <span className="Tooltip">Legg til en ny film</span>
      </div>
      </div>
    )
  }
}

AddMovie.propTypes = {
  addNewMovie: React.PropTypes.func.isRequired,
}

export default AddMovie;
