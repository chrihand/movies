import React, { Component } from 'react';

export default class AllMovies extends Component {

  constructor(props) {
    super(props);

    this.APIurl = 'http://localhost:8080/api';
    this.getAllMovies = this.getAllMovies.bind(this);
    this.getSearchedMovies = this.getSearchedMovies.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    /*this.sortTitle = this.sortTitle.bind(this);
    this.sortType = this.sortType.bind(this);
    this.sortID = this.sortID.bind(this);*/


    this.state = {
      movies: [],
      resultSearch: "",
      toggleNameButton: false,
      toggleTypeButton: false,
      toggleIDButton: false
    };

    this.getAllMovies();
  };

  getAllMovies() {
    fetch(this.APIurl + '/movie/all', {
      method: 'GET',
    }).then((response) => {
        return response.json()
      }).then((data) => {
          this.setState(Object.assign({}, this.state, {movies: data}))
        })
  };

  handleSearchChange(event) {
  this.setState({
    resultSearch: event.target.value
  }, () => {
    if(this.state.resultSearch === 'undefined' || this.state.resultSearch === "" || this.state.resultSearch === null || this.state.resultSearch === " "){
      console.log(this.resultSearch + " should be empty");
      this.getAllMovies();
    }
    else {
      console.log(this.state.resultSearch + " should be defined");
        this.getSearchedMovies();
    }

  });
};

  getSearchedMovies() {
    fetch(this.APIurl + '/movie/search/' + this.state.resultSearch, {
      method: 'GET',
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(Object.assign({}, this.state, {movies: data}))
    })
  };

// Button for deleteing move
//<td><Button className="GlyphButton" id={movie._id} onClick={this.deleteMovie}><Glyphicon glyph="remove" id={movie._id}/></Button></td>
  /*sortTitle() {
    let byName = this.state.movies
    if (this.state.toggleNameButton) {
      this.setState({
        toggleNameButton: false
      })
      byName.sort(function(a,b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      this.setState({
        toggleNameButton: true
      })
      byName.sort(function(a,b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x > y ? -1 : x < y ? 1 : 0;
      });
    }
    this.setState({
      movies: byName
    });
  };

  sortType() {
    let byType = this.state.movies;

    if (this.state.toggleTypeButton) {
      this.setState({
        toggleTypeButton: false
      });
      byType.sort(function(a,b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    } else {
      this.setState({
        toggleTypeButton: true
      });
      byType.sort(function(a,b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        return x > y ? -1 : x < y ? 1 : 0;
      });
    };
    this.setState({
      movies: byType
    });
  };

  sortID() {
    let byID = this.state.movies;
    console.log(byID);
    if(this.state.toggleIDButton) {
    this.setState({
      toggleIDButton: false
    })
    byID.sort(function(a,b) {
      let x = a.movieID.toLowerCase();
      let y = b.movieID.toLowerCase();
      return x > y ? -1 : x < y ? 1 : 0;
    });
    } else {
    this.setState({
      toggleIDButton: true
    })
    byID.sort(function(a,b) {
      let x = a.movieID.toLowerCase();
      let y = b.movieID.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    }

    this.setState({
    resturants: byID
    })
  };

  <table>
    <thead>
      <tr>
        <button onClick={this.sortID}><th>Id</th></button>
        <button onClick={this.sortTitle}><th>Title</th></button>
        <button onClick={this.sortType}><th>Type</th></button>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>
      {allMovies.map((movie, i) =>
        <tr key={movie._id}>
          <td>{movie.movieID}</td>
          <td>{movie.name}</td>
          <td>{movie.type}</td>
          <td>{movie.genre}</td>
        </tr>
      )}
    </tbody>
  </table>
  */

  render() {
    const allMovies = this.state.movies;

    return (
      <div>

        <h3>Søk i databasen</h3>
        <input type="text" name="search" value={this.state.resultSearch} onChange={this.handleSearchChange} placeholder="søk på filmer på tittel"/>

        <div className="movie">
          {allMovies.map((movie, i) =>
            <div key={movie._id}>
              <h2>{movie.movieID} {movie.name}</h2>
              <p>{movie.type} {movie.genre}</p>
              <p></p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
