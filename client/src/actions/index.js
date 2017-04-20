export const FETCHED_ALL_MOVIES = 'FETCHED_ALL_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_SEARCH_FOR_FILTER = 'ADD_SEARCH_FOR_FILTER';
export const ADD_GENRE = 'ADD_GENRE';
export const ACTIVE_GENRE = 'ACTIVE_GENRE';
export const ACTIVE_TYPE = 'ACTIVE_TYPE';

import { APIKey } from '../local.js'

export function fetchedAllMovies(movies) {
  return {
    type: FETCHED_ALL_MOVIES,
    movies,
  };
};

export function addChangeSearch(searchFilter) {
  return {
    type: ADD_SEARCH_FOR_FILTER,
    searchFilter,
  };
};

export function addMovie(newMovie) {
  return {
    type: ADD_MOVIE,
    newMovie,
  };
};

export function addGenreList(genres) {
  return {
    type: ADD_GENRE,
    genres,
  };
};

export function activeGenre(activeGenreFilters) {
  return {
    type: ACTIVE_GENRE,
    activeGenreFilters,
  }
}

export function activeType(activeTypeFilters) {
  return {
    type: ACTIVE_TYPE,
    activeTypeFilters,
  }
}

export function fetchAllMovies() {
  return dispatch => {
    fetch('http://localhost:8080/api/movie/all', {
      method: 'GET',
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(fetchedAllMovies(data));
    });
  };
};

export function addOneMovie(newMovie) {
  return dispatch => {
    fetch('http://localhost:8080/api/movie/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    }).then((response) => {
      return response.status
    })
    .then((data) => {
      if (data === 200) {
        dispatch(addMovie(newMovie));
        dispatch(fetchAllMovies());
      };
    });
  };
};

export function fetchGenres() {
  return dispatch => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + APIKey)
    .then(response => response.json())
    .then(data => {
      dispatch(addGenreList(data.genres));
    });
  };
};
