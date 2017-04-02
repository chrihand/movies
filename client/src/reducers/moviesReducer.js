import * as actionTypes from '../actions';

const initialState = {
  moviesList: [],

}

export default function moviesReducer(state=initialState, action) {
  switch (action.type) {
    case (actionTypes.FETCHED_ALL_MOVIES):
      return {
        ...state,
        moviesList: action.movies,
      }
    default:
      return state
  }
}
