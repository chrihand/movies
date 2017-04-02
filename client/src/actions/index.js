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

export function addMovie(id, name, genre, movieType) {
  return {
    type: ADD_MOVIE,
    id: id,
    name: name,
    genre: genre,
    movieType: movieType
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
}
