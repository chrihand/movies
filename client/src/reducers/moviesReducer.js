import * as actionTypes from '../actions';

const initialState = {
  moviesList: [],
  activeSearchForFilters: '',
  id: '',
  movie: {},
  genres: [],
  activeGenreFilter: [],
  activeTypeFilter: [],
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
      };
    case actionTypes.ADD_GENRE:
      return {
        ...state,
        genres: action.genres,
      };
    case actionTypes.ACTIVE_GENRE:
      return {
        ...state,
        activeGenreFilter: action.activeGenreFilters
      };
      case actionTypes.ACTIVE_TYPE:
        return {
          ...state,
          activeTypeFilter: action.activeTypeFilters
        };
    default:
      return state
  }
}
