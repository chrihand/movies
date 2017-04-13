import React, { Component } from 'react';

import '../../assets/style/SearchMovie.css';

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
  });
  this.props.searchForChange(event.target.value);
};

  render() {
    return (
      <div className="SearchMoviesContainer">
        <input  className="SearchMovies" type="text" name="search" value={this.state.resultSearch} onChange={this.handleSearchChange} placeholder="Søk..."/>
        <span className="SearchMoviesTooltip">Søk på en film med id eller tittel</span>
      </div>
    )
  };
};

Search.propTypes = {
	searchForChange: React.PropTypes.func.isRequired,
};

export default Search;
