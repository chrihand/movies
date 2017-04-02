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
  });
  this.props.searchForChange(event.target.value);
};

  render() {
    return (
      <div>
        <h3>Søk i databasen</h3>
        <input type="text" name="search" value={this.state.resultSearch} onChange={this.handleSearchChange} placeholder="Søk på filmer på tittel..."/>
      </div>
    )
  };
};
Search.propTypes = {
	searchForChange: React.PropTypes.func.isRequired,
};

export default Search;
