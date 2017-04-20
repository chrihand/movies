import React, { Component } from 'react';

import '../../assets/style/FilterMovies.css';

class FilterMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: [],
      activeType: [],
      showGenre: false,
      showType: false,
    }
  };


  handleCheckboxGenre = (event) => {
    let tempActive = [...this.state.activeFilter];

    if (tempActive.includes(event.target.value) && tempActive) {
      const index = tempActive.indexOf(event.target.value);
      if (index > -1) {
        tempActive.splice(index, 1);
      };
    } else {
      tempActive.push(event.target.value)
    }
    this.setState({
      activeFilter: tempActive
    });

    this.props.activeGenreFilter(tempActive);
  };

  handleCheckboxType = (event) => {
    let tempActive = [...this.state.activeType];

    if (tempActive.includes(event.target.value) && tempActive) {
      const index = tempActive.indexOf(event.target.value);
      if (index > -1) {
        tempActive.splice(index, 1);
      }
    } else {
      tempActive.push(event.target.value)
    };
    this.setState({
      activeType: tempActive
    });

    this.props.activeTypeFilter(tempActive);
  };

  handleOpenGenre = () => {
    this.setState ({
      showGenre: !this.state.showGenre
    })
  }

  handleOpenType = () => {
    this.setState ({
      showType: !this.state.showType
    })
  }

  render() {
    const genres = this.props.genres;

    let checkboxGenres = '';
    if (this.state.showGenre) {
      if (this.props.genres) {
        checkboxGenres = genres.map(genre =>
          <div key={genre.name + genre.id}>
          <input type="checkbox" name="genre" value={genre.id} key={genre.id} onClick={this.handleCheckboxGenre}/>
          <label key={genre.name}>{genre.name}</label>
          </div>
        );
      };
    } else {
      checkboxGenres = '';
    }


    let checkboxType = '';
    if (this.state.showType) {
      checkboxType = <div>
        <div className="CheckboxType">
          <input type="checkbox" name="type" value="DVD" onClick={this.handleCheckboxType}/>
          <label>DVD</label>
        </div>
        <div className="CheckboxType">
          <input type="checkbox" name="type" value="Blu-Ray" onClick={this.handleCheckboxType}/>
          <label>Blu-Ray</label>
        </div>
        <div className="CheckboxType">
          <input type="checkbox" name="type" value="Norsk iTunes" onClick={this.handleCheckboxType}/>
          <label>Norsk iTunes</label>
        </div>
        <div className="CheckboxType">
          <input type="checkbox" name="type" value="Amerikansk iTunes" onClick={this.handleCheckboxType}/>
          <label>Amerikansk iTunes</label>
        </div>
      </div>
    } else {
      checkboxType = '';
    }


    return(
      <div>
      <div className="FilterContainer">
          <h3 onClick={this.handleOpenGenre}>Filtrer på sjanger</h3>
          {checkboxGenres}
          <h3 onClick={this.handleOpenType}>Filtrer på medium</h3>
          {checkboxType}
        </div>
      </div>
    )
  }
};

FilterMovies.propTypes = {
  activeGenreFilter: React.PropTypes.func.isRequired,
  activeTypeFilter: React.PropTypes.func.isRequired,
};

export default FilterMovies;
