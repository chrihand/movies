export const FETCHED_ALL_MOVIES = 'FETCHED_ALL_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';

export function fetchedAllMovies(movies) {
  return {
    type: FETCHED_ALL_MOVIES,
    movies,
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

export function addMovie(id, name, genre, movieType) {
  return {
    type: ADD_MOVIE,
    id: id,
    name: name,
    genre: genre,
    movieType: movieType
  };
};
