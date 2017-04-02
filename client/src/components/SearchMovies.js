import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resultSearch: "",
    };
  };

  handleSearchChange = (event) => {
  this.setState({
    resultSearch: event.target.value
  }, () => {
    if(this.state.resultSearch === 'undefined' || this.state.resultSearch === "" || this.state.resultSearch === null || this.state.resultSearch === " "){
      console.log(this.resultSearch + " should be empty");
    } else {
      console.log(this.state.resultSearch + " should be defined");
        this.getSearchedMovies();
    };

  });
};

  getSearchedMovies = () => {
    fetch(this.APIurl + '/movie/search/' + this.state.resultSearch, {
      method: 'GET',
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(Object.assign({}, this.state, {movies: data}))
    })
  };

  render() {
    return (
      <div>
        <h3>Søk i databasen</h3>
        <input type="text" name="search" value={this.state.resultSearch} onChange={this.handleSearchChange} placeholder="søk på filmer på tittel"/>
      </div>
    )
  };

};
