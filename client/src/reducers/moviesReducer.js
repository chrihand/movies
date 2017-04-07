import * as actionTypes from '../actions';

const initialState = {
  moviesList: [],
  activeSearchForFilters: '',
  id: '',
  movie: {},

}

export default function moviesReducer(state=initialState, action) {
  switch (action.type) {
    case (actionTypes.FETCHED_ALL_MOVIES):
      return {
        ...state,
        moviesList: action.movies,
      };
    case actionTypes.ADD_SEARCH_FOR_FILTER:
      return {
        ...state,
        activeSearchForFilters: action.searchFilter,
      };
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        id: action.newMovie.movieID,
        movie: action.newMovie
      }
    default:
      return state
  }
}
