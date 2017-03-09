let nextMovieId = 0

export const ADD_MOVIE = 'ADD_MOVIE';

export const addMovie = (text) => {
  return {
    type: ADD_MOVIE,
    id: nextMovieId++,
    text
  }
}
