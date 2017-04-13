import React, { Component } from 'react';

import '../../assets/style/AddMovie.css';
import AddMovieName from './AddMovieName';

class AddMovie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  };

  handelModal = () => {
    this.setState ({
      showModal: !this.state.showModal
    });
  };

  render() {
    let modal = '';
    if (this.state.showModal === true) {
      modal =
      <div className="ModalAddMovie">
        <div className="ModalAddMovieContainer">
          <div className="ModalAddMovieHeader">
            <h1>Legg til en ny film</h1>
            <span className="ModalAddMovieClose" onClick={this.handelModal}>x</span>
          </div>
          <AddMovieName addNewMovie={this.props.addNewMovie} showModal={() => this.handelModal()}/>
        </div>
      </div>
    } else {
      modal = ''
    }

    return(
      <div>
        {modal}
        <div className="AddMovieButton">
          <button className="OpenAddMovieModal" onClick={this.handelModal}><p className="AddMovieButtonText">+</p></button>
          <span className="AddMovieTooltip">Legg til en ny film</span>
        </div>
      </div>
    )
  }
}

AddMovie.propTypes = {
  addNewMovie: React.PropTypes.func.isRequired,
}

export default AddMovie;
