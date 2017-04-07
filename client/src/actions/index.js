export const FETCHED_ALL_MOVIES = 'FETCHED_ALL_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_SEARCH_FOR_FILTER = 'ADD_SEARCH_FOR_FILTER';

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

export function fetchAllMovies() {
  return dispatch => {
    fetch('http://localhost:8080/api/movie/all', {
      method: 'GET',
    }).then((response) => {
        return response.json();
      }).then((data) => {
          dispatch(fetchedAllMovies(data));
        });
  };
};

export function addOneMovie(newMovie) {
  console.log(newMovie)
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
      }
    })
}}
